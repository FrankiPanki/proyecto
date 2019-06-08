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
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _desarrollo_desarrollo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desarrollo/desarrollo.component */ "./src/app/desarrollo/desarrollo.component.ts");
/* harmony import */ var _cierre_cierre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cierre/cierre.component */ "./src/app/cierre/cierre.component.ts");







var routes = [
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"] },
    { path: 'desarrollo', component: _desarrollo_desarrollo_component__WEBPACK_IMPORTED_MODULE_5__["DesarrolloComponent"] },
    { path: 'cierre', component: _cierre_cierre_component__WEBPACK_IMPORTED_MODULE_6__["CierreComponent"] },
    { path: '', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], pathMatch: 'full' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor{\n\n    width: 100%;\n    height:100%;\n    opacity: 1;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVuZWRvcntcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/info\" routerLinkActive=\"active\" (click)=\"actualiza()\" id=\"1\">Motivacion</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"/info\" routerLinkActive=\"active\"> <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" routerLink=\"/inicio\" routerLinkActive=\"active\" (click)=\"actualiza()\" id=\"2\">Inicio</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/desarrollo\" routerLinkActive=\"active\" (click)=\"actualiza()\"  id=\"3\">Desarrollo</a>\n      <a class=\"nav-item nav-link\" routerLink=\"/cierre\" routerLinkActive=\"active\" (click)=\"actualiza()\" id=\"4\">Cierre</a>\n    </div>\n  </div>\n</nav>\n<div id=\"contenedor\" [@actual]=\"actual\" >\n  <router-outlet ></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyecto';
        this.actual = "estado1";
    }
    AppComponent.prototype.actualiza = function () {
        if (this.actual == "estado1") {
            this.actual = "estado2";
        }
        else {
            this.actual = "estado1";
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("actual", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("estado2<=>estado1", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "0", offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: "1", offset: 1 })
                    ]))),
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _contenedores_cizquierdo_cizquierdo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contenedores/cizquierdo/cizquierdo.component */ "./src/app/contenedores/cizquierdo/cizquierdo.component.ts");
/* harmony import */ var _contenedores_cderecho_cderecho_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contenedores/cderecho/cderecho.component */ "./src/app/contenedores/cderecho/cderecho.component.ts");
/* harmony import */ var _contenedores_carriba_carriba_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contenedores/carriba/carriba.component */ "./src/app/contenedores/carriba/carriba.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _desarrollo_desarrollo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desarrollo/desarrollo.component */ "./src/app/desarrollo/desarrollo.component.ts");
/* harmony import */ var _curvas_cicloide_cicloide_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curvas/cicloide/cicloide.component */ "./src/app/curvas/cicloide/cicloide.component.ts");
/* harmony import */ var _multimedia_planos_planos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./multimedia/planos/planos.component */ "./src/app/multimedia/planos/planos.component.ts");
/* harmony import */ var _curvas_epicicloide_epicicloide_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./curvas/epicicloide/epicicloide.component */ "./src/app/curvas/epicicloide/epicicloide.component.ts");
/* harmony import */ var _curvas_hipocicloide_hipocicloide_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curvas/hipocicloide/hipocicloide.component */ "./src/app/curvas/hipocicloide/hipocicloide.component.ts");
/* harmony import */ var _curvas_seno_seno_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curvas/seno/seno.component */ "./src/app/curvas/seno/seno.component.ts");
/* harmony import */ var _curvas_coseno_coseno_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curvas/coseno/coseno.component */ "./src/app/curvas/coseno/coseno.component.ts");
/* harmony import */ var _cierre_cierre_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cierre/cierre.component */ "./src/app/cierre/cierre.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"],
                _contenedores_cizquierdo_cizquierdo_component__WEBPACK_IMPORTED_MODULE_8__["CizquierdoComponent"],
                _contenedores_cderecho_cderecho_component__WEBPACK_IMPORTED_MODULE_9__["CderechoComponent"],
                _contenedores_carriba_carriba_component__WEBPACK_IMPORTED_MODULE_10__["CarribaComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"],
                _desarrollo_desarrollo_component__WEBPACK_IMPORTED_MODULE_12__["DesarrolloComponent"],
                _curvas_cicloide_cicloide_component__WEBPACK_IMPORTED_MODULE_13__["CicloideComponent"],
                _multimedia_planos_planos_component__WEBPACK_IMPORTED_MODULE_14__["PlanosComponent"],
                _curvas_epicicloide_epicicloide_component__WEBPACK_IMPORTED_MODULE_15__["EpicicloideComponent"],
                _curvas_hipocicloide_hipocicloide_component__WEBPACK_IMPORTED_MODULE_16__["HipocicloideComponent"],
                _curvas_seno_seno_component__WEBPACK_IMPORTED_MODULE_17__["SenoComponent"],
                _curvas_coseno_coseno_component__WEBPACK_IMPORTED_MODULE_18__["CosenoComponent"],
                _cierre_cierre_component__WEBPACK_IMPORTED_MODULE_19__["CierreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            /*,schemas: [
              CUSTOM_ELEMENTS_SCHEMA,
              NO_ERRORS_SCHEMA
            ]*/
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cierre/cierre.component.css":
/*!*********************************************!*\
  !*** ./src/app/cierre/cierre.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ojo{\n    width: 40px;\n    height: 40px;\n    background: url('ver.svg');\n    cursor: pointer;\n}\n.visible{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n#contenedor{\n    width: 100%;\n    height: 90%;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    grid-template-rows: 40% 60%;\n    grid-template-areas: \"escena info\"\n                         \"escena ojos\";\n}\n#escena{\n    grid-row-start: escena;\n    grid-column-start: escena;\n    grid-row-end: escena;\n    grid-column-end: escena;\n    justify-self: center;\n    padding-top: 5%;\n}\n#info{\n    grid-row-start: info;\n    grid-column-start: info;\n    grid-row-end: info;\n    grid-column-end: info;\n    padding-top: 2%;\n\n}\n#ojos{\n    grid-row-start: ojos;\n    grid-column-start: ojos;\n    grid-row-end: ojos;\n    grid-column-end: ojos;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2llcnJlL2NpZXJyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBNEM7SUFDNUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUlBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQjtzQ0FDa0M7QUFDdEM7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jaWVycmUvY2llcnJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2pve1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbmZvL3Zlci5zdmcnKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlzaWJsZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbn1cblxuXG5cbiNjb250ZW5lZG9ye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDYwJTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImVzY2VuYSBpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImVzY2VuYSBvam9zXCI7XG59XG5cbiNlc2NlbmF7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IGVzY2VuYTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogZXNjZW5hO1xuICAgIGdyaWQtcm93LWVuZDogZXNjZW5hO1xuICAgIGdyaWQtY29sdW1uLWVuZDogZXNjZW5hO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbn1cbiNpbmZve1xuICAgIGdyaWQtcm93LXN0YXJ0OiBpbmZvO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBpbmZvO1xuICAgIGdyaWQtcm93LWVuZDogaW5mbztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IGluZm87XG4gICAgcGFkZGluZy10b3A6IDIlO1xuXG59XG4jb2pvc3tcbiAgICBncmlkLXJvdy1zdGFydDogb2pvcztcbiAgICBncmlkLWNvbHVtbi1zdGFydDogb2pvcztcbiAgICBncmlkLXJvdy1lbmQ6IG9qb3M7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBvam9zO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cierre/cierre.component.html":
/*!**********************************************!*\
  !*** ./src/app/cierre/cierre.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenedor\">\n  <div id=\"escena\">\n    <div [ngSwitch]=\"choice\">\n      <app-planos ancho=700 largo=500 opcion=\"control\" r2=\"si\" #plano>\n        <app-cicloide *ngSwitchCase=\"'cicloide'\" #curva ancho=700 largo=500></app-cicloide>\n        <app-epicicloide *ngSwitchCase=\"'epicicloide'\" #curva ancho=700 largo=500></app-epicicloide>\n        <app-hipocicloide *ngSwitchCase=\"'hipocicloide'\" #curva ancho=700 largo=500></app-hipocicloide>\n      </app-planos>\n    </div>\n  </div>\n  <div id=\"info\">\n\n    <ngb-tabset>\n      <ngb-tab>\n        <ng-template ngbTabTitle ><span (click)=\"cambio(0)\"> cicloide</span></ng-template>\n        <ng-template ngbTabContent>\n          <h3>Parametrizacion clicloide </h3>\n          <p>\n              (x(t), y(t))=r(t-sent),r(1-cost)\n          </p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab >\n          <ng-template ngbTabTitle ><span (click)=\"cambio(1)\">epicicloide</span></ng-template>\n\n        <ng-template ngbTabContent>\n            <h3>Parametrizacion epicicloide </h3>\n\n          <p>\n              (x(t), y(t))=r(t-sent),r(1-cost)\n          </p>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab >\n          <ng-template ngbTabTitle ><span (click)=\"cambio(2)\">hipocicloide</span></ng-template>\n\n        <ng-template ngbTabContent>\n            <h3>Parametrizacion hipocicloide </h3>\n\n          <p>\n              (x(t), y(t))=r(t-sent),r(1-cost)\n          </p>\n        </ng-template>\n      </ngb-tab>\n\n    </ngb-tabset>\n  </div>\n  <div id=\"ojos\">\n    <h3>Componentes</h3>\n    <div class=\"card\" style=\"width: 18rem;\">\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item visible\">\n          <div id=\"ojo1\" class=\"ojo\" ojo=\"si\"></div><span>generatriz</span>\n        </li>\n        <li class=\"list-group-item visible\">\n          <div id=\"ojo2\" class=\"ojo\" ojo=\"si\"></div>base\n        </li>\n        <li class=\"list-group-item visible\">\n          <div id=\"ojo3\" class=\"ojo\" ojo=\"si\"></div>curva\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cierre/cierre.component.ts":
/*!********************************************!*\
  !*** ./src/app/cierre/cierre.component.ts ***!
  \********************************************/
