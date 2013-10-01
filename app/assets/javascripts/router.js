// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('posts', { path: '/posts'});
  this.resource('post', { path: '/posts/:post_id' },  function() {
    this.resource('comments', { path: '/commments/:comment_id'});
  });
});

App.Router.map(function() {
  // this.resource('posts');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo("posts")
  }
});
App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  }
});
