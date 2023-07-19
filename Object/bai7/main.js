let action ="create";
function Book() {
    this.inputData = function () {
        this.bookId = document.getElementById("bookId").value;
        this.bookName = document.getElementById("bookName").value;
        this.price = +document.getElementById("price").value;
        this.author = document.getElementById("author").value;
        this.status = document.querySelector("input[name='status']:checked").value;
    }
    this.displayData = function () {
        document.getElementById("content").innerHTML+=`<tr>  
                                                         <td>${this.bookId}</td>
                                                         <td>${this.bookName}</td>
                                                         <td>${this.price}</td>
                                                         <td>${this.author}</td>
                                                         <td>${this.status}</td>
                                                         <td>
                                                            <button onclick="initEdit('${this.bookId}')">Edit</button>
                                                            <button onclick="deleteBook('${this.bookId}')">Delete</button>
                                                         </td>
                                                      </tr>`
    }
}

let arrBook =[];
function displayListBook() {
    document.getElementById("content").innerHTML="";
    for (let index = 0; index < arrBook.length; index++) {
        arrBook[index].displayData();
    }
}
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click",function (event) {
    event.preventDefault();
    if (action=="create") {
        let newBook =new Book();
        newBook.inputData();
        arrBook.push(newBook);
        displayListBook();
        clearDataForm();

    } else {
        let updateBook = new Book();
        updateBook.inputData();
        let indexUpdate = getIndexBookById(updateBook.bookId);
        if (indexUpdate>-1) {
            arrBook[indexUpdate]= updateBook;
        }
        displayListBook();
        clearDataForm();
        action="create";
        document.getElementById("bookId").readOnly= false;
    }
})

function clearDataForm() {
    document.getElementById("bookId").value="";
    document.getElementById("bookName").value="";
    document.getElementById("price").value="";
    document.getElementById("author").value="";
    document.getElementById("active").checked = true;
}

function initEdit(bookId) {
    for (let index = 0; index < arrBook.length; index++) {
        if (arrBook[index].bookId==bookId) {
            document.getElementById("bookId").value=arrBook[index].bookId;
            document.getElementById("bookId").readOnly= true;
            document.getElementById("bookName").value=arrBook[index].bookName;
            document.getElementById("price").value=arrBook[index].price;
            document.getElementById("author").value=arrBook[index].author;
            if (arrBook[index].status=="active") {
                document.getElementById("active").checked = true;
            } else {
                document.getElementById("inActive").checked = true;
            }
            action="Edit";
            break;
            
        } 
    }
}


function deleteBook(bookId) {
    let indexDelete = getIndexBookById(bookId);
    arrBook.splice(indexDelete,1);
    displayListBook();
}

function getIndexBookById(bookId) {
    for (let index = 0; index < arrBook.length; index++) {
       if (arrBook[index].bookId== bookId) {
        return index;
       }
    }
    return -1;
}

let btnSort = document.getElementById("btnSort");
btnSort.addEventListener("click",function () {
    arrBook.sort((a, b)=>a.price-b.price);
    displayListBook();
})

let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function () {
    let searchBookName = document.getElementById("searchBookName").value;
    document.getElementById("content").innerHTML="";
    for (let index = 0; index < arrBook.length; index++) {
        if (arrBook[index].bookName.includes(searchBookName)) {
            document.getElementById("content").innerHTML+=`<tr>  
            <td>${arrBook[index].bookId}</td>
            <td>${arrBook[index].bookName}</td>
            <td>${arrBook[index].price}</td>
            <td>${arrBook[index].author}</td>
            <td>${arrBook[index].status}</td>
            <td>
               <button onclick="initEdit('${arrBook[index].bookId}')">Edit</button>
               <button onclick="deleteBook('${arrBook[index].bookId}')">Delete</button>
            </td>
         </tr>`
        }
    }
})

