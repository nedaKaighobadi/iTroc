# Backoffice Rewrite in Angular

Angular version: 9.0.3.

Run `npm install` in the project terminal to install all the packages.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project structure

 ### General structure

```
 ├── src               
 │   ├── app                                 # Modules of the app
 │   ├── assets                              # Useful files and images
 │   ├── environments                        # Contains the environment settings and variables       
 │   ├── styles                              # Global styles and variables                  
 │   └── ...                 
 │   │  
 └── ...

```

### Structure of the app directory

 ```
    .                    
    ├── app               
    │   ├── ...                                 # Individual modules 
    │   ├── shared  
    │   │   ├── components                      # Components that are used throughout the project such as the navigation        
    │   │   ├── directives                  
    │   │   ├── interceptors                  
    │   │   ├── models                          # Shared inferfaces and classes
    │   │   ├── pipes 
    │   │   └── services  
    │   │   │   ├── i18n.service.ts            # Service for language profiles
    │   │   │   ├── local-storage.service.ts   # Service for setting and getting items from the local storage 
    │   │   │   ├── ... 
    │   │   │   ├── session-storage.service.ts # Service  for setting and getting items of the current session
    │   │   │   ├── static-data.service.ts     # Service that stores all the static data                 
    │   │   │   └── table-data.service.ts      # Service for manipulating the data in tables such as sorting and filtering                  
    │   │   │         
    │   │   └── shared.module.ts               # Module that declares all the components in the shared directory                
    │   │                                      # and exports all the neccessary modules that are used throughout the app
    │   └──...
    └── ...
```
The **components** directory contains:
- `breadcrumbs` used on every page for displaying the current path 
- `header` : navigation header for logging out of the current sessios
- `modal`: general dialog that is used for confirming actions, such as deleting an item
- `navigation`: the side navigation panel
- `paginator` : custom paginator that 'borrows' the functionality of the Angular Material Paginator


The `table-data.service.ts` implements methods that override some functionalities of the Angular Material Table in order to be able to sort and filter more complex objects.

The `static-data.service.ts` stores the static data used throughout the app in order to avoid hardcoding it in the code.

The `i18n.service.ts` is used for retrieving the profile of the user and setting the active language of the app.


The app uses the `translate-loader.interceptor.ts` to translate text that is predefined in json files:

```
├── src                      
    ├── app                           
    ├── assets                
    │   ├──i18n                          # Files containing text translated in the available languages     
    │   │  ├── de_AT                     # to be used by the translate interceptor
    │   │  │   ├── backoffice.json              
    │   │  │   ├── countries.json  
    │   │  │   └── languages.json
    │   │  │
    │   │  ├── de_CH
    │   │  └── ...
    │   └── images               
    └── ...
    
```