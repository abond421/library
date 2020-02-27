let myLibrary = [];

const addBtn = document.getElementById("buttonAdd");
const display = document.getElementById("bookTemplate");
const selection = document.getElementById("title");

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
    display.innerHTML +=
      "<div class='title'>" +
      "<h2 id='title-name'>" +
      myLibrary[i].title +
      "</h2>" +
      "<h3>" +
      myLibrary[i].author +
      "</h3>" +
      "</div>";
  }
}

addBtn.addEventListener("click", e => {
  addBookToLibrary(
    this.prompt("What is the name of the book?"),
    this.prompt(""),
    this.prompt(""),
    this.prompt(""),
    true
  );
});


addBookToLibrary("Hobbit", 333, "J.R.R Tolkien", 2323, true);
addBookToLibrary("Hobbit", 333, "J.R.R Tolkien", 2323, true);
console.log(myLibrary);
render();