/*! exports provided: CierreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CierreComponent", function() { return CierreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _multimedia_planos_planos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../multimedia/planos/planos.component */ "./src/app/multimedia/planos/planos.component.ts");



var CierreComponent = /** @class */ (function () {
    function CierreComponent() {
        this.choice = "cicloide";
    }
    CierreComponent.prototype.ngOnInit = function () {
        $(".ojo").click(function () {
            if ($(this).attr('ojo') == "si") {
                $(this).css("background", "url('../../assets/info/ocultar.svg')");
                $(this).attr('ojo', 'no');
            }
            else {
                $(this).css("background", "url('../../assets/info/ver.svg')");
                $(this).attr('ojo', 'si');
            }
        });
    };
    CierreComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $("#ojo1").click(function () {
            _this.plano.curva.showGeneratriz();
            _this.choice;
        });
        $("#ojo2").click(function () {
            _this.plano.curva.showBase();
        });
        $("#ojo3").click(function () {
            _this.plano.curva.showCurva();
        });
    };
    CierreComponent.prototype.cambio = function (i) {
        console.log(this.choice);
        switch (i) {
            case 0:
                this.choice = "cicloide";
                break;
            case 1:
                this.choice = "epicicloide";
                break;
            case 2:
                this.choice = "hipocicloide";
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('plano'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _multimedia_planos_planos_component__WEBPACK_IMPORTED_MODULE_2__["PlanosComponent"])
    ], CierreComponent.prototype, "plano", void 0);
    CierreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cierre',
            template: __webpack_require__(/*! ./cierre.component.html */ "./src/app/cierre/cierre.component.html"),
            styles: [__webpack_require__(/*! ./cierre.component.css */ "./src/app/cierre/cierre.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CierreComponent);
    return CierreComponent;
}());



/***/ }),

/***/ "./src/app/contenedores/carriba/carriba.component.css":
/*!************************************************************!*\
  !*** ./src/app/contenedores/carriba/carriba.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor{\n    height: 95vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 10% 60% 30%;\n    grid-template-columns: 100%;\n\n}\n\n#texto{\n    overflow: scroll;\n    overflow-x:hidden;\n    padding: 2%;\n    background-color: rgb(215, 215, 215);\n\n\n}\n\n#contenido {\n    padding: 1%;\n    display: flex;\n    align-items: center;\n    justify-items: center;\n}\n\n#titulo{\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuZWRvcmVzL2NhcnJpYmEvY2FycmliYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBb0M7OztBQUd4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmVkb3Jlcy9jYXJyaWJhL2NhcnJpYmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW5lZG9ye1xuICAgIGhlaWdodDogOTV2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA2MCUgMzAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcblxufVxuXG4jdGV4dG97XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG5cblxufVxuXG4jY29udGVuaWRvIHtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jdGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contenedores/carriba/carriba.component.html":
/*!*************************************************************!*\
  !*** ./src/app/contenedores/carriba/carriba.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contenedor\">\n  <div id=\"titulo\">\n    <ng-content select=\"[titulo]\"></ng-content>\n  </div>\n  <div id=\"contenido\">\n\n    <ng-content select=\"[imagen]\"></ng-content>\n  </div>\n\n\n  <div id=\"texto\">\n    <ng-content select=\"[tex]\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contenedores/carriba/carriba.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/contenedores/carriba/carriba.component.ts ***!
  \***********************************************************/
/*! exports provided: CarribaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarribaComponent", function() { return CarribaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarribaComponent = /** @class */ (function () {
    function CarribaComponent() {
    }
    CarribaComponent.prototype.ngOnInit = function () {
        //console.log(this.hola);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CarribaComponent.prototype, "hola", void 0);
    CarribaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carriba',
            template: __webpack_require__(/*! ./carriba.component.html */ "./src/app/contenedores/carriba/carriba.component.html"),
            styles: [__webpack_require__(/*! ./carriba.component.css */ "./src/app/contenedores/carriba/carriba.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarribaComponent);
    return CarribaComponent;
}());



/***/ }),

/***/ "./src/app/contenedores/cderecho/cderecho.component.css":
/*!**************************************************************!*\
  !*** ./src/app/contenedores/cderecho/cderecho.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor{\n    height: 88vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 100%;\n\n}\n\n#texto{\n    overflow: scroll;\n    overflow-x:hidden;\n    padding: 2%;\n    background-color: rgb(215, 215, 215);\n\n}\n\n#contenido{\n    padding: 1%;\n    display: flex;\n    align-items: flex-start;\n    justify-items: center;\n    justify-self: center;\n}\n\n#titulo{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuZWRvcmVzL2NkZXJlY2hvL2NkZXJlY2hvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGVuZWRvcmVzL2NkZXJlY2hvL2NkZXJlY2hvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVuZWRvcntcbiAgICBoZWlnaHQ6IDg4dmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcblxufVxuXG4jdGV4dG97XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG5cbn1cblxuI2NvbnRlbmlkb3tcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI3RpdHVsb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/contenedores/cderecho/cderecho.component.html":
/*!***************************************************************!*\
  !*** ./src/app/contenedores/cderecho/cderecho.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"titulo\">\n    <ng-content select=\"[titulo]\"></ng-content>\n  </div>\n<div id=\"contenedor\">\n  <div id=\"texto\">\n    <ng-content select=\"[tex]\"></ng-content>\n  </div>\n  <div id=\"contenido\">\n    <ng-content select=\"[imagen]\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contenedores/cderecho/cderecho.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/contenedores/cderecho/cderecho.component.ts ***!
  \*************************************************************/
/*! exports provided: CderechoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CderechoComponent", function() { return CderechoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CderechoComponent = /** @class */ (function () {
    function CderechoComponent() {
    }
    CderechoComponent.prototype.ngOnInit = function () {
    };
    CderechoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cderecho',
            template: __webpack_require__(/*! ./cderecho.component.html */ "./src/app/contenedores/cderecho/cderecho.component.html"),
            styles: [__webpack_require__(/*! ./cderecho.component.css */ "./src/app/contenedores/cderecho/cderecho.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CderechoComponent);
    return CderechoComponent;
}());



/***/ }),

/***/ "./src/app/contenedores/cizquierdo/cizquierdo.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contenedores/cizquierdo/cizquierdo.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contenedor{\n    height: 88vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 100%;\n\n}\n\n#texto{\n    overflow: scroll;\n    overflow-x:hidden;\n    padding: 2%;\n    background-color: rgb(215, 215, 215);\n}\n\n#contenido{\n    padding: 1%;\n    display: flex;\n    align-items: flex-start;\n    justify-items: center;\n    justify-self: center;\n\n}\n\n#titulo{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuZWRvcmVzL2NpenF1aWVyZG8vY2l6cXVpZXJkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmVkb3Jlcy9jaXpxdWllcmRvL2NpenF1aWVyZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW5lZG9ye1xuICAgIGhlaWdodDogODh2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuXG59XG5cbiN0ZXh0b3tcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1KTtcbn1cblxuI2NvbnRlbmlkb3tcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblxufVxuXG4jdGl0dWxve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contenedores/cizquierdo/cizquierdo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contenedores/cizquierdo/cizquierdo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"titulo\">\n    <ng-content select=\"[titulo]\"></ng-content>\n  </div>\n<div id=\"contenedor\">\n  <div id=\"contenido\">\n      <ng-content select=\"[imagen]\"></ng-content>\n    </div>\n  <div id=\"texto\">\n    <ng-content select=\"[tex]\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contenedores/cizquierdo/cizquierdo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contenedores/cizquierdo/cizquierdo.component.ts ***!
  \*****************************************************************/
/*! exports provided: CizquierdoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CizquierdoComponent", function() { return CizquierdoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CizquierdoComponent = /** @class */ (function () {
    function CizquierdoComponent() {
    }
    CizquierdoComponent.prototype.ngOnInit = function () {
    };
    CizquierdoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cizquierdo',
            template: __webpack_require__(/*! ./cizquierdo.component.html */ "./src/app/contenedores/cizquierdo/cizquierdo.component.html"),
            styles: [__webpack_require__(/*! ./cizquierdo.component.css */ "./src/app/contenedores/cizquierdo/cizquierdo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CizquierdoComponent);
    return CizquierdoComponent;
}());



/***/ }),

/***/ "./src/app/curvas/cicloide/cicloide.component.css":
/*!********************************************************!*\
  !*** ./src/app/curvas/cicloide/cicloide.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#circulo{\n    width: 1400px;\n    height: 300px;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VydmFzL2NpY2xvaWRlL2NpY2xvaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2N1cnZhcy9jaWNsb2lkZS9jaWNsb2lkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NpcmN1bG97XG4gICAgd2lkdGg6IDE0MDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/curvas/cicloide/cicloide.component.html":
/*!*********************************************************!*\
  !*** ./src/app/curvas/cicloide/cicloide.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <svg [attr.width]=\"ancho\" [attr.height]=\"largo\">\n  \n    <circle [attr.cx]=\"calculaX()\" [attr.cy]=\"calculaY()\" [attr.r]=\"radio\" [attr.stroke]=\"borde\" \n    [attr.stroke-width]=\"sancho\" style=\"fill-opacity: .0; \" class=\"generatriz\"/>\n    <path id=\"recta\" [attr.d]='calculaRecta()' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" class=\"generatriz\" />\n    <path id=\"curva\" [attr.d]='curva' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" class=\"curva\" />\n  </svg>\n"

/***/ }),

