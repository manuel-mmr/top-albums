(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _screens_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/detail/detail.component */ "./src/app/screens/detail/detail.component.ts");





var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'detail/:category/:id', component: _screens_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"app-container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  cursor: default;\n  display: block;\n  position: relative; }\n\n.app-container {\n  margin: auto; }\n\n@media (min-width: 576px) {\n    .app-container {\n      width: 556px; } }\n\n@media (min-width: 768px) {\n    .app-container {\n      width: 748px; } }\n\n@media (min-width: 992px) {\n    .app-container {\n      width: 972px; } }\n\n@media (min-width: 1200px) {\n    .app-container {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hbnVlbG1lZGlhdmlsbGEvRGVza3RvcC9leGFtcGxlL3RvcC1hbGJ1bXMvc3JjL2FwcC9zdHlsZXMvdmlld3BvcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQ0paO0lER0Y7TUFLSSxZQUFZLEVBQUEsRUFjZjs7QUNoQkM7SURIRjtNQVNJLFlBQVksRUFBQSxFQVVmOztBQ1ZDO0lEVEY7TUFhSSxZQUFZLEVBQUEsRUFNZjs7QUNKQztJRGZGO01BaUJJLFdBQVcsRUFBQSxFQUVkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi9zdHlsZXMvdmlld3BvcnQuc2Nzcyc7XG5cbjpob3N0IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcblxuXG4gIEBpbmNsdWRlIHZpZXdwb3J0LS1zbWFsbCB7XG4gICAgd2lkdGg6IDU1NnB4O1xuICB9XG5cbiAgQGluY2x1ZGUgdmlld3BvcnQtLW1lZGl1bSB7XG4gICAgd2lkdGg6IDc0OHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgdmlld3BvcnQtLWxhcmdlIHtcbiAgICB3aWR0aDogOTcycHg7XG4gIH1cblxuICBAaW5jbHVkZSB2aWV3cG9ydC0tZXh0cmEtbGFyZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIkdmlld3BvcnQtLXNtYWxsOiA1NzZweDtcbiR2aWV3cG9ydC0tbWVkaXVtOiA3NjhweDtcbiR2aWV3cG9ydC0tbGFyZ2U6IDk5MnB4O1xuJHZpZXdwb3J0LS1leHRyYS1sYXJnZTogMTIwMHB4O1xuXG5AbWl4aW4gdmlld3BvcnQtLXNtYWxsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR2aWV3cG9ydC0tc21hbGwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdmlld3BvcnQtLW1lZGl1bSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdmlld3BvcnQtLW1lZGl1bSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB2aWV3cG9ydC0tbGFyZ2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHZpZXdwb3J0LS1sYXJnZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB2aWV3cG9ydC0tZXh0cmEtbGFyZ2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHZpZXdwb3J0LS1leHRyYS1sYXJnZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'top-albums';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_album_album_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/album/album.component */ "./src/app/components/album/album.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _screens_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/detail/detail.component */ "./src/app/screens/detail/detail.component.ts");
/* harmony import */ var _screens_home_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/home/filter.pipe */ "./src/app/screens/home/filter.pipe.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _screens_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _screens_detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
                _screens_home_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
                _components_album_album_component__WEBPACK_IMPORTED_MODULE_5__["AlbumComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/album/album.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/album/album.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top image\" [src]=\"album.image\" alt=\"albumimage\">\n  <div class=\"card-body\">\n    <span class=\"name\">{{album.name}}</span>\n    <p class=\"artist\">{{album.artist}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/album/album.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/album/album.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".artist {\n  font-size: 14px;\n  font-weight: 300; }\n\n.name, .empty-container {\n  font-size: 18px;\n  font-weight: 700; }\n\n:host {\n  display: block; }\n\n.card {\n  display: block;\n  background-color: #eeeeee;\n  cursor: pointer;\n  margin: 10px;\n  width: 180px; }\n\n.card:hover {\n    background-color: #343a40;\n    color: #ffffff; }\n\n.card:hover .image {\n      opacity: 0.5; }\n\n@media (min-width: 576px) {\n    .card {\n      width: 220px; } }\n\n@media (min-width: 992px) {\n    .card {\n      width: 270px; } }\n\n.empty-container {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvc3R5bGVzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvbWFudWVsbWVkaWF2aWxsYS9EZXNrdG9wL2V4YW1wbGUvdG9wLWFsYnVtcy9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyIsIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvc3R5bGVzL3ZpZXdwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VDcENFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUQrQmxCO0VDdEJFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QURSbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLHlCRVJrQjtFRlNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFMZDtJQVFJLHlCRVplO0lGYWYsY0VqQlcsRUFBQTs7QUZRZjtNQVlNLFlBQVksRUFBQTs7QUdkaEI7SUhFRjtNQWlCSSxZQUFZLEVBQUEsRUFNZjs7QUdiQztJSFZGO01BcUJJLFlBQVksRUFBQSxFQUVmOztBQVVEO0VBRUUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92aWV3cG9ydC5zY3NzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTgwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JleTtcbiAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgLmltYWdlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSB2aWV3cG9ydC0tc21hbGwge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgfVxuXG4gIEBpbmNsdWRlIHZpZXdwb3J0LS1sYXJnZSB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICB9XG59XG5cbi5uYW1lIHtcbiAgQGV4dGVuZCAlZm9udC0tbm9ybWFsLWJvbGQ7XG59XG5cbi5hcnRpc3Qge1xuICBAZXh0ZW5kICVmb250LS1zbWFsbDtcbn1cblxuLmVtcHR5LWNvbnRhaW5lciB7XG4gIEBleHRlbmQgJWZvbnQtLW5vcm1hbC1ib2xkO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIiwiJWZvbnQtLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4lZm9udC0tbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4lZm9udC0tbm9ybWFsLWJvbGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiVmb250LS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZjtcbiRncmV5OiByZ2IoOTksIDk5LCAxMDIpO1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG4kZXh0cmEtbGlnaHQtZ3JleTogI2Y4ZjhmODtcbiRkYXJrLWdyZXk6ICMzNDNhNDA7XG4iLCIkdmlld3BvcnQtLXNtYWxsOiA1NzZweDtcbiR2aWV3cG9ydC0tbWVkaXVtOiA3NjhweDtcbiR2aWV3cG9ydC0tbGFyZ2U6IDk5MnB4O1xuJHZpZXdwb3J0LS1leHRyYS1sYXJnZTogMTIwMHB4O1xuXG5AbWl4aW4gdmlld3BvcnQtLXNtYWxsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR2aWV3cG9ydC0tc21hbGwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdmlld3BvcnQtLW1lZGl1bSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdmlld3BvcnQtLW1lZGl1bSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB2aWV3cG9ydC0tbGFyZ2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHZpZXdwb3J0LS1sYXJnZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB2aWV3cG9ydC0tZXh0cmEtbGFyZ2Uge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHZpZXdwb3J0LS1leHRyYS1sYXJnZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/album/album.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/album/album.component.ts ***!
  \*****************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlbumComponent = /** @class */ (function () {
    function AlbumComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlbumComponent.prototype, "album", void 0);
    AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-album',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/components/album/album.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./album.component.scss */ "./src/app/components/album/album.component.scss")]
        })
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=''>\n    <img src=\"/assets/music.png\" alt=\"\" class=\"logo\">\n    <span class=\"brand\">Top Albums</span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 57px; }\n\n.logo {\n  height: 30px;\n  width: 30px; }\n\n.brand {\n  color: #ffffff;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hbnVlbG1lZGlhdmlsbGEvRGVza3RvcC9leGFtcGxlL3RvcC1hbGJ1bXMvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNDYmE7RURjYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTdweDtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uYnJhbmQge1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZjtcbiRncmV5OiByZ2IoOTksIDk5LCAxMDIpO1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG4kZXh0cmEtbGlnaHQtZ3JleTogI2Y4ZjhmODtcbiRkYXJrLWdyZXk6ICMzNDNhNDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light search fixed-top\">\n  <form class=\"form-inline\">\n    <input placeholder=\"Search\" class=\"form-control\" (input)=\"onInput($event.target.value)\">\n  </form>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.search {\n  background-color: #f8f8f8;\n  justify-content: flex-end;\n  top: 57px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hbnVlbG1lZGlhdmlsbGEvRGVza3RvcC9leGFtcGxlL3RvcC1hbGJ1bXMvc3JjL2FwcC9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UseUJDSndCO0VES3hCLHlCQUF5QjtFQUN6QixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJhLWxpZ2h0LWdyZXk7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRvcDogNTdweDtcbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZjtcbiRncmV5OiByZ2IoOTksIDk5LCAxMDIpO1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG4kZXh0cmEtbGlnaHQtZ3JleTogI2Y4ZjhmODtcbiRkYXJrLWdyZXk6ICMzNDNhNDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    SearchComponent_1 = SearchComponent;
    SearchComponent.prototype.onInput = function (value) {
        this.onTouch();
        this.onChange(value);
    };
    SearchComponent.prototype.writeValue = function (value) {
    };
    SearchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    var SearchComponent_1;
    SearchComponent = SearchComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SearchComponent_1; }),
                    multi: true,
                },
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"></div>\n"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  left: 0;\n  position: absolute;\n  text-align: center;\n  margin-top: 150px;\n  width: 100%; }\n\n.spinner {\n  display: inline-block;\n  height: 80px;\n  width: 80px; }\n\n.spinner:after {\n  -webkit-animation: spinner 1.2s linear infinite;\n          animation: spinner 1.2s linear infinite;\n  border: 5px solid #343a40;\n  border-color: #343a40 transparent;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 80px;\n  width: 80px; }\n\n@-webkit-keyframes spinner {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFudWVsbWVkaWF2aWxsYS9EZXNrdG9wL2V4YW1wbGUvdG9wLWFsYnVtcy9zcmMvYXBwL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UscUJBQXFCO0VBQ3JCLFlBYmlCO0VBY2pCLFdBZGlCLEVBQUE7O0FBaUJuQjtFQUNFLCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMseUJDakJpQjtFRGtCakIsaUNBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBeEJpQjtFQXlCakIsV0F6QmlCLEVBQUE7O0FBNEJuQjtFQUNFO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xuXG4kc3Bpbm5lci1zaXplOiA4MHB4O1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAkc3Bpbm5lci1zaXplO1xuICB3aWR0aDogJHNwaW5uZXItc2l6ZTtcbn1cblxuLnNwaW5uZXI6YWZ0ZXIge1xuICBhbmltYXRpb246IHNwaW5uZXIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICRkYXJrLWdyZXk7XG4gIGJvcmRlci1jb2xvcjogJGRhcmstZ3JleSB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAkc3Bpbm5lci1zaXplO1xuICB3aWR0aDogJHNwaW5uZXItc2l6ZTtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZjtcbiRncmV5OiByZ2IoOTksIDk5LCAxMDIpO1xuJGxpZ2h0LWdyZXk6ICNlZWVlZWU7XG4kZXh0cmEtbGlnaHQtZ3JleTogI2Y4ZjhmODtcbiRkYXJrLWdyZXk6ICMzNDNhNDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/screens/detail/detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/screens/detail/detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"loading; else loaded\"></app-spinner>\n\n<ng-template #loaded>\n  <div class=\"section\">\n    <img class=\"image\" [src]=\"album.image\" alt=\"albumimage\">\n    <span class=\"data\">\n      {{album.price.amount | currency: album.price.currency }}, {{album.numberOfSongs}} Songs\n    </span>\n    <span class=\"data rights\">\n      {{album.rights}}\n    </span>\n  </div>\n\n  <div class=\"section\">\n    <div class=\"album-name\">{{album.name}}</div>\n    <div class=\"artist-name\">{{album.artist}}</div>\n    <div class=\"data\">{{album.category}} - {{album.releaseDate | date: 'longDate'}}</div>\n\n    <ng-container *ngIf=\"showRelatedAlbums()\">\n      <div class=\"related\">Related albums</div>\n      <ul class=\"list-group\" *ngFor=\"let relatedAlbum of relatedAlbums\">\n        <li class=\"list-group-item related-album\" (click)=\"updateAlbum(relatedAlbum.category, relatedAlbum.id)\">\n          {{relatedAlbum.title}}\n        </li>\n      </ul>\n    </ng-container>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/screens/detail/detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/screens/detail/detail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\n  font-size: 14px;\n  font-weight: 300; }\n\n.artist-name,\n.related {\n  font-size: 18px;\n  font-weight: 500; }\n\n.album-name {\n  font-size: 32px;\n  font-weight: 700; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  margin: 25px auto;\n  width: 270px; }\n\n.section:first-child {\n  display: flex;\n  flex-direction: column;\n  width: 270px; }\n\n.section:last-child {\n  flex: 2;\n  line-height: 30px;\n  margin-bottom: 20px; }\n\n.album-name {\n  margin-top: 15px; }\n\n.data {\n  color: #636366; }\n\n.related {\n  margin: 20px 0 10px; }\n\n.image {\n  height: 270px;\n  margin-bottom: 10px;\n  width: 270px; }\n\n.rights {\n  margin-top: 10px; }\n\n.related-album:hover {\n  cursor: pointer;\n  background-color: #343a40;\n  color: #ffffff; }\n\n@media (min-width: 576px) {\n  :host {\n    flex-direction: row;\n    width: 536px; }\n  .section:last-child {\n    margin-left: 25px; }\n  .album-name {\n    margin-top: 0; } }\n\n@media (min-width: 768px) {\n  :host {\n    width: 728px; } }\n\n@media (min-width: 992px) {\n  :host {\n    width: 952px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvc2NyZWVucy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hbnVlbG1lZGlhdmlsbGEvRGVza3RvcC9leGFtcGxlL3RvcC1hbGJ1bXMvc3JjL2FwcC9zdHlsZXMvZm9udHMuc2NzcyIsIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvc3R5bGVzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DQTtFQ2xDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FENEJsQjs7RUN4QkUsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBRGtCbEI7RUNURSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FEZGxCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBR0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBTGhCO0VBU0ksT0FBTztFQUNQLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFJdkI7RUFFRSxnQkFBZ0IsRUFBQTs7QUFRbEI7RUFFRSxjRXBDcUIsRUFBQTs7QUZ1Q3ZCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YseUJFcERpQjtFRnFEakIsY0V6RGEsRUFBQTs7QUY0RGY7RUF6REE7SUEyREksbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQXJEaEI7SUF5REksaUJBQWlCLEVBQUE7RUExQ3JCO0lBOENJLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBeEVBO0lBMEVJLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBOUVBO0lBZ0ZJLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9mb250cy5zY3NzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDI1cHggYXV0bztcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4uc2VjdGlvbiB7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyNzBweDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgZmxleDogMjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5hbGJ1bS1uYW1lIHtcbiAgQGV4dGVuZCAlZm9udC0tbGFyZ2U7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5hcnRpc3QtbmFtZSxcbi5yZWxhdGVkIHtcbiAgQGV4dGVuZCAlZm9udC0tbm9ybWFsO1xufVxuXG4uZGF0YSB7XG4gIEBleHRlbmQgJWZvbnQtLXNtYWxsO1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi5yZWxhdGVkIHtcbiAgbWFyZ2luOiAyMHB4IDAgMTBweDtcbn1cblxuLmltYWdlIHtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4ucmlnaHRzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJlbGF0ZWQtYWxidW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyZXk7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNTM2cHg7XG4gIH1cblxuICAuc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuXG4gIC5hbGJ1bS1uYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDcyOHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDk1MnB4O1xuICB9XG59XG5cbiIsIiVmb250LS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuJWZvbnQtLW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuJWZvbnQtLW5vcm1hbC1ib2xkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4lZm9udC0tbGFyZ2Uge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iLCIkd2hpdGU6ICNmZmZmZmY7XG4kZ3JleTogcmdiKDk5LCA5OSwgMTAyKTtcbiRsaWdodC1ncmV5OiAjZWVlZWVlO1xuJGV4dHJhLWxpZ2h0LWdyZXk6ICNmOGY4Zjg7XG4kZGFyay1ncmV5OiAjMzQzYTQwO1xuIl19 */"

/***/ }),

