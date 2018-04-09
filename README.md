# Is It Gross: Chicago

### [Demo: http://darrenangle.com/isitgross-chicago](http://darrenangle.com/isitgross-chicago)

An Angular 5 app that allows users to search failed food inspections.

Leverages the City of Chicago's [food inspection dataset](https://data.cityofchicago.org/Health-Human-Services/Food-Inspections/4ijn-s7e5/data). 

![alt text](https://github.com/darrenangle/isitgross-chicago/raw/develop/src/assets/screenshot.png "Is It Gross: Chicago Screenshot")

--

## Prerequisites
To get the app running locally, it helps to have Angular CLI and Node installed (Angular CLI: 1.7.4 Node: 9.4.0):

After installing [Node](https://nodejs.org/en/), run 
```bash
npm install -g @angular/cli
npm install
```
## Development server

To run a development server at http://localhost:4200 use
```bash
ng serve
```

---

## Application Structure
This app follows a mostly typical Angular app structure, grouped by function into folders under `./src/` 
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

---

## Style Methodoloy
This project follows the BEM (Block, Element, Modifier) methodology for element class names. SASS nesting helps a great deal. 

Basic Idea:
```css
.block {} 
.block__element {} 
.block--modifier {} 
.block__element--modifier {} 
```
SASS Nesting Example:
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
HTML:
```html
<div class="block block--modifier">
    <div class="block__element"></div>
    <div class="block__element block__element--modifer"></div>
</div>
```

For more on BEM, [click here.](https://en.bem.info/methodology/quick-start/)

---

## Git, Gitflow, and Branching

This repo utilizes the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), a 'strict branching model' for branched feature development and production releases at scale.

Rules:

1. New features are branched from `develop` and follow the naming convention `feature/feature-name`
2. Finished feature branches are merged back into `develop`
3. After several features are finished and merged into `develop`, a release is branched from `develop`, following the naming convention `release/1.0.0`
4. Releases are merged into `master` for production deployment, and release patching
5. Hotfixes for production bugs are branched from `master` and merged immediately

[Read more on Gitflow here.](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)


---

# Services

This app utilizes 3 Angular services for functionality, and it's worth taking time to understand each.

## Logging Service

This is, at present, a very fancy `console.log()`. It is a service written to be extended easily via a third-party or remote logger.
Inject this service into components or other services for access to `log.logActivity()` and `log.logError()`. 

## Query Building Service

This service was written to manage and narrow the complexity involved with traversing the City of Chicago's inspection data.Queries to this dataset are written in Socrata Query Language [(SOQL)](https://dev.socrata.com/docs/queries/), and need to be constructed on the fly in response to user interaction.

The Query Building Services utilies the plain text search `$q=` for text input, and the `$where` clause to construct queries based on filters.

This service can be injected into components and other services to retrieve or modify the current query.

## Inspection Data Service

This services makes calls to the City of Chicago Data API endpoint and returns results. 

Service functions include: 
1. Retreiving multiple inspections using a query built by the Query Building Service
2. Retrieving a single inspection by `inspection_id`

---

### Testing
Most of the important test coverage in this build are the tests of the Query Builder Service, and the Inspection Data service. Critical functions are tested against real data.

Additionally there is currently basic 'it should create' test coverage for all UI and Services.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

### Deployment
Currently using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) for deployment to Github Pages



