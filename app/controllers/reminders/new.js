import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitReminder(model) {
      model.set('date', new Date())
      model.save().then(()=> {
        this.transitionToRoute('reminders.reminder', model)
      })
    }
  }
});
