const book = document.querySelector('#book');
const author = document.querySelector('#author');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
     e.preventDefault();

     //Validation
     if (book.value == '' && author.value == '' && date.value == '' && time.value == '')
         alert('Please fillup all the information')
     else
         {
             const newRow = document.createElement('tr')

             //New book
             const newBook = document.createElement('th')
             newBook.innerHTML = book.value;
             newRow.appendChild(newBook);

             //New Author
             const newAuthor = document.createElement('th')
             newAuthor.innerHTML = author.value;
             newRow.appendChild(newAuthor);

             //New Date
             const newDate = document.createElement('th')
             newDate.innerHTML = date.value;
             newRow.appendChild(newDate);

             //New Time
             const newTime = document.createElement('th')
             newTime.innerHTML = time.value;
             newRow.appendChild(newTime);

             //New UI
           
             bookList.appendChild(newRow);
         }
} )




