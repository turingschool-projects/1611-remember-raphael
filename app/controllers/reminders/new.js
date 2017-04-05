import Ember from 'ember';

export default Ember.Controller.extend({

  // title: '',
  // body: '',
  // date: '',

  actions: {
  //   submitReminder() {
  //     const reminder = this.getProperties('title', 'body', 'date')
  //     this.store.createRecord('reminder', reminder).save().then(() => {
  //       this.setProperties({title: '', body: '', date: ''})
  //     })
  //   }
  // }

    submitReminder(model) {
      model.set('date', new Date())
      model.save().then(()=> {
        this.transitionToRoute('reminders.reminder', model)
      })
    }
  }
});


// this.setProperties(model: {})
