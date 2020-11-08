(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar mode=\"md\" color=\"primary\">\n    <ion-title >\n      Coastal Fish\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!showsearchbar\">\n      <ion-button (click)=\"showSearch()\">\n        <ion-icon  name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"showsearchbar\" mode=\"ios\" color=\"primary\">\n    <ion-searchbar\n      class=\"homesearch\"\n      placeholder=\"Search..\"\n      showCancelButton=\"focus\"\n      (ionBlur)=\"searchFocusOut()\"\n      showcancelbutton=\"\"\n      (ionInput)=\"filterList($event)\"\n      >\n    </ion-searchbar>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"!showsearchbar\" mode=\"ios\">\n    <div class=\"scrolling-wrapper\">\n      <ion-chip class=\"btn\" color=\"success\" mode=\"ios\" *ngFor=\"let category of categories;let i=index\" [class.selectedCls]=\"selectedFltr == i\" (click)=\"onFilter(category,i)\">\n        <ion-label >{{category.name}}</ion-label>\n      </ion-chip>\n    </div>\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"fishlist\">\n    <ion-item *ngFor=\"let item of fishes\" style=\"\">\n      \n      <div style=\"float:left;width: 70%\">\n        <ion-label style=\"font-weight: bold;font-size: 12px;color:#292828f2\" class=\"ion-text-wrap\">\n          {{item.name}}\n        </ion-label>\n        <ion-label style=\"font-size: 12px;color: gray;margin-top: 10px;margin-bottom: 3px;\">\n          300.00\n        </ion-label>\n        <ion-label style=\"font-weight: bold;font-size: 12px;\">\n          200.00\n        </ion-label>\n      </div>\n      \n      <div style=\"float:right;width: 30%;margin:5px;\">\n        <ion-img [src]=\"item.icon\"></ion-img> \n        <div class=\"cart-btns\">\n            <ion-button class=\"add-remove1\" size=\"small\" color=\"primary\" mode=\"ios\" (click)=\"increment(item)\" *ngIf=\"!item.o_count\">Add</ion-button>\n            <div class=\"add-remove\" *ngIf=\"item.o_count > 0\">\n              <ion-icon (click)=\"decrement(item)\" style=\"display: inline-block;padding-right: 5px;padding-left: 5px;\" name=\"remove-outline\" class=\"removecls\"> + </ion-icon>\n              <div style=\"display: inline-block;width: 25px;font-weight:500;text-align: center;\" class=\"qtycls\">{{item.o_count}} </div>\n              <ion-icon (click)=\"increment(item)\" style=\"display: inline-block;padding-top: 2px;\" name=\"add-outline\" class=\"addcls\"> + </ion-icon>\n            </div>\n        </div> \n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.scrolling-wrapper .btn {\n  display: inline-block;\n  font-size: 12px;\n  height: 27px;\n}\n.scrolling-wrapper .selectedCls {\n  background-color: #28ba62;\n  color: white;\n}\n.homesearch {\n  padding: 1px;\n  height: 30px;\n}\n.homesearch.searchbar-cancel-button .sc-ion-searchbar-ios {\n  font-size: 12px;\n}\n.fishlist ion-img {\n  height: 80px;\n}\n.fishlist .add-remove {\n  margin-left: 20px;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 4px;\n  height: 24px;\n  color: #08af1d;\n}\n.fishlist .add-remove1 {\n  margin-left: 25px;\n  margin-top: -10px;\n  height: 24px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQUNIO0FBRUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQ0M7RUFDQyxlQUFBO0FBQ0Y7QUFHQztFQUNDLFlBQUE7QUFBRjtBQUVDO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFMO0FBRUM7RUFDTyxpQkFBQTtFQUNILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUwiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbiAgLnNlbGVjdGVkQ2xze1xuICBcdGJhY2tncm91bmQtY29sb3I6ICMyOGJhNjI7XG4gIFx0Y29sb3I6IHdoaXRlO1xuICB9XG59XG4uaG9tZXNlYXJjaHtcblx0cGFkZGluZzogMXB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdFxuXHQmLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uIC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcblx0XHRmb250LXNpemU6MTJweDtcblx0fVxufVxuLmZpc2hsaXN0e1xuXHRpb24taW1ne1xuXHRcdGhlaWdodDogODBweDtcblx0fVxuXHQuYWRkLXJlbW92ZXtcblx0ICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cdCAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cdCAgICBoZWlnaHQ6IDI0cHg7XG5cdCAgICBjb2xvcjogIzA4YWYxZDtcblx0fVxuXHQuYWRkLXJlbW92ZTF7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuXHQgICAgbWFyZ2luLXRvcDogLTEwcHg7XG5cdCAgICBoZWlnaHQ6IDI0cHg7XG5cdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0fVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart-service.service */ "./src/app/services/cart-service.service.ts");



let Tab1Page = class Tab1Page {
    constructor(cartservice) {
        this.cartservice = cartservice;
        this.showsearchbar = false;
        this.fishes = [];
        this.loggedin = true;
        this.categories = [
            {
                "name": "All",
                "type": 'all'
            },
            {
                "name": "Dry Fish",
                "type": 'dryfish'
            },
            {
                "name": "Fresh Water Fish",
                "type": 'freshwater'
            },
            {
                "name": "Shell Fish",
                "type": 'shellfish'
            },
            {
                "name": "Shell Fish2",
                "type": 'shellfish2'
            }
        ];
        this.items = [
            {
                id: "1",
                name: "Mackerel / Ayala / Bangda111 Mackerel / Ayala / Bangda111",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'seafish'
            },
            {
                id: "2",
                name: "Mackerel / Ayala / Bangda2222",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'seafish'
            },
            {
                id: "3",
                name: "Mackerel / Ayala / Bangda333",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'seafish'
            },
            {
                id: "4",
                name: "Mackerel / Ayala / Bangda444",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'seafish'
            },
            {
                id: "4",
                name: "Mackerel / Ayala / Bangda555",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'seafish'
            },
            {
                id: "5",
                name: "Dry fish1",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'dryfish'
            },
            {
                id: "6",
                name: "Dry fish2",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'dryfish'
            },
            {
                id: "6",
                name: "freshwater1",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'freshwater'
            },
            {
                id: "7",
                name: "freshwater2",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'freshwater'
            },
            {
                id: "8",
                name: "Shell fish3",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'shellfish'
            },
            {
                id: "9",
                name: "Shell fish31",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'shellfish'
            },
            {
                id: "10",
                name: "Shell fish2",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'shellfish2'
            },
            {
                id: "11",
                name: "Shell fish21",
                content: "content1",
                icon: "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/t/fth-white-pomfret-1.jpg",
                category: 'shellfish2'
            }
        ];
        this.imgHeight = 100;
        this.selectedFltr = 0; //default first filter item selected
    }
    ngOnInit() {
        console.info("ngOnInit");
    }
    ionViewDidEnter() {
        this.fishes = this.items;
        console.info(this.cartservice.getCart());
        let cart = this.cartservice.getCart();
        if (cart.length == 0) {
            console.info("empty");
            this.items = this.items.map(item => {
                console.info(item.hasOwnProperty("o_count"));
                if (item.hasOwnProperty("o_count")) {
                    item["o_count"] = 0;
                }
                return item;
            });
        }
        else {
            console.info("somed data");
        }
    }
    showSearch() {
        this.showsearchbar = true;
    }
    searchFocusOut() {
        this.showsearchbar = false;
    }
    onFilter(category, idx) {
        this.selectedFltr = idx;
        this._filterlist(category.type);
    }
    filterList(evt) {
        this._filterlist(evt.target.value);
    }
    _filterlist(txt) {
        this.fishes = this.items;
        if (!txt) {
            return;
        }
        this.fishes = this.items.filter(fish => {
            if (txt == 'all') {
                return fish;
            }
            else if (fish.name && txt) {
                return (fish.name.toLowerCase().indexOf(txt.toLowerCase()) > -1 || fish.category.toLowerCase().indexOf(txt.toLowerCase()) > -1);
            }
        });
    }
    increment(item) {
        this.cartservice.addCart(item);
    }
    decrement(item) {
        this.cartservice.removeCart(item);
    }
};
Tab1Page.ctorParameters = () => [
    { type: src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_2__["CartServiceService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map