class Person {
    constructor(firstName, lastName, age, email, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.address = address;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getEmail() {
      return this.email;
    }
  
    getAddress() {
      return this.address;
    }
  
    getAge() {
      return this.age;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setAddress(address) {
      this.address = address;
    }
  }
  