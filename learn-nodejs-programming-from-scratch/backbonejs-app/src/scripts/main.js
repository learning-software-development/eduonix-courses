import Backbone from 'backbone';
import _ from 'underscore';
// import $ from 'jquery';

let UserView = Backbone.View.extend({
  el: '#user-view',
  template: _.template(Backbone.$('#user-tmpl').html()),

  initialize: function () {
    console.log("UserView created!");
    this.render();
  },

  render: function () {
    let html = this.template();
    this.$el.html(html);
  },

  events: {
    'click #add_user': 'addUser'
  },

  addUser: function () {
    alert(`${Backbone.$('#user_input').val()} has been added.`);
  }
});

let userView = new UserView();
