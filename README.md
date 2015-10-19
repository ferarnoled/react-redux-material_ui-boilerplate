# react-redux-material_ui-boilerplate
A boilerplate for React + Redux + Material UI + ES6 syntax applications. This boilerplate includes following tools and frameworks.

* [React](https://facebook.github.io/react/)
* [Redux](http://rackt.org/redux/index.html)
* [Material UI](http://material-ui.com/#/)
* [webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)


# Usage
## Installation
```
$ git clone https://github.com/takanabe/react-redux-material_ui-boilerplate.git
$ npm install
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since webpack cli command is registerd in `package.json` in this project, just type following command to run webpack-dev-server.

```
$ npm start
```

Becareful! the webpack-dev-server rebuild files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section(Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `static` directory, type the following command.

```
$ npm run build
```

## About version of React
As of 16 October 2015, Materila UI does not support React v0.14.0 and react-redux v4.0. Because of that reason this boilerplate use old React v0.13.3 and react-redux v3.1.0. It will be updated if Material UI support latest version of React.

