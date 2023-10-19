function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  if (todoInput.value.trim() === "") {
    alert("Veuillez entrer une tâche!");
    return;
  }
  const todoText = todoInput.value;
  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;

    const editBtn = document.createElement("button");
    editBtn.classList = 'edit';
    editBtn.innerText = "Modifier";
    editBtn.onclick = function () {
      editTodo(todoEl);
    };
    todoEl.appendChild(editBtn);
    todoList.appendChild(todoEl);
    todoInput.value = "";
  }
}
function editTodo(todoEl) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = todoEl.innerText;

  todoEl.innerHTML = "";
  todoEl.appendChild(input);
  input.focus();

  input.onblur = finishEditing;
  input.onkeydown = function(e) {
      if (e.key === "Enter") {
          finishEditing.call(input); 
      }
  };
  function finishEditing() {
      const newText = this.value;
      todoEl.innerHTML = newText;

      const editBtn = document.createElement("button");
      editBtn.innerText = "Modifier";
      editBtn.classList = 'edit';
      editBtn.onclick = function() {
          editTodo(todoEl);
      };
      todoEl.appendChild(editBtn);
  }
}