This is a WIP React App used to teach volleyball 5-1 rotations. It is hosted using Firebase here
https://volleyball-formations.web.app/

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Usage / State Diagram
For more detail see state_diagram.jpg

* 1 - Base Rotation - base rotation positions
    * (Optional) Choose one of the six rotations
* 2 - Serve - serve (our team serving) positions
* 3 - Receive - receive (other team serving) positions
* 4 - Base Defense - other team is preparing to attack
    * 5 - Left Defense
    * 6 - Middle Defense
    * 7 - Right Defense
* 8 - Prepare Attack
* 9 - Attack

### Deploying to Firebase
1. `npm i -g firebase-tools`
2. `firebase login`
3. `npm run build`
4. `firebase deploy`

### TODO

Major Features
- [ ] Coed 6 rotation with female setter (setter doesn't block)
- [ ] 5s with middle setter https://www.youtube.com/watch?v=KR7rRiE3WA0
- [ ] Side bar for controls

Minor Features
- [x] Change middles (M) to libero (L) when they are in the back row
- [x] show attack arrows in stage 8
- [x] better button layout for mobile
- [ ] tool tip with player descriptions
- [ ] cross hairs showing alignment
- [ ] other team setter and ball animation
- [ ] input to set animation speed
- [ ] hot reloading
https://redux.js.org/recipes/configuring-your-store/
- [ ] Unit tests
- [ ] typescript
- [ ] Draw shapes of how blockers cover

