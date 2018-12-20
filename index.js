(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react-machinery"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react-machinery"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.reactMachinery);
    global.index = mod.exports;
  }
})(this, function (_reactMachinery) {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var states = [{
    name: 'wait-for-input',
    render: function render(_ref) {
      var message = _ref.message;
      return React.createElement("button", null, message);
    }
  }];

  var HardChoiceButton =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HardChoiceButton, _React$Component);

    function HardChoiceButton(props) {
      var _this;

      _classCallCheck(this, HardChoiceButton);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HardChoiceButton).call(this, props));
      _this.state = {
        timer: props.timer,
        currentState: 'wait-for-input'
      };
      return _this;
    }

    _createClass(HardChoiceButton, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(_reactMachinery.StateMachine, {
          states: states,
          getCurrentState: function getCurrentState() {
            return _this2.state.currentState;
          },
          setNewState: function setNewState(newState) {
            return _this2.setState(function () {
              return {
                currentState: newState
              };
            });
          },
          data: {
            message: this.props.message,
            timer: this.state.timer,
            action: this.props.action,
            decreaseTimeLeft: function decreaseTimeLeft() {
              _this2.setState(function () {
                return {
                  timer: _this2.state.timer - 1
                };
              });
            },
            resetTimer: function resetTimer() {
              return _this2.setState(function () {
                return {
                  timer: _this2.props.timer
                };
              });
            }
          }
        });
      }
    }]);

    return HardChoiceButton;
  }(React.Component);

  ReactDOM.render(React.createElement(HardChoiceButton, null), document.getElementById('root'));
});
