interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
}

const Brian: User = { email: "Brian@gmail.com, userId: 2211" }