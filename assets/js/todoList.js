var addTodoMode = false; // Will determine if the input is shown (+ button clicked)
var inputTodos = $('input');
var todosList = $('.todo');
var deleteItemButtons = $('.delete_item_button');


// Will append the new todo to the list with a fade effect
function appendTodo(p_todo) {
  let itemToAdd = $(`<li class="todo">
                      <span class="delete_item_button">X</span>
                        ${p_todo}
                      </li>`
                    ).hide().fadeIn(1000); // Trick is to hide it and fadeIn it in the jQuery Object

  $('ul').append(itemToAdd); // We just have to append now
}

function initListeners() {
  // Toggle class 'did_todo' on a todo when clicked
  $('ul').on('click', 'li', function() {
    // Note: To fire on new todos added I have to listen on ul (existing when initializing listener)
    // and check if this is a li clicked
    $(this).toggleClass('did_todo');
  });

  // Delete todo when the delete button of this todo is clicked
  $('ul').on('click', 'span', function() {
    // Note: Have to listen to an existing parent first and check if element clicked is 'span.delete_item_button'
    $(this).parent().fadeOut(400, function() {
      $(this).remove();
    });
    // let indexTodo = $(this).index('.delete_item_button');
    // todosList.eq(indexTodo).remove();
  });

  // Add a new todo with the content of the text input when user hit 'Enter'
  inputTodos.on('keypress', function(event) {
    if (event.which === 13 && $(this).val().length >= 2) {
      console.log("append");
      appendTodo($(this).val());
      $(this).val(''); // Clear the input when todo is added
    }
  });

  // Toggle class 'delete_item_button' when the mouse over a ToDo
  $('ul').on('mouseenter', 'li', function() {
    console.log('x appear');
    $(this).children('span').removeClass('delete_item_button');
  });
  $('ul').on('mouseleave', 'li', function() {
    console.log('x disapear');
    $(this).children('span').addClass('delete_item_button');
  });
}

initListeners();
