var addTodoMode = false; // Will determine if the input is shown (+ button clicked)
var inputTodos = $('input');
var todosList = $('.todo');
var deleteItemButtons = $('.delete_item_button');

function appendTodo(p_todo) {
  $('ul').append(
    `<li class="todo">
      <span class="delete_item_button">X</span>
      ${p_todo}
    </li>`
  );
}

function initListeners() {
  // Toggle class 'did_todo' on a todo when clicked
  todosList.on('click', function() {
    $(this).toggleClass('did_todo');
  });

  // Delete todo when the delete button of this todo is clicked
  deleteItemButtons.on('click', function() {
    // let indexTodo = $(this).index('.delete_item_button');
    // todosList.eq(indexTodo).remove();
    $(this).parent().fadeOut(400, function() {
      $(this).remove();
    });
  });

  // Add a new todo with the content of the text input when user hit 'Enter'
  inputTodos.on('keypress', function(event) {
    if (event.which === 13 && inputTodos.val().length >= 2) {
      console.log("append");
      appendTodo(inputTodos.val());
      inputTodos.val('');
    }
  });
}

initListeners();
