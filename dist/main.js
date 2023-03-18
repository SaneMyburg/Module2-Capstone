/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/food-icon.png */ "./assets/food-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  border: 0;\r\n  margin: -8px 0 0 0;\r\n  font-family: lato, sans-serif;\r\n}\r\n\r\n:root {\r\n  --gold: #ff924e;\r\n  --light-shadow: #fff;\r\n  --dark-shadow: #9b8358;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n}\r\n\r\nheader {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  border: 2px solid white;\r\n}\r\n\r\n.nav-bar {\r\n  background-color: #2b1d1c;\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-1 {\r\n  height: 5rem;\r\n  display: flex;\r\n  width: 55%;\r\n}\r\n\r\n.icon {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  width: 13%;\r\n  margin-left: 20%;\r\n}\r\n\r\n/* .name {\r\n  color: white;\r\n  margin-top: 20px;\r\n  font-family: \"Calligraffitti\", cursive;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  position: absolute;\r\n  text-shadow: -15px 5px 20px #ced0d3;\r\n  top: 5%;\r\n  left: 40%;\r\n  transform: translate(-50%, -50%);\r\n  letter-spacing: 0.02em;\r\n  text-align: center;\r\n  color: #f9f1cc;\r\n  text-shadow: 1px 1px 0px #ffb650, 3px 3px 0px #ffd662, 5px 5px 0px #ff80bf,\r\n    8px 8px 0px #ef5097, 10px 10px 0px #6868ac, 12px 12px 12px #90b1e0;\r\n} */\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-areas: \"overlap\";\r\n  place-content: center;\r\n  text-transform: uppercase;\r\n  text-align: left;\r\n}\r\n\r\n.wrapper > div {\r\n  background-clip: padding-box;\r\n  -webkit-background-clip: text;\r\n  color: #363833;\r\n  font-family: \"Exo\", sans-serif;\r\n  font-weight: 800;\r\n  font-size: calc(2rem + ((1vw - 7.68px) * 1.2));\r\n  grid-area: overlap;\r\n  letter-spacing: 2px;\r\n  -webkit-text-stroke: 4px transparent;\r\n}\r\n\r\ndiv.bg {\r\n  background-image:\r\n    repeating-linear-gradient(\r\n      105deg,\r\n      var(--gold) 30%,\r\n      var(--dark-shadow) 5%,\r\n      var(--gold) 12%\r\n    );\r\n  color: transparent;\r\n  filter: drop-shadow(5px 15px 15px black);\r\n  transform: scaleY(1.05);\r\n  transform-origin: top;\r\n}\r\n\r\ndiv.fg {\r\n  background-image:\r\n    repeating-linear-gradient(\r\n      5deg,\r\n      var(--gold) 0%,\r\n      var(--light-shadow) 23%,\r\n      var(--gold) 31%\r\n    );\r\n  color: #1e0105;\r\n  transform: scale(1);\r\n}\r\n\r\n.item-2 {\r\n  width: 25%;\r\n  margin-top: 5px;\r\n}\r\n\r\n.item-2-list {\r\n  list-style: none;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: left;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.item-2 a,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.foods-container {\r\n  background-color: #6b2a24;\r\n  padding: 2%;\r\n}\r\n\r\n.all-foods {\r\n  height: 75vh;\r\n  margin: 2rem;\r\n  border: 2px solid white;\r\n}\r\n\r\n#all-foods {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 4rem;\r\n  height: 100%;\r\n}\r\n\r\n.container-food {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  backdrop-filter: blur(7px);\r\n  border-radius: 1rem;\r\n  width: 15.6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  min-height: 25rem;\r\n  -webkit-box-shadow: 1px 1px 2px 2px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\r\n  -moz-box-shadow: 1px 1px 2px 2px #ccc; /* Firefox 3.5 - 3.6 */\r\n  box-shadow: 2px 0 3px 3px #2c0000;\r\n}\r\n\r\n.container-food:hover {\r\n  border: 2px solid white;\r\n  transition: ease-in-out;\r\n}\r\n\r\n.container-food > img {\r\n  border-radius: 1rem 1rem 0 0;\r\n  height: auto;\r\n\r\n  /* height: 16rem; */\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.container-food > .name-like {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  flex-grow: 1;\r\n}\r\n\r\n.name-like > .name-food {\r\n  color: #fff;\r\n  width: 70%;\r\n  text-align: left;\r\n  line-height: 1.2em;\r\n  font-family: \"Sofia\", sans-serif;\r\n  text-shadow: 2px 2px 2px #ab0606;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.give-likes {\r\n  cursor: pointer;\r\n}\r\n\r\n.give-likes > i.fa-heart {\r\n  color: rgb(255, 255, 255);\r\n  transition: color 300ms ease;\r\n}\r\n\r\n.give-likes:hover > i.fa-heart {\r\n  color: red;\r\n}\r\n\r\n.give-likes > .count-likes {\r\n  color: #fcfcfc;\r\n  font-size: 1rem;\r\n  margin-top: 7px;\r\n}\r\n\r\n.btn-comment {\r\n  width: 100%;\r\n  padding: 1rem 0.75rem;\r\n  font-size: 1.1rem;\r\n  border-radius: 0 0 1rem 1rem;\r\n  transition: all 0.4s ease;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.btn-comment:focus {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.btn-comment:hover {\r\n  background-color: rgb(69, 7, 7);\r\n  color: white;\r\n  border: 2px solid white;\r\n}\r\n\r\n.container-food:hover > img {\r\n  transform: scale(1.15);\r\n  display: block;\r\n}\r\n\r\n#about {\r\n  background-color: #111;\r\n  padding: 7rem 2rem;\r\n  color: #eee;\r\n}\r\n\r\n#comment-popup {\r\n  inset: 0;\r\n  padding: 1.3rem;\r\n  max-height: 100vh;\r\n  display: none;\r\n  z-index: 1;\r\n  position: fixed;\r\n  background-color: rgba(72, 5, 5, 0.867);\r\n}\r\n\r\n#comment-popup.show {\r\n  display: block;\r\n}\r\n\r\n#comment-popup .comment-popup-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  background-color: #ddd;\r\n  color: #333;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n  padding: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.25em 0.5rem #0007;\r\n  max-width: 950px;\r\n  margin: auto;\r\n}\r\n\r\n#popup-btn-close {\r\n  position: fixed;\r\n  right: 1.5rem;\r\n  top: 1.5rem;\r\n  font-size: 3rem;\r\n  line-height: 2rem;\r\n  z-index: 5;\r\n  padding: 0.5rem;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n#comment-popup .info-section,\r\n#comment-popup .comments-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#comment-popup #food-image {\r\n  width: 45%;\r\n  max-height: 20rem;\r\n  border-radius: 0.6em;\r\n  box-shadow:\r\n    0 0 5px 3px #1e0105,\r\n    0 0 10px 4px #7c7e3c,\r\n    0 0 15px 7px #650000,\r\n    0 0 20px 15px #2e0101;\r\n}\r\n\r\n#comment-popup .comments-section {\r\n  background: #ccc;\r\n  padding: 1rem;\r\n  border-radius: 0.75rem;\r\n  color: #333;\r\n}\r\n\r\n#comments-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.food-count-icon {\r\n  margin: 0.6rem 0.3rem;\r\n  padding: 0.2rem;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  color: #000c;\r\n  width: 1.5rem;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n#comments {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n  padding-left: 0;\r\n}\r\n\r\n#comments li {\r\n  background-color: #fff5;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0 1.5rem 1.5rem 1.5rem;\r\n  box-shadow: 0 0.1rem 0.2rem #0003;\r\n  margin-right: 1rem;\r\n}\r\n\r\n#comments li:nth-child(even) {\r\n  border-radius: 1.5rem 0 1.5rem 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 0;\r\n}\r\n\r\n#comments li .comment-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#comments li .comment-author {\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comments li .comment-date {\r\n  color: #999;\r\n  font-size: 0.75rem;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comments li .comment-message {\r\n  font-size: 0.75rem;\r\n  margin-left: 0;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n#comment-form input,\r\n#comment-form textarea {\r\n  padding: 0.5rem;\r\n  border-radius: 0.75rem;\r\n  width: 100%;\r\n  background: #ddd;\r\n  border: 1px solid #0003;\r\n  color: #333;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#button {\r\n  border-radius: 0.75rem;\r\n  padding: 0.75rem 1.5rem;\r\n  box-shadow: 0.25em 0.25em 0.75em #0003;\r\n  background: #611717;\r\n  color: #eee;\r\n  font-weight: bold;\r\n}\r\n\r\n#recipes {\r\n  line-height: 1.3rem;\r\n  text-align: justify;\r\n  color: #1e0105;\r\n  font-size: medium;\r\n}\r\n\r\n.meal-Ids {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.meal-Ids div {\r\n  animation: meal-Ids 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  transform-origin: 40px 40px;\r\n}\r\n\r\n.meal-Ids div::after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  margin: -4px 0 0 -4px;\r\n}\r\n\r\n.meal-Ids div:nth-child(1) {\r\n  animation-delay: -0.036s;\r\n}\r\n\r\n.meal-Ids div:nth-child(1)::after {\r\n  top: 63px;\r\n  left: 63px;\r\n}\r\n\r\n.meal-Ids div:nth-child(2) {\r\n  animation-delay: -0.072s;\r\n}\r\n\r\n.meal-Ids div:nth-child(2)::after {\r\n  top: 68px;\r\n  left: 56px;\r\n}\r\n\r\n.meal-Ids div:nth-child(3) {\r\n  animation-delay: -0.108s;\r\n}\r\n\r\n.meal-Ids div:nth-child(3)::after {\r\n  top: 71px;\r\n  left: 48px;\r\n}\r\n\r\n.meal-Ids div:nth-child(4) {\r\n  animation-delay: -0.144s;\r\n}\r\n\r\n.meal-Ids div:nth-child(4)::after {\r\n  top: 72px;\r\n  left: 40px;\r\n}\r\n\r\n.meal-Ids div:nth-child(5) {\r\n  animation-delay: -0.18s;\r\n}\r\n\r\n.meal-Ids div:nth-child(5)::after {\r\n  top: 71px;\r\n  left: 32px;\r\n}\r\n\r\n.meal-Ids div:nth-child(6) {\r\n  animation-delay: -0.216s;\r\n}\r\n\r\n.meal-Ids div:nth-child(6)::after {\r\n  top: 68px;\r\n  left: 24px;\r\n}\r\n\r\n.meal-Ids div:nth-child(7) {\r\n  animation-delay: -0.252s;\r\n}\r\n\r\n.meal-Ids div:nth-child(7)::after {\r\n  top: 63px;\r\n  left: 17px;\r\n}\r\n\r\n.meal-Ids div:nth-child(8) {\r\n  animation-delay: -0.288s;\r\n}\r\n\r\n.meal-Ids div:nth-child(8)::after {\r\n  top: 56px;\r\n  left: 12px;\r\n}\r\n\r\n@keyframes meal-Ids {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nfooter {\r\n  background-color: #2b1d1c;\r\n  height: 10vh;\r\n  color: aliceblue;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer-desc {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap\");\r\n\r\n* {\r\n  border: 0;\r\n  margin: -8px 0 0 0;\r\n  font-family: lato, sans-serif;\r\n}\r\n\r\n:root {\r\n  --gold: #ff924e;\r\n  --light-shadow: #fff;\r\n  --dark-shadow: #9b8358;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n}\r\n\r\nheader {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  border: 2px solid white;\r\n}\r\n\r\n.nav-bar {\r\n  background-color: #2b1d1c;\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.item-1 {\r\n  height: 5rem;\r\n  display: flex;\r\n  width: 55%;\r\n}\r\n\r\n.icon {\r\n  background: url(\"../assets/food-icon.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  width: 13%;\r\n  margin-left: 20%;\r\n}\r\n\r\n/* .name {\r\n  color: white;\r\n  margin-top: 20px;\r\n  font-family: \"Calligraffitti\", cursive;\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  position: absolute;\r\n  text-shadow: -15px 5px 20px #ced0d3;\r\n  top: 5%;\r\n  left: 40%;\r\n  transform: translate(-50%, -50%);\r\n  letter-spacing: 0.02em;\r\n  text-align: center;\r\n  color: #f9f1cc;\r\n  text-shadow: 1px 1px 0px #ffb650, 3px 3px 0px #ffd662, 5px 5px 0px #ff80bf,\r\n    8px 8px 0px #ef5097, 10px 10px 0px #6868ac, 12px 12px 12px #90b1e0;\r\n} */\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-areas: \"overlap\";\r\n  place-content: center;\r\n  text-transform: uppercase;\r\n  text-align: left;\r\n}\r\n\r\n.wrapper > div {\r\n  background-clip: padding-box;\r\n  -webkit-background-clip: text;\r\n  color: #363833;\r\n  font-family: \"Exo\", sans-serif;\r\n  font-weight: 800;\r\n  font-size: calc(2rem + ((1vw - 7.68px) * 1.2));\r\n  grid-area: overlap;\r\n  letter-spacing: 2px;\r\n  -webkit-text-stroke: 4px transparent;\r\n}\r\n\r\ndiv.bg {\r\n  background-image:\r\n    repeating-linear-gradient(\r\n      105deg,\r\n      var(--gold) 30%,\r\n      var(--dark-shadow) 5%,\r\n      var(--gold) 12%\r\n    );\r\n  color: transparent;\r\n  filter: drop-shadow(5px 15px 15px black);\r\n  transform: scaleY(1.05);\r\n  transform-origin: top;\r\n}\r\n\r\ndiv.fg {\r\n  background-image:\r\n    repeating-linear-gradient(\r\n      5deg,\r\n      var(--gold) 0%,\r\n      var(--light-shadow) 23%,\r\n      var(--gold) 31%\r\n    );\r\n  color: #1e0105;\r\n  transform: scale(1);\r\n}\r\n\r\n.item-2 {\r\n  width: 25%;\r\n  margin-top: 5px;\r\n}\r\n\r\n.item-2-list {\r\n  list-style: none;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: left;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.item-2 a,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.foods-container {\r\n  background-color: #6b2a24;\r\n  padding: 2%;\r\n}\r\n\r\n.all-foods {\r\n  height: 75vh;\r\n  margin: 2rem;\r\n  border: 2px solid white;\r\n}\r\n\r\n#all-foods {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 4rem;\r\n  height: 100%;\r\n}\r\n\r\n.container-food {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  backdrop-filter: blur(7px);\r\n  border-radius: 1rem;\r\n  width: 15.6rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  min-height: 25rem;\r\n  -webkit-box-shadow: 1px 1px 2px 2px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\r\n  -moz-box-shadow: 1px 1px 2px 2px #ccc; /* Firefox 3.5 - 3.6 */\r\n  box-shadow: 2px 0 3px 3px #2c0000;\r\n}\r\n\r\n.container-food:hover {\r\n  border: 2px solid white;\r\n  transition: ease-in-out;\r\n}\r\n\r\n.container-food > img {\r\n  border-radius: 1rem 1rem 0 0;\r\n  height: auto;\r\n\r\n  /* height: 16rem; */\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.container-food > .name-like {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  flex-grow: 1;\r\n}\r\n\r\n.name-like > .name-food {\r\n  color: #fff;\r\n  width: 70%;\r\n  text-align: left;\r\n  line-height: 1.2em;\r\n  font-family: \"Sofia\", sans-serif;\r\n  text-shadow: 2px 2px 2px #ab0606;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.give-likes {\r\n  cursor: pointer;\r\n}\r\n\r\n.give-likes > i.fa-heart {\r\n  color: rgb(255, 255, 255);\r\n  transition: color 300ms ease;\r\n}\r\n\r\n.give-likes:hover > i.fa-heart {\r\n  color: red;\r\n}\r\n\r\n.give-likes > .count-likes {\r\n  color: #fcfcfc;\r\n  font-size: 1rem;\r\n  margin-top: 7px;\r\n}\r\n\r\n.btn-comment {\r\n  width: 100%;\r\n  padding: 1rem 0.75rem;\r\n  font-size: 1.1rem;\r\n  border-radius: 0 0 1rem 1rem;\r\n  transition: all 0.4s ease;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.btn-comment:focus {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.btn-comment:hover {\r\n  background-color: rgb(69, 7, 7);\r\n  color: white;\r\n  border: 2px solid white;\r\n}\r\n\r\n.container-food:hover > img {\r\n  transform: scale(1.15);\r\n  display: block;\r\n}\r\n\r\n#about {\r\n  background-color: #111;\r\n  padding: 7rem 2rem;\r\n  color: #eee;\r\n}\r\n\r\n#comment-popup {\r\n  inset: 0;\r\n  padding: 1.3rem;\r\n  max-height: 100vh;\r\n  display: none;\r\n  z-index: 1;\r\n  position: fixed;\r\n  background-color: rgba(72, 5, 5, 0.867);\r\n}\r\n\r\n#comment-popup.show {\r\n  display: block;\r\n}\r\n\r\n#comment-popup .comment-popup-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  background-color: #ddd;\r\n  color: #333;\r\n  overflow-y: auto;\r\n  height: 100%;\r\n  padding: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.25em 0.5rem #0007;\r\n  max-width: 950px;\r\n  margin: auto;\r\n}\r\n\r\n#popup-btn-close {\r\n  position: fixed;\r\n  right: 1.5rem;\r\n  top: 1.5rem;\r\n  font-size: 3rem;\r\n  line-height: 2rem;\r\n  z-index: 5;\r\n  padding: 0.5rem;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n#comment-popup .info-section,\r\n#comment-popup .comments-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#comment-popup #food-image {\r\n  width: 45%;\r\n  max-height: 20rem;\r\n  border-radius: 0.6em;\r\n  box-shadow:\r\n    0 0 5px 3px #1e0105,\r\n    0 0 10px 4px #7c7e3c,\r\n    0 0 15px 7px #650000,\r\n    0 0 20px 15px #2e0101;\r\n}\r\n\r\n#comment-popup .comments-section {\r\n  background: #ccc;\r\n  padding: 1rem;\r\n  border-radius: 0.75rem;\r\n  color: #333;\r\n}\r\n\r\n#comments-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.food-count-icon {\r\n  margin: 0.6rem 0.3rem;\r\n  padding: 0.2rem;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  border-radius: 13px;\r\n  background: #fff;\r\n  color: #000c;\r\n  width: 1.5rem;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n#comments {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n  padding-left: 0;\r\n}\r\n\r\n#comments li {\r\n  background-color: #fff5;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0 1.5rem 1.5rem 1.5rem;\r\n  box-shadow: 0 0.1rem 0.2rem #0003;\r\n  margin-right: 1rem;\r\n}\r\n\r\n#comments li:nth-child(even) {\r\n  border-radius: 1.5rem 0 1.5rem 1.5rem;\r\n  margin-left: 1rem;\r\n  margin-right: 0;\r\n}\r\n\r\n#comments li .comment-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#comments li .comment-author {\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comments li .comment-date {\r\n  color: #999;\r\n  font-size: 0.75rem;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comments li .comment-message {\r\n  font-size: 0.75rem;\r\n  margin-left: 0;\r\n  padding-top: 10px;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.75rem;\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n#comment-form input,\r\n#comment-form textarea {\r\n  padding: 0.5rem;\r\n  border-radius: 0.75rem;\r\n  width: 100%;\r\n  background: #ddd;\r\n  border: 1px solid #0003;\r\n  color: #333;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#button {\r\n  border-radius: 0.75rem;\r\n  padding: 0.75rem 1.5rem;\r\n  box-shadow: 0.25em 0.25em 0.75em #0003;\r\n  background: #611717;\r\n  color: #eee;\r\n  font-weight: bold;\r\n}\r\n\r\n#recipes {\r\n  line-height: 1.3rem;\r\n  text-align: justify;\r\n  color: #1e0105;\r\n  font-size: medium;\r\n}\r\n\r\n.meal-Ids {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.meal-Ids div {\r\n  animation: meal-Ids 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  transform-origin: 40px 40px;\r\n}\r\n\r\n.meal-Ids div::after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  margin: -4px 0 0 -4px;\r\n}\r\n\r\n.meal-Ids div:nth-child(1) {\r\n  animation-delay: -0.036s;\r\n}\r\n\r\n.meal-Ids div:nth-child(1)::after {\r\n  top: 63px;\r\n  left: 63px;\r\n}\r\n\r\n.meal-Ids div:nth-child(2) {\r\n  animation-delay: -0.072s;\r\n}\r\n\r\n.meal-Ids div:nth-child(2)::after {\r\n  top: 68px;\r\n  left: 56px;\r\n}\r\n\r\n.meal-Ids div:nth-child(3) {\r\n  animation-delay: -0.108s;\r\n}\r\n\r\n.meal-Ids div:nth-child(3)::after {\r\n  top: 71px;\r\n  left: 48px;\r\n}\r\n\r\n.meal-Ids div:nth-child(4) {\r\n  animation-delay: -0.144s;\r\n}\r\n\r\n.meal-Ids div:nth-child(4)::after {\r\n  top: 72px;\r\n  left: 40px;\r\n}\r\n\r\n.meal-Ids div:nth-child(5) {\r\n  animation-delay: -0.18s;\r\n}\r\n\r\n.meal-Ids div:nth-child(5)::after {\r\n  top: 71px;\r\n  left: 32px;\r\n}\r\n\r\n.meal-Ids div:nth-child(6) {\r\n  animation-delay: -0.216s;\r\n}\r\n\r\n.meal-Ids div:nth-child(6)::after {\r\n  top: 68px;\r\n  left: 24px;\r\n}\r\n\r\n.meal-Ids div:nth-child(7) {\r\n  animation-delay: -0.252s;\r\n}\r\n\r\n.meal-Ids div:nth-child(7)::after {\r\n  top: 63px;\r\n  left: 17px;\r\n}\r\n\r\n.meal-Ids div:nth-child(8) {\r\n  animation-delay: -0.288s;\r\n}\r\n\r\n.meal-Ids div:nth-child(8)::after {\r\n  top: 56px;\r\n  left: 12px;\r\n}\r\n\r\n@keyframes meal-Ids {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nfooter {\r\n  background-color: #2b1d1c;\r\n  height: 10vh;\r\n  color: aliceblue;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer-desc {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/Api-call.js":
/*!*********************************!*\
  !*** ./src/Modules/Api-call.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMealData": () => (/* binding */ getMealData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const getMealData = (url) => fetch(url).then((res) => res.json());

