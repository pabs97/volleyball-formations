This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## TODO
add titles/instructions to buttons
refactor, use index files
consolodate verbs in file names
add arrows
change title, M to L for libero
add tooltips
add ball on other side
mobile friendly
add icon

Major Features
1. Coed 6 rotation with female setter (setter doesn't block)
2. 5s with middle setter https://www.youtube.com/watch?v=KR7rRiE3WA0
3. Side bar for controls

Minor Features
1. tool tip with player descriptions
2. cross hairs showing alignment
4. other team setter and ball animation
5. input to set animation speed
9. hot reloading
https://redux.js.org/recipes/configuring-your-store/
10. Unit tests

11. Use typescript!
12. Draw shapes of how blockers cover


### Testing
#### Youtube guy
https://www.youtube.com/watch?v=3e1GHCA3GP0

This guy describes using


@testing-library/react
react-test-renderer
jest-dom

this has a render funciton similar to React
returns { getByText, getByTextId }

import 'jest-dom/extend-expect';
expect.toHaveTextContent

#### React Testing Doc
https://reactjs.org/docs/testing.html

they use
@testing-library/react
jest-dom