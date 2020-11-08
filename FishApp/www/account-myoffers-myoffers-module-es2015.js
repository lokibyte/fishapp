(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-myoffers-myoffers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/myoffers/myoffers.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/myoffers/myoffers.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab4\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>My Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n    <ion-item-divider color=\"light\">\n      <ion-label class=\"divider-font\">My OFFERS/COUPONS</ion-label>\n    </ion-item-divider>\n\n    <ion-item *ngFor=\"let offer of offers\" mode=\"ios\">\n    <ion-label>\n    <ion-chip color=\"tertiary bold\"> <ion-text class=\"couponcode\">{{offer.couponcode}}</ion-text></ion-chip>\n    <h3 class=\"ion-text-wrap tnctxt bold\">{{offer.title}}</h3>\n    <p class=\"ion-text-wrap tnctxt\">{{offer.subtitle}}</p>\n    <ion-button  class=\"readmore\" fill=\"outline\" size=\"small\" color=\"orange\" (click)=\"onHdrClick(offer)\">Read More</ion-button>\n    <div *ngIf=\"offer.tnctapped\">\n    <h4 class=\"ion-text-wrap tnctxt tnctitle\">{{offer.tncTitle}}</h4>\n    <ul *ngFor=\"let tnc of offer.tncs\">\n      <li class=\"ion-text-wrap tnctxt\">{{tnc}}</li>\n    </ul>\n  </div>\n  </ion-label>\n    \n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/myoffers/myoffers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/myoffers/myoffers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyoffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyoffersPageRoutingModule", function() { return MyoffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myoffers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myoffers.page */ "./src/app/account/myoffers/myoffers.page.ts");




const routes = [
    {
        path: '',
        component: _myoffers_page__WEBPACK_IMPORTED_MODULE_3__["MyoffersPage"]
    }
];
let MyoffersPageRoutingModule = class MyoffersPageRoutingModule {
};
MyoffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyoffersPageRoutingModule);



/***/ }),

/***/ "./src/app/account/myoffers/myoffers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/myoffers/myoffers.module.ts ***!
  \*****************************************************/
/*! exports provided: MyoffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyoffersPageModule", function() { return MyoffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myoffers-routing.module */ "./src/app/account/myoffers/myoffers-routing.module.ts");
/* harmony import */ var _myoffers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myoffers.page */ "./src/app/account/myoffers/myoffers.page.ts");







let MyoffersPageModule = class MyoffersPageModule {
};
MyoffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myoffers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyoffersPageRoutingModule"]
        ],
        declarations: [_myoffers_page__WEBPACK_IMPORTED_MODULE_6__["MyoffersPage"]]
    })
], MyoffersPageModule);



/***/ }),

/***/ "./src/app/account/myoffers/myoffers.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/myoffers/myoffers.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tnctxt {\n  font-size: 12px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.readmore {\n  font-size: 10px;\n}\n\n.tnctitle {\n  color: #7b7979;\n  font-weight: bold;\n}\n\n.couponcode {\n  font-weight: bold;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9teW9mZmVycy9teW9mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxpQkFBQTtBQUVEOztBQUFBO0VBQ0MsZUFBQTtBQUdEOztBQURBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FBSUQ7O0FBREE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUFJRCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbXlvZmZlcnMvbXlvZmZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRuY3R4dHtcblx0Zm9udC1zaXplOiAxMnB4O1xufVxuLmJvbGR7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlYWRtb3Jle1xuXHRmb250LXNpemU6IDEwcHg7XG59XG4udG5jdGl0bGV7XG5cdGNvbG9yOiAjN2I3OTc5O1xuXHRmb250LXdlaWdodDogYm9sZDtcblxufVxuLmNvdXBvbmNvZGV7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/myoffers/myoffers.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/myoffers/myoffers.page.ts ***!
  \***************************************************/
/*! exports provided: MyoffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyoffersPage", function() { return MyoffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyoffersPage = class MyoffersPage {
    constructor() {
        this.offers = [];
    }
    ngOnInit() {
        this.load_faqs();
    }
    load_faqs() {
        fetch('./assets/offers.json').then(res => res.json())
            .then(json => {
            this.offers = json.offers;
            console.log(this.offers);
        });
    }
    onHdrClick(offer) {
        offer.tnctapped = !offer.tnctapped;
    }
};
MyoffersPage.ctorParameters = () => [];
MyoffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myoffers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myoffers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/myoffers/myoffers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myoffers.page.scss */ "./src/app/account/myoffers/myoffers.page.scss")).default]
    })
], MyoffersPage);



/***/ })

}]);
//# sourceMappingURL=account-myoffers-myoffers-module-es2015.js.map