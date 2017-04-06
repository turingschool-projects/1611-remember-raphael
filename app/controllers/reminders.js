import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReminder(reminder) {
      reminder.destroyRecord();
      this.transitionToRoute('reminders');
    }
  }
});
