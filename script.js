const myLibrary=[];

class Book {
    constructor(title, author, pages, read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
}

Book.prototype.toggleRead=function(){
    this.read = !this.read;
    
}


function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryBook=document.querySelector("#library");
    libraryBook.innerHTML="";
    for (let i=0; i < myLibrary.length; i++){
    let book=myLibrary[i];
    let bookEl=document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML=`
    <div class="card-header">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
    </div>
    <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-book" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read" onclick="toggleRead(${i})">Book Status</button>
        `;
    libraryBook.appendChild(bookEl);
    }
}

   function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
   }


function addBookToLibrary (){
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let pages=document.querySelector("#pages").value;
    let read=document.querySelector("#read").checked;
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

const newBookButton=document.querySelector("#new-book");
newBookButton.addEventListener("click", function(){
    let newBookForm=document.querySelector("#new-book-form");
    newBookForm.style.display="grid";
});

document.querySelector("#new-book-form").addEventListener("submit", function(event){
event.preventDefault();
addBookToLibrary();
})