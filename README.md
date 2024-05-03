This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local authentication

1. Run `yarn start`

1. Open a new browser tab and open the inspector on the network tab

1. Log into the V2 environment associated with the desired CP1 endpoint (e.g.: bpi-staging.deltarm.com for controle-api-dev.deltarm.com)

1. Click on the `CP1` menu in the sidebar and get the token from the json returned by the `/ada/?ajax=true` request

1. You only have about 30 seconds from the moment the CP1 client is loaded to go to `localhost:3000/login?token=<PASTE TOKEN HERE>`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test --watchAll=false`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
We use react-testing library for assertions. You can download the testing playground extension available for chrome https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano
which allows you to use `screen.logTestingPlaygroundURL()` in your test. It gives an interactive environment for testing assertions and write tests.

### `yarn cypress:open`

Lauches the Cypress testing framework software

### `yarn cypress:run:(e2e|component)`

Launches the Cypress testing framework for E2E or Components
Pass the param --config to specify additional configuration

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Build image docker

build the image before pushing it

```bash
docker build -t ghcr.io/deltarm/cp1-front/[env]:latest -f ci/[env]/Dockerfile .
```

pushing image

```bash
docker push ghcr.io/deltarm/cp1-front/[env]:latest
```

### Deployment

The front-end part is totally separate from the back-end part and run by itself on a docker container. The docker container is launch by the CI on GitLab and builds all the necessary assets for every environments.

If you need to redeploy the front-end on the server, just run the previous pipeline on GitLab, it will trigger the .gitlab-ci.yml.

What it does : Installings dependencies and buildings assets, then deploy.

The SSL certificates are physically on the server. The container is configure to get them on infrastructure for production and preproduction.

### Maintenance mode

The application is configurable in production to enable a maintenance mode. To activate it, check out the feat/maintenance branch from master branch.

Then, change the constant variable `maintenanceMode` to `true` in index.tsx. You can configure which user can still see the app by add their user id in the white list configuration `adminUsers`.

This is a temporary feature, we should have the role admin enables in app and the toggle of maintenance mode should be in a environment configuration.
