import Backbone from 'backbone';
import _ from 'underscore';
// import $ from 'jquery';

const UserView = Backbone.View.extend({
  el: '#user-view',
  template: _.template(Backbone.$('#user-tmpl').html()),

  initialize: function () {
    console.log("UserView was initialize!");
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

const UserModel = Backbone.Model.extend({
  initialize: function () {
    console.log("UserModel was initialize!");

    this.on("change:email", function () {
      console.warn("The user email was changed!");
    })
  },
  defaults: {
    username: "JohnDoe",
    email: "johndoe@gmail.com"
  },
  getUserEmail: function () {
    return this.get('email');
  },
  setUserEmail: function (newEmail) {
    this.set({ email: newEmail });
  }
});

let user = new UserModel();
console.dir(user);

console.log(user.getUserEmail());

let brad = new UserModel({
  username: "bradT",
  email: "bradt@gmail.com"
});

console.log(brad.getUserEmail());
brad.setUserEmail("bread66@yahoo.com");
console.log(brad.getUserEmail());

const Users = Backbone.Collection.extend({
  model: UserModel,
  url: 'data.json'
});