/***/ "./src/app/curvas/cicloide/cicloide.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/curvas/cicloide/cicloide.component.ts ***!
  \*******************************************************/
/*! exports provided: CicloideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CicloideComponent", function() { return CicloideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Curva */ "./src/app/models/Curva.ts");



var CicloideComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CicloideComponent, _super);
    function CicloideComponent() {
        return _super.call(this) || this;
    }
    // ngOnInit(){}
    CicloideComponent.prototype.ngOnInit = function () {
        this.psudoContructor(3, 1);
        this.radio = this.scala * this.radioV2;
        this.cx = this.calculaX();
        this.cy = this.calculaY();
        this.borde = "black";
        this.sancho = 1;
        this.curva = "M " + this.calculaXP() + " " + this.calculaYP();
    };
    CicloideComponent.prototype.cambio = function () {
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
        this.cx = this.calculaX();
    };
    CicloideComponent.prototype.cambioControlmas = function () {
        this.pilaCurva.push(this.curva.length);
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
        this.cx = this.calculaX();
    };
    CicloideComponent.prototype.cambioControlmenos = function () {
        this.curva = this.curva.substring(0, this.pilaCurva.pop());
        this.cx = this.calculaX();
    };
    CicloideComponent.prototype.calculaYP = function () {
        return -(this.radio * (1 - Math.cos(this.tiempo))) + this.origeny;
    };
    CicloideComponent.prototype.calculaXP = function () {
        return this.radio * (this.tiempo - Math.sin(this.tiempo)) + this.origenx;
    };
    CicloideComponent.prototype.calculaRecta = function () {
        return "M " + this.calculaX() + " " + this.calculaY() + " L " + this.calculaXP() + " " + this.calculaYP();
    };
    CicloideComponent.prototype.calculaX = function () {
        return this.cx = (this.tiempo * this.radio) + this.origenx;
    };
    CicloideComponent.prototype.calculaY = function () {
        return this.cy = -this.radio + this.origeny;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CicloideComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CicloideComponent.prototype, "largo", void 0);
    CicloideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cicloide',
            template: __webpack_require__(/*! ./cicloide.component.html */ "./src/app/curvas/cicloide/cicloide.component.html"),
            styles: [__webpack_require__(/*! ./cicloide.component.css */ "./src/app/curvas/cicloide/cicloide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CicloideComponent);
    return CicloideComponent;
}(_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"]));



/***/ }),

/***/ "./src/app/curvas/coseno/coseno.component.css":
/*!****************************************************!*\
  !*** ./src/app/curvas/coseno/coseno.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnZhcy9jb3Nlbm8vY29zZW5vLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/curvas/coseno/coseno.component.html":
/*!*****************************************************!*\
  !*** ./src/app/curvas/coseno/coseno.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <svg [attr.width]=\"ancho\" [attr.height]=\"largo\">\n  \n    <circle [attr.cx]=\"cx\" [attr.cy]=\"cy\" [attr.r]=\"radio\" [attr.stroke]=\"borde\" \n    [attr.stroke-width]=\"sancho\" style=\"fill-opacity: .0; \"/>\n    <path id=\"recta\" [attr.d]='calculaRecta()' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" />\n    <path id=\"curva\" [attr.d]='curva' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" />\n  </svg>"

/***/ }),

/***/ "./src/app/curvas/coseno/coseno.component.ts":
/*!***************************************************!*\
  !*** ./src/app/curvas/coseno/coseno.component.ts ***!
  \***************************************************/
/*! exports provided: CosenoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CosenoComponent", function() { return CosenoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Curva */ "./src/app/models/Curva.ts");



var CosenoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CosenoComponent, _super);
    function CosenoComponent() {
        return _super.call(this) || this;
    }
    CosenoComponent.prototype.ngOnInit = function () {
        this.psudoContructor(3, 1);
        this.curva = "M " + this.mapeaOrigenX(this.escalr(this.tiempo)) + " " + this.calculaYP();
        this.cx = this.origenx;
        this.cy = this.origeny;
        this.radio = this.scala;
        this.borde = "black";
        this.sancho = 1;
    };
    CosenoComponent.prototype.escalr = function (numero) {
        return numero * this.scala;
    };
    CosenoComponent.prototype.mapeaOrigenX = function (numero) {
        return numero + this.origenx;
    };
    CosenoComponent.prototype.calculaX = function () {
        return this.cx = this.mapeaOrigenX(this.escalr(Math.sin(this.tiempo)) + this.escalr(this.tiempo));
    };
    CosenoComponent.prototype.calculaYP = function () {
        return -(this.escalr((Math.cos(this.tiempo)))) + this.origeny;
    };
    CosenoComponent.prototype.calculaRecta = function () {
        return "M " + this.cx + " " + this.cy + " L " + this.mapeaOrigenX(this.escalr(this.tiempo)) + " " + this.calculaYP();
    };
    CosenoComponent.prototype.cambio = function () {
        this.cx = this.calculaX();
        this.curva += "L " + this.mapeaOrigenX(this.escalr(this.tiempo)) + " " + this.calculaYP();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CosenoComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CosenoComponent.prototype, "largo", void 0);
    CosenoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coseno',
            template: __webpack_require__(/*! ./coseno.component.html */ "./src/app/curvas/coseno/coseno.component.html"),
            styles: [__webpack_require__(/*! ./coseno.component.css */ "./src/app/curvas/coseno/coseno.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CosenoComponent);
    return CosenoComponent;
}(_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"]));



/***/ }),

/***/ "./src/app/curvas/epicicloide/epicicloide.component.css":
/*!**************************************************************!*\
  !*** ./src/app/curvas/epicicloide/epicicloide.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnZhcy9lcGljaWNsb2lkZS9lcGljaWNsb2lkZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/curvas/epicicloide/epicicloide.component.html":
/*!***************************************************************!*\
  !*** ./src/app/curvas/epicicloide/epicicloide.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <svg [attr.width]=\"ancho\" [attr.height]=\"largo\">\n  \n    <circle [attr.cx]=\"cx2\" [attr.cy]=\"cy2\" [attr.r]=\"radio2\" [attr.stroke]=\"borde2\" \n    [attr.stroke-width]=\"sancho2\" style=\"fill-opacity: .0; \" class=\"base\" />\n    <circle [attr.cx]=\"calculaX()\" [attr.cy]=\"calculaY()\" [attr.r]=\"radio\" [attr.stroke]=\"borde\" \n    [attr.stroke-width]=\"sancho\" style=\"fill-opacity: .0; \" class=\"generatriz\" />\n    <path id=\"recta\" [attr.d]='calculaRecta()' stroke=\"purple\" stroke-width=\"2\" fill=\"none\" class=\"generatriz\" />\n    <path id=\"curva\" [attr.d]='curva' stroke=\"purple\" stroke-width=\"2\" fill=\"none\" class=\"curva\" />\n  </svg>\n\n"

/***/ }),

