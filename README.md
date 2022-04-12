# README

Please **feel free to open and read this straight away**. Take your time to think about it and plan. This can be some time right before you start coding, or even a day or two of thinking “in the background” - it’s up to you.

# Introduction

## Objectives

The objective of this take-home exercise is:

- To let you show us how you structure your code into independent, reusable pieces, and also think about each piece in isolation.
- To set up the ground for a live pair-programming exercise, including any follow up questions you might have for the product & design team to help tackle the problem below

## How to come across well

We value code that is readable, and conforms to good principles such as KISS/DRY/SOLID. We believe strongly in automated testing and we’d like to see evidence that you do too. We deliver our features in small incremental frequent releases rather than big-bang approach, and we’d like to see how you’d break the problem down into smaller deliverables.

Where necessary, we are interested in seeing how you:

- structure containers and components
- test a complex component’s logic (such as the navigation tree)
- use modern Javascript syntax and React hooks
- use CSS in JS
- manage internal and external state

## How will the interview work

This assessment is part of the technical evaluation, which consists of: - Home exercise: Individual take-home assignment (you are doing this now) - Pair exercise: Solution provided discussion and pair-programming exercise (you’ll drive a pair-programming session working on a more advanced feature) - Technical interview: Architectural questions (we’ll discuss latest solutions and standards)

## How to approach the assignment

- Please read the instructions, take some time to plan how you’ll tackle this task
- You will have received this test as a .zip file – feel free to initialise a new private Github repository with this starter, and add us as collaborators when you’re ready for review. For the list of Github users to add, please ask your hiring manager. Alternatively, you can zip up your solution and send it back to us once you’re ready.
- Once you actually sit down to write code, please do not spend more than **2 hours of work**. Try to leave the code in good state - imagine you are going on a holiday and you need to hand it over to a colleague. Whilst we won’t time you, we *really* mean you shouldn’t spend an entire day coding this (thinking about it etc. is fine)
- We know the entire MVP is too much work for 2 hours. Part of the evaluation of this exercise is how you split a bigger deliverable into smaller tasks.
- Create a PR from the branch to master *within your private fork* - this is super important. **Please do not raise PRs into our repo**. Send us a link to the PR in your private fork.

If at any point of this process you have any questions, please feel free to ask us via email.

# The Assignment

## Problem statement

Let’s imagine we’ve decided to write a new layout for our Partner Home application. We’re starting with an MVP that will:

- show a dropdown menu in the header, allowing the user to access Account Settings, etc
- show a multi tier navigation menu on the left of the page. The menu itself can be expanded & collapsed per the designs
- populate the navigation by pulling in data from an API – an example JSON response is provided for you

You need to pick at minimum two of these features for the take-home part of the exercise. The designs for the concepts are included in the [_designs/](_designs/) directory.

## Assumptions and important notes:

- You should go with the simplest solution that fulfills the MVP feature(s). We will evaluate code quality, readability, test coverage and correctness of implemented features. Correctness in a simple implementation beats unfinished complex one.

## External dependencies

At Wayfair, we use our own design system. At this stage we are unable to share this outside of the organisation, so for now we will leave it to you to decide whether to bring in a third party system for the purpose of the test.

Please note that this means we don’t currently provide the icons shown in the designs. If you choose to pull in an external library, feel free to use icons from there. Equally a simple placeholder will also be sufficient.

## Getting started

