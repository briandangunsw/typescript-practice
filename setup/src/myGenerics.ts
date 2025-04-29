const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number  {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

//identityThree(true)

function identityFour<T>(val: T): T {
  return val
}

interface Bootle {
  brand: string,
  type: number
}

interface Database {
  connection: string,
  userName: string,
  password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U):object {
  return {
    valOne,
    valTwo
  }
}

//anotherFunction(3, {} as Database)

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Sellable<T>{
  public cart: T[] = []
  addToCart(product: T) {
    this.cart.push(product)
  }
}