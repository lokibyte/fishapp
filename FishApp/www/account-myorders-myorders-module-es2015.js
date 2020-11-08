(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-myorders-myorders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/myorders/myorders.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/myorders/myorders.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab4\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n    <ion-item-divider color=\"light\">\n      <ion-label class=\"divider-font\">My Orders</ion-label>\n    </ion-item-divider>\n\n    <ion-item *ngFor=\"let order of myorders\" mode=\"ios\" (click)=\"onOrderClick(order)\">\n\t<ion-thumbnail slot=\"start\" class=\"order-item-thumb\">\n\t\t<ion-img [src]=\"order.items[0].item.icon\"></ion-img>\n\t</ion-thumbnail>\n    \n    <ion-label>\n\t\t<p>Items</p>\n\t\t<h4 *ngFor=\"let _item of order.items\" class=\"ion-text-wrap order-txt\">\n\t      <div>{{_item.qty}} X {{_item.item.name}}</div>\n\t    </h4>\n\t\t<p>Ordered On</p>\n\t\t<ion-text class=\"order-txt\">{{order.date}}</ion-text>\n\n\t\t<p>Total</p>\n\t\t<ion-text class=\"order-txt\">{{order.total_amt}}</ion-text>\n\n\t</ion-label>\n\t<ion-text [ngClass]=\"order.status\" class=\"order-txt\">{{order.status}}</ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/myorders/myorders-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/myorders/myorders-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyordersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersPageRoutingModule", function() { return MyordersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myorders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myorders.page */ "./src/app/account/myorders/myorders.page.ts");




const routes = [
    {
        path: '',
        component: _myorders_page__WEBPACK_IMPORTED_MODULE_3__["MyordersPage"]
    }
];
let MyordersPageRoutingModule = class MyordersPageRoutingModule {
};
MyordersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyordersPageRoutingModule);



/***/ }),

/***/ "./src/app/account/myorders/myorders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/myorders/myorders.module.ts ***!
  \*****************************************************/
/*! exports provided: MyordersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersPageModule", function() { return MyordersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myorders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myorders-routing.module */ "./src/app/account/myorders/myorders-routing.module.ts");
/* harmony import */ var _myorders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myorders.page */ "./src/app/account/myorders/myorders.page.ts");







let MyordersPageModule = class MyordersPageModule {
};
MyordersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myorders_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyordersPageRoutingModule"]
        ],
        declarations: [_myorders_page__WEBPACK_IMPORTED_MODULE_6__["MyordersPage"]]
    })
], MyordersPageModule);



/***/ }),

/***/ "./src/app/account/myorders/myorders.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/myorders/myorders.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-item-thumb {\n  height: 50px;\n  width: 50px;\n}\n\n.order-txt {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.Delivered {\n  color: green;\n}\n\n.InProgress {\n  color: orange;\n}\n\n.Cancelled {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9teW9yZGVycy9teW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBRUQ7O0FBQ0E7RUFDQyxZQUFBO0FBRUQ7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L215b3JkZXJzL215b3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1pdGVtLXRodW1ie1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiA1MHB4O1xufVxuLm9yZGVyLXR4dHtcblx0Zm9udC1zaXplOiAxMXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLkRlbGl2ZXJlZHtcblx0Y29sb3I6IGdyZWVuO1xufVxuLkluUHJvZ3Jlc3N7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cbi5DYW5jZWxsZWR7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/myorders/myorders.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/myorders/myorders.page.ts ***!
  \***************************************************/
/*! exports provided: MyordersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersPage", function() { return MyordersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyordersPage = class MyordersPage {
    constructor() {
        this.myorders = [];
    }
    ngOnInit() {
        this.load_orders();
    }
    load_orders() {
        fetch('./assets/myorders.json').then(res => res.json())
            .then(json => {
            this.myorders = json.orders;
            console.log(this.myorders);
        });
    }
    onOrderClick(order) {
        console.info("order", order);
    }
};
MyordersPage.ctorParameters = () => [];
MyordersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myorders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myorders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/myorders/myorders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myorders.page.scss */ "./src/app/account/myorders/myorders.page.scss")).default]
    })
], MyordersPage);



/***/ })

}]);
//# sourceMappingURL=account-myorders-myorders-module-es2015.js.map