
// Practice questions

// Create a Product object with name, price, and getDiscountedPrice(percent) 
// method.

// Create a Library object that contains a list of books.
//  Each book has a title, author, and isAvailable flag. Add a method to
//  borrow a book and mark it unavailable.

// Create a Student object that holds marks in 3 subjects.
//  Add a method getAverageMarks().






































// Create a Product object with name, price, and getDiscountedPrice(percent) 
// method.
let product={
    name:"Bike",
    price:200000,
    discoutPrice: function getDiscountedPrice(percent){
        let discount=(this.price*percent)/100;
        return this.price-discount;
    }
}

// console.log((product.discoutPrice(20)))


// Create a Student object that holds marks in 3 subjects.
//  Add a method getAverageMarks().

let student={
    name:"Amit",
    marks:{
        maths:80,
        science:70,
        Hindi:90
    },
    average: function getAverageMarks(){
        let total=this.marks.maths+this.marks.science+this.marks.Hindi
        return total/3;
    }
}

// console.log(student.average())


//  Create a Library object that contains a list of books.
//  Each book has a title, author, and isAvailable flag. Add a method to
//  borrow a book and mark it unavailable.

let Library={
    books:[
        {title:"Harry Potter",author:"J K Rowlings",isAvailable:true},
        {title:"Rich Dad Poor Dad",author:"Robert",isAvailable:false},
        {title:"Psychology of Money",author:"Shivam",isAvailable:true}
    ],
    borrow:function borrowBook(title){
       let book=this.books.find((n)=>n.title==title);
       if(book.isAvailable){
        book.isAvailable=false;
        console.log(`Book with ${title} is Available`)
       }else{
        console.log(`Book with ${title} is not available`)
       }
    }
}
// Library.borrow("Harry Potter")
// Library.borrow("Harry Potter")
// let array=[3,2,32,3]
// array.find((n)=>n)