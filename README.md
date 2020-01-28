This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

# WORK-IN-PROGRESS - This project is in development

## Marvel Project Details

### Folder Structure

Components folder holds all components of the project, 'layout' folder holds
dumb components, that are divided in 'general' components that can be used
through out all the project, and folders with 'views' name such as heroes, for
example, that holds only dumb components that are used in that specific 'view'.
The folder 'smart' holds, layout smart components, small components that
contains logic. The 'smart' folder repeats the 'layout' folder structure.

### CSS

Segregated per view and general, general sets styles for components used in
multiple views.

### REDUX

All files related to redux are found inside 'redux' folder, each store is in its
own folder. In this case only one store.

### Why this project though ?

The idea behind this project is to improve my knowledge. And playing with the
Marvel API brings all the challenges i want to face and need to improve on,
consuming API, UX/UI, improve my workflow with React and Redux. Here i tried to
improve the general organization of the project such as folder structure, better
componentization, improve props use, avoiding prop drilling, and better
documentation, this is the first project which i tried to adopt CSS BEM Pattern,
and the first project which i tried to do transition animations to give a more
streamline experience to the user.

Although the Marvel API it is a gigantic source of data, i didnt tried to make
much complex operations with it, baby steps i guess, and in the end parsing JSON
is more a time consuming task than a coding experience task. So didnt want that
to get in the way of learning redux logic and the other habilites which i want
to improve.

### Legal Disclaimer

All the data available in this project comes from Marvel API, the design and
code of this app were made by me (Lucas Castelo). The project respect all the
rules for the use of such data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here:
https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here:
https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here:
https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here:
https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here:
https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
