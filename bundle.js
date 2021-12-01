(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const BackgroundCircle = ({
      radius,
      strokeWidth
    }) => /*#__PURE__*/React__default["default"].createElement("circle", {
      r: radius,
      stroke: "black",
      "stroke-width": strokeWidth,
      fill: "yellow"
    });

    const Eyes = ({
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius
    }) => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius,
      fill: "black"
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius,
      fill: "black"
    }));

    const Mouth = ({
      mouthRadius,
      mouthWidth
    }) => {
      const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(2 * Math.PI / 4).endAngle(2 * Math.PI / 4 * 3);
      return /*#__PURE__*/React__default["default"].createElement("path", {
        d: mouthArc()
      });
    };

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

    const App = () => /*#__PURE__*/React__default["default"].createElement("svg", {
      height: height,
      width: width
    }, /*#__PURE__*/React__default["default"].createElement("g", {
      transform: `translate(${centreX},${centreY})`
    }, /*#__PURE__*/React__default["default"].createElement(BackgroundCircle, {
      radius: (width - strokeWidth) / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React__default["default"].createElement(Eyes, {
      eyeOffsetX: eyeOffsetX,
      eyeOffsetY: eyeOffsetY,
      eyeRadius: eyeRadius
    }), /*#__PURE__*/React__default["default"].createElement(Mouth, {
      mouthRadius: mouthRadius,
      mouthWidth: mouthWidth
    })));

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM, d3);
