"use strict";
'use esversion: 6';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newbye = {};
//Creating main vendor to render React data... It will be called App... rendering in div#root

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    //one of most used and needed class-method that ables us to get and bring props downstairs the react.component tree
    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { clicked: false };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    //custom method to injected into class... capable to not to use this...


    _createClass(App, [{
        key: "handleClick",
        value: function handleClick() {
            this.setstate({ clicked: true });
        }
        //main and neccesary method in every react component that says to reactjs and dom what they have to render dom inside

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "row" },
                this.state.clicked ? React.createElement(NewUser, null) : null,
                React.createElement(
                    "div",
                    { "class": "" },
                    React.createElement(
                        "div",
                        { className: "button", onClick: this.handleClick },
                        "Sign in"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "" },
                    React.createElement(
                        "div",
                        { className: "button" },
                        "Log in"
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var NewUser = function (_React$Component2) {
    _inherits(NewUser, _React$Component2);

    function NewUser(props) {
        _classCallCheck(this, NewUser);

        var _this2 = _possibleConstructorReturn(this, (NewUser.__proto__ || Object.getPrototypeOf(NewUser)).call(this, props));

        _this2.state = { name: '', pass: '' };
        _this2.onChange = _this2.onChange.bind(_this2);
        _this2.onSubmit = _this2.onSubmit.bind(_this2);
        return _this2;
    }

    _createClass(NewUser, [{
        key: "handleNameChange",
        value: function handleNameChange() {
            this.setstate({ name: event.target.name });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "row dialog" },
                React.createElement(
                    "div",
                    { "class": "small-12 column" },
                    "Register a new account"
                ),
                React.createElement(
                    "div",
                    { "class": "small-6 column" },
                    "Type a login (it can be any free name with at least 4 characters): ",
                    React.createElement("input", { name: "", onChange: this.handleNameChange, placeholder: "michael" })
                ),
                React.createElement(
                    "div",
                    { "class": "small-6 column" },
                    "And type a password (it have to be at least 8 char. and should contain at least any one letter and digit)",
                    React.createElement("input", { pass: "", onChange: this.onChange })
                )
            );
        }
    }]);

    return NewUser;
}(React.Component);

var userinfo = JSON.stringify(newbye);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

function sender() {
    var xhttp = new XMLHttpRequest();
    if (!window.XMLHttpRequest) {
        var _xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("POST", "localhost:5050", true);
    xhttp.send(userinfo);
}
//# sourceMappingURL=app.js.map