const postData = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data),
});


/***/ }),

/***/ "./src/Modules/Methods-all.js":
/*!************************************!*\
  !*** ./src/Modules/Methods-all.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCounterDisplay": () => (/* binding */ ItemCounterDisplay),
/* harmony export */   "displayPopUp": () => (/* binding */ displayPopUp),
/* harmony export */   "getAllFoodData": () => (/* binding */ getAllFoodData),
/* harmony export */   "getAllLikes": () => (/* binding */ getAllLikes),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "likeFood": () => (/* binding */ likeFood),
/* harmony export */   "mealsShowAll": () => (/* binding */ mealsShowAll)
/* harmony export */ });
/* harmony import */ var _Api_call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api-call.js */ "./src/Modules/Api-call.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/Modules/display.js");



const foodList = new _display_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

// Assigning Involvement API link
const InvoApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/'
  + 'capstoneApi/apps/';
const InvoApiIDLikes = 'pEBOCO8kM8wbh9szd9yj';
// const InvoApiIDLikes = 'zX9lc5HNiZeTfJrwouGw';
const InvoApiIDComments = 'TOQ2SNV5DoVM0bMfqikl';
const likesUrl = '/likes';
const commentsUrl = '/comments';

// Assigning Meals DB API link
const MealApiUrl = 'https://www.themealdb.com/api/json/v1/1/';
const MealCatagory = 'filter.php?a=Italian';
const mealFullUrl = MealApiUrl + MealCatagory;

