(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diana\Documents\dianadelg.github.io\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");



class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://use.typekit.net/lrc3vfy.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")], [1, "innerContent", 2, "padding-top", "30px"], [1, "container-fluid"], [1, "row"], [1, "col-sm"], [1, "title", 2, "padding-top", "50px"], [1, "leftBorder"], [1, "half-highlight"], [2, "padding-top", "30px"], ["href", "https://www.linkedin.com/in/diana-del-gaudio/", 1, "fab", "fa-linkedin-in"], ["href", "https://github.com/dianadelg", 1, "fab", "fa-github"], ["href", "mailto: ddelgaudio347@gmail.com", 1, "fa", "fa-envelope"], [1, "col-sm", "hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "myImg"], ["src", "/assets/images/me_icon.png", "alt", "me!", 1, "responsive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hello there. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I'm Diana Del Gaudio, a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "software engineer at ADP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", graphic designer, and freelance website creator based in Roseland, New Jersey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: rgb(250,250,250,0.93);\r\n    font-family: nimbus-sans,sans-serif;\r\n    font-weight: 200;\r\n    font-style: normal;\r\n    color: #121212;\r\n    \r\n    font-size: 30px;\r\n}\r\n\r\n.innerContent[_ngcontent-%COMP%]{\r\n   margin-left: 100px;\r\n   margin-right: 90px;\r\n}\r\n\r\n\r\n\r\n.leftBorder[_ngcontent-%COMP%]{\r\n  border-left-width:5px;\r\n  border-left-color: black;\r\n  border-left-style: solid;\r\n  padding-left: 20px;\r\n}\r\n\r\n\r\n\r\n.fab[_ngcontent-%COMP%], .fa[_ngcontent-%COMP%] {\r\n  color:lightgray;\r\n  padding-right: 70px;\r\n  font-size: 30px;\r\n  width: 30px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-family: nimbus-sans, sans-serif;\r\n  font-size: 85px;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.alignRight[_ngcontent-%COMP%] {\r\n  text-align: left!important;\r\n  padding-left: 10px;\r\n  padding-right: 50px;\r\n}\r\n\r\n\r\n\r\n.half-highlight[_ngcontent-%COMP%] {\r\n \r\n  background-image: linear-gradient(to right, transparent 50%, #ffb6d3 50%);\r\n  background-origin: 0;\r\n  background-size: 200% 50%;\r\n  background-repeat: repeat-x;\r\n  background-position: 0 100%;\r\n  transition: background-position 0.5s;\r\n  background-position: -100% 100%;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n  \r\n    .myImg[_ngcontent-%COMP%] {display:none;}\r\n\r\n}\r\n\r\n\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n  max-width: 85%;\r\n  height: auto;\r\n  align-content: center!important;\r\n  align-items: center!important;\r\n   margin-top: auto!important;\r\n    margin-left: auto!important; \r\n    \r\n    margin-bottom: auto!important;\r\n    display: block!important;\r\n}\r\n\r\n.bar[_ngcontent-%COMP%]{\r\n  background-color: lightgray;\r\n  margin: 0px!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDt3QkFDb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixrQkFBa0I7QUFDckI7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFHQSxxQkFBcUI7O0FBQ3JCOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUEseUJBQXlCOztBQUV6Qjs7RUFFRSx5RUFBeUU7RUFDekUsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRTs7Ozs7R0FLQztJQUNDLFFBQVEsWUFBWSxDQUFDOztBQUV6Qjs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsNkJBQTZCO0dBQzVCLDBCQUEwQjtJQUN6QiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLDI1MCwyNTAsMC45Myk7XHJcbiAgICBmb250LWZhbWlseTogbmltYnVzLXNhbnMsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5MHB4OyovXHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pbm5lckNvbnRlbnR7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4vKkxpbmUgb24gbGVmdCBvZiB0ZXh0Ki9cclxuLmxlZnRCb3JkZXJ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6NXB4O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuLypzb2NpYWwgbWVkaWEgaWNvbnMqL1xyXG4uZmFiLFxyXG4uZmEge1xyXG4gIGNvbG9yOmxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKlRpdGxlIG9mIHRleHQqL1xyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IG5pbWJ1cy1zYW5zLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogODVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKlRleHQgaW5mb3JtYXRpb24qL1xyXG4uYWxpZ25SaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi8qSGFsZiBoaWdobGlnaHQgb24gdGV4dCovXHJcblxyXG4uaGFsZi1oaWdobGlnaHQge1xyXG4gXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCA1MCUsICNmZmI2ZDMgNTAlKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgNTAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjVzO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyptZWRpYSBxdWVyaWVzKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLyp3ZSB3aWxsIG1ha2UgYSB0b24gb2YgY2hhbmdlcyB0byB0aGlzIGxhdGVyXHJcbiAgICAtIHJlbW92ZSBiaWcgbWFyZ2luXHJcbiAgICAtIHNjYWxlIGZvbnQgc2l6ZT9cclxuICAgIC0gbWFrZSBpbWcgYXBwZWFyIGJlbG93IGluYmV0d2VlbiBwYXJhZ3JhcGggYW5kIGljb25zXHJcbiAgICAtIGZpeCBpY29uIGFwcGVhcmFuY2UgKGdvaW5nIG9uIGRpZmZlcmVudCBsaW5lcyAtLSBtaWdodCBnZXQgZml4ZWQgd2l0aCBtYXJnaW4gaXNzdWUpXHJcbiAgKi9cclxuICAgIC5teUltZyB7ZGlzcGxheTpub25lO31cclxuXHJcbn1cclxuLypGb3IgdGhlIGltYWdlIG9mIG1lKi9cclxuLnJlc3BvbnNpdmUge1xyXG4gIG1heC13aWR0aDogODUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICBtYXJnaW4tdG9wOiBhdXRvIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvIWltcG9ydGFudDsgXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50OyAgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 0, consts: [["lang", "en", "dir", "ltr"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css")], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["type", "checkbox", "id", "click"], ["for", "click", 1, "menu-btn"], [1, "fas", "fa-bars"], ["href", "#", 1, "active"], ["href", "#"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: nimbus-sans,sans-serif;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  height: 80px;\r\n  width: 100%;\r\n  background: lightgray;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 50px 0 100px;\r\n  flex-wrap: wrap;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  list-style: none;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  margin: 0 8px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: gray;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  font-weight: 500!important;\r\n  padding: 8px 15px;\r\n  border-radius: 5px;\r\n  letter-spacing: 1px;\r\n  transition: all 0.3s ease;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: #121212;\r\n  \r\n  font-weight: 500!important;\r\n\r\n}\r\nnav[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: gray;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n@media (max-width: 1000px){\r\n  nav[_ngcontent-%COMP%]{\r\n    padding: 0 40px 0 50px;\r\n  }\r\n}\r\n@media (max-width: 920px) {\r\n  nav[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  #click[_ngcontent-%COMP%]:checked    ~ .menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{\r\n    content: \"\\f00d\";\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 80px;\r\n    left: -100%;\r\n    background: lightgray;\r\n    height: 100vh;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    transition: all 0.3s ease;\r\n  }\r\n  #click[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]{\r\n    left: 0;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 40px 0;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left: -100%;\r\n    display: block;\r\n    font-size: 20px;\r\n    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n  }\r\n  #click[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: none;\r\n    color: #1b1b1b;\r\n  }\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  z-index: -1;\r\n  width: 100%;\r\n  padding: 0 30px;\r\n  color: #1b1b1b;\r\n}\r\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLHlHQUF5RztBQUMzRztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDBCQUEwQjs7QUFFNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZix1REFBdUQ7RUFDekQ7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IG5pbWJ1cy1zYW5zLHNhbnMtc2VyaWY7XHJcbn0gXHJcbm5hdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCA1MHB4IDAgMTAwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5uYXYgdWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5uYXYgdWwgbGl7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxufVxyXG5uYXYgdWwgbGkgYXtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxubmF2IHVsIGxpIGEuYWN0aXZlLFxyXG5uYXYgdWwgbGkgYTpob3ZlcntcclxuICBjb2xvcjogIzEyMTIxMjtcclxuICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5uYXYgLm1lbnUtYnRuIGl7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gIG5hdntcclxuICAgIHBhZGRpbmc6IDAgNDBweCAwIDUwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gIG5hdiAubWVudS1idG4gaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjY2xpY2s6Y2hlY2tlZCB+IC5tZW51LWJ0biBpOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgfVxyXG4gIG5hdiB1bHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAjY2xpY2s6Y2hlY2tlZCB+IHVse1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgbmF2IHVsIGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuICB9XHJcbiAgbmF2IHVsIGxpIGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcclxuICB9XHJcbiAgI2NsaWNrOmNoZWNrZWQgfiB1bCBsaSBhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgbmF2IHVsIGxpIGEuYWN0aXZlLFxyXG4gIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gIH1cclxufVxyXG4uY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgY29sb3I6ICMxYjFiMWI7XHJcbn1cclxuLmNvbnRlbnQgZGl2e1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map