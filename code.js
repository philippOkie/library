let myLibrary = []
const bookContainer = document.getElementById("bookContainer")
const addABook = document.getElementById("addABook")
const submitForm = document.getElementById("inputContainer")
let bookId = 0

class Book {
    constructor(title, author, pages, readBook) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = readBook
        this.id = bookId++
    }
}

submitForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let checkBox = document.getElementById("myCheckBox")
    let read = checkBox.checked ? "READ" : "NOT READ"
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value

    const removeBtn = document.createElement("button")
    const newDiv = document.createElement("div")
    const titleCard = document.createElement("div")
    const authorCard = document.createElement("div")
    const pagesCard = document.createElement("div")
    const readCard = document.createElement("div")
    
    removeBtn.innerHTML = "Delete"
    titleCard.innerHTML = title
    authorCard.innerHTML = author
    pagesCard.innerHTML = pages
    readCard.innerHTML = read
    
    bookContainer.appendChild(newDiv)
    newDiv.appendChild(titleCard)
    newDiv.appendChild(authorCard)
    newDiv.appendChild(pagesCard)
    newDiv.appendChild(readCard)
    newDiv.appendChild(removeBtn)

    // add class and ids
    newDiv.classList.add('card')
    removeBtn.classList.add("delete")
    newDiv.setAttribute("id", "card")
    removeBtn.setAttribute("id", "delete")
    titleCard.setAttribute("id", "titleBook")
    authorCard.setAttribute("id", "authorBook")
    pagesCard.setAttribute("id", "pagesBook")
    readCard.setAttribute("id", "readBook")

    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    console.log(myLibrary)

    removeBtn.addEventListener('click', (e) => {
        bookContainer.removeChild(e.target.parentNode.remove())
        removeBookFromLibrary(book);
   })
})