// Selecting IDs from the HTML...
const foodListWrapper = document.getElementById('all-foods');
const commentPopup = document.getElementById('comment-popup');
const itemCounter = document.getElementById('count-foods');

const getComments = (id) => new Promise((resolve) => {
  const itemId = `?item_id=${id}`;
  const apiComments = InvoApiUrl + InvoApiIDComments + commentsUrl + itemId;
  (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)(apiComments).then((commentsFromAPI) => {
    if (commentsFromAPI.error) commentsFromAPI = [];
    const commValid = commentsFromAPI.filter((theComment) => {
      const username = theComment.username.trim();
      const comment = theComment.comment.trim();
      return username.length && comment.length;
    });
    foodList.addComments(id, commValid.reverse());
    resolve();
  });
});

const displayPopUp = (id) => {
  commentPopup.classList.add('show');
  commentPopup.innerHTML = `      <div id="popup-btn-close">&times;</div>
    <div class="comment-popup-wrapper">
      <div class="info-section">
        <img id="food-image" src="${foodList.foods[id].image}" alt="" />
        <h2 id="name-food">${foodList.foods[id].title}</h2>
        <p id="recipes">...</p>
      </div>
      <div class="comments-section">
        <h3>Add Comment:</h3>
        <form id="comment-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea
            name="comment"
            rows="5"
            placeholder="Your Comment"
            required
          ></textarea>
          <button id="button" type="submit">Submit</button>
        </form>

        <h3 id="comments-header">Comments:</h3>
        <ul id="comments">
        </ul>
      </div>
    </div>`;

  // const commentPost = (id, input, textarea) => {
  //   const commentmainUrl = InvoApiUrl + InvoApiIDComments + commentsUrl;
  //   const data = {
  //     item_id: id,
  //     username: input.value,
  //     comment: textarea.value,
  //   };
  //   postData(commentmainUrl, data).then((result) => {
  //     if (result.status === 201) {
  //       input.value = '';
  //       textarea.value = '';
  //       const commentWrapper = document.getElementById('all-comments');
  //       const newComment = `
  //       <li class="single-comment">
  //         <h4 class="name-commenter">${data.username}</h4>
  //         <p class="comment-message">${data.comment}</p>
  //       </li>
  //     `;
  //       commentWrapper.insertAdjacentHTML('beforeend', newComment);
  //     }
  //   });
  // };

  // const commentForm = document.getElementById('comment-form');
  // commentForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   commentPost(id, e.target.name, e.target.comment);
  // });

  // Get the comments from the API and display them on the page
  const fetchComments = () => {
    const commentmainUrl = InvoApiUrl + InvoApiIDComments + commentsUrl;
    (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)(commentmainUrl).then((data) => {
      const commentWrapper = document.getElementById('all-comments');
      commentWrapper.innerHTML = '';
      data.forEach((comment) => {
        commentWrapper.innerHTML += `<li class="single-comment">
        <h4 class="name-commenter">${comment.username}</h4>
        <p class="comment-message">${comment.comment}</p>
      </li>`;
      });
    });
  };

  // Call fetchComments to display the initial comments on page load
  fetchComments();

  // Function to post a comment to the API and update the HTML
  const commentPost = (id, input, textarea) => {
    const commentmainUrl = InvoApiUrl + InvoApiIDComments + commentsUrl;
    const data = {
      item_id: id,
      username: input.value,
      comment: textarea.value,
    };
    (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.postData)(commentmainUrl, data).then((result) => {
      if (result.status === 201) {
        input.value = '';
        textarea.value = '';
        fetchComments();
      }
    });
  };

  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    commentPost(id, e.target.name, e.target.comment);
  });

  const btnClose = document.getElementById('popup-btn-close');
  btnClose.addEventListener('click', () => {
    commentPopup.classList.remove('show');
  });
  const URL = `${MealApiUrl}lookup.php?i=${id}`;
  (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)(URL).then((result) => {
    const mealType = result.meals[0];
    const mealDesciprtion = document.getElementById('recipes');
    mealDesciprtion.innerHTML = mealType.strInstructions;
  });

  //
  const dateOfComment = (strDate) => {
    const diff = Date.now() - Date.parse(strDate);
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    return `${diffInDays} days ago`;
  };

  getComments(id).then(() => {
    const { comments } = foodList.foods[id];
    const commentsHeader = document.getElementById('comments-header');
    const commentWrapper = document.getElementById('comments');
    if (comments.length) {
      // add counter to comments header
      commentsHeader.innerHTML += `<span class="food-count-icon">${foodList.getCommentsCount(
        id,
      )}</span>`;

      //       comments will be added here.........
      comments.forEach((comment) => {
        commentWrapper.innerHTML += `<li class="comment">
        <div class="comment-header">
          <h4 class="comment-author">${comment.username}</h4>
          <span class="comment-date">${dateOfComment(
    comment.creation_date,
  )}</span>
        </div>
        <p class="comment-message">${comment.comment}</p>
        </li> `;
      });
    } else {
      commentWrapper.innerHTML = 'no comments';
    }
  });
};

