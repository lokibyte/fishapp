(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-status-order-status-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-status/order-status.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-status/order-status.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t\n\t<ion-icon class=\"status-icon\" name=\"checkmark-circle-outline\"></ion-icon>\n\t<ion-title class=\"ion-text-center\">\n\t\t<h2>Thank you for your order</h2>\n\t</ion-title>\n\t<div class=\"ion-text-center\">Order#: 100200121</div>\n\t<ion-button class=\"order-txt\" (click)=\"backToHome()\">Explore more Sea foods</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/order-status/order-status-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/order-status/order-status-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusPageRoutingModule", function() { return OrderStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-status.page */ "./src/app/order-status/order-status.page.ts");




const routes = [
    {
        path: '',
        component: _order_status_page__WEBPACK_IMPORTED_MODULE_3__["OrderStatusPage"]
    }
];
let OrderStatusPageRoutingModule = class OrderStatusPageRoutingModule {
};
OrderStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderStatusPageRoutingModule);



/***/ }),

/***/ "./src/app/order-status/order-status.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusPageModule", function() { return OrderStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-status-routing.module */ "./src/app/order-status/order-status-routing.module.ts");
/* harmony import */ var _order_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-status.page */ "./src/app/order-status/order-status.page.ts");







let OrderStatusPageModule = class OrderStatusPageModule {
};
OrderStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderStatusPageRoutingModule"]
        ],
        declarations: [_order_status_page__WEBPACK_IMPORTED_MODULE_6__["OrderStatusPage"]]
    })
], OrderStatusPageModule);



/***/ }),

/***/ "./src/app/order-status/order-status.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-icon {\n  font-size: 50pt;\n  margin: 30% 43% 5%;\n  color: green;\n}\n\n.order-txt {\n  margin: 10px 18%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFFSSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWljb257XG5cdGZvbnQtc2l6ZTogNTBwdDtcbiAgICBtYXJnaW46IDMwJSA0MyUgNSU7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm9yZGVyLXR4dHtcblx0Ly8gZm9udC1zaXplOiA1MHB0O1xuICAgIG1hcmdpbjogMTBweCAxOCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/order-status/order-status.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-status/order-status.page.ts ***!
  \***************************************************/
/*! exports provided: OrderStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusPage", function() { return OrderStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart-service.service */ "./src/app/services/cart-service.service.ts");




let OrderStatusPage = class OrderStatusPage {
    constructor(router, cartservice) {
        this.router = router;
        this.cartservice = cartservice;
    }
    ngOnInit() {
    }
    emptyCart() {
        this.cartservice.emptyCart();
    }
    backToHome() {
        this.emptyCart();
        this.router.navigate(['/tabs/tab1']);
    }
};
OrderStatusPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_3__["CartServiceService"] }
];
OrderStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-status.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-status/order-status.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-status.page.scss */ "./src/app/order-status/order-status.page.scss")).default]
    })
], OrderStatusPage);



/***/ })

}]);
//# sourceMappingURL=order-status-order-status-module-es2015.js.map