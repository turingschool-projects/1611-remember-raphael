import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeReminder(model) {
      this.get('store').findRecord('reminder', model.id).then(function(reminder) {
        reminder.deleteRecord();
        reminder.get('isDeleted');
        reminder.save().then(() => {
          this.transitionToRoute('reminders.reminder.1')
        });
      })
    }
  }
});
