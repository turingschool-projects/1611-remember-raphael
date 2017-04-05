import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    storeIdea(model) {
      model.save()
    }
  }
});
