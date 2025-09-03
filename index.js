const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Najeeb6767@'
});

let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
    
  ];
};


let q = "INSERT INTO user (id, name, email, password) VALUES ?";

let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getRandomUser()); 
}


try {
connection.query(q , [data], (err, results) => {
  if (err) throw err;
  console.log(results);
});
} catch (err) {
  console.log(err);
} 
connection.end();




