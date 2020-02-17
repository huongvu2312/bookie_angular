# Bookie

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

These folder belowed just stayed as study purpose of Angular 8.
These are no relationship whatsoever between them and the bookie app.

- recipe
- shopping list
- shared/ingredient.model

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
