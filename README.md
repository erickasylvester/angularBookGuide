# Twin Book Guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

This application was developed using Angular Technology for the front end as a training excercise. The concecpts learned include:
          Built-in Directives (i.e. 'ngIf', 'ngFor')
          Two-way data binding
          Angular Dependency Injector
          Routing
          Observable objects
          

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Screenshots
http://localhost:4200/welcome
![image](https://user-images.githubusercontent.com/18742286/145471176-01e35547-b910-4653-9be9-5373dee84176.png)

http://localhost:4200/products
![image](https://user-images.githubusercontent.com/18742286/145471124-43496de8-f1d5-4b4d-92e5-3d5a780070d2.png)

Filter Functionality:
![image](https://user-images.githubusercontent.com/18742286/145471330-c4dda820-f749-442c-8390-35f665e5de20.png)


## Tech Debt

The backend data is hardcoded at the moment.
The sample data was obtained using the Google Books API:  https://developers.google.com/books/docs/v1/using
In order to get a sample book set, I queried the API passing in a generated API Key as well as the keywork "twins":
![image](https://user-images.githubusercontent.com/18742286/145470326-dba1f0f7-5d7a-4344-9030-b93b6ba001cb.png)

In the future, I plan on retrieving the data directly from the API to be displayed on the portal

