import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(model) {
      model.save().then(()=> {
        this.transitionToRoute('reminders.reminder', model)
      })
    }
  }
});
