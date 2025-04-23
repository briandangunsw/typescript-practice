const User = {
  name: "Brian",
  email: "Brian@gmail.com",
  isActive: true,
}

function createUser({ name: string, isPaid: boolean}) {

}

let newUser = { name: "Brian", isPaid: false, email: "Brian@gmail.com" }
createUser(newUser);



function createCourse():{name: string, price: number}{
  return { name: "reactjs", price: 399 }
}

export {};