/***/ "./src/app/curvas/epicicloide/epicicloide.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/curvas/epicicloide/epicicloide.component.ts ***!
  \*************************************************************/
/*! exports provided: EpicicloideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpicicloideComponent", function() { return EpicicloideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Curva */ "./src/app/models/Curva.ts");



var EpicicloideComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EpicicloideComponent, _super);
    function EpicicloideComponent() {
        return _super.call(this) || this;
    }
    EpicicloideComponent.prototype.ngOnInit = function () {
        this.psudoContructor(3, 1);
        //circulo2 (directriz)
        this.cx2 = this.origenx;
        this.cy2 = this.origeny;
        this.radio2 = (this.scala) * this.radioV1;
        this.borde2 = "blue";
        this.sancho2 = 1;
        //circulo 2
        this.borde = "black";
        this.sancho = 1;
        this.radio = (this.scala) * this.radioV2;
        this.calculaX();
        this.calculaY();
        //curva
        this.curva = "M " + this.calculaXP() + " " + this.calculaYP();
    };
    EpicicloideComponent.prototype.cambio = function () {
        this.calculaX();
        this.calculaY();
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
    };
    EpicicloideComponent.prototype.cambioControlmas = function () {
        this.pilaCurva.push(this.curva.length);
        this.calculaX();
        this.calculaY();
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
    };
    EpicicloideComponent.prototype.cambioControlmenos = function () {
        this.curva = this.curva.substring(0, this.pilaCurva.pop());
        this.calculaX();
        this.calculaY();
    };
    EpicicloideComponent.prototype.calculaRecta = function () {
        return "M " + this.cx + " " + this.cy + " L " + this.calculaXP() + " " + this.calculaYP();
    };
    EpicicloideComponent.prototype.calculaYP = function () {
        return ((this.radio + this.radio2) * Math.cos(this.tiempo)) - ((this.radio) * Math.cos(((this.radio + this.radio2) / (this.radio)) * (this.tiempo))) + this.origeny;
    };
    EpicicloideComponent.prototype.calculaXP = function () {
        return ((this.radio + this.radio2) * Math.sin(this.tiempo)) - ((this.radio) * Math.sin(((this.radio + this.radio2) / (this.radio)) * (this.tiempo))) + this.origenx;
    };
    EpicicloideComponent.prototype.calculaX = function () {
        return this.cx = ((this.radio + this.radio2) * Math.sin(this.tiempo)) + this.origenx;
    };
    EpicicloideComponent.prototype.calculaY = function () {
        return this.cy = ((this.radio + this.radio2) * Math.cos(this.tiempo)) + this.origeny;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EpicicloideComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EpicicloideComponent.prototype, "largo", void 0);
    EpicicloideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-epicicloide',
            template: __webpack_require__(/*! ./epicicloide.component.html */ "./src/app/curvas/epicicloide/epicicloide.component.html"),
            styles: [__webpack_require__(/*! ./epicicloide.component.css */ "./src/app/curvas/epicicloide/epicicloide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EpicicloideComponent);
    return EpicicloideComponent;
}(_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"]));



/***/ }),

/***/ "./src/app/curvas/hipocicloide/hipocicloide.component.css":
/*!****************************************************************!*\
  !*** ./src/app/curvas/hipocicloide/hipocicloide.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnZhcy9oaXBvY2ljbG9pZGUvaGlwb2NpY2xvaWRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/curvas/hipocicloide/hipocicloide.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/curvas/hipocicloide/hipocicloide.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg [attr.width]=\"ancho\" [attr.height]=\"largo\">\n  \n  <circle [attr.cx]=\"cx2\" [attr.cy]=\"cy2\" [attr.r]=\"radio2\" [attr.stroke]=\"borde2\" \n  [attr.stroke-width]=\"sancho2\" style=\"fill-opacity: .0; \" class=\"base\"/>\n  <circle [attr.cx]=\"calculaX()\" [attr.cy]=\"calculaY()\" [attr.r]=\"radio\" [attr.stroke]=\"borde\" \n  [attr.stroke-width]=\"sancho\" style=\"fill-opacity: .0; \" class=\"generatriz\" />\n  <path id=\"recta\" [attr.d]='calculaRecta()' stroke=\"purple\" stroke-width=\"2\" fill=\"none\" class=\"generatriz\" />\n  <path id=\"curva\" [attr.d]='curva' stroke=\"purple\" stroke-width=\"2\" fill=\"none\" class=\"curva\" />\n</svg>\n"

/***/ }),

/***/ "./src/app/curvas/hipocicloide/hipocicloide.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/curvas/hipocicloide/hipocicloide.component.ts ***!
  \***************************************************************/
/*! exports provided: HipocicloideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HipocicloideComponent", function() { return HipocicloideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Curva */ "./src/app/models/Curva.ts");



var HipocicloideComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HipocicloideComponent, _super);
    function HipocicloideComponent() {
        return _super.call(this) || this;
    }
    HipocicloideComponent.prototype.ngOnInit = function () {
        this.psudoContructor(3, 1);
        //circulo2 (directriz)
        this.cx2 = this.origenx;
        this.cy2 = this.origeny;
        this.radio2 = (this.scala) * this.radioV1;
        this.borde2 = "blue";
        this.sancho2 = 1;
        //circulo 2
        this.borde = "black";
        this.sancho = 1;
        this.radio = (this.scala) * this.radioV2;
        this.cx = this.calculaX();
        this.cy = this.calculaY();
        //curva
        this.curva = "M " + this.calculaXP() + " " + this.calculaYP();
    };
    HipocicloideComponent.prototype.cambio = function () {
        this.cx = this.calculaX();
        this.cy = this.calculaY();
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
    };
    HipocicloideComponent.prototype.cambioControlmas = function () {
        this.pilaCurva.push(this.curva.length);
        this.cx = this.calculaX();
        this.cy = this.calculaY();
        this.curva += "L " + this.calculaXP() + " " + this.calculaYP();
    };
    HipocicloideComponent.prototype.cambioControlmenos = function () {
        this.curva = this.curva.substring(0, this.pilaCurva.pop());
        this.cx = this.calculaX();
        this.cy = this.calculaY();
    };
    HipocicloideComponent.prototype.calculaRecta = function () {
        return "M " + this.cx + " " + this.cy + " L " + this.calculaXP() + " " + this.calculaYP();
    };
    HipocicloideComponent.prototype.calculaYP = function () {
        return ((this.radio2 - this.radio) * Math.cos(this.tiempo)) - ((this.radio) * Math.cos(((this.radio - this.radio2) / (this.radio)) * (this.tiempo))) + this.origeny;
    };
    HipocicloideComponent.prototype.calculaXP = function () {
        return ((this.radio2 - this.radio) * Math.sin(this.tiempo)) - ((this.radio) * Math.sin(((this.radio - this.radio2) / (this.radio)) * (this.tiempo))) + this.origenx;
    };
    HipocicloideComponent.prototype.calculaX = function () {
        return ((this.radio2 - this.radio) * Math.sin(this.tiempo)) + this.origenx;
    };
    HipocicloideComponent.prototype.calculaY = function () {
        return ((this.radio2 - this.radio) * Math.cos(this.tiempo)) + this.origeny;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HipocicloideComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HipocicloideComponent.prototype, "largo", void 0);
    HipocicloideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hipocicloide',
            template: __webpack_require__(/*! ./hipocicloide.component.html */ "./src/app/curvas/hipocicloide/hipocicloide.component.html"),
            styles: [__webpack_require__(/*! ./hipocicloide.component.css */ "./src/app/curvas/hipocicloide/hipocicloide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HipocicloideComponent);
    return HipocicloideComponent;
}(_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"]));



/***/ }),

/***/ "./src/app/curvas/seno/seno.component.css":
/*!************************************************!*\
  !*** ./src/app/curvas/seno/seno.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnZhcy9zZW5vL3Nlbm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/curvas/seno/seno.component.html":
/*!*************************************************!*\
  !*** ./src/app/curvas/seno/seno.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <svg [attr.width]=\"ancho\" [attr.height]=\"largo\">\n  \n    <circle [attr.cx]=\"cx\" [attr.cy]=\"cy\" [attr.r]=\"radio\" [attr.stroke]=\"borde\" \n    [attr.stroke-width]=\"sancho\" style=\"fill-opacity: .0; \"/>\n    <path id=\"recta\" [attr.d]='calculaRecta()' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" />\n    <path id=\"curva\" [attr.d]='curva' stroke=\"blue\" stroke-width=\"2\" fill=\"none\" />\n  </svg>"

/***/ }),

