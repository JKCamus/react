"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerControl = exports.BannerRight = exports.BannerLeft = exports.BannerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  .btn {\n    position: absolute;\n    width: 37px;\n    height: 63px;\n    background-image: url(", ");\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, .1);\n    }\n  }\n\n  .left {\n    left: -68px;\n    background-position: 0 -360px;\n  }\n\n  .right {\n    right: -68px;\n    background-position: 0 -508px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 254px;\n  height: 270px;\n  background: url(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 730px;\n\n  .banner-item {\n    overflow: hidden;\n    height: 270px;\n    .image {\n      width: 100%;\n      /* \n      jia */\n      height:100%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n/* \u9AD8\u5E73\u65AF\u6A21\u7CCA\u56FE\u7247\uFF0C\u5927\u80CC\u666F */\n/* bgImage\u6765\u81EA\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u7684\u7236\u5143\u7D20\uFF0C\u4F20\u503C */\n/* center/6000px => position/size  \u4E0D\u7ED9\u8BBE\u5B9A\u5927\u5C0F\uFF0C\u4E3A\u5E73\u94FA */\n  background: url(", ") center center/6000px;\n\n  .banner {\n    height: 270px;\n    background-color: red;\n\n    display: flex;\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//外层
var BannerWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.bgImage;
}); // 中间层


exports.BannerWrapper = BannerWrapper;

var BannerLeft = _styledComponents["default"].div(_templateObject2());

exports.BannerLeft = BannerLeft;

var BannerRight = _styledComponents["default"].a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})(_templateObject3(), require("@/assets/img/download.png"));

exports.BannerRight = BannerRight;

var BannerControl = _styledComponents["default"].div(_templateObject4(), require("@/assets/img/banner_sprite.png"));

exports.BannerControl = BannerControl;