# Itec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

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

 .
    ├── app                      # Main modules contain each app's entry point
    ├── components               # Component modules of the apps
    │   ├── application          # Higher level modules. Includes http layer. Usually groups together service modules
    │   ├── service              # Service modules. Defining database access and 3rd party api access
    │   └── utility              # Common utility modules. The most basic building block of the applications
    ├── dev-tools                # Usefull resources for dev purposes (e.g postman collection export, grafana dashboard export)
    ├── documentation            # Documentation and tutorials 
    ├── build                    # Dockerfiles used for building docker images
    ├── scripts                  # Usefull scripts for dev purposes
    ├── z_test_stuff             # Relevant resources for the tests
    └── ...