/***/ "./src/app/curvas/seno/seno.component.ts":
/*!***********************************************!*\
  !*** ./src/app/curvas/seno/seno.component.ts ***!
  \***********************************************/
/*! exports provided: SenoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenoComponent", function() { return SenoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Curva */ "./src/app/models/Curva.ts");



var SenoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SenoComponent, _super);
    function SenoComponent() {
        return _super.call(this) || this;
    }
    SenoComponent.prototype.ngOnInit = function () {
        this.psudoContructor(3, 1);
        this.curva = "M " + this.origenx + " " + this.origeny;
        this.cx = this.calculaX();
        this.cy = this.origeny;
        this.radio = this.scala;
        this.borde = "black";
        this.sancho = 1;
    };
    SenoComponent.prototype.escalr = function (numero) {
        return numero * this.scala;
    };
    SenoComponent.prototype.mapeaOrigenX = function (numero) {
        return numero + this.origenx;
    };
    SenoComponent.prototype.calculaX = function () {
        return this.cx = this.mapeaOrigenX(this.escalr(Math.cos(this.tiempo)) + this.escalr(this.tiempo));
    };
    SenoComponent.prototype.calculaYP = function () {
        return -(this.escalr((Math.sin(this.tiempo)))) + this.origeny;
    };
    SenoComponent.prototype.calculaRecta = function () {
        return "M " + this.cx + " " + this.cy + " L " + this.mapeaOrigenX(this.escalr(this.tiempo)) + " " + this.calculaYP();
    };
    SenoComponent.prototype.cambio = function () {
        this.cx = this.calculaX();
        this.curva += "L " + this.mapeaOrigenX(this.escalr(this.tiempo)) + " " + this.calculaYP();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SenoComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SenoComponent.prototype, "largo", void 0);
    SenoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seno',
            template: __webpack_require__(/*! ./seno.component.html */ "./src/app/curvas/seno/seno.component.html"),
            styles: [__webpack_require__(/*! ./seno.component.css */ "./src/app/curvas/seno/seno.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SenoComponent);
    return SenoComponent;
}(_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"]));



/***/ }),

/***/ "./src/app/desarrollo/desarrollo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/desarrollo/desarrollo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n    background-color: rgba(255,255,255,.8);\n}\n#contenedor{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n}\n#ruleta{\n    width: 100%;\n    height: 20%;\n    padding: 2%;\n    font-size: 120%;\n    background-color: rgb(215, 215, 215);\n\n}\nspan{\n    font-weight: bold;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzYXJyb2xsby9kZXNhcnJvbGxvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixvQ0FBb0M7O0FBRXhDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGVzYXJyb2xsby9kZXNhcnJvbGxvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xufVxuI2NvbnRlbmVkb3J7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG59XG5cbiNydWxldGF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1KTtcblxufVxuc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"

/***/ }),

/***/ "./src/app/desarrollo/desarrollo.component.html":
/*!******************************************************!*\
  !*** ./src/app/desarrollo/desarrollo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\" id=\"nav\" #nav>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrol(3)\">^</a>\n      </li>\n \n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(0)\">Cicloide</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(1)\">Epicicloide</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(2)\">Hipocicloide</a>\n  </li>\n\n</ul>\n\n\n<div #cicloide>\n    <app-carriba>\n      <ng-container titulo>\n        <h2>CICLOIDE</h2>\n      </ng-container>\n      <ng-container tex>\n        <h3>CICLOIDE</h3>\n        En la figura de arriba se ha presentado la situación que se produce un poco después de que el círculo ha empezado a rodar. Lo más natural es escoger como parámetro a t en radianes como el ángulo, pues esta corresponde al ángulo de rotación del círculo. Así que nuestro problema se reduce a expresar las coordenadas del punto P en función de t, o dicho de otro modo, encontrar una expresión tal que |OC|= media del arco PC=rt.\n          <br><br>\n          La observación crucial que hay que hacer al respecto es que la medida del segmento de recta OC, en azul, es igual a la medida del arco PC, tambien en azul, puesto que el círculo rueda sin resbalar. Ahora bien, x=|OC|- |PS|= rt-rsent y y=|Ct|-|CtS|=r-r cost, con lo que obtenemos las ecuaciones buscadas:\n          <br><br>\n          x=rt-rsent=r(t-sent) y y=r-rcost=r(1-cost)\n          <br><br>\n          Hay algo que explicar en esta parametrización. Si se observa bien, estas ecuaciones pueden verse como el resultado de sumar dos parametrizaciones distintas, pues el punto puede expresarse de la forma: (x,y)=r(t)=(rt,r)+(-rsent,rcost)=h(t)+c(t), donde h(t) corresponde a la traslación del centro de la circunferencia y c(t) a la rotación de un punto sobre la circunferencia de radio r.\n\n\n      </ng-container>\n      <ng-container imagen>\n        <div id=\"dcontenedor\">\n          <app-planos ancho=1400 largo=300 opcion=\"control\">\n            <app-cicloide #curva ancho=1400 largo=300></app-cicloide>\n          </app-planos>\n        </div>\n      </ng-container>\n    </app-carriba>\n  </div>\n\n\n<br><br>\n  <div #epicicloide>\n      <app-cderecho>\n        <ng-container titulo>\n          <h2>EPICICLOIDE</h2>\n        </ng-container>\n        <ng-container tex>\n          <h3>EPICICLOIDE</h3>\n          Una epicicloide es la curva que describe la trayectoria de un punto de una circunferencia que gira sin resbalar o deslizarse sobre otra circunferencia de base.\n          <br><br>\n          En este caso la circunferencia generatriz tiene un radio r y la circunferencia de base tiene radio R. Presiona el pulsador t para generar la curva. Prueba distintos valores de r y R.\n          <br><br>\n          ¿Como es la curva cuando la relación entre los radios R/r es un número entero?¿Como es la curva cuando esta relación no es un numero entero?.\n          <br><br>\n          Las circunferencias son siempre tangentes.\n          <br>Las coordenadas del centro Ct son\n          <br><br>\n          Ct=((R+r)cost,(R+r)sent) \n          <br><br>\n          Consideremos ahora la posición del punto Pt con respecto a Ct como Pt está a una distancia de r de ct y el ángulo está retrasado pi rad, tenemos que:\n          <br>PtCt=(rcost(phi-pi),rsen(phi-pi))=(-rcosphi, .rsenphi)\n          <br><br>\n          ¿Cual es la relación entre los ángulos formados por los segmentos CtPt y el radio R y el eje X?\n          <br><br>\n          Hay algo que explicar en esta parametrización. Si se observa bien, estas ecuaciones pueden verse como el resultado de sumar dos parametrizaciones distintas, pues el punto puede expresarse de la forma: (x,y)=r(t)=(rt,r)+(-rsent,rcost)=h(t)+c(t), donde h(t) corresponde a la traslación del centro de la circunferencia y c(t) a la rotación de un punto sobre la circunferencia de radio r.\n          <br><br>\n          El ángulo phi está formado por el segmento CtPt con el radio r horizontal, depende del segmento del ángulo t, por que la longitud de los arcos en que las circunferencias han estado en contacto, por lo que \n          <br><br>\n          Rt=r(phi-t)\n          <br><br>\n          Despejando obtenemos que phi=R+r/r  t,\n          <br>Entonces las coordenadas (x(t),y(t)) del punto Pt son:\n          <br><br>\n          x(t))=(R+r)cost-rcos(R+r/r  t) y\n          <br>y(t)=(R+r)sent-rsen(R+r/r  t)\n          <br><br>\n          Si R=2r la curva se llama nefroide\n          <br>Si R=r la curva es una cardioide\n          \n        </ng-container>\n        <ng-container imagen>\n          <div id=\"dcontenedor\">\n            <app-planos ancho=500 largo=500 opcion=\"control\" r2=\"si\">\n              <app-epicicloide #curva ancho=500 largo=500></app-epicicloide>\n            </app-planos>\n          </div>\n        </ng-container>\n      </app-cderecho>\n    </div>\n\n  <div #hipocicloide>\n      <app-cizquierdo>\n        <ng-container titulo>\n          <h2>HIPOCICLOIDE</h2>\n        </ng-container>\n        <ng-container tex>\n          <h3>HIPOCICLOIDE</h3>\n          Una hipocicloide es la curva que describe la trayectoria de un punto de una circunferencia que gira sin resbalar o deslizarse en el interior de otra circunferencia base.\n          <br><br>\n          En este caso la circunferencia generatriz tiene un radio r y la circunferencia base tiene radio R. Prueba distintos valores de r y R.\n          <br><br>          \n          ¿Como es la curva cuando la relación entre los radios R/r es un número entero?\n          <br>¿Como es la curva cuando esta relación no es un número entero?\n          <br><br>          \n          Las circunferencias son siempre tangentes.\n          <br>Las coordenadas de centro Ct son:\n          <br>Ct=((R-r)cost, (R-r)sent)\n          <br><br>         \n          Consideremos ahora la posición del punto Pt con respecto a Ct como Pt está a una distancia r de Ct y el ángulo está retrasado pi rad, tenemos que:\n          <br>PtCt=(rcos(-phi),rsen(-phi))=(rcosphi, -rsenphi)\n          <br><br>         \n          ¿Cual es la relacion entre los ángulos formados entre los segmentos CtPt y el radio r entre el radio R y el eje X?\n          <br><br>         \n          El ángulo phi formado por el segmento CtPt con el radio r horizontal, depende del ángulo t, porque la longitud de los arcos en que las circunferencias han estado en contacto es la misma, por lo que\n          <br>Rt=r(phi+t)\n          <br><br>         \n          Despejando obtenemos que phi=R-r/r  t.\n          <br>Entonces las coordenadas (x(t), y(t)) del punto Pt son:\n          <br><br>         \n          x(t)=(R-r)cost+rcos(R-r/r  t) y\n          <br>y(t)=(R-r)sent+rsen(R-r/r  t).\n          <br><br>         \n          Si R=2r entero, la curva es un segmento.\n          <br>Si R=3r entero, la curva en tricuspidal.\n          <br>Si R=4r entero, la curva en una astroide.\n        </ng-container>       \n          <ng-container imagen>\n          <div id=\"dcontenedor\">\n            <app-planos ancho=500 largo=500 opcion=\"control\" r2=\"si\">\n              <app-hipocicloide #curva ancho=500 largo=500></app-hipocicloide>\n            </app-planos>\n          </div>\n        </ng-container>\n      </app-cizquierdo>\n    </div>"

/***/ }),