const likeFood = (id) => {
  const url = InvoApiUrl + InvoApiIDLikes + likesUrl;
  const data = {
    item_id: id,
  };
  (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.postData)(url, data).then((result) => {
    if (result.status === 201) {
      const newLikes = foodList.getLikes(id) + 1;
      foodList.setLikes(id, newLikes);
      const likeWrapper = document.getElementById(id);
      const counterElement = likeWrapper.querySelector('.count-likes');
      counterElement.innerHTML = foodList.getLikesText(id);
    }
  });
};

const mealsShowAll = () => {
  foodListWrapper.innerHTML = '';
  Object.keys(foodList.foods).forEach((foodId) => {
    const food = foodList.foods[foodId];
    foodListWrapper.innerHTML += `
    <div class="container-food" id="${foodId}">
      <img src="${food.image}" alt="image of a meal" />
      <div class="name-like">
        <h3 class="name-food">${food.title}</h3>
        <div class="give-likes">
          <i class="fa fa-heart" aria-hidden="true"></i>
          <div class="count-likes">
            ${foodList.getLikesText(foodId)}
          </div>
        </div>
      </div>
      <button class="btn btn-comment">Click for More</button>
    </div>
    `;
  });

  const commentsButtons = foodListWrapper.querySelectorAll('.btn-comment');
  commentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      displayPopUp(button.parentElement.id);
    });
  });

  const likeBtns = foodListWrapper.querySelectorAll('.give-likes');
  likeBtns.forEach((likeButton) => {
    const foodId = likeButton.parentElement.parentElement.id;
    likeButton.addEventListener('click', () => {
      likeFood(foodId);
    });
  });
};

const getAllFoodData = () => new Promise((resolve) => {
  (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)(mealFullUrl).then((result) => {
    foodList.addMeals(result.meals);
    resolve();
  });
});

const getAllLikes = () => new Promise((res) => {
  const likesLinkAPI = InvoApiUrl + InvoApiIDLikes + likesUrl;
  (0,_Api_call_js__WEBPACK_IMPORTED_MODULE_0__.getMealData)(likesLinkAPI).then((likesFromAPI) => {
    likesFromAPI.forEach((likeObject) => {
      foodList.setLikes(likeObject.item_id, likeObject.likes);
    });
    res();
  });
});

const ItemCounterDisplay = () => {
  const size = foodList.getItemsCount();
  itemCounter.innerHTML = `<span class="food-count-icon">${size}<span>`;
};


/***/ }),

/***/ "./src/Modules/display.js":
/*!********************************!*\
  !*** ./src/Modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FoodList)
/* harmony export */ });
class FoodList {
  constructor() {
    this.foods = {};
  }

  addSingleMeal(id, title, image) {
    this.foods[id] = {
      title,
      image,
      comments: [],
    };
  }

  addMeals(allFoods) {
    allFoods.forEach((food) => {
      this.addSingleMeal(food.idMeal, food.strMeal, food.strMealThumb);
    });
  }

  setLikes(id, likes) {
    if (Object.keys(this.foods).includes(id)) {
      this.foods[id].likes = likes;
    }
  }

  getLikes(id) {
    return this.foods[id].likes || 0;
  }

