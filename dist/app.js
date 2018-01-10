webpackJsonp([0],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(10);
var styled_components_1 = __webpack_require__(17);
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: 3px;\n    padding: 0.25em 1em;\n    margin: 0 1em;\n    background: transparent;\n    border: 2px solid palevioletred;\n    ", "\n"], ["\n    border-radius: 3px;\n    padding: 0.25em 1em;\n    margin: 0 1em;\n    background: transparent;\n    border: 2px solid palevioletred;\n    ",
    "\n"])), function (props) { return props.primary && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background: green;\n        color: white;\n        border-color: black;\n    "], ["\n        background: green;\n        color: white;\n        border-color: black;\n    "]))); });
var Title = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: black;\n    font-weight: bold;\n    font-size: 30px;\n"], ["\n    color: black;\n    font-weight: bold;\n    font-size: 30px;\n"])));
var Example = /** @class */ (function (_super) {
    __extends(Example, _super);
    function Example() {
        return _super.call(this) || this;
    }
    Example.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Title, null, "Mi titulo"),
            React.createElement(Button, null, "Normal Button")));
    };
    return Example;
}(React.Component));
ReactDOM.render(React.createElement(Example, null), document.getElementById("example"));
var templateObject_2, templateObject_1, templateObject_3;


/***/ })

},[18]);
//# sourceMappingURL=app.js.map