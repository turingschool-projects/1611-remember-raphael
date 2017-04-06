import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReminder(reminder) {
      reminder.deleteRecord();
      reminder.save();
      this.transitionToRoute('reminders');
    }
  }
});
