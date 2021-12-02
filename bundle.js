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

    const FaceContainer = ({
      children,
      height,
      width,
      centreX,
      centreY
    }) => /*#__PURE__*/React__default["default"].createElement("svg", {
      height: height,
      width: width
    }, /*#__PURE__*/React__default["default"].createElement("g", {
      transform: `translate(${centreX},${centreY})`
    }, children));

    const Face = ({
      height,
      width,
      centreX,
      centreY,
      radius,
      strokeWidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      mouthRadius,
      mouthWidth
    }) => /*#__PURE__*/React__default["default"].createElement(FaceContainer, {
      height: height,
      width: width,
      centreX: centreX,
      centreY: centreY
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
    }));

    const height = 200;
    const width = 200;
    const array = d3.range(16);

    const App = () => array.map(() => /*#__PURE__*/React__default["default"].createElement(Face, {
      height: height,
      width: width,
      centreX: width / 2,
      centreY: height / 2,
      strokeWidth: height / 60,
      eyeOffsetX: height / 6 + Math.random() * 10,
      eyeOffsetY: width / 6 + Math.random() * 10,
      eyeRadius: height / 10 + Math.random() * 10,
      mouthWidth: height / 30 + Math.random() * 10,
      mouthRadius: height / 10 * 3 + Math.random() * 15
    }));

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM, d3);
