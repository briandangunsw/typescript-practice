interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  //startTrail: () => string // a method that returns a string
  startTrail(): string // another way to define a method
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const Brian: Admin = { dbId: 22, email: "Brian@gmail.com", userId: 2211, role: "admin", githubToken: "github", startTrail: () => {
  return "trail started"
},
getCoupon: (name: "Brian", off: 10) => {
  return 10
}
}
Brian.email = "B@gmail.com"
//Brian.dbId = 33;

