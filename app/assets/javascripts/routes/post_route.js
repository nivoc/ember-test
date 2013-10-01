App.PostRoute = Ember.Route.extend({
  // model: function(params) {
  //   return this.store.find('post');
  // }
  actions: {
    showComments: function() {
      this.transitionTo('comments')
    }
  }
});