  getLikesText(id) {
    const likes = this.getLikes(id);
    if (likes <= 1) {
      return `${likes} like`;
    }
    return `${likes} likes`;
  }

  addComments(id, comments) {
    this.foods[id].comments = comments;
  }

  getComments(id) {
    return this.foods[id].comments;
  }

  getCommentsCount(id) {
    return this.foods[id].comments.length;
  }

  getItemsCount() {
    return Object.keys(this.foods).length;
  }
}


/***/ }),

/***/ "./assets/food-icon.png":
/*!******************************!*\
  !*** ./assets/food-icon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37fb6714746554f9b561.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Modules_Methods_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Methods-all.js */ "./src/Modules/Methods-all.js");
// index.js



(0,_Modules_Methods_all_js__WEBPACK_IMPORTED_MODULE_1__.getAllFoodData)().then(() => {
  (0,_Modules_Methods_all_js__WEBPACK_IMPORTED_MODULE_1__.getAllLikes)()
    .then(() => {
      (0,_Modules_Methods_all_js__WEBPACK_IMPORTED_MODULE_1__.mealsShowAll)();
    })
    .then(() => {
      (0,_Modules_Methods_all_js__WEBPACK_IMPORTED_MODULE_1__.ItemCounterDisplay)();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSx5QkFBeUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8s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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQU1hOztBQUVsQyx1RUFBYztBQUNkLEVBQUUsb0VBQVc7QUFDYjtBQUNBLE1BQU0scUVBQVk7QUFDbEIsS0FBSztBQUNMO0FBQ0EsTUFBTSwyRUFBa0I7QUFDeEIsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvLi9zcmMvTW9kdWxlcy9BcGktY2FsbC5qcyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vc3JjL01vZHVsZXMvTWV0aG9kcy1hbGwuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS8uL3NyYy9Nb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vZHVsZTItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbW9kdWxlMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tb2R1bGUyLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9vZC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXIrRGFmb2UmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RXhvOndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG1hcmdpbjogLThweCAwIDAgMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWdvbGQ6ICNmZjkyNGU7XFxyXFxuICAtLWxpZ2h0LXNoYWRvdzogI2ZmZjtcXHJcXG4gIC0tZGFyay1zaGFkb3c6ICM5YjgzNTg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjFkMWM7XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMSB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDU1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICB3aWR0aDogMTMlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FsbGlncmFmZml0dGlcXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMTVweCA1cHggMjBweCAjY2VkMGQzO1xcclxcbiAgdG9wOiA1JTtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZjlmMWNjO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICNmZmI2NTAsIDNweCAzcHggMHB4ICNmZmQ2NjIsIDVweCA1cHggMHB4ICNmZjgwYmYsXFxyXFxuICAgIDhweCA4cHggMHB4ICNlZjUwOTcsIDEwcHggMTBweCAwcHggIzY4NjhhYywgMTJweCAxMnB4IDEycHggIzkwYjFlMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJvdmVybGFwXFxcIjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogIzM2MzgzMztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArICgoMXZ3IC0gNy42OHB4KSAqIDEuMikpO1xcclxcbiAgZ3JpZC1hcmVhOiBvdmVybGFwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDRweCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmJnIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgMTA1ZGVnLFxcclxcbiAgICAgIHZhcigtLWdvbGQpIDMwJSxcXHJcXG4gICAgICB2YXIoLS1kYXJrLXNoYWRvdykgNSUsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMTIlXFxyXFxuICAgICk7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAxNXB4IDE1cHggYmxhY2spO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wNSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVxcclxcblxcclxcbmRpdi5mZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDVkZWcsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMCUsXFxyXFxuICAgICAgdmFyKC0tbGlnaHQtc2hhZG93KSAyMyUsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMzElXFxyXFxuICAgICk7XFxyXFxuICBjb2xvcjogIzFlMDEwNTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIgYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5mb29kcy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiMmEyNDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWZvb2RzIHtcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWxsLWZvb2RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mb29kIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHdpZHRoOiAxNS42cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWluLWhlaWdodDogMjVyZW07XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjY2NjOyAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggI2NjYzsgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCAzcHggIzJjMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mb29kOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZm9vZCA+IGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgLyogaGVpZ2h0OiAxNnJlbTsgKi9cXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZvb2QgPiAubmFtZS1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGlrZSA+IC5uYW1lLWZvb2Qge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU29maWFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICNhYjA2MDY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdmUtbGlrZXMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l2ZS1saWtlcyA+IGkuZmEtaGVhcnQge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5naXZlLWxpa2VzOmhvdmVyID4gaS5mYS1oZWFydCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l2ZS1saWtlcyA+IC5jb3VudC1saWtlcyB7XFxyXFxuICBjb2xvcjogI2ZjZmNmYztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29tbWVudDpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29tbWVudDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcsIDcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZm9vZDpob3ZlciA+IGltZyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNhYm91dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbiAgcGFkZGluZzogN3JlbSAycmVtO1xcclxcbiAgY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIHtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgcGFkZGluZzogMS4zcmVtO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDUsIDUsIDAuODY3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtcG9wdXAuc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtcG9wdXAgLmNvbW1lbnQtcG9wdXAtd3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNXJlbSAjMDAwNztcXHJcXG4gIG1heC13aWR0aDogOTUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNwb3B1cC1idG4tY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDEuNXJlbTtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIC5pbmZvLXNlY3Rpb24sXFxyXFxuI2NvbW1lbnQtcG9wdXAgLmNvbW1lbnRzLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwICNmb29kLWltYWdlIHtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCAwIDVweCAzcHggIzFlMDEwNSxcXHJcXG4gICAgMCAwIDEwcHggNHB4ICM3YzdlM2MsXFxyXFxuICAgIDAgMCAxNXB4IDdweCAjNjUwMDAwLFxcclxcbiAgICAwIDAgMjBweCAxNXB4ICMyZTAxMDE7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIC5jb21tZW50cy1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jb3VudC1pY29uIHtcXHJcXG4gIG1hcmdpbjogMC42cmVtIDAuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMGM7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cyBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAxLjVyZW0gMS41cmVtIDEuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuMnJlbSAjMDAwMztcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW0gMCAxLjVyZW0gMS41cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cyBsaSAuY29tbWVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LWF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LWRhdGUge1xcclxcbiAgY29sb3I6ICM5OTk7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuI2NvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDM7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMjVlbSAwLjI1ZW0gMC43NWVtICMwMDAzO1xcclxcbiAgYmFja2dyb3VuZDogIzYxMTcxNztcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNyZWNpcGVzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgY29sb3I6ICMxZTAxMDU7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2IHtcXHJcXG4gIGFuaW1hdGlvbjogbWVhbC1JZHMgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxuICBoZWlnaHQ6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBtYXJnaW46IC00cHggMCAwIC00cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMSk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNjNweDtcXHJcXG4gIGxlZnQ6IDYzcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMik6OmFmdGVyIHtcXHJcXG4gIHRvcDogNjhweDtcXHJcXG4gIGxlZnQ6IDU2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNzFweDtcXHJcXG4gIGxlZnQ6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNCk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNzJweDtcXHJcXG4gIGxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg1KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA3MXB4O1xcclxcbiAgbGVmdDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg2KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA2OHB4O1xcclxcbiAgbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNykge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg3KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA2M3B4O1xcclxcbiAgbGVmdDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg4KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA1NnB4O1xcclxcbiAgbGVmdDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtZWFsLUlkcyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIxZDFjO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWRlc2Mge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixh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UztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NcitEYWZvZSZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FeG86d2dodEA5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBtYXJnaW46IC04cHggMCAwIDA7XFxyXFxuICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1nb2xkOiAjZmY5MjRlO1xcclxcbiAgLS1saWdodC1zaGFkb3c6ICNmZmY7XFxyXFxuICAtLWRhcmstc2hhZG93OiAjOWI4MzU4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIxZDFjO1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTEge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL2Zvb2QtaWNvbi5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICB3aWR0aDogMTMlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FsbGlncmFmZml0dGlcXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMTVweCA1cHggMjBweCAjY2VkMGQzO1xcclxcbiAgdG9wOiA1JTtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZjlmMWNjO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4ICNmZmI2NTAsIDNweCAzcHggMHB4ICNmZmQ2NjIsIDVweCA1cHggMHB4ICNmZjgwYmYsXFxyXFxuICAgIDhweCA4cHggMHB4ICNlZjUwOTcsIDEwcHggMTBweCAwcHggIzY4NjhhYywgMTJweCAxMnB4IDEycHggIzkwYjFlMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJvdmVybGFwXFxcIjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogIzM2MzgzMztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArICgoMXZ3IC0gNy42OHB4KSAqIDEuMikpO1xcclxcbiAgZ3JpZC1hcmVhOiBvdmVybGFwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDRweCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmJnIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgMTA1ZGVnLFxcclxcbiAgICAgIHZhcigtLWdvbGQpIDMwJSxcXHJcXG4gICAgICB2YXIoLS1kYXJrLXNoYWRvdykgNSUsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMTIlXFxyXFxuICAgICk7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAxNXB4IDE1cHggYmxhY2spO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wNSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVxcclxcblxcclxcbmRpdi5mZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDVkZWcsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMCUsXFxyXFxuICAgICAgdmFyKC0tbGlnaHQtc2hhZG93KSAyMyUsXFxyXFxuICAgICAgdmFyKC0tZ29sZCkgMzElXFxyXFxuICAgICk7XFxyXFxuICBjb2xvcjogIzFlMDEwNTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tMi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLTIgYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5mb29kcy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiMmEyNDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWZvb2RzIHtcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWxsLWZvb2RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mb29kIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHdpZHRoOiAxNS42cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWluLWhlaWdodDogMjVyZW07XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjY2NjOyAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggI2NjYzsgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCAzcHggIzJjMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1mb29kOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZm9vZCA+IGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgLyogaGVpZ2h0OiAxNnJlbTsgKi9cXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZvb2QgPiAubmFtZS1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtbGlrZSA+IC5uYW1lLWZvb2Qge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU29maWFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICNhYjA2MDY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdmUtbGlrZXMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l2ZS1saWtlcyA+IGkuZmEtaGVhcnQge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5naXZlLWxpa2VzOmhvdmVyID4gaS5mYS1oZWFydCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l2ZS1saWtlcyA+IC5jb3VudC1saWtlcyB7XFxyXFxuICBjb2xvcjogI2ZjZmNmYztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29tbWVudDpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29tbWVudDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDcsIDcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZm9vZDpob3ZlciA+IGltZyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNhYm91dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbiAgcGFkZGluZzogN3JlbSAycmVtO1xcclxcbiAgY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIHtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgcGFkZGluZzogMS4zcmVtO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzIsIDUsIDUsIDAuODY3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtcG9wdXAuc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtcG9wdXAgLmNvbW1lbnQtcG9wdXAtd3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNXJlbSAjMDAwNztcXHJcXG4gIG1heC13aWR0aDogOTUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNwb3B1cC1idG4tY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDEuNXJlbTtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIC5pbmZvLXNlY3Rpb24sXFxyXFxuI2NvbW1lbnQtcG9wdXAgLmNvbW1lbnRzLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwICNmb29kLWltYWdlIHtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCAwIDVweCAzcHggIzFlMDEwNSxcXHJcXG4gICAgMCAwIDEwcHggNHB4ICM3YzdlM2MsXFxyXFxuICAgIDAgMCAxNXB4IDdweCAjNjUwMDAwLFxcclxcbiAgICAwIDAgMjBweCAxNXB4ICMyZTAxMDE7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXBvcHVwIC5jb21tZW50cy1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jb3VudC1pY29uIHtcXHJcXG4gIG1hcmdpbjogMC42cmVtIDAuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMGM7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cyBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAxLjVyZW0gMS41cmVtIDEuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuMnJlbSAjMDAwMztcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW0gMCAxLjVyZW0gMS41cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50cyBsaSAuY29tbWVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LWF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LWRhdGUge1xcclxcbiAgY29sb3I6ICM5OTk7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnRzIGxpIC5jb21tZW50LW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuI2NvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDM7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuMjVlbSAwLjI1ZW0gMC43NWVtICMwMDAzO1xcclxcbiAgYmFja2dyb3VuZDogIzYxMTcxNztcXHJcXG4gIGNvbG9yOiAjZWVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNyZWNpcGVzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgY29sb3I6ICMxZTAxMDU7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2IHtcXHJcXG4gIGFuaW1hdGlvbjogbWVhbC1JZHMgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxuICBoZWlnaHQ6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBtYXJnaW46IC00cHggMCAwIC00cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMSk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNjNweDtcXHJcXG4gIGxlZnQ6IDYzcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMik6OmFmdGVyIHtcXHJcXG4gIHRvcDogNjhweDtcXHJcXG4gIGxlZnQ6IDU2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNzFweDtcXHJcXG4gIGxlZnQ6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNCk6OmFmdGVyIHtcXHJcXG4gIHRvcDogNzJweDtcXHJcXG4gIGxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLUlkcyBkaXY6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg1KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA3MXB4O1xcclxcbiAgbGVmdDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg2KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA2OHB4O1xcclxcbiAgbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoNykge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg3KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA2M3B4O1xcclxcbiAgbGVmdDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtSWRzIGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1JZHMgZGl2Om50aC1jaGlsZCg4KTo6YWZ0ZXIge1xcclxcbiAgdG9wOiA1NnB4O1xcclxcbiAgbGVmdDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtZWFsLUlkcyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIxZDFjO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWRlc2Mge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGdldE1lYWxEYXRhID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSAodXJsLCBkYXRhKSA9PiBmZXRjaCh1cmwsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbn0pO1xuIiwiaW1wb3J0IHsgZ2V0TWVhbERhdGEsIHBvc3REYXRhIH0gZnJvbSAnLi9BcGktY2FsbC5qcyc7XG5pbXBvcnQgRm9vZExpc3QgZnJvbSAnLi9kaXNwbGF5LmpzJztcblxuY29uc3QgZm9vZExpc3QgPSBuZXcgRm9vZExpc3QoKTtcblxuLy8gQXNzaWduaW5nIEludm9sdmVtZW50IEFQSSBsaW5rXG5jb25zdCBJbnZvQXBpVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC8nXG4gICsgJ2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IEludm9BcGlJRExpa2VzID0gJ3BFQk9DTzhrTTh3Ymg5c3pkOXlqJztcbi8vIGNvbnN0IEludm9BcGlJRExpa2VzID0gJ3pYOWxjNUhOaVplVGZKcndvdUd3JztcbmNvbnN0IEludm9BcGlJRENvbW1lbnRzID0gJ1RPUTJTTlY1RG9WTTBiTWZxaWtsJztcbmNvbnN0IGxpa2VzVXJsID0gJy9saWtlcyc7XG5jb25zdCBjb21tZW50c1VybCA9ICcvY29tbWVudHMnO1xuXG4vLyBBc3NpZ25pbmcgTWVhbHMgREIgQVBJIGxpbmtcbmNvbnN0IE1lYWxBcGlVcmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xLyc7XG5jb25zdCBNZWFsQ2F0YWdvcnkgPSAnZmlsdGVyLnBocD9hPUl0YWxpYW4nO1xuY29uc3QgbWVhbEZ1bGxVcmwgPSBNZWFsQXBpVXJsICsgTWVhbENhdGFnb3J5O1xuXG4vLyBTZWxlY3RpbmcgSURzIGZyb20gdGhlIEhUTUwuLi5cbmNvbnN0IGZvb2RMaXN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtZm9vZHMnKTtcbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXBvcHVwJyk7XG5jb25zdCBpdGVtQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudC1mb29kcycpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSAoaWQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGl0ZW1JZCA9IGA/aXRlbV9pZD0ke2lkfWA7XG4gIGNvbnN0IGFwaUNvbW1lbnRzID0gSW52b0FwaVVybCArIEludm9BcGlJRENvbW1lbnRzICsgY29tbWVudHNVcmwgKyBpdGVtSWQ7XG4gIGdldE1lYWxEYXRhKGFwaUNvbW1lbnRzKS50aGVuKChjb21tZW50c0Zyb21BUEkpID0+IHtcbiAgICBpZiAoY29tbWVudHNGcm9tQVBJLmVycm9yKSBjb21tZW50c0Zyb21BUEkgPSBbXTtcbiAgICBjb25zdCBjb21tVmFsaWQgPSBjb21tZW50c0Zyb21BUEkuZmlsdGVyKCh0aGVDb21tZW50KSA9PiB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IHRoZUNvbW1lbnQudXNlcm5hbWUudHJpbSgpO1xuICAgICAgY29uc3QgY29tbWVudCA9IHRoZUNvbW1lbnQuY29tbWVudC50cmltKCk7XG4gICAgICByZXR1cm4gdXNlcm5hbWUubGVuZ3RoICYmIGNvbW1lbnQubGVuZ3RoO1xuICAgIH0pO1xuICAgIGZvb2RMaXN0LmFkZENvbW1lbnRzKGlkLCBjb21tVmFsaWQucmV2ZXJzZSgpKTtcbiAgICByZXNvbHZlKCk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UG9wVXAgPSAoaWQpID0+IHtcbiAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgY29tbWVudFBvcHVwLmlubmVySFRNTCA9IGAgICAgICA8ZGl2IGlkPVwicG9wdXAtYnRuLWNsb3NlXCI+JnRpbWVzOzwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXBvcHVwLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXNlY3Rpb25cIj5cbiAgICAgICAgPGltZyBpZD1cImZvb2QtaW1hZ2VcIiBzcmM9XCIke2Zvb2RMaXN0LmZvb2RzW2lkXS5pbWFnZX1cIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDIgaWQ9XCJuYW1lLWZvb2RcIj4ke2Zvb2RMaXN0LmZvb2RzW2lkXS50aXRsZX08L2gyPlxuICAgICAgICA8cCBpZD1cInJlY2lwZXNcIj4uLi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1zZWN0aW9uXCI+XG4gICAgICAgIDxoMz5BZGQgQ29tbWVudDo8L2gzPlxuICAgICAgICA8Zm9ybSBpZD1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIENvbW1lbnRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGgzIGlkPVwiY29tbWVudHMtaGVhZGVyXCI+Q29tbWVudHM6PC9oMz5cbiAgICAgICAgPHVsIGlkPVwiY29tbWVudHNcIj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgLy8gY29uc3QgY29tbWVudFBvc3QgPSAoaWQsIGlucHV0LCB0ZXh0YXJlYSkgPT4ge1xuICAvLyAgIGNvbnN0IGNvbW1lbnRtYWluVXJsID0gSW52b0FwaVVybCArIEludm9BcGlJRENvbW1lbnRzICsgY29tbWVudHNVcmw7XG4gIC8vICAgY29uc3QgZGF0YSA9IHtcbiAgLy8gICAgIGl0ZW1faWQ6IGlkLFxuICAvLyAgICAgdXNlcm5hbWU6IGlucHV0LnZhbHVlLFxuICAvLyAgICAgY29tbWVudDogdGV4dGFyZWEudmFsdWUsXG4gIC8vICAgfTtcbiAgLy8gICBwb3N0RGF0YShjb21tZW50bWFpblVybCwgZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gIC8vICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAxKSB7XG4gIC8vICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIC8vICAgICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XG4gIC8vICAgICAgIGNvbnN0IGNvbW1lbnRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1jb21tZW50cycpO1xuICAvLyAgICAgICBjb25zdCBuZXdDb21tZW50ID0gYFxuICAvLyAgICAgICA8bGkgY2xhc3M9XCJzaW5nbGUtY29tbWVudFwiPlxuICAvLyAgICAgICAgIDxoNCBjbGFzcz1cIm5hbWUtY29tbWVudGVyXCI+JHtkYXRhLnVzZXJuYW1lfTwvaDQ+XG4gIC8vICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LW1lc3NhZ2VcIj4ke2RhdGEuY29tbWVudH08L3A+XG4gIC8vICAgICAgIDwvbGk+XG4gIC8vICAgICBgO1xuICAvLyAgICAgICBjb21tZW50V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG5ld0NvbW1lbnQpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtZm9ybScpO1xuICAvLyBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICBjb21tZW50UG9zdChpZCwgZS50YXJnZXQubmFtZSwgZS50YXJnZXQuY29tbWVudCk7XG4gIC8vIH0pO1xuXG4gIC8vIEdldCB0aGUgY29tbWVudHMgZnJvbSB0aGUgQVBJIGFuZCBkaXNwbGF5IHRoZW0gb24gdGhlIHBhZ2VcbiAgY29uc3QgZmV0Y2hDb21tZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBjb21tZW50bWFpblVybCA9IEludm9BcGlVcmwgKyBJbnZvQXBpSURDb21tZW50cyArIGNvbW1lbnRzVXJsO1xuICAgIGdldE1lYWxEYXRhKGNvbW1lbnRtYWluVXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtY29tbWVudHMnKTtcbiAgICAgIGNvbW1lbnRXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgIGNvbW1lbnRXcmFwcGVyLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwic2luZ2xlLWNvbW1lbnRcIj5cbiAgICAgICAgPGg0IGNsYXNzPVwibmFtZS1jb21tZW50ZXJcIj4ke2NvbW1lbnQudXNlcm5hbWV9PC9oND5cbiAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LW1lc3NhZ2VcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XG4gICAgICA8L2xpPmA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDYWxsIGZldGNoQ29tbWVudHMgdG8gZGlzcGxheSB0aGUgaW5pdGlhbCBjb21tZW50cyBvbiBwYWdlIGxvYWRcbiAgZmV0Y2hDb21tZW50cygpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHBvc3QgYSBjb21tZW50IHRvIHRoZSBBUEkgYW5kIHVwZGF0ZSB0aGUgSFRNTFxuICBjb25zdCBjb21tZW50UG9zdCA9IChpZCwgaW5wdXQsIHRleHRhcmVhKSA9PiB7XG4gICAgY29uc3QgY29tbWVudG1haW5VcmwgPSBJbnZvQXBpVXJsICsgSW52b0FwaUlEQ29tbWVudHMgKyBjb21tZW50c1VybDtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogaW5wdXQudmFsdWUsXG4gICAgICBjb21tZW50OiB0ZXh0YXJlYS52YWx1ZSxcbiAgICB9O1xuICAgIHBvc3REYXRhKGNvbW1lbnRtYWluVXJsLCBkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSAnJztcbiAgICAgICAgZmV0Y2hDb21tZW50cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtZm9ybScpO1xuICBjb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb21tZW50UG9zdChpZCwgZS50YXJnZXQubmFtZSwgZS50YXJnZXQuY29tbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJ0bi1jbG9zZScpO1xuICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9KTtcbiAgY29uc3QgVVJMID0gYCR7TWVhbEFwaVVybH1sb29rdXAucGhwP2k9JHtpZH1gO1xuICBnZXRNZWFsRGF0YShVUkwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IG1lYWxUeXBlID0gcmVzdWx0Lm1lYWxzWzBdO1xuICAgIGNvbnN0IG1lYWxEZXNjaXBydGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVzJyk7XG4gICAgbWVhbERlc2NpcHJ0aW9uLmlubmVySFRNTCA9IG1lYWxUeXBlLnN0ckluc3RydWN0aW9ucztcbiAgfSk7XG5cbiAgLy9cbiAgY29uc3QgZGF0ZU9mQ29tbWVudCA9IChzdHJEYXRlKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBEYXRlLnBhcnNlKHN0ckRhdGUpO1xuICAgIGNvbnN0IGRpZmZJbkRheXMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGlmIChkaWZmSW5EYXlzID09PSAwKSByZXR1cm4gJ1RvZGF5JztcbiAgICBpZiAoZGlmZkluRGF5cyA9PT0gMSkgcmV0dXJuICdZZXN0ZXJkYXknO1xuICAgIHJldHVybiBgJHtkaWZmSW5EYXlzfSBkYXlzIGFnb2A7XG4gIH07XG5cbiAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tbWVudHMgfSA9IGZvb2RMaXN0LmZvb2RzW2lkXTtcbiAgICBjb25zdCBjb21tZW50c0hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cy1oZWFkZXInKTtcbiAgICBjb25zdCBjb21tZW50V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICAgIGlmIChjb21tZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGFkZCBjb3VudGVyIHRvIGNvbW1lbnRzIGhlYWRlclxuICAgICAgY29tbWVudHNIZWFkZXIuaW5uZXJIVE1MICs9IGA8c3BhbiBjbGFzcz1cImZvb2QtY291bnQtaWNvblwiPiR7Zm9vZExpc3QuZ2V0Q29tbWVudHNDb3VudChcbiAgICAgICAgaWQsXG4gICAgICApfTwvc3Bhbj5gO1xuXG4gICAgICAvLyAgICAgICBjb21tZW50cyB3aWxsIGJlIGFkZGVkIGhlcmUuLi4uLi4uLi5cbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29tbWVudFdyYXBwZXIuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJjb21tZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhlYWRlclwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cImNvbW1lbnQtYXV0aG9yXCI+JHtjb21tZW50LnVzZXJuYW1lfTwvaDQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWRhdGVcIj4ke2RhdGVPZkNvbW1lbnQoXG4gICAgY29tbWVudC5jcmVhdGlvbl9kYXRlLFxuICApfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC1tZXNzYWdlXCI+JHtjb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgICA8L2xpPiBgO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnRXcmFwcGVyLmlubmVySFRNTCA9ICdubyBjb21tZW50cyc7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaWtlRm9vZCA9IChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBJbnZvQXBpVXJsICsgSW52b0FwaUlETGlrZXMgKyBsaWtlc1VybDtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfTtcbiAgcG9zdERhdGEodXJsLCBkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBjb25zdCBuZXdMaWtlcyA9IGZvb2RMaXN0LmdldExpa2VzKGlkKSArIDE7XG4gICAgICBmb29kTGlzdC5zZXRMaWtlcyhpZCwgbmV3TGlrZXMpO1xuICAgICAgY29uc3QgbGlrZVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBjb25zdCBjb3VudGVyRWxlbWVudCA9IGxpa2VXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudC1saWtlcycpO1xuICAgICAgY291bnRlckVsZW1lbnQuaW5uZXJIVE1MID0gZm9vZExpc3QuZ2V0TGlrZXNUZXh0KGlkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lYWxzU2hvd0FsbCA9ICgpID0+IHtcbiAgZm9vZExpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICBPYmplY3Qua2V5cyhmb29kTGlzdC5mb29kcykuZm9yRWFjaCgoZm9vZElkKSA9PiB7XG4gICAgY29uc3QgZm9vZCA9IGZvb2RMaXN0LmZvb2RzW2Zvb2RJZF07XG4gICAgZm9vZExpc3RXcmFwcGVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mb29kXCIgaWQ9XCIke2Zvb2RJZH1cIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltYWdlfVwiIGFsdD1cImltYWdlIG9mIGEgbWVhbFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZS1saWtlXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm5hbWUtZm9vZFwiPiR7Zm9vZC50aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2l2ZS1saWtlc1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50LWxpa2VzXCI+XG4gICAgICAgICAgICAke2Zvb2RMaXN0LmdldExpa2VzVGV4dChmb29kSWQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29tbWVudFwiPkNsaWNrIGZvciBNb3JlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNCdXR0b25zID0gZm9vZExpc3RXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY29tbWVudCcpO1xuICBjb21tZW50c0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheVBvcFVwKGJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgbGlrZUJ0bnMgPSBmb29kTGlzdFdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLmdpdmUtbGlrZXMnKTtcbiAgbGlrZUJ0bnMuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGZvb2RJZCA9IGxpa2VCdXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsaWtlRm9vZChmb29kSWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxGb29kRGF0YSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGdldE1lYWxEYXRhKG1lYWxGdWxsVXJsKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBmb29kTGlzdC5hZGRNZWFscyhyZXN1bHQubWVhbHMpO1xuICAgIHJlc29sdmUoKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbExpa2VzID0gKCkgPT4gbmV3IFByb21pc2UoKHJlcykgPT4ge1xuICBjb25zdCBsaWtlc0xpbmtBUEkgPSBJbnZvQXBpVXJsICsgSW52b0FwaUlETGlrZXMgKyBsaWtlc1VybDtcbiAgZ2V0TWVhbERhdGEobGlrZXNMaW5rQVBJKS50aGVuKChsaWtlc0Zyb21BUEkpID0+IHtcbiAgICBsaWtlc0Zyb21BUEkuZm9yRWFjaCgobGlrZU9iamVjdCkgPT4ge1xuICAgICAgZm9vZExpc3Quc2V0TGlrZXMobGlrZU9iamVjdC5pdGVtX2lkLCBsaWtlT2JqZWN0Lmxpa2VzKTtcbiAgICB9KTtcbiAgICByZXMoKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IEl0ZW1Db3VudGVyRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3Qgc2l6ZSA9IGZvb2RMaXN0LmdldEl0ZW1zQ291bnQoKTtcbiAgaXRlbUNvdW50ZXIuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZm9vZC1jb3VudC1pY29uXCI+JHtzaXplfTxzcGFuPmA7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvb2RzID0ge307XG4gIH1cblxuICBhZGRTaW5nbGVNZWFsKGlkLCB0aXRsZSwgaW1hZ2UpIHtcbiAgICB0aGlzLmZvb2RzW2lkXSA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgaW1hZ2UsXG4gICAgICBjb21tZW50czogW10sXG4gICAgfTtcbiAgfVxuXG4gIGFkZE1lYWxzKGFsbEZvb2RzKSB7XG4gICAgYWxsRm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgICAgdGhpcy5hZGRTaW5nbGVNZWFsKGZvb2QuaWRNZWFsLCBmb29kLnN0ck1lYWwsIGZvb2Quc3RyTWVhbFRodW1iKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldExpa2VzKGlkLCBsaWtlcykge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZvb2RzKS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuZm9vZHNbaWRdLmxpa2VzID0gbGlrZXM7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGlrZXMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5mb29kc1tpZF0ubGlrZXMgfHwgMDtcbiAgfVxuXG4gIGdldExpa2VzVGV4dChpZCkge1xuICAgIGNvbnN0IGxpa2VzID0gdGhpcy5nZXRMaWtlcyhpZCk7XG4gICAgaWYgKGxpa2VzIDw9IDEpIHtcbiAgICAgIHJldHVybiBgJHtsaWtlc30gbGlrZWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtsaWtlc30gbGlrZXNgO1xuICB9XG5cbiAgYWRkQ29tbWVudHMoaWQsIGNvbW1lbnRzKSB7XG4gICAgdGhpcy5mb29kc1tpZF0uY29tbWVudHMgPSBjb21tZW50cztcbiAgfVxuXG4gIGdldENvbW1lbnRzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9vZHNbaWRdLmNvbW1lbnRzO1xuICB9XG5cbiAgZ2V0Q29tbWVudHNDb3VudChpZCkge1xuICAgIHJldHVybiB0aGlzLmZvb2RzW2lkXS5jb21tZW50cy5sZW5ndGg7XG4gIH1cblxuICBnZXRJdGVtc0NvdW50KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvb2RzKS5sZW5ndGg7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmRleC5qc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBtZWFsc1Nob3dBbGwsXG4gIGdldEFsbEZvb2REYXRhLFxuICBnZXRBbGxMaWtlcyxcbiAgSXRlbUNvdW50ZXJEaXNwbGF5LFxufSBmcm9tICcuL01vZHVsZXMvTWV0aG9kcy1hbGwuanMnO1xuXG5nZXRBbGxGb29kRGF0YSgpLnRoZW4oKCkgPT4ge1xuICBnZXRBbGxMaWtlcygpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgbWVhbHNTaG93QWxsKCk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBJdGVtQ291bnRlckRpc3BsYXkoKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9