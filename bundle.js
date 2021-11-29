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
    const eyeOffsetX = 100;
    const eyeOffsetY = 100;
    const eyeRadius = 50;
    const mouthWidth = 20;
    const mouthRadius = 180;
    const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(2 * Math.PI / 4).endAngle(2 * Math.PI / 4 * 3);

    class BackgroundCircle extends React__default["default"].Component {
      render() {
        const {
          radius,
          strokeWidth
        } = this.props;
        return /*#__PURE__*/React__default["default"].createElement("circle", {
          r: radius,
          stroke: "black",
          "stroke-width": strokeWidth,
          fill: "yellow"
        });
      }

    }

    const App = () => /*#__PURE__*/React__default["default"].createElement("svg", {
      height: height,
      width: width
    }, /*#__PURE__*/React__default["default"].createElement("g", {
      transform: `translate(${centreX},${centreY})`
    }, /*#__PURE__*/React__default["default"].createElement(BackgroundCircle, {
      radius: (width - strokeWidth) / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius,
      fill: "black"
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius,
      fill: "black"
    }), /*#__PURE__*/React__default["default"].createElement("path", {
      d: mouthArc()
    })));

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM);
