const arr = [1,2,3,4,5,6,7,8,9,10]

let arr2 = []
arr.forEach((num) =>{
    if(num > 5)
        arr2.push(num)
})

console.log(arr2);

arr2 = arr.filter((num) => {
    return  num < 5
})
console.log(arr2);

const booksArray = [
    {
      Book: "To Kill a Mockingbird",
      Genre: "Fiction",
      Publish: "1960",
      Edition: "1st"
    },
    {
      Book: "1984",
      Genre: "Dystopian",
      Publish: "1949",
      Edition: "1st"
    },
    {
      Book: "The Great Gatsby",
      Genre: "Classic",
      Publish: "1925",
      Edition: "1st"
    },
    {
      Book: "The Catcher in the Rye",
      Genre: "Fiction",
      Publish: "1951",
      Edition: "1st"
    },
    {
      Book: "Moby Dick",
      Genre: "Adventure",
      Publish: "1851",
      Edition: "1st"
    },
    {
      Book: "Pride and Prejudice",
      Genre: "Romance",
      Publish: "1813",
      Edition: "1st"
    }
  ];
  
let my_book = booksArray.filter((bk) => {
    return bk.Genre === "Fiction" || bk.Publish <= "1900"
})

console.log(my_book);

const num = [1,2,3,4,5,6,7,8,9,10]

const myNum = num
        .map((item) => item * 10)
        .map((item) => item + 1)
        .filter((item) => item >= 50)


console.log(myNum);