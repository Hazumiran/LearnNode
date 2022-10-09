const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)
// Covert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookJSON) // print : {"title":"Ego is the Enemy","author":"Ryan Holiday"}
console.log(bookObject) // print : { title: 'Ego is the Enemy', author: 'Ryan Holiday' }
