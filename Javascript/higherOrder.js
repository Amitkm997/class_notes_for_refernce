
//higherOrder function
//map()

// let arr=[4,3,7,8,9];

// let newArray=arr.map((cur,index)=>cur*index);

// console.log(newArray)



// let person =[
//     {
//         name: "amit",
//         age: 3
//     },
//     {
//         name: "ankit",
//         age: 5
//     }
// ]

// let age=person.map((cur)=>[cur.age,cur.name]);
// console.log(age)

// let arr=[4,3,7,8,9];
// let even=arr.filter((cur)=>cur%2==0);
// console.log(even)


// let person =[
//     {
//         name: "amit",
//         age: 13
//     },
//     {
//         name: "ankit",
//         age: 51
//     },
//     {
//         name:"utsav",
//         age:22
//     }
// ]

// let filteredArray=person.filter((cur)=>cur.age>18);
// console.log(filteredArray)

// let arr=[4,3,7,8,9];

// let doubleEven=arr.filter((cur)=>cur%2==0).map((cur)=>cur*2);
// console.log(doubleEven)


let arr=[4,3,7,8,9];

// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

// let sum=arr.reduce((cur,acc)=>cur+acc,0)
// console.log(sum)

// let cart=[
//     {items:"mobile",price:70000,quantity:3},
//     {items:"laptop",price:120000,quantity:4},
//     {items:"smartwatch",price:20000,quantity:6}
// ]

// let totalPrice=cart.reduce((acc,cur)=>cur.price+acc,0);
// console.log(totalPrice)

// let matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// //
// let sum=matrix.reduce((acc,cur)=>acc+cur.reduce((accc,curr)=>accc+curr,0),0);
// console.log(sum)


let cart=[
    {items:"mobile",price:70000,quantity:3},
    {items:"laptop",price:120000,quantity:4},
    {items:"smartwatch",price:20000,quantity:6},
    {items:"mouse",price:2000,quantity:6}
]
//find the sum of all the items whose price is greater than 20000 and double the price
let sum=cart.filter((cur)=>cur.price>20000).map((cur)=>cur.price*2).reduce((acc,cur)=>acc+cur,0)
console.log(sum)
