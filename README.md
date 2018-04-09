# Is It Gross: Chicago

### [Demo: https://darrenangle.com/isitgross-chicago](http://darrenangle.com/isitgross-chicago)

An Angular 5 app that allows users to search failed food inspections.

Leverages the City of Chicago's [food inspection dataset](https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5/data). 

### Prerequisites
To get the app running locally, it helps to have Angular CLI and Node installed (Angular CLI: 1.7.4 Node: 9.4.0):

After installing [Node](https://nodejs.org/en/), run 
```bash
npm install -g @angular/cli
npm install
```
### Development server

To run a development server at http://localhost:4200 use
```bash
ng serve
```

### Application Structure
This app follows a mostly typical Angular app structure, grouped by function into folders under `./src/.` 
SCSS is mostly created at the component level, with global style imports for shared styles.


```
src/
│   index.html
│   styles.scss  
│
└───app/
│   │   app.component.ts
│   │   app.module.ts
│   │
│   └───app-router/
│   │     │   model.ts
│   │
│   └───components/
│   │    └───single-component/
│   │        │   component.html
│   │        │   component.scss
│   │        │   component.ts
│   │           
│   └───models/
│   │   │   model.ts
│   └───services/
│       │   service.ts
│   
│   
└───styles/
    │   global.scss
```

When using Angular CLI to generate functionality, navigate to the corresponding folder first. ex:
```bash
cd ./src/app/components
ng generate component dashboard
```

### SASS Approach
This project follows the BEM (Block, Element, Modifier) methodology for element class names. SASS nesting helps a great deal. 
Basic Idea
```css
.block {} 
.block__element {} 
.block--modifier {} 
.block__element--modifier {} 
```
SASS Example
```scss
.block {
    &__element {
        &--modifier {

        }
    }
    &--modifier {

    } 
} 
```
HTML
```html
<div class="block block--modifier">
    <div class="block__element"></div>
    <div class="block__element block__element--modifer"></div>
</div>
```


For more on BEM, [click here](https://en.bem.info/methodology/quick-start/)

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



