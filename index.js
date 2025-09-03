const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

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


app.get('/', (req, res) => {
  res.send("Welcome to the Home Page");
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}
);


// try {
// connection.query(q , [data], (err, results) => {
//   if (err) throw err;
//   console.log(results);
// });
// } catch (err) {
//   console.log(err);
// } 
// connection.end();
