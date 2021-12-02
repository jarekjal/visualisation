(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const radius = 50;
    const height = 500;
    const width = 500;
    const initialMousePosition = {
      x: width / 2,
      y: height / 2
    };

    const App = () => {
      const [mousePositon, setMousePosition] = React.useState(initialMousePosition);
      const handleMouseMove = React.useCallback(event => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY
        });
      }, [setMousePosition]);
      return /*#__PURE__*/React__default["default"].createElement("svg", {
        height: height,
        width: width,
        onMouseMove: handleMouseMove
      }, /*#__PURE__*/React__default["default"].createElement("circle", {
        cx: mousePositon.x,
        cy: mousePositon.y,
        r: radius,
        fill: "yellow",
        stroke: "black",
        strokeWidth: 10
      }));
    };

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM);
