App.Post = DS.Model.extend({
  title: DS.attr(),
  comments: DS.hasMany('comment')
});
