var faker = require('faker');

var database = { books: []};

for (var i = 1; i<= 50; i++) {
  database.books.push({
    id: i,
    name: faker.lorem.words(),
    author: faker.name.findName(),
    startDate: faker.date.past(),
    endDate: faker.date.future()
  });
}

console.log(JSON.stringify(database));

