const addTodo = (clicked) => {
  let contentOl = document.getElementById("content");
  let newId;
  newId = parseInt(contentOl.lastElementChild.id[5]) + 1;

  let title = document.getElementById("input-tag").value;
  console.log(title);
  let todoAdd = `
      <li id='todo-${newId}' class="todo-li">
      ${title}
      <input type="button" onclick='deleteFunc(this.id)' value='삭제'/>
      <input type="button" onclick='doneFunc(this.id)' value='완료'/>
  </li>
      `;

  let getTags = $("#content").html();
  getTags += todoAdd;
  $("#content").html(getTags);
};

const doneFunc = (clicked) => {
  let thisParentId = clicked.parentElement.id;
  let isDone = document.getElementById(thisParentId).className;

  if (isDone == "done-todo") {
    document.getElementById(thisParentId).className = "not-done-todo";
  } else {
    document.getElementById(thisParentId).className = "done-todo ";
  }
  //   let todo = document.getElementById("todo-1");
  //   if (todo.className == "done-todo") {
  //     todo.className == "not-done-todo";
  //   } else {
  //     todo.className = "done-todo";
  //   }
};

const deleteFunc = (clicked) => {
  let thisParentId = clicked.parentElement.id;
  $(`#${thisParentId}`).remove();
};
