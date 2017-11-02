var React = require("react");

var Main = props => {
  return (
    // JSX can only return ONE root element
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
