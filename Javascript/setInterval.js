
// function printHello(){
//     console.log("hello")
// }
// ()=>{} -> flat arrow function

// let interval=setInterval((name)=>console.log(name),1000,"Amit")

// setTimeout(()=>clearInterval(interval),5000)


// Objects in js 

//declaring an object
// let obj={
//     name:"Amit",
//     age:20,
//     city:"Delhi"
// }
// obj.address="Noida";
// console.log(obj)

// console.log(typeof obj)

//accessing the properties of an object(dot notation)
// let printName=obj.name;
// console.log(printName)

//accessing the properties of an object(square bracket notation)
// console.log(obj["address"])


//delete the property of an object
// delete obj.name;
// console.log(obj)

// obj.isStudent="true"
// console.log(obj)


//modifying the properties of an object
// obj.name="Naman";
// console.log(obj)

//2. method of declaring an object

// let obj=new Object();

// obj.name="Utsav"
// obj.age=20
// // console.log(obj)


// let car={
//     name:"BMW",
//     model:"2025",
//     color:"red",
// }
// for(let key in car){
//     console.log(`${key} - ${car[key]}`)
// }
// console.log("hello world",car.name)

//inbuild methods 
let car={
    name:"BMW",
    model:"m4",
    color:"red",
    details:{
        price:'1cr',
        year:2025,
        quantity:[{n:3}]
    }
}
console.log(car.details.quantity[0].n)
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
// car.details();

// console.log(this)