/***/ "./src/app/screens/detail/detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/detail/detail.component.ts ***!
  \****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apple_music_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apple-music-api.service */ "./src/app/services/apple-music-api.service.ts");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(_activatedroute, _appleMusicAPIService, _cdr, _router) {
        this._activatedroute = _activatedroute;
        this._appleMusicAPIService = _appleMusicAPIService;
        this._cdr = _cdr;
        this._router = _router;
        this.relatedAlbums = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var albumId = this._activatedroute.snapshot.paramMap.get("id" /* id */);
        var category = this._activatedroute.snapshot.paramMap.get("category" /* category */);
        this.getAlbumData(category, albumId);
    };
    DetailComponent.prototype.getAlbumData = function (category, albumId) {
        var _this = this;
        this.loading = true;
        this._appleMusicAPIService.getDetails(category, albumId).subscribe(function (response) {
            _this.album = response.album;
            _this.relatedAlbums = response.relatedAlbums;
            _this.loading = false;
            _this._cdr.markForCheck();
        });
    };
    DetailComponent.prototype.showRelatedAlbums = function () {
        return this.relatedAlbums.length > 0;
    };
    DetailComponent.prototype.updateAlbum = function (category, albumId) {
        this._router.navigate(["/detail" /* Detail */, category, albumId]);
        this.getAlbumData(category, albumId);
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/screens/detail/detail.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/screens/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_apple_music_api_service__WEBPACK_IMPORTED_MODULE_3__["AppleMusicAPIService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/screens/home/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/screens/home/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, search) {
        if (!values || !search) {
            return values;
        }
        return values.filter(function (value) {
            var searchText = search.toLowerCase();
            return value.name.toLowerCase().indexOf(searchText) !== -1 ||
                value.artist.toLowerCase().indexOf(searchText) !== -1;
        });
        return values;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/screens/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/screens/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner *ngIf=\"loading; else loaded\"></app-spinner>\n\n<ng-template #loaded>\n  <app-search [(ngModel)]=\"searchText\"></app-search>\n\n  <div class=\"albums-container\">\n    <ng-container *ngIf=\"albums | filter: searchText as result; else noAlbums\">\n      <ng-container *ngFor=\"let album of result\">\n        <app-album [album]=album (click)=\"goToDetail(album)\"></app-album>\n      </ng-container>\n      <ng-container *ngIf=\"!result.length\" [ngTemplateOutlet]=\"noAlbums\"></ng-container>\n    </ng-container>\n\n    <ng-template #noAlbums>\n      <div class=\"empty-container\">We couldn't find any album :(</div>\n    </ng-template>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/screens/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/screens/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-container {\n  font-size: 18px;\n  font-weight: 700; }\n\n:host {\n  display: flex; }\n\n.albums-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 80px auto auto;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW51ZWxtZWRpYXZpbGxhL0Rlc2t0b3AvZXhhbXBsZS90b3AtYWxidW1zL3NyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFudWVsbWVkaWF2aWxsYS9EZXNrdG9wL2V4YW1wbGUvdG9wLWFsYnVtcy9zcmMvYXBwL3N0eWxlcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VDRkUsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBRFZsQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvZm9udHMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFsYnVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogODBweCBhdXRvIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW1wdHktY29udGFpbmVyIHtcbiAgQGV4dGVuZCAlZm9udC0tbm9ybWFsLWJvbGQ7XG59XG4iLCIlZm9udC0tc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiVmb250LS1ub3JtYWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiVmb250LS1ub3JtYWwtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuJWZvbnQtLWxhcmdlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/screens/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apple_music_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apple-music-api.service */ "./src/app/services/apple-music-api.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_appleMusicAPIService, _cdr, _router) {
        this._appleMusicAPIService = _appleMusicAPIService;
        this._cdr = _cdr;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._appleMusicAPIService.getAlbums().subscribe(function (data) {
            _this.albums = data;
            _this.loading = false;
            _this._cdr.markForCheck();
        });
    };
    HomeComponent.prototype.goToDetail = function (album) {
        this._router.navigate(["/detail" /* Detail */, album.category, album.id]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/screens/home/home.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/screens/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apple_music_api_service__WEBPACK_IMPORTED_MODULE_3__["AppleMusicAPIService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/apple-music-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/apple-music-api.service.ts ***!
  \*****************************************************/
/*! exports provided: AppleMusicAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppleMusicAPIService", function() { return AppleMusicAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AppleMusicAPIService = /** @class */ (function () {
    function AppleMusicAPIService(_http) {
        this._http = _http;
    }
    AppleMusicAPIService.prototype.getAlbums = function () {
        if (!this._albums) {
            this._albums = this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].server).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var albumsData = [];
                data.feed.entry.forEach(function (album) {
                    albumsData.push({
                        artist: album['im:artist'].label,
                        category: album.category.attributes.term,
                        id: album.id.attributes['im:id'],
                        image: album['im:image'][2].label,
                        name: album['im:name'].label,
                        numberOfSongs: album['im:itemCount'].label,
                        releaseDate: album['im:releaseDate'].label,
                        rights: album.rights.label,
                        price: album['im:price'].attributes,
                        title: album.title.label,
                    });
                });
                return albumsData;
            }));
        }
        return this._albums;
    };
    AppleMusicAPIService.prototype.getDetails = function (category, id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])({
            album: this._getAlbumDetail(id),
            relatedAlbums: this._getRelatedAlbums(category, id),
        });
    };
    AppleMusicAPIService.prototype._getAlbumDetail = function (id) {
        return this.getAlbums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (albums) { return albums.find(function (album) { return album.id === id; }); }));
    };
    AppleMusicAPIService.prototype._getRelatedAlbums = function (category, id) {
        return this.getAlbums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (albums) { return albums.filter(function (album, index) {
            return (album.category === category && album.id !== id);
        }); }));
    };
    AppleMusicAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppleMusicAPIService);
    return AppleMusicAPIService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    server: 'http://localhost:4200/assets/data.json',
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/manuelmediavilla/Desktop/example/top-albums/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map