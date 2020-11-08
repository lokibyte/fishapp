(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-manageaddress-manageaddress-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/manageaddress/manageaddress.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/manageaddress/manageaddress.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab4\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>Manage Addresses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n    <ion-item-divider color=\"light\">\n      <ion-label class=\"divider-font\">Manage Addresses</ion-label>\n    </ion-item-divider>\n\n    <ion-item *ngFor=\"let adrs of address\" mode=\"ios\">\n\t<ion-icon class=\"size-18\" [name]=\"adrs.icon\" slot=\"start\"></ion-icon>\n    <ion-label>\n\t\t\n\t\t<ion-text class=\"ion-text-capitalize addr-hdr-txt\">{{adrs.name}}</ion-text>\n\t\t<p class=\"ion-text-wrap addr-body-txt\">{{adrs.format_address}}</p>\n\t\t<ion-button class=\"bold\"slot=\"start\" fill=\"clear\" (click)=\"onEditAddress(adrs)\">Edit</ion-button>\n\t\t<ion-button class=\"left bold\" slot=\"start\" fill=\"clear\" (click)=\"onDeleteAddres(adrs)\">Delete</ion-button>\n\t</ion-label>\n\t\n    </ion-item>\n  </ion-list>\n  <ion-button  class=\"ion-padding\" expand=\"block\" fill=\"outline\"  mode=\"ios\" size=\"default\" (click)=\"onAddNewAddress()\">Add New Address</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/manageaddress/manageaddress-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/account/manageaddress/manageaddress-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManageaddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageaddressPageRoutingModule", function() { return ManageaddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manageaddress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageaddress.page */ "./src/app/account/manageaddress/manageaddress.page.ts");




const routes = [
    {
        path: '',
        component: _manageaddress_page__WEBPACK_IMPORTED_MODULE_3__["ManageaddressPage"]
    }
];
let ManageaddressPageRoutingModule = class ManageaddressPageRoutingModule {
};
ManageaddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageaddressPageRoutingModule);



/***/ }),

/***/ "./src/app/account/manageaddress/manageaddress.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/account/manageaddress/manageaddress.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageaddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageaddressPageModule", function() { return ManageaddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manageaddress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manageaddress-routing.module */ "./src/app/account/manageaddress/manageaddress-routing.module.ts");
/* harmony import */ var _manageaddress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manageaddress.page */ "./src/app/account/manageaddress/manageaddress.page.ts");







let ManageaddressPageModule = class ManageaddressPageModule {
};
ManageaddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manageaddress_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageaddressPageRoutingModule"]
        ],
        declarations: [_manageaddress_page__WEBPACK_IMPORTED_MODULE_6__["ManageaddressPage"]]
    })
], ManageaddressPageModule);



/***/ }),

/***/ "./src/app/account/manageaddress/manageaddress.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/account/manageaddress/manageaddress.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addr-hdr-txt {\n  font-weight: bold;\n  font-size: 13px;\n  color: #6f6c6c;\n}\n\n.addr-body-txt {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.left {\n  margin-left: 10%;\n}\n\n.bold {\n  font-weight: bold;\n  color: #f29130;\n}\n\n.size-18 {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9tYW5hZ2VhZGRyZXNzL21hbmFnZWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0FBSUQ7O0FBRkE7RUFDQyxlQUFBO0FBS0QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L21hbmFnZWFkZHJlc3MvbWFuYWdlYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkci1oZHItdHh0e1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRjb2xvcjogIzZmNmM2Yztcbn1cbi5hZGRyLWJvZHktdHh0e1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlZnR7XG5cdG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uYm9sZHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGNvbG9yOiNmMjkxMzA7XG59XG4uc2l6ZS0xOHtcblx0Zm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/manageaddress/manageaddress.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/manageaddress/manageaddress.page.ts ***!
  \*************************************************************/
/*! exports provided: ManageaddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageaddressPage", function() { return ManageaddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ManageaddressPage = class ManageaddressPage {
    constructor() {
        this.address = [];
    }
    ngOnInit() {
        this.load_address();
    }
    load_address() {
        fetch('./assets/address.json').then(res => res.json())
            .then(json => {
            this.address = json.address.map(adr => {
                if (adr.name == "home") {
                    adr.icon = "home-outline";
                }
                else if (adr.name == "work") {
                    adr.icon = "briefcase-outline";
                }
                else {
                    adr.icon = "location-outline";
                }
                return adr;
            });
            console.log(this.address);
        });
    }
    onEditAddress(adrs) {
        console.info("onEditAddress", adrs);
    }
    onDeleteAddres(adrs) {
        console.info("onDeleteAddres", adrs);
    }
    onAddNewAddress() {
        console.info("onAddNewAddress()");
    }
};
ManageaddressPage.ctorParameters = () => [];
ManageaddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manageaddress',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manageaddress.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/manageaddress/manageaddress.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manageaddress.page.scss */ "./src/app/account/manageaddress/manageaddress.page.scss")).default]
    })
], ManageaddressPage);



/***/ })

}]);
//# sourceMappingURL=account-manageaddress-manageaddress-module-es2015.js.map