// class User {
//   public email: string // everything that you don't mark is public.
//   private name: string
//   readonly city: string = "Sydney"
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {

  private _courseCount = 1;

  readonly city: string = "Sydney"
  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum
  }
}

const Brian = new User("Brian@gmail.com", "Brian");
//Brian.name

// Brian.deleteToken();