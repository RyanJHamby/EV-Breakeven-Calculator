## How I worked on this project

- I built this app by combining several Figma designs: [Car Shop Figma](<https://www.figma.com/file/wKzgNGmmo7NsIcxkgwjhFK/Car-Shop-Landing-Page-(Community)?type=design&node-id=0-1&mode=design>)
- I triaged tasks on GitHub issues in this project repo [this -> GitHub Issues](https://github.com/RyanJHamby/EV-Breakeven-Calculator/issues)
- I used feature branches and pull requests to review code I was pushing [this -> Pull Requests](https://github.com/RyanJHamby/EV-Breakeven-Calculator/pulls?q=is%3Apr+is%3Aclosed)
- I added unit tests soon after adding a feature and ran the test suite to ensure no backwards incompatible changes [Ex 1: SearchBar tests](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/searchbar/Searchbar.test.tsx) | [Ex 2: Car Snapshot test](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/car/Car.test.tsx)
- I added integration test to test user flows using [React Testing Library]()

## How to navigate this project
- React router controls multi-page navigation [Router setup](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/routes.tsx) | [MainPage](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/pages/MainPage.tsx) | [Calculator Page](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/pages/CalculatorPage.tsx)
- Custom CSS modules for responsive design [Example code](https://github.com/RyanJHamby/EV-Breakeven-Calculator/tree/main/src/style)
- The application fetches vehicle data from the [NREL.gov database](https://developer.nrel.gov/docs/transportation/vehicles-v1/) and performs [filtering](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/sidebar/FilterSidebar.tsx), [sorting](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/sortbar/Sortbar.tsx), [searching](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/searchbar/Searchbar.tsx), and [pagination](https://github.com/RyanJHamby/EV-Breakeven-Calculator/blob/main/src/components/paginationbar/PaginationBar.tsx)

## Why I built the project this way
- Initially I meant to use real-time prices of cars to run computations on data from the Kelly Blue Book API. However, KBB responded to my API access inquiry by informing me that they do not grant access to developers working on personal projects. Thus, I kept a small calculator section but focused more on the UI of fetching, sorting, filtering, searching, and paginating a set of cars from a single API

- I chose TS instead of normal JS because TS supports static typing to check for type-related errors at compile-time, its code is more maintainable via the use of interfaces, and it's commonly used in larger codebases. Although this is a small project suitable for just JS, I found TS worth the extra code

- State management: I used React hooks to manage state in this project mainly since Redux is not typically used for simple parent-child component relationships, see this issue for more info: [Redux GitHub Issue](https://github.com/RyanJHamby/EV-Breakeven-Calculator/issues/16)

- Although I would ideally define my own API and dataset, I wanted to focus mainly on developing frontend React skills in this project. This helped to reduce feature creep and accelerate learning React

- It's extremely important to unit test and integration test in large-scale projects, so I made sure to cover these practices in this project

## If I had more time I would do this
- Add more inclusive accessibility patterns. Although I followed most guidelines I found in [this article](https://uxdesign.cc/accessibility-patterns-all-front-end-developers-should-know-b5d705c42b4c), I came up with an idea for an extension of this project to use Computer Vision to auto-generate Alt Text tags from images fetched from the `url` attribute. This would be a good follow-up project to integrate into this website

- Set up a custom linter for the project, and enforce it to pass in order to build

- Add end-to-end Cypress tests

- Integrate with an API that fetches real-time prices of car models for better data modeling and dynamic API calls

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