To help you get up & running, we’ve included a fresh setup of create-react-app. In case you’ve not used it before, the docs can be found in the [README](CREATE-REACT-APP-README.md), and on their [documentation site](https://create-react-app.dev/).

You can start the app with `npm start` or `yarn start`.

## Navigation data

We have included an example navigation data JSON response in the data directory in this repo for you to pull in/mock how you wish. The response is also available to work against on a mock endpoint, with an artificial 1 second delay: https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms

# **# Update**

---

### Folder Structure
├─ src\
│ ├─ assets                                   <b>Assets folder used manage static file like Images & Plugins </b>\
│ │ └─ images                              \
│ │   ├─ logo.svg\
│ │   └─ wayfair.svg\
│ ├─ common                              <b>Common and reusable elements</b>\
│ │ ├─ components                     <b>Common Components like Dropdown,Navbar,Side Navbar, etc..</b>\
│ │ │ ├─ Dropdown                                 \
│ │ │ │ ├─ Dropdown.js\
│ │ │ │ ├─ DropdownButton.js\
│ │ │ │ └─ DropdownList.js\
│ │ │ ├─ ErrorBoundary\
│ │ │ │ └─ ErrorBoundary.js\
│ │ │ ├─ Icon\
│ │ │ │ ├─ Icon.js\
│ │ │ │ └─ ToggleIcon.js\
│ │ │ ├─ Navbar\
│ │ │ │ ├─ Navbar.js\
│ │ │ │ └─ NavbarBrand.js\
│ │ │ ├─ SideNavbar\
│ │ │ │ ├─ **tests**\
│ │ │ │ │ ├─ mock.json\
│ │ │ │ │ └─ SideNavbar.test.js\
│ │ │ │ ├─ List.js\
│ │ │ │ ├─ MenuLink.js\
│ │ │ │ ├─ SideNavbar.css\
│ │ │ │ ├─ SideNavbar.js\
│ │ │ │ └─ utils.js\
│ │ │ └─ index.js\
│ │ ├─ context                             <b>Common Context like User Context, Theme Context, etc.</b>\
│ │ │ ├─ index.js\
│ │ │ └─ UserContext.js\
│ │ ├─ hooks                               <b>Common hooks used in our application</b>\
│ │ │ ├─ index.js\
│ │ │ ├─ useDidMountEffects.js\
│ │ │ └─ useOnClickOutSide.js\
│ │ ├─ layouts                              <b>Common styled component, Layouts</b>\
│ │ │ ├─ loader\
│ │ │ │ ├─ layout.js\
│ │ │ │ └─ style.css\
│ │ │ ├─ shape\
│ │ │ │ ├─ Circle.js\
│ │ │ │ └─ Rectangle.js\
│ │ │ └─ index.js\
│ │ ├─ translations/                     <b>Files used for application translation</b>\
│ │ └─ utils                                  <b>Common util function like date utils, currency utils, etc. </b>\
│ │   ├─ Error\
│ │   │ └─ Error.js\
│ │   ├─ http\
│ │   │ └─ http.js\
│ │   ├─ icons\
│ │   │ └─ iconlist.js\
│ │   ├─ logger\
│ │   │ └─ logger.js\
│ │   └─ index.js\
│ ├─ modules                             <b>Module folder contains all the modules like User, Dashboard, etc.</b>\
│ │ ├─ App                                 <b>App Module Files </b>\
│ │ │ ├─ Component                 <b>App module all the components</b>\
│ │ │ │ ├─ index.js    \
│ │ │ │ └─ Landing.js\
│ │ │ ├─ Containers                   <b>App module all the containers</b>\
│ │ │ │ ├─ index.js\
│ │ │ │ ├─ MainContainer.js\
│ │ │ │ ├─ NavBarContainer.js\
│ │ │ │ └─ SideNavContainer.js\
│ │ │ ├─ action.js                        <b>App Module redux action file</b>\
│ │ │ ├─ index.js                         <b>App Module main file</b>\
│ │ │ ├─ reducer.js                     <b>App Module redux reducer file </b>\
│ │ │ └─ style.css                        <b>App Module common CSS file</b>\
│ │ ├─ Reporting                         <b>Reporting Module files</b>\
│ │ │ ├─ Component                  <b>Reporting Module Component files</b>\
│ │ │ │ └─ index.js\
│ │ │ ├─ Containers                     <b>Reporting Module Container Files</b>\
│ │ │ │ └─ index.js\
│ │ │ ├─ action.js                         <b>Reporting Module  action File</b>\
│ │ │ ├─ index.js                          <b>Reporting Module  main file</b>\
│ │ │ └─ reducer.js                       <b>Reporting Module reducer file</b>\
│ │ ├─ index.js                                    \
│ │ └─ routes.js                            <b>Common Router file for all the modules </b>\
│ ├─ services/                               <b>Please add all the service in the service factory </b>\
│ ├─ store                                     <b>Redux Store related files</b>\
│ │ ├─ helper.js                             <b>Redux helper files</b>\
│ │ ├─ index.js\
│ │ ├─ reducerManager.js             <b>Redux dynamic reducer injection file</b>\
│ │ └─ store.js                                <b>Config store file</b>\
│ ├─ App.css                                  <b>CSS file for all the application </b>\
│ ├─ App.js                                    <b>App bootstrap file for this application</b>\
│ ├─ index.css                                <b>Global CSS</b>\
│ ├─ index.js                                   <b>React Entry file</b>\
│ ├─ reportWebVitals.js                 \
│ ├─ setupTests.js    \
│ └─ style.js                                     <b>Common file to import all third party CSS</b>\
├─ jsconfig.json                               <b>File to support absolute import path</b>\
├─ package.json                              <b>dependencies & configuration</b>\
├─ [README.md](http://readme.md/) \
└─ server.js                                      <b>simple Node.js static file server to serve data</b>\

---

### Dependencies

- Additional dependencies added
    
    bootstrap                 - used for design layout 
    
    react-router-dom    - used for routing option in our application
    
    axios                        - used to communicate backend API
    
    prop-types              - used to define prop type
    
    redux                       - used for store 
    
    react-redux             - used to connect redux with react application
    
    immutable              - used to create immutable object and set & get data with simple API
    
     redux-immutable   - used to connect redux with immutable
    
    redux-thunk            - to add additional middleware in our application
    
    concurrently            - used to start both UI & backend code in single command 
    

---

### Scripts

To start in dev mode & start both UI and Backend

```jsx
npm install
npm start
```

To start UI separately

```jsx
npm run ui 
```

To start Backend separately

```jsx
npm run server
```

To run test case 

```jsx
npm run test
```

### Changes

- Added bootstrap for styling
- Created base folder structure for the application
- Added redux to mange client side store
- Added react-router-dom to manage routing
- Added axios to pull data from the API
- Added error boundary to cache the error
- Created common Components, Layouts, Hooks, Utils, Context  Ref: src/Common
- Created testcase only for side navbar
- Added common log utils to collect all the logs. In future we can call some API timely to send logs to server
- Redux store was implemented in a way like. we can inject the reducer dynamically.  it will help us to improve performance using code split.

### Note

- Due to lack of time. I am not able to write test cases for all the component. so I only add test case for side nav bar component.
- Few enhancements i like to add to this project. i listed it below.

.  

### Future Enhancement

- Introduce Webpack & Babel to build & transpiling more flexibly
- Introduce ****i18next**** to support localization
- Introduce Webpack modular federation to support micro frontend
- Import modules dynamically to support lazy load and reduce initial load size
- Implement Memoization in function and components where ever needed
- Introduce environment based configuration.
- To explore server side rendering, i would like to implement Next.js with this application.
-
