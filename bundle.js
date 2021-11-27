(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  const App = () => /*#__PURE__*/React__default["default"].createElement("h1", null, "Hello JSX");

  function MojKomponent() {
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("dialog", {
      open: true
    }, /*#__PURE__*/React__default["default"].createElement("h1", null, "Tytu\u0142"), /*#__PURE__*/React__default["default"].createElement("p", null, "Tre\u015B\u0107")));
  }

  const rootElement = document.getElementById('root');
  ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);
  ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(MojKomponent, null), document.getElementById('root2'));

})(React, ReactDOM);
