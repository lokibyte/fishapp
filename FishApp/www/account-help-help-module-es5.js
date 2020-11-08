(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-help-help-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/account/help/help.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/help/help.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAccountHelpHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"primary\" size=\"small\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/tabs/tab4\"></ion-back-button>\n  </ion-buttons>\n  <ion-title>Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-card *ngFor=\"let faq of faqs\">\n    <ion-card-header>\n      <ion-card-subtitle color=\"tertiary\" class=\"bold\" (click)=\"onHdrClick(faq)\">{{faq.title}}</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content *ngIf=\"faq.tapped\">\n      {{faq.body}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/account/help/help-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/account/help/help-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: HelpPageRoutingModule */

    /***/
    function srcAppAccountHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function () {
        return HelpPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./help.page */
      "./src/app/account/help/help.page.ts");

      var routes = [{
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
      }];

      var HelpPageRoutingModule = function HelpPageRoutingModule() {
        _classCallCheck(this, HelpPageRoutingModule);
      };

      HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/account/help/help.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/account/help/help.module.ts ***!
      \*********************************************/

    /*! exports provided: HelpPageModule */

    /***/
    function srcAppAccountHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPageModule", function () {
        return HelpPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./help-routing.module */
      "./src/app/account/help/help-routing.module.ts");
      /* harmony import */


      var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./help.page */
      "./src/app/account/help/help.page.ts");

      var HelpPageModule = function HelpPageModule() {
        _classCallCheck(this, HelpPageModule);
      };

      HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
      })], HelpPageModule);
      /***/
    },

    /***/
    "./src/app/account/help/help.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/account/help/help.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAccountHelpHelpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bold {\n  font-weight: bold;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2hlbHAvaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/account/help/help.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/account/help/help.page.ts ***!
      \*******************************************/

    /*! exports provided: HelpPage */

    /***/
    function srcAppAccountHelpHelpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpPage", function () {
        return HelpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HelpPage = /*#__PURE__*/function () {
        function HelpPage() {
          _classCallCheck(this, HelpPage);

          this.faqs = [];
        }

        _createClass(HelpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load_faqs();
          }
        }, {
          key: "load_faqs",
          value: function load_faqs() {
            var _this = this;

            fetch('./assets/faqs.json').then(function (res) {
              return res.json();
            }).then(function (json) {
              _this.faqs = json.faq;
              console.log(_this.faqs);
            });
          }
        }, {
          key: "onHdrClick",
          value: function onHdrClick(faq) {
            faq.tapped = !faq.tapped;
          }
        }]);

        return HelpPage;
      }();

      HelpPage.ctorParameters = function () {
        return [];
      };

      HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./help.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/account/help/help.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./help.page.scss */
        "./src/app/account/help/help.page.scss"))["default"]]
      })], HelpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-help-help-module-es5.js.map