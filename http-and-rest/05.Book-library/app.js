const tableBody = document.querySelector("tbody");
const loadBooksButton = document.querySelector("#loadBooks");
const createBookButton = document.querySelector("#form button");
const formHeading = document.querySelector("#form h3");
let titleField = document.querySelector("#form input[name='title']");
let authorField = document.querySelector("#form input[name='author']");

tableBody.textContent = "";

function attachEvents() {
  loadBooksButton.addEventListener("click", () => {
    fetch("http://localhost:3030/jsonstore/collections/books")
      .then((response) => response.text())
      .then((text) => displayAllBooks(text));
  });

  createBookButton.addEventListener("click", handleCreateBookButtonClick);
}

function displayAllBooks(books) {
  tableBody.textContent = "";
  const booksInfo = Object.entries(JSON.parse(books));
  for (const [bookID, book] of booksInfo) {
    displayBook({ ...book, bookID });
  }
}

function displayBook(book) {
  const currentRow = document.createElement("tr");
  const currentTitle = document.createElement("td");
  const currentAuthor = document.createElement("td");
  const currentButtons = document.createElement("td");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  editButton.setAttribute("name", book.bookID);
  editButton.addEventListener("click", handleEditButtonClick);

  currentTitle.textContent = book.title;
  currentAuthor.textContent = book.author;
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  currentButtons.appendChild(editButton);
  currentButtons.appendChild(deleteButton);

  currentRow.appendChild(currentTitle);
  currentRow.appendChild(currentAuthor);
  currentRow.appendChild(currentButtons);

  tableBody.appendChild(currentRow);
}

function handleCreateBookButtonClick(e) {
  if (!(titleField.value && authorField.value)) {
    return;
  }

  fetch("http://localhost:3030/jsonstore/collections/books/", {
    method: "POST",
    body: JSON.stringify({
      author: authorField.value,
      title: titleField.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

function handleEditButtonClick(e) {
  const bookID = e.currentTarget.name;
  const [title, author, buttons] =
    e.currentTarget.parentElement.parentElement.querySelectorAll("td");
  formHeading.textContent = "Edit FORM";
  titleField.value = title.textContent;
  authorField.value = author.textContent;
}

attachEvents();