/***/ "./src/app/desarrollo/desarrollo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/desarrollo/desarrollo.component.ts ***!
  \****************************************************/
/*! exports provided: DesarrolloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesarrolloComponent", function() { return DesarrolloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DesarrolloComponent = /** @class */ (function () {
    function DesarrolloComponent() {
    }
    DesarrolloComponent.prototype.ngOnInit = function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 55.9) {
                $("#nav").addClass('fixed-top');
            }
            else {
                $("#nav").removeClass('fixed-top');
            }
        });
    };
    DesarrolloComponent.prototype.scrol = function (numero) {
        switch (numero) {
            case 0:
                window.scroll({ top: (this.parrafo1.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo1.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 1:
                window.scroll({ top: (this.parrafo2.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo2.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 2:
                window.scroll({ top: (this.parrafo3.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo3.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 3:
                window.scroll({ top: 0, behavior: "smooth" });
                break;
            default:
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DesarrolloComponent.prototype, "parrafo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('epicicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DesarrolloComponent.prototype, "parrafo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hipocicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DesarrolloComponent.prototype, "parrafo3", void 0);
    DesarrolloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desarrollo',
            template: __webpack_require__(/*! ./desarrollo.component.html */ "./src/app/desarrollo/desarrollo.component.html"),
            styles: [__webpack_require__(/*! ./desarrollo.component.css */ "./src/app/desarrollo/desarrollo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DesarrolloComponent);
    return DesarrolloComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav {\n    background-color: rgba(255, 255, 255, .8);\n}\n\nimg{\n    position: absolute;\n    top: 20%;\n    -webkit-transform: translateX(600%) rotate(180deg);\n            transform: translateX(600%) rotate(180deg);\n    width: 10%;\n}\n\n#inicio {\n    margin: 0%;\n    width: 100vw;\n    height: 100vh;\n}\n\n#cicloide {\n    margin: 0%;\n    padding-top: 1%;\n    width: 100vw;\n    height: 100vh;\n}\n\n#epicicloides {\n    margin: 0%;\n    padding-top: 1%;\n    width: 100vw;\n    height: 100vh;\n}\n\n#hipocicloides1 {\n    margin: 0%;\n    padding-top: 1%;\n    width: 100vw;\n    height: 100vh;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtEQUEwQztZQUExQywwQ0FBMEM7SUFDMUMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbn1cblxuaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjAwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuI2luaWNpbyB7XG4gICAgbWFyZ2luOiAwJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI2NpY2xvaWRlIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbiNlcGljaWNsb2lkZXMge1xuICAgIG1hcmdpbjogMCU7XG4gICAgcGFkZGluZy10b3A6IDElO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuI2hpcG9jaWNsb2lkZXMxIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\" id=\"nav\" #nav>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(5)\">^</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(0)\">Presentacion</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(1)\">Cicloides</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(2)\">Epiclicloides</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(3)\">Hipocicloides 1</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(4)\">Hipocicloides 2</a>\n  </li>\n\n\n</ul>\n\n\n<div class=\"jumbotron jumbotron-fluid\" #inicio id=\"inicio\">\n  <div class=\"container\" >\n    <h1 class=\"display-4\">Curvas ciclicas en forma parametrica</h1>\n    <img src=\"../../assets/info/rueda.svg\" alt=\"\" [@actual]=\"actual\">\n    <p class=\"lead\">Basado en la <a\n        href=\"http://arquimedes.matem.unam.mx/lite/2013/1.1_Un100/_Un_042_CurvasCiclicasEnFormaParametrica/index.html\">siguiente</a>\n      unidad didactica creada con Arquimides</p>\n    <hr class=\"my-4\">\n    <p>Autor: Francisco Daniel Gamez Garcia</p>\n  </div>\n</div>\n\n<div #cicloides id=\"cicloide\">\n  <div class=\"embed-responsive embed-responsive-21by9\">\n    <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k6vXtjne5-c\"></iframe>\n  </div>\n</div>\n\n<div #epicicloides id=\"epicicloides\">\n    <div class=\"embed-responsive embed-responsive-21by9\" id=\"algo\">\n        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Vuuen5-d69Q\"></iframe>\n      </div>\n\n</div>\n<div #hipocicloides1 id=\"hipocicloides1\">\n\n</div>\n<div #hipocicloides2>\n\n</div>\n<div #creditos>\n\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
        //parrafos: ElementRef [] = [this.parrafo1, this.parrafo2, this.parrafo3, this.parrafo4, this.parrafo5, this.parrafo6];
        this.algo = this.parrafo1;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.actual = "algo";
        jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_3__(window).scrollTop() > 55.9) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#nav").addClass('fixed-top');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#nav").removeClass('fixed-top');
            }
        });
    };
    //this.parrafos[numero].nativeElement.scrollIntoView();
    InfoComponent.prototype.scrol = function (numero) {
        switch (numero) {
            case 0:
                window.scroll({ top: (this.parrafo1.nativeElement.offsetTop - 40), behavior: "smooth" });
                break;
            case 1:
                window.scroll({ top: (this.parrafo2.nativeElement.offsetTop - 40), behavior: "smooth" });
                break;
            case 2:
                window.scroll({ top: (this.parrafo3.nativeElement.offsetTop - 40), behavior: "smooth" });
                break;
            case 3:
                window.scroll({ top: (this.parrafo4.nativeElement.offsetTop - 40), behavior: "smooth" });
                break;
            case 4:
                window.scroll({ top: (this.parrafo5.nativeElement.offsetTop - 40), behavior: "smooth" });
                break;
            case 5:
                window.scroll({ top: 0, behavior: "smooth" });
                break;
            default:
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inicio'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfoComponent.prototype, "parrafo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cicloides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfoComponent.prototype, "parrafo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('epicicloides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfoComponent.prototype, "parrafo3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hipocicloides1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfoComponent.prototype, "parrafo4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hipocicloides2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InfoComponent.prototype, "parrafo5", void 0);
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("actual", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void=>*", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%) rotate(0deg)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1.5s")
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n    background-color: rgba(255,255,255,.8);\n}\n#contenedor{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n}\n#ruleta{\n    width: 100%;\n    height: 100vh;\n    padding: 2%;\n    font-size: 120%;\n    background-color: rgb(215, 215, 215);\n\n}\nspan{\n    font-weight: bold;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0NBQW9DOztBQUV4QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XG59XG4jY29udGVuZWRvcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbn1cblxuI3J1bGV0YXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSk7XG5cbn1cbnNwYW57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\" id=\"nav\" #nav>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"scrol(6)\">^</a>\n      </li>\n  <li class=\"nav-item\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Ruletas</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n        <button ngbDropdownItem (click)=\"scrol(0)\">Ruletas</button>\n        <button ngbDropdownItem (click)=\"scrol(1)\">Seno</button>\n        <button ngbDropdownItem (click)=\"scrol(2)\">Coseno</button>\n      </div>\n    </div>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(3)\">Cicloide</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(4)\">Epicicloide</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)=\"scrol(5)\">Hipocicloide</a>\n  </li>\n\n</ul>\n\n\n\n<div #ruleta id=\"ruleta\">\n  <h1>RULETAS</h1>\n  Una ruleta es una curva plana que se genera en el plano como la trayectoria de un punto sobre una curva generatriz que\n  rueda sobre otra curva basem, que está fija. Este rodamiento es de manera tangencial y sin deslizarse sobre la base.\n  Cuando la curva generatriz es una circunferencia, las ruletas también son llamadas curvas cíclicas.\n  <br> <br>\n  Un ejemplo de curvas que se genera son la gráficas de <span>y=cosx</span> y de <span>y=senx</span>. La curva es un\n  círculo de radio 1 con centro en el <span>eje X</span>, y la base es una recta con ecuación <span>y=-1</span>\n  <br> <br>\n  El movimiento de una curva sobre un plano fue estudiado más generalmente por W.H Besant en 1869. Sus precursores, para\n  casos más particulares, fueron Dürer en 1525, D. Bernoulli, La Hire, Desargues, Leibniz, Newton, Maxwell etc.\n  <br><br>\n  En este <a href=\"https://babel.hathitrust.org/cgi/pt?id=coo.31924059413827;view=1up;seq=9\n\">sitio</a> puedes encontrar el artículo \"Notes on Roulettes and Glissette\" de Besant\n\n  <br><br>\n  En la siguientes tres opciones presentaremos tres curvas que son también ejemplos de ruletas: la cicloide, la\n  epicicloide y la hipocicloide\n\n</div>\n\n<div #seno>\n  <app-carriba>\n    <ng-container titulo>\n      <h2>SENO</h2>\n    </ng-container>\n    <ng-container tex>\n      <h3>SENO</h3>\n      La parametrizacion de la curva es:\n      <br><span>y=cost</span>\n      <br><span>x=t</span>\n      <br>La cordenadas del circulo generatriz es:\n      <br><span>(cost+t,1)</span>\n    </ng-container>\n    <ng-container imagen>\n      <div id=\"dcontenedor\">\n        <app-planos ancho=1400 largo=300 opcion=\"animacion\">\n          <app-seno #curva ancho=1400 largo=300></app-seno>\n        </app-planos>\n      </div>\n    </ng-container>\n  </app-carriba>\n</div>\n\n\n\n<div #coseno>\n  <app-carriba>\n    <ng-container titulo>\n      <h2>COSENO</h2>\n    </ng-container>\n    <ng-container tex>\n      <h3>COSENO</h3>\n      La parametrizacion de la curva es:\n      <br><span>y=sent</span>\n      <br><span>x=t</span>\n      <br>La cordenadas del circulo generatriz es:\n      <br><span>(cost+t,1)</span>\n    </ng-container>\n    <ng-container imagen>\n      <div id=\"dcontenedor\">\n        <app-planos ancho=1400 largo=300 opcion=\"animacion\">\n          <app-coseno #curva ancho=1400 largo=300></app-coseno>\n        </app-planos>\n      </div>\n    </ng-container>\n  </app-carriba>\n</div>\n\n\n<div #cicloide>\n    <app-carriba>\n      <ng-container titulo>\n        <h2>CICLOIDE</h2>\n      </ng-container>\n      <ng-container tex>\n        <h3>CICLOIDE</h3>\n        Esta curva es una cicloide, que es la trayectoria que describe un punto de una circunferencia de radio r que rueda sin resbalar sobre una recta, en ese caso, eje X. Podemos pensar a esta curva como la curva que veríamos si fijamos un foquito a un extremo de un rayo de una rueda de una bicicleta que recorre un camino recto en la oscuridad.\n        <br><br>\n        Esta curva no era conocida por los griegos y fue nombrada por Galileo del griego kuklos.\n        Fue estudiada por Charles Bouvelles en 1501. Mersenne et Galileo en 1599, Roberval en 1636. Toricelli en 1944, Huygens, Bernoulli y Newton. Este último demostró una de las propiedades más importantes de esta curva al resolver dos problemas planteados por Bernoulli en la Royal Society fundada en Londres en 1669, en el Gresham College de Londres.\n        <br><br>\n        La propiedad a la que nos referimos es la de ser la braquistócrona, es decir la curva que cumple con la siguiente propiedad: Dados dos puntos A y B sobre un plano vertical, determine la trayectoria de una partícula M a lo largo de la cual, descendiendo por su propio peso, M se moverá de A a B en el menor tiempo posible.\n        <br><br>\n        Huygens había  descubierto que las cicloides son tautocrona, es decir que el tiempo que una partícula tarda en recorrer la distancia desde cualquier punto de la cicloide hasta el punto más bajo de la curva es siempre el mismo, no importa si lo iniciamos en la parte más alta de la curva, en la mistas o desde un punto muy cercano a la base.\n        \n      </ng-container>\n      <ng-container imagen>\n        <div id=\"dcontenedor\">\n          <app-planos ancho=1400 largo=300 opcion=\"animacion\">\n            <app-cicloide #curva ancho=1400 largo=300></app-cicloide>\n          </app-planos>\n        </div>\n      </ng-container>\n    </app-carriba>\n  </div>\n\n\n<br><br>\n  <div #epicicloide>\n      <app-cderecho>\n        <ng-container titulo>\n          <h2>EPICICLOIDE</h2>\n        </ng-container>\n        <ng-container tex>\n          <h3>EPICICLOIDE</h3>\n          Una epicicloide es la curva que describe la trayectoria de un punto de una circunferencia que gira sin resbalar o deslizarse sobre una circunferencia de base\n        </ng-container>\n        <ng-container imagen>\n          <div id=\"dcontenedor\">\n            <app-planos ancho=500 largo=500 opcion=\"animacion\">\n              <app-epicicloide #curva ancho=500 largo=500></app-epicicloide>\n            </app-planos>\n          </div>\n        </ng-container>\n      </app-cderecho>\n    </div>\n\n  <div #hipocicloide>\n      <app-cizquierdo>\n        <ng-container titulo>\n          <h2>HIPOCICLOIDE</h2>\n        </ng-container>\n        <ng-container tex>\n          <h3>HIPOCICLOIDE</h3>\n          Una Hipocicloide es la curva que describe la trayectoria de un punto de una circunferencia que gira sin resbalar o deslizarse al interior de otra circunferencia de base.        </ng-container>\n        <ng-container imagen>\n          <div id=\"dcontenedor\">\n            <app-planos ancho=500 largo=500 opcion=\"animacion\">\n              <app-hipocicloide #curva ancho=500 largo=500></app-hipocicloide>\n            </app-planos>\n          </div>\n        </ng-container>\n      </app-cizquierdo>\n    </div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 55.9) {
                $("#nav").addClass('fixed-top');
            }
            else {
                $("#nav").removeClass('fixed-top');
            }
        });
    };
    InicioComponent.prototype.scrol = function (numero) {
        switch (numero) {
            case 0:
                window.scroll({ top: (this.parrafo1.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo1.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 1:
                window.scroll({ top: (this.parrafo2.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo2.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 2:
                window.scroll({ top: (this.parrafo3.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo3.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 3:
                window.scroll({ top: (this.parrafo4.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo4.nativeElement.scrollIntoView({ block: 'center',  behavior: 'smooth' });
                break;
            case 4:
                window.scroll({ top: (this.parrafo5.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo5.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 5:
                window.scroll({ top: (this.parrafo6.nativeElement.offsetTop - 40), behavior: "smooth" });
                //this.parrafo6.nativeElement.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                break;
            case 6:
                window.scroll({ top: 0, behavior: "smooth" });
                break;
            default:
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ruleta'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('seno'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coseno'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('epicicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hipocicloide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InicioComponent.prototype, "parrafo6", void 0);
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/models/Curva.ts":
/*!*********************************!*\
  !*** ./src/app/models/Curva.ts ***!
  \*********************************/
/*! exports provided: Curva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curva", function() { return Curva; });
var Curva = /** @class */ (function () {
    function Curva() {
        this.lastTime = Date.now();
        this.current = 0;
        this.elapsed = 0;
        this.max_elapsed_wait = 30 / 1000;
        this.counter_time = 0;
        this.time_step = 0.1;
        this.tiempo = 0;
        this.pilaCurva = [];
        this.generatriz = 0;
        this.base = 0;
        this.showcurva = 0;
    }
    Curva.prototype.psudoContructor = function (v1, v2) {
        this.origenx = this.ancho / 2;
        this.origeny = this.largo / 2;
        this.scala = this.largo / 12;
        this.radioV1 = v1;
        this.radioV2 = v2;
    };
    Curva.prototype.showGeneratriz = function () {
        if (this.generatriz == 1) {
            console.log("entra--");
            $(".generatriz").show();
            this.generatriz = 0;
        }
        else {
            $(".generatriz").hide();
            this.generatriz = 1;
        }
    };
    Curva.prototype.showBase = function () {
        if (this.generatriz == 1) {
            $(".base").show();
            this.generatriz = 0;
        }
        else {
            $(".base").hide();
            this.generatriz = 1;
        }
    };
    Curva.prototype.showCurva = function () {
        console.log("entra show");
        if (this.showcurva == 1) {
            $(".curva").show();
            this.showcurva = 0;
        }
        else {
            $(".curva").hide();
            this.showcurva = 1;
        }
    };
    Curva.prototype.cambio = function () {
        console.log("hola cambio generico");
    };
    Curva.prototype.para = function () {
        this.animacion = cancelAnimationFrame(this.animacion);
    };
    Curva.prototype.inicia = function () {
        this.animacion = this.gameLoop();
    };
    Curva.prototype.cambioControlmas = function () { };
    Curva.prototype.cambioControlmenos = function () { };
    Curva.prototype.calculaX = function () { };
    Curva.prototype.calculaY = function () { };
    Curva.prototype.mas = function () {
        this.tiempo += 0.01;
        this.cambioControlmas();
    };
    Curva.prototype.menos = function () {
        this.tiempo -= 0.01;
        this.cambioControlmenos();
    };
    Curva.prototype.rmenos = function () {
        this.radioV2 -= 0.01;
        this.radio = this.scala * this.radioV2;
    };
    Curva.prototype.rmas = function () {
        this.radioV2 += 0.01;
        this.radio = this.scala * this.radioV2;
        this.calculaX();
        this.calculaY();
    };
    Curva.prototype.rvmenos = function () {
        this.radioV1 -= 0.01;
        this.radio2 = this.scala * this.radioV1;
        this.calculaX();
        this.calculaY();
    };
    Curva.prototype.rvmas = function () {
        this.radioV1 += 0.01;
        this.radio2 = this.scala * this.radioV1;
        this.calculaX();
        this.calculaY();
    };
    Curva.prototype.gameLoop = function () {
        var _this = this;
        this.current = Date.now();
        this.elapsed = (this.current - this.lastTime) / 1000;
        if (this.elapsed > this.max_elapsed_wait) {
            this.elapsed = this.max_elapsed_wait;
        }
        this.tiempo = this.counter_time;
        this.cambio();
        this.counter_time += this.elapsed;
        this.lastTime = this.current;
        this.animacion = requestAnimationFrame(function () { return _this.gameLoop(); });
        return this.animacion;
    };
    return Curva;
}());



/***/ }),

/***/ "./src/app/multimedia/planos/planos.component.css":
/*!********************************************************!*\
  !*** ./src/app/multimedia/planos/planos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flat{\n    border: solid;\n    position: relative;\n    box-sizing: content-box;\n}\n\n\n#uno{\n    position: absolute; \n    left: 0px; \n    top: 0px; \n}\n\n\n#dos{\n\n    position: absolute; \n    left: 0px; \n    top: 0px; \n}\n\n\nspan{\n    font-size: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGltZWRpYS9wbGFub3MvcGxhbm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL211bHRpbWVkaWEvcGxhbm9zL3BsYW5vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZsYXR7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cblxuI3Vub3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGxlZnQ6IDBweDsgXG4gICAgdG9wOiAwcHg7IFxufVxuXG4jZG9ze1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBsZWZ0OiAwcHg7IFxuICAgIHRvcDogMHB4OyBcbn1cblxuc3BhbntcbiAgICBmb250LXNpemU6IDEyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/multimedia/planos/planos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/multimedia/planos/planos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tele\">\n\n  <div id=\"flat\" [ngStyle]=\"{'width':flatAncho, 'height':flatLargo}\">\n\n\n\n    <svg [attr.height]=\"largo\" [attr.width]=\"ancho\" id=\"uno\">\n      <path id=\"y\" [attr.d]='ejey' stroke=\"red\" stroke-width=\"1\" fill=\"none\" />\n      <path id=\"x\" [attr.d]=\"ejex\" stroke=\"black\" stroke-width=\"1\" fill=\"none\" />\n    </svg>\n    <ng-content id=\"dos\" ></ng-content>\n\n  </div>\n\n\n\n  <div [ngSwitch]=\"opcion\">\n    <div *ngSwitchCase=\"'animacion'\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"parar()\">Para</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"iniciar()\">Inicia</button>\n    </div>\n    <div *ngSwitchCase=\"'control'\">\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\" id=\"t\">\n          <span class=\"badge badge-pill badge-light\">t</span>\n          <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"pmas()\" (mousedown)=\"mas()\">+</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"pmenos()\" (mousedown)=\"menos()\">-</button>\n        </div>\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\" id=\"t\">\n          <span class=\"badge badge-pill badge-light\">r</span>\n          <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"rpmas()\" (mousedown)=\"rmas()\">+</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"rpmenos()\" (mousedown)=\"rmenos()\">-</button>\n        </div>\n      <div *ngIf=\"r2\" class=\"btn-group\" role=\"group\" aria-label=\"Third group\" id=\"t\">\n        <span class=\"badge badge-pill badge-light\">R</span>\n        <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"rvpmas()\" (mousedown)=\"rvmas()\">+</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (mouseup)=\"rvpmenos()\" (mousedown)=\"rvmenos()\">-</button>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/multimedia/planos/planos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/multimedia/planos/planos.component.ts ***!
  \*******************************************************/
/*! exports provided: PlanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosComponent", function() { return PlanosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Curva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Curva */ "./src/app/models/Curva.ts");



var PlanosComponent = /** @class */ (function () {
    function PlanosComponent() {
    }
    PlanosComponent.prototype.ngOnInit = function () {
        this.flatAncho = this.ancho + "px";
        this.flatLargo = this.largo + "px";
        this.ejex = "M 0 " + this.largo / 2 + " l " + this.ancho + " 0";
        this.ejey = "M " + this.ancho / 2 + " 0 l 0 " + this.largo;
        // this.curva.ancho=this.ancho;
        // this.curva.largo=this.largo;
    };
    //aqca empieza
    PlanosComponent.prototype.parar = function () {
        this.curva.para();
    };
    PlanosComponent.prototype.iniciar = function () {
        this.curva.inicia();
    };
    PlanosComponent.prototype.menos = function () {
        var _this = this;
        this.curva.menos();
        this.menosc = requestAnimationFrame(function () { return _this.menos(); });
    };
    PlanosComponent.prototype.pmenos = function () {
        cancelAnimationFrame(this.menosc);
    };
    PlanosComponent.prototype.mas = function () {
        var _this = this;
        this.curva.mas();
        this.masc = requestAnimationFrame(function () { return _this.mas(); });
    };
    PlanosComponent.prototype.pmas = function () {
        cancelAnimationFrame(this.masc);
    };
    PlanosComponent.prototype.rmenos = function () {
        var _this = this;
        this.curva.rmenos();
        this.rmenosc = requestAnimationFrame(function () { return _this.rmenos(); });
    };
    PlanosComponent.prototype.rpmenos = function () {
        cancelAnimationFrame(this.rmenosc);
    };
    PlanosComponent.prototype.rmas = function () {
        var _this = this;
        this.curva.rmas();
        this.rmasc = requestAnimationFrame(function () { return _this.rmas(); });
    };
    PlanosComponent.prototype.rpmas = function () {
        cancelAnimationFrame(this.rmasc);
    };
    PlanosComponent.prototype.rvmenos = function () {
        var _this = this;
        this.curva.rvmenos();
        this.rvmenosc = requestAnimationFrame(function () { return _this.rvmenos(); });
    };
    PlanosComponent.prototype.rvpmenos = function () {
        cancelAnimationFrame(this.rvmenosc);
    };
    PlanosComponent.prototype.rvmas = function () {
        var _this = this;
        this.curva.rvmas();
        this.rvmasc = requestAnimationFrame(function () { return _this.rvmas(); });
    };
    PlanosComponent.prototype.rvpmas = function () {
        cancelAnimationFrame(this.rvmasc);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('curva'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_Curva__WEBPACK_IMPORTED_MODULE_2__["Curva"])
    ], PlanosComponent.prototype, "curva", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanosComponent.prototype, "ancho", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanosComponent.prototype, "largo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PlanosComponent.prototype, "opcion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PlanosComponent.prototype, "r2", void 0);
    PlanosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planos',
            template: __webpack_require__(/*! ./planos.component.html */ "./src/app/multimedia/planos/planos.component.html"),
            styles: [__webpack_require__(/*! ./planos.component.css */ "./src/app/multimedia/planos/planos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlanosComponent);
    return PlanosComponent;
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

module.exports = __webpack_require__(/*! /Users/francisco/Documents/fciencias/decimo/DAWI/proyecto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map