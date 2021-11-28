(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const height = 600;
    const width = 600;
    const centreX = width / 2;
    const centreY = height / 2;
    const strokeWidth = 10;
    const eyeOffset = 100;
    const eyeRadius = 50;

    const App = () => /*#__PURE__*/React__default["default"].createElement("svg", {
      height: height,
      width: width
    }, /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: centreX,
      cy: centreY,
      r: (width - strokeWidth) / 2,
      stroke: "black",
      "stroke-width": strokeWidth,
      fill: "yellow"
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: centreX - eyeOffset,
      cy: centreY - eyeOffset,
      r: eyeRadius,
      fill: "black"
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: centreX + eyeOffset,
      cy: centreY - eyeOffset,
      r: eyeRadius,
      fill: "black"
    }));

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM);
