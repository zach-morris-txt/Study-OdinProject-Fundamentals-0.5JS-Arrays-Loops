//[ARRAYS]
    //Array is a data structure that can store multiple values in a single variable
    const books = ["The Brothers Karamazov", 
                    "The Invisible Man", 
                    "Anna Karenina", 
                    "Marco Polo"]
    //Array elements are referenced by their index number starting at 0
    //Reassigning element values:
    books[3] = "Dracula"

    //Arrays can contain strings, numbers, arrays, objects, and even functions
    books[books.length - 1] //Accessing last element value


    //Looping array example
    for (let i = 0; i < books.length; i++) {        
    }

    //For each array example
    books.forEach(myFunction)

    //Array Methods
        books.length                                //Length property returns the number of elements
        books.toString()                            //Converts to string of comma-separated values
        books.pop()                                 //Removes last item
        books.push()                                //Adding element to array
        books.join()                                //Works like toString but can specify separator
        books.delete()                              //Removes item but leaves hole in array
        books.concat()                              //Creates a new array by merging existing arrays
        books.splice()                              //Adds new items into an array
        books.slice()                               //Slices out a piece of an array
        books.map(myFunction)                       //Applies function at each element
        books.filter(myFunction)                    //Filters array into new collection for values matching function condition
            //Ex.       function mBook(book) {
                        //  return books.startsWith("M")
                        //}
                        //const filtered = books.filter(mBook)


//[LOOPS]
//Loop Standard:    for (initializer; condition; final-expression) { code }
    //For...of Loop         Ex.   
    for (const book of books) { console.log(book)}

    //While Loop            Ex.    
    while (i < cats.length) {
        if (i === cats.length - 1) {
            myFavoriteCats += `and ${cats[i]}.`;
        } else {
            myFavoriteCats += `${cats[i]}, `;
        }        
            i++;
        }

    //Do...While Loop       Ex.
    do {
        if (i === cats.length - 1) {
            myFavoriteCats += `and ${cats[i]}.`;
        } else {
              myFavoriteCats += `${cats[i]}, `;
        }
        i++;
    } while (i < cats.length);

    //Continue; Skip to the next iteration in the loop
    //Breaks; Exiting the loop before complete loop         Ex.           
    for (const book of books) {
        const splitBook = book.split(":");
        if (splitBook[0].toLowerCase() === searchName) {
            para.textContent = `${splitBook[0]}'s number is ${splitContact[1]}.`;
        break;
        }
    }