// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need to be explicitly required since we can't assume react is global
var React = require("react");
var ReactDOM = require("react-dom");

// this is new ES6 destructuring syntax
// to create variables from the corresponding properties within react-router
// aka could do: var Route = require('react-router').Route;
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var Main = require("Main");

// load Foundation
// require doesn't know how to load in a css files
// which is why we use the css! loader module. css-loader in package.json
// the style! loader injects it into the html. style-loader in package.json
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation(); // this starts foundation

// load app css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    {/* the "path" prop tells it where the root of the site is
        and the "component"" prop tells it which compenent to show when at the root */}
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById("app")
);
