App.PostRoute = Ember.Route.extend({
  // model: function(params) {
  //   return {};
  // },
  actions: {
    showComments: function() {
      this.transitionTo('comments')
    }
  }
});
