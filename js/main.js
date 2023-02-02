const input = document.querySelector("form div input");
const submit = document.querySelector("form div button");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("ul li");
const del = document.querySelector(".delete");
const filter = document.querySelector(".filter");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  const btnDel = document.createElement("button");
  btnDel.className = "btn btn-danger btn-sm float-end delete";
  btnDel.appendChild(document.createTextNode("X"));
  li.appendChild(btnDel);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    ul.removeChild(li);
  }
});

filter.addEventListener("keyup", (e) => {
  const text = e.target.value.toLowerCase();

  let items = document.querySelectorAll("ul li");

  items.forEach((li) => {
    const searchItem = li.firstChild.textContent;
    if (searchItem.toLowerCase().indexOf(text) != -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
