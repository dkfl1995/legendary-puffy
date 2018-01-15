"use strict";
'use esversion: 6';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function user() {
    name = "Vlad";
    return name;
}

//Creating main vendor to render React data... It will be called App... rendering in div#root

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    //one of most used and needed class-method that ables us to get and bring props downstairs the react.component tree
    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }
    //custom method to injected into class... capable to not to use this...


    _createClass(App, [{
        key: "user",
        value: function user() {
            name = "Vlad";
            return name;
        }
        //main and neccesary method in every react component that says to reactjs and dom what they have to render dom inside

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(User, { user: this.user() })
            );
        }
    }]);

    return App;
}(React.Component);

var User = function (_React$Component2) {
    _inherits(User, _React$Component2);

    function User(props) {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));
    }

    _createClass(User, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h5",
                null,
                "Welcome, ",
                this.props.user,
                "!"
            );
        }
    }]);

    return User;
}(React.Component);

var userinfo = JSON.stringify(User);

var xhttp = new XMLHttpRequest();
if (!window.XMLHttpRequest) {
    var _xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.open("POST", "localhost:5050", true);
xhttp.send(userinfo);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map
