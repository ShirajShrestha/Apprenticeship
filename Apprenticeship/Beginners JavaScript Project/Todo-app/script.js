const todoInput = document.querySelector(".input-field"),
  todoSubmit = document.querySelector(".todo-submit"),
  showTodos = document.querySelector(".todo-container"),
  todoDate = document.querySelector(".input-date");

let todoList = [
  {
    info: "Read Book",
    created: "12-12-2002",
  },
];

const display = () => {
  showTodos.innerHTML = "";

  let newTodo = "";
  for (let i = 0; i < todoList.length; i++) {
    const { info, created } = todoList[i];
    newTodo += `<div>
        <span>${info}</span> <span>${created}</span>
        <button onClick="todoList.splice(${i},1); display();">Delete</button>
    </div>`;
  }
  showTodos.innerHTML = newTodo;
};

display();

todoSubmit.addEventListener("click", () => {
  const inputInfo = todoInput.value;
  const inputDate = todoDate.value;
  todoList.push({ info: inputInfo, created: inputDate });
  todoInput.value = "";
  todoDate.value = "";
  display();
});
