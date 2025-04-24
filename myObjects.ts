// // const User = {
// //   name: "Brian",
// //   email: "Brian@gmail.com",
// //   isActive: true,
// // }

// // function createUser({ name: string, isPaid: boolean}) {

// // }

// // let newUser = { name: "Brian", isPaid: false, email: "Brian@gmail.com" }
// // createUser(newUser);



// // function createCourse():{name: string, price: number}{
// //   return { name: "reactjs", price: 399 }
// // }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;

// }

// type Mystring = string 

// function createUser(user: User): User {
//   return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

// export {};

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "Brian@gmail.com",
  isActive: false,
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}


type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "Brian@studiousfmaily.com";
//myUser._id = "1234"; // error cause _id is readonly

