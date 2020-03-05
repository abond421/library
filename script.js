let myLibrary = [];

const addBtn = document.getElementById("buttonAdd");
const display = document.getElementById("bookTemplate");
const selection = document.getElementById("title");
const details = document.getElementById("FormTemplate");
const deleteBtn = document.querySelector("btnDelete");
let titleLbl = document.getElementById("titleLbl");

function Book(title, pages, author, year, read) {
  // the constructor...
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.year = year;
  this.read = read;
}

function addBookToLibrary(title, pages, author, year, read) {
  //do stuff here...

  let text = new Book();

  text.author = author;
  text.title = title;
  text.pages = pages;
  text.year = year;
  text.read = read;

  myLibrary.push(text);
}

function render() {
  //TODO
  for (var i = 0; i <= myLibrary.length; i++) {
    display.innerHTML += `
    <div class='card'>
    <div class='title'>
    <h2 id='title-name'>${myLibrary[i].title}</h2>
    <h3>${myLibrary[i].author}</h3>
    <div class='details'>
    <h4> Pages: ${myLibrary[i].pages}</h4>
    <h4>Published: ${myLibrary[i].year}</h4>
    </div>
    <button id="btnDelete">Delete</button>
    </div>
    `;
  }
}

addBtn.addEventListener("click", e => {
  addBookToLibrary(
    this.prompt("What is the name of the book?"),
    this.prompt("How many pages are in the book?"),
    this.prompt("Who is the author?"),
    this.prompt("What year was the book first published?"),
    true
  );

  display.innerHTML = "";
  render();
});

addBookToLibrary("The Hobbit", 333, "J.R.R Tolkien", 2323, true);
addBookToLibrary("Elantris", 333, "Brandon Sandersan", 1414, true);
render();
