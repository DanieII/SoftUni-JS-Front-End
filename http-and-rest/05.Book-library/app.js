const tableBody = document.querySelector("tbody");
const loadBooksButton = document.querySelector("#loadBooks");
const createBookButton = document.querySelector("#form button");
const formHeading = document.querySelector("#form h3");
let titleField = document.querySelector("#form input[name='title']");
let authorField = document.querySelector("#form input[name='author']");
let editBookID;

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

  currentRow.setAttribute("name", book.bookID);

  editButton.addEventListener("click", handleEditButtonClick);
  deleteButton.addEventListener("click", handleDeleteButtonClick);

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
  const [title, author, buttons] =
    e.currentTarget.parentElement.parentElement.querySelectorAll("td");

  editBookID = e.currentTarget.parentElement.parentElement.getAttribute("name");
  formHeading.textContent = "Edit FORM";
  titleField.value = title.textContent;
  authorField.value = author.textContent;
  createBookButton.textContent = "Save";
  createBookButton.removeEventListener("click", handleCreateBookButtonClick);
  createBookButton.addEventListener("click", handleSaveEditFormButtonClick);
}

function handleSaveEditFormButtonClick() {
  fetch(`http://localhost:3030/jsonstore/collections/books/${editBookID}`, {
    method: "PUT",
    body: JSON.stringify({
      author: authorField.value,
      title: titleField.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

function handleDeleteButtonClick(e) {
  const bookID =
    e.currentTarget.parentElement.parentElement.getAttribute("name");
  fetch(`http://localhost:3030/jsonstore/collections/books/${bookID}`, {
    method: "DELETE",
  });
}

attachEvents();
