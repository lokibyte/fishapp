(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-favourites-favourites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/favourites/favourites.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/favourites/favourites.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab4\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n    <ion-item-divider color=\"light\">\n      <ion-label class=\"divider-font\">My Orders</ion-label>\n    </ion-item-divider>\n\n    <ion-item *ngFor=\"let order of myorders\" mode=\"ios\">\n\t<ion-thumbnail slot=\"start\" class=\"order-item-thumb\">\n\t\t<ion-img [src]=\"order.items[0].item.icon\"></ion-img>\n\t</ion-thumbnail>\n    \n    <ion-label>\n\t\t<p>Items</p>\n\t\t<h4 *ngFor=\"let _item of order.items\" class=\"ion-text-wrap order-txt\">\n\t      <div>{{_item.qty}} X {{_item.item.name}}</div>\n\t    </h4>\n\t\t<p>Ordered On</p>\n\t\t<ion-text class=\"order-txt\">{{order.date}}</ion-text>\n\n\t\t<p>Total</p>\n\t\t<ion-text class=\"order-txt\">{{order.total_amt}}</ion-text>\n\n\t</ion-label>\n\t<ion-button color=\"primary\" fill=\"outline\" (click)=\"onReOrder(order)\">Reorder</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/favourites/favourites-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/account/favourites/favourites-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FavouritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageRoutingModule", function() { return FavouritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourites.page */ "./src/app/account/favourites/favourites.page.ts");




const routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_3__["FavouritesPage"]
    }
];
let FavouritesPageRoutingModule = class FavouritesPageRoutingModule {
};
FavouritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavouritesPageRoutingModule);



/***/ }),

/***/ "./src/app/account/favourites/favourites.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/account/favourites/favourites.module.ts ***!
  \*********************************************************/
/*! exports provided: FavouritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function() { return FavouritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites-routing.module */ "./src/app/account/favourites/favourites-routing.module.ts");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourites.page */ "./src/app/account/favourites/favourites.page.ts");







let FavouritesPageModule = class FavouritesPageModule {
};
FavouritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesPageRoutingModule"]
        ],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_6__["FavouritesPage"]]
    })
], FavouritesPageModule);



/***/ }),

/***/ "./src/app/account/favourites/favourites.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/account/favourites/favourites.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-item-thumb {\n  height: 50px;\n  width: 50px;\n}\n\n.order-txt {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.Delivered {\n  color: green;\n}\n\n.InProgress {\n  color: orange;\n}\n\n.Cancelled {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9mYXZvdXJpdGVzL2Zhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFDRDs7QUFDQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUVEOztBQUNBO0VBQ0MsWUFBQTtBQUVEOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9mYXZvdXJpdGVzL2Zhdm91cml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWl0ZW0tdGh1bWJ7XG5cdGhlaWdodDogNTBweDtcblx0d2lkdGg6IDUwcHg7XG59XG4ub3JkZXItdHh0e1xuXHRmb250LXNpemU6IDExcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uRGVsaXZlcmVke1xuXHRjb2xvcjogZ3JlZW47XG59XG4uSW5Qcm9ncmVzc3tcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuLkNhbmNlbGxlZHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/favourites/favourites.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/account/favourites/favourites.page.ts ***!
  \*******************************************************/
/*! exports provided: FavouritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPage", function() { return FavouritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FavouritesPage = class FavouritesPage {
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
    onReOrder(order) {
        console.info("eOrder", order);
    }
};
FavouritesPage.ctorParameters = () => [];
FavouritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favourites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/favourites/favourites.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favourites.page.scss */ "./src/app/account/favourites/favourites.page.scss")).default]
    })
], FavouritesPage);



/***/ })

}]);
//# sourceMappingURL=account-favourites-favourites-module-es2015.js.map