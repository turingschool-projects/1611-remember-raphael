import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReminder(model) {
      model.deleteRecord()
      model.save()
      this.transitionToRoute('reminders')
    }
  }
});
