const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Najeeb6767@'
});

let q = "INSERT INTO user (id, name, email, password) VALUES ?";
let users = [
 ["123b" , "123_newuserb", "abc@gmail.comb","abcb"],
["123c" , "123_newuserc", "abc@gmail.comc","abcc"],
];



try {
connection.query(q , [users], (err, results) => {
  if (err) throw err;
  console.log(results);
});
} catch (err) {
  console.log(err);
} 
connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    
  };
};



