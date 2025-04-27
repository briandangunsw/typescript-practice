class User {
  email: string
  name: string
  readonly city: string = "Sydney"
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Brian = new User("Brian@gmail.com", "Brian");
//Brian.city = "Sydney";