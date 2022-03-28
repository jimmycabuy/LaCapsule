function checkValues(data) {
  let newList = [];

  for (const user of data) {
    for (const value in user) {
      if (user[value] == "" || user[value] == " ") {
        user[value] = null;
      }
    }
    newList.push(user);
  }
  return newList;
}

const list = [
  { fullname: "John Doe", age: 42, tel: "", email: " " },
  {
    fullname: "Vanessa Williams",
    age: "",
    tel: " ",
    email: "v.williams@gmail.com",
  },
  { fullname: "Richard Lawson", age: 42, tel: "0765432109", email: "" },
];
console.log(JSON.stringify(checkValues(list)));