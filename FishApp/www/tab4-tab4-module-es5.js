(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{isLoggedIn ? \"My Account\":\"Login\"}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isLoggedIn\">\n\t<ion-button expand=\"block\" class=\"login-btn\" (click)=\"login()\">\n\t\t<ion-text>Login/Signup</ion-text>\n\t</ion-button>\n</ion-content>\n\n<ion-content *ngIf=\"isLoggedIn\">\n\t<ion-list class=\"ion-no-padding\">\n\t  <ion-item button detail (click)=\"manageAdress()\">\n\t    <ion-icon color=\"orange\" name=\"home\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">Manage Address</ion-label>\n\t  </ion-item>\n\t  <ion-item button detail (click)=\"myOrders()\">\n\t  \t<ion-icon color=\"orange\" name=\"wallet\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">My Orders</ion-label>\n\t  </ion-item>\n\t  <ion-item button detail (click)=\"favourites()\">\n\t  \t<ion-icon color=\"orange\" name=\"heart\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">Favourites</ion-label>\n\t  </ion-item>\n\t  <ion-item button detail (click)=\"myOffers()\">\n\t  \t<ion-icon color=\"orange\" name=\"sunny\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">Offers</ion-label>\n\t  </ion-item>\n\t  <ion-item button detail (click)=\"help()\"> \n\t  \t<ion-icon color=\"orange\" name=\"help-circle\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">Help</ion-label>\n\t  </ion-item>\n\n\t  <ion-item button (click)=\"logout()\"> \n\t  \t<ion-icon color=\"orange\" name=\"power\" slot=\"start\"></ion-icon>\n\t    <ion-label class=\"grayclr\">Logout</ion-label>\n\t  </ion-item>\n\t</ion-list>\n\n\t<ion-list>\n\t\t<ion-item-divider color=\"light\">\n\t\t  <ion-label class=\"divider-font\">\n\t\t    Past Orders\n\t\t  </ion-label>\n\t\t</ion-item-divider>\n\t</ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
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


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grayclr {\n  color: #6d6969;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.login-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 45%;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0csaUJBQUE7QUFDSjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheWNscntcblx0Y29sb3I6ICM2ZDY5Njk7XG5cdGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0NSU7XG4gIHdpZHRoOiA2MCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/signin.service */
      "./src/app/services/signin.service.ts");

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(router, toastController, signin) {
          _classCallCheck(this, Tab4Page);

          this.router = router;
          this.toastController = toastController;
          this.signin = signin;
        }

        _createClass(Tab4Page, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.isLoggedIn = localStorage.getItem("isLoggedIn");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "manageAdress",
          value: function manageAdress() {
            console.info("manageAdress");
            this.router.navigate(['/manageaddress']);
          }
        }, {
          key: "myOrders",
          value: function myOrders() {
            console.info("myOrders");
            this.router.navigate(['/myorders']);
          }
        }, {
          key: "favourites",
          value: function favourites() {
            console.info("favourites");
            this.router.navigate(['/favourites']);
          }
        }, {
          key: "myOffers",
          value: function myOffers() {
            console.info("myOffers");
            this.router.navigate(['/myoffers']);
          }
        }, {
          key: "help",
          value: function help() {
            console.info("help");
            this.router.navigate(['/help']);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      localStorage.clear();
                      this.presentToast("Logout successfully");
                      this.router.navigate(['/tabs/tab1']);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            this.signin.redirectToLogin();
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        mode: "md",
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]
        }];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map