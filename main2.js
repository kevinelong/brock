//COMPARE PYTHON TO JAVASCRIPT EQUIVALENT
// Coments in JS ar // not #

// numbers = [1, 2, 3]
numbers = [1, 2, 3] //SAME SAME

// print(numbers[1])
console.log(numbers[1]) // different function

// for n in numbers:
//     print(n)
for(let i=0; i< numbers.length; i++){
    const n = numbers[i]
    console.log(n)
}

// product = {
//     "price": 100,
//     "name": "Knife K-1"
// }
product = {
    price: 100,
    name: "Knife K-1"
}
//same same-ish

// quantity = 12
// print(product["price"] * quantity)
const quantity = 12
console.log(product.price * quantity)
// [""] not required use dot "." instead

// def times (a, b):
//     return a * b
// def add (x, y):
//     return x + y
// result = add(6, 7)
// print(result)
function times(a, b){
    return a * b
} 
const result = times(6, 7)
console.log(result)


// products = [
//     {
//         "price": 2,
//         "name": "coke"
//     },{
//         "price": 3,
//         "name": "ice cream"
//     },{
//         "price": 4,
//         "name": "cherry pie"
//     }
// ]
products = [
    {
        "price": 2,
        "name": "coke"
    },{
        "price": 3,
        "name": "ice cream"
    },{
        "price": 4,
        "name": "cherry pie"
    }
]

// for p in products:
//     print(p["name"], p["price"])

products.forEach((p) => {
    console.log(p.name, p.price)
})




