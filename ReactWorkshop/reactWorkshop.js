//! Class Lecture in morning
function sayHi(name = "World") {
    console.log(sayHi)
}

let a = "hello"
console.log(a)  

const people = [
    {name: "Babe", age: 21},
    {name: "Run", age: 20},
    {name: "Nut", age: 19}
] 
console.log(people)


//!Class Lab - how to train JS before React 
// Persons
const persons = [
    {
      name: "Tae",
      age: 21
    },
    {
      name: "BasEiei",
      age: 20
    },
    {
      name: "Pu",
      age: 22
    },
    {
      name: "OKBoy",
      age: 54
    },
  ]
  
  //! void function
  //* method can't return
  
  // const displayName = (person) => {  
  // console.log(`${person.name} ${person.age}`)
  // }
  // for(let i =0 ; i<persons.length ; i++){
  // displayName(persons[i])
  // }
  
  // const sum = (number1,number2) => {
  //   console.log(number1 + number2)
  // }
  // sum(1,3)
  
  //------------------------------------------------------------
  
  // function return value
  // function getName(person){
  //   return person.name
  // }
  //*or arrow function
  // const getName2 = (person) =>{
  //   return person.name
  // }
  //* or No function logic
  // const getName3 = (person) => person.name
  //* destructering
  // const getName4 = ({name}) =>{
  //  if(name == 'BasEiei'){
  //   return 'supawit'
  //  }
  //   return 'mos'
  // }
  
  // console.log(getName(persons[3]))
  // console.log(getName2(persons[2]))
  // console.log(getName3(persons[1]))
  // console.log(getName4(persons[1]))
  
  //-------------------------------------------
  
  //*map function
  // const names = persons.map((person) => {
  //   return person.name
  // })
  //   console.log(names)
    
  // const ages = persons.map((person) => {
  //   return person.age
  // })
  //   console.log(ages)
    
  //------------------------------------------
  
  //! Products
  const products = [
    {
      name: "Chocolate",
      category: "Food",
      price: 25.00
    },
    {
      name: "Salad",
      category: "Food",
      price: 78.00
    },
    {
      name: "Fanta",
      category: "Drink",
      price: 12.00
    },
    {
      name: "Rolex",
      category: "Watch",
      price: 2000000.00
    }
  ]
  
  //*Filter function
  
  // const foods =  products.filter((product) => {
  //     if(product.category == 'Food'){
  //       return true
  //     }else{
  //       return false
  //     }
  //   })
  //   console.log(foods)
  
  // const foods = products.filter((product) =>{
  //   return product.category == 'Food'
  // })
  // console.log(foods)
  
  // const foods = products.filter((product) =>{
  //   return product.category == 'Food' && product.name == 'Chocolate'
  // })
  // console.log(foods)
  
  const foods = products
    .filter((product) =>{
    return product.category == 'Food'
    })
    .filter((product)=> {
      return product.price < 100
    })
    .filter((product)=>{
      return product.name == 'Salad'
    })
  console.log(foods)


