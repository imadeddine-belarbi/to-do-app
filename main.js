const ul = document.querySelector(".container ul");

let currentId = 1;

const addButton = document.getElementById("add");
addButton.addEventListener("click", () =>
{
  addItem();
});

const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem()
{
  const taskInput = document.querySelector(".controls input");
  if (taskInput.value === '')
    return;

  currentId++;
  const item = `
  <li>
    <input type="checkbox" id="item-${currentId}">
    <label for="item-${currentId}">${taskInput.value}</label>
  </li>
  `;

  ul.innerHTML += item;
  taskInput.value = '';
}
