import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

$(function () {
  const socket = io();
  const messages = [];

  let userForm = $('#userForm');
  let username = $('#username');

  let chatForm = $('#chatForm');
  let message = $('#message');

  let chatWindow = $('#chatWindow');
  let users = $('#users');
  let error = $('#error');

  userForm.on('submit', (event) => {
    console.log('Submit user form');
    socket.emit('set user', username.val(), (data) => {
      if (data) {
        $('#userFormWrap').hide();
        $('#chatFormWrap').show();
      }
    });
    event.preventDefault();
  });

  chatForm.on('submit', (event) => {
    console.log('Submit chat form');
    socket.emit('send message', message.val());
    message.val('');
    event.preventDefault();
  });

  socket.on('users', (data) => {
    let html = '';
    for (let i = 0; i < data.length; i++) {
      html += `<li class="list-group-item">${data[i]}</li>`;
    }
    users.html(html);
  });

  socket.on('show message', (data) => {
    chatWindow.append(`<div><b>${data.user}</b>: ${data.msg}</div>`);
  });
});
