import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReminder(model) {
      model.destroyRecord();
      this.transitionToRoute('reminders');
    }
  }
});
