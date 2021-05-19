import * as bootstrap from 'bootstrap';
import '../styles/style.scss';
import * as $ from 'jquery';

$(() => {
  $('#add-task-form').on('submit', (event) => {
    addTask(event);
    displaytasks();
  });

  function displaytasks() {
    let taskList = JSON.parse(localStorage.getItem('tasks'));
    if (!taskList) {
      taskList = [];
    }

    taskList = taskList.sort(sortByDate);

    let index = 0;
    $.each(taskList, (key, value) => {
      $('#task-table').append(
        `<tr>
          <td>${++index}</td>
          <td>${value.task}</td>
          <td>${value.task_priority}</td>
          <td>${value.task_date}</td>
          <td><a href="edit.html?id=${value.id}">Edit</a> | <a>Remove</a></td>
          <td></td>
        </tr>`
        );
    });
  }

  function sortByDate(a, b) {
    let aDate = a.task_date;
    let bDate = b.task_date;
    return ((aDate < bDate) ? -1 : ((aDate < bDate) ? 1 : 0));
  }

  function addTask(event) {
    // Add unique ID
    let newDate = new Date();
    let id = newDate.getTime();

    let task = $('#task').val();
    let task_priority = $('#priority').val();
    let task_date = $('#date').val();


    // Validation
    if (!task) {
      alert("Task description is required");
      event.preventDefault();
      return;
    } else if (!task_date) {
      alert("Task date is required");
      event.preventDefault();
      return;
    } else if (!task_priority) {
      task_priority = 'Normal';
    }

    let taskList = JSON.parse(localStorage.getItem('tasks'));
    if (!taskList) {
      taskList = [];
    }

    let new_task = {
      "id": id,
      "task": task,
      "task_priority": task_priority,
      "task_date": task_date
    };

    taskList.push(new_task);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    console.log("Added task successfully.");
  }
});
