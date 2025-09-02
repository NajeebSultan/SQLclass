const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'Najeeb6767@'
});

try {
connection.query("SHOW TABLES", (err, results) => {
  if (err) throw err;
  console.log(results);
});
} catch (error) {
  console.error(err);
} 


let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    
  };
};

console.log(getRandomUser());

