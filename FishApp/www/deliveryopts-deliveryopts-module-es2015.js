(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deliveryopts-deliveryopts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryopts/deliveryopts.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryopts/deliveryopts.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab3\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>Delivery Options</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-item-group mode=\"ios\">\n\t  <ion-item-divider>\n\t    <ion-label></ion-label>\n\t  </ion-item-divider>\n\n\t  <ion-item lines=\"none\" style=\"margin:15px 10px\">\n\t  \t<ion-icon name=\"location\" style=\"margin:5px\"></ion-icon>\n\t    <ion-label style=\"margin: 5px 10px;\">\n\t    \t<h3 style=\"font-weight: bold;font-size: 14px;color: #797676;\">Deliver To: (Default)</h3>\n\t    \t<h4 style=\"font-size: 13px;color: #797676;\">Location Name</h4>\n\t    \t<p class=\"ion-text-wrap\">#294,2nd cross,8th main,Canara Bank colony,kalyan Nagar, Nagarbhavi</p>\n\t    </ion-label>\n\t    <ion-button fill=\"outline\" color=\"primary\">Change</ion-button>\n\t  </ion-item>\n\t  \n\t  <ion-item-divider>\n\t    <ion-label></ion-label>\n\t  </ion-item-divider>\n\t</ion-item-group>\n\n\t<ion-item lines=\"none\" style=\"margin:1px 10px;font-weight: bold;color: #797676;\">\n\t\t<ion-icon name=\"calendar-outline\" style=\"margin:5px\"></ion-icon>\n\t\t<ion-label style=\"margin: 5px 10px;\">Select Delivery Option</ion-label>\n\t</ion-item>\n\t<ion-item mode='ios' lines=\"none\" style=\"border:1ps solid green;\">\n\t\t\t<ion-label position=\"stacked\">\n            </ion-label>\n            <ion-select placeholder=\"Select slot\" interface=\"action-sheet\" class=\"slot-box\">\n              <ion-select-option [value]=\"slot.time\" *ngFor=\"let slot of slots\">{{slot.time}}</ion-select-option>\n            </ion-select>\n\t</ion-item>\n\t\n</ion-content>\n<ion-footer  class=\"ion-no-padding\">\n  \t<ion-toolbar color=\"primary\" mode=\"ios\" size=\"small\" (click)=\"continue()\">\n  \t\t<ion-title style=\"font-weight: normal\">Continue</ion-title>\n  \t</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/deliveryopts/deliveryopts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/deliveryopts/deliveryopts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DeliveryoptsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryoptsPageRoutingModule", function() { return DeliveryoptsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _deliveryopts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deliveryopts.page */ "./src/app/deliveryopts/deliveryopts.page.ts");




const routes = [
    {
        path: '',
        component: _deliveryopts_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryoptsPage"]
    }
];
let DeliveryoptsPageRoutingModule = class DeliveryoptsPageRoutingModule {
};
DeliveryoptsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryoptsPageRoutingModule);



/***/ }),

/***/ "./src/app/deliveryopts/deliveryopts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/deliveryopts/deliveryopts.module.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryoptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryoptsPageModule", function() { return DeliveryoptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _deliveryopts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deliveryopts-routing.module */ "./src/app/deliveryopts/deliveryopts-routing.module.ts");
/* harmony import */ var _deliveryopts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deliveryopts.page */ "./src/app/deliveryopts/deliveryopts.page.ts");







let DeliveryoptsPageModule = class DeliveryoptsPageModule {
};
DeliveryoptsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deliveryopts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryoptsPageRoutingModule"]
        ],
        declarations: [_deliveryopts_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryoptsPage"]]
    })
], DeliveryoptsPageModule);



/***/ }),

/***/ "./src/app/deliveryopts/deliveryopts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/deliveryopts/deliveryopts.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slot-box {\n  border: 1px solid gray;\n  padding: 10px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnlvcHRzL2RlbGl2ZXJ5b3B0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBQTtFQUNHLGFBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcnlvcHRzL2RlbGl2ZXJ5b3B0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xvdC1ib3h7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/deliveryopts/deliveryopts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/deliveryopts/deliveryopts.page.ts ***!
  \***************************************************/
/*! exports provided: DeliveryoptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryoptsPage", function() { return DeliveryoptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DeliveryoptsPage = class DeliveryoptsPage {
    constructor(router) {
        this.router = router;
        this.slots = [
            {
                time: "Monday 12:30 PM",
                day: "Monday"
            },
            {
                time: "Tuesday 12:30 PM",
                day: "Tuesday"
            },
            {
                time: "Wednesday 12:30 PM",
                day: "Wednesday"
            },
            {
                time: "Thursday 12:30 PM",
                day: "Thursday"
            }, {
                time: "Friday 12:30 PM",
                day: "Friday"
            }, {
                time: "Saturday 12:30 PM",
                day: "Saturday"
            }, {
                time: "Sunday 12:30 PM",
                day: "Sunday"
            },
        ];
    }
    ngOnInit() {
    }
    continue() {
        console.info("continue()");
        this.router.navigate(['/order-status']);
    }
};
DeliveryoptsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DeliveryoptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliveryopts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deliveryopts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deliveryopts/deliveryopts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deliveryopts.page.scss */ "./src/app/deliveryopts/deliveryopts.page.scss")).default]
    })
], DeliveryoptsPage);



/***/ })

}]);
//# sourceMappingURL=deliveryopts-deliveryopts-module-es2015.js.map