# Bookie - Angular

A book management application built with [Angular 8.3.17](https://github.com/angular/angular)

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

### Deploying

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The page will reload if you make edits.<br />

After that, run `npm run server` in another terminal or `nodemon server` in backend folder, depending on the database you want to use.

Note: axios link in components (especially login and register components) needs to be changed depending on the choosen database.

For JSON server, the link would be "localhost:3000".

For MongoDB, the link would be "localhost:5000".

Test account is **vu**, password is **2312**.

### Database

The "server" folder was created as test backend, data inside was generated automatically from Faker.js. It only served as a test database for the functions of JS frontend.

"server" backend was ran by json server for test phase.

The "backend" folder used MongoDB as its database and express.js as server. Cors package was used as a middleware.

Currently, MongoDB database is only connected with user and finishedBook model and relates to function: login, register and CRUD in finishedBook page.

The other page including droppedBook, currentBook and wishlistBook are using database from "server" folder, as an application example for json server, and also because they serve the same CRUD structure as finishedBook.

In conclusion, 2 different backend are used in this project for better learning experiences.

To use "server" backend, run:
`npm run server`

To use "backend" backend, run:
`nodemon server`
in backend folder.

## Build with
* TS
* MongoDB

## Feature

* Authentication for user
* Book management:
  CRUD function for finished reading books, current reading books, dropped books and wishlist.
  Change status of book between wishlist, reading and dropped/finished.

## Live action

![Book GIF](https://media.giphy.com/media/ftqS2jVIncVf49Yveu/giphy.gif)

## Note

These folders belowed just stayed as study purpose of Angular 8.
These are no relationship whatsoever between them and the bookie app.

* recipe
* shopping list
* shared/ingredient.model

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
