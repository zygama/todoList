var addTodoMode = false; // will determine if the input is shown (+ button clicked)
var inputTodos = $('input');
var todosList = $('.todo');


function initListeners() {
  todosList.on('click', function() {
    $(this).toggleClass('did_todo')
  });
}

initListeners();
