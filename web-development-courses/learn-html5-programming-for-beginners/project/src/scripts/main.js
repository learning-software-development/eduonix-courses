import * as bootstrap from 'bootstrap';
import '../styles/style.scss';
import * as $ from 'jquery';

$(() => {
  $('#add-task-form').on('submit', (event) => {
    addTask(event);
  });

  $('#edit-task-form').on('submit', (event) => {
    updateTask(event);
  });

  $('#task-table').on('click', (event) => {
    let task_id = $(event.target).data('id');
    removeTask(task_id);
  });

  $('#clear-tasks').on('click', () => {
    clearAllTasks();
  });

  displayTasks();
  getTask();

  function displayTasks() {
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
          <td>
            <a href="edit.html?id=${value.id}">Edit</a> | <a id="remove-task-${index}" href="#" data-id="${value.id}">Remove</a>
          </td>
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

  function updateTask(event) {
    let task_id = $('#task_id').val();
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

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id == task_id) {
        taskList.splice(i, 1);
        break;
      }
    }

    let new_task = {
      "id": task_id,
      "task": task,
      "task_priority": task_priority,
      "task_date": task_date
    };

    taskList.push(new_task);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    console.log("Update task successfully.");
  }

  function removeTask(task_id) {
    if (confirm('Are you sure you want to delete this task?')) {
      let taskList = JSON.parse(localStorage.getItem('tasks'));
      if (!taskList) {
        taskList = [];
      }

      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == task_id) {
          taskList.splice(i, 1);
          break;
        }
      }

      localStorage.setItem('tasks', JSON.stringify(taskList));
      location.reload();
      console.log("Task removed successfully.");
    }
  }

  function clearAllTasks() {
    if (confirm('Are you sure you want to clear all tasks?')) {
      localStorage.clear();
      location.reload();
      console.log("All task cleared.");
    }
  }
});

function getTask() {
  let $_GET = getQueryParams(document.location.search);
  let task_id = $_GET['id'];

  let taskList = JSON.parse(localStorage.getItem('tasks'));
  if (!taskList) {
    taskList = [];
  }

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == task_id) {
      $('#edit-task-form #task_id').val(taskList[i].id);
      $('#edit-task-form #task').val(taskList[i].task);
      $('#edit-task-form #priority').val(taskList[i].task_priority);
      $('#edit-task-form #date').val(taskList[i].task_date);
      break;
    }
  }
}

function getQueryParams(qs) {
  gs = qs.split('+').join(' ');
  let params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}
