class User {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getUserObject = () => {
    let obj = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
    };

    return obj;
  };
}

module.exports = User;
