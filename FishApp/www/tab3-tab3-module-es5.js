(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode='md'>\n  <ion-toolbar>\n    <ion-title>\n      Review Orders    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-list class=\"fishlist\" class=\"ion-no-padding\" lines=\"inset\">\n    <ion-item-divider color=\"light\">\n    <ion-label class=\"divider-font\">\n      Items\n    </ion-label>\n  </ion-item-divider>\n    <ion-item *ngFor=\"let item of cart\" >\n      <div style=\"float:left;width: 100px\">\n        <ion-img slot=\"start\" [src]=\"item.icon\" class=\"cart-img\"></ion-img> \n      </div>\n      \n      <div style=\"float:left;width: 40%;margin-left: 10px;margin-right: 10px;margin-bottom: 10px;\">\n        <ion-label style=\"font-weight: bold;font-size: 11px;color:#292828f2\" class=\"ion-text-wrap\">\n          {{item.name}}\n        </ion-label>\n        <ion-label style=\"font-size: 10px;color: gray;margin-top: 5px;margin-bottom: 3px;\">\n          300.00\n        </ion-label>\n        <ion-label style=\"font-weight: bold;font-size: 10px;\">\n          200.00\n        </ion-label>\n      </div>\n      \n      <div style=\"float: right; width: 80px; margin-left: 10px;\">\n        <div class=\"cart-btns\">\n            <div class=\"add-remove\" *ngIf=\"cart.length > 0\">\n              <ion-icon (click)=\"decrement(item)\" style=\"display: inline-block;padding-right: 5px;padding-left: 5px;\" name=\"remove-outline\" class=\"removecls\"> + </ion-icon>\n              <div style=\"display: inline-block;width: 25px;font-weight:500;text-align: center;\" class=\"qtycls\">{{item.o_count}}</div>\n              <ion-icon (click)=\"increment(item)\" style=\"display: inline-block;padding-top: 2px;\" name=\"add-outline\" class=\"addcls\"> + </ion-icon>\n            </div>\n        </div> \n      </div>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list class=\"billdtls ion-no-margin\" lines=\"full\">\n    <ion-item-divider color=\"light\">\n    <ion-label class=\"divider-font\">\n      Bill Details\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item lines=\"none\" class=\"price-txt\">\n    <div style=\"float: left;width: 50%\">Item Total</div>\n    <div style=\"float: right;width: 50%\" class=\"ion-text-end\">{{total_amount}}</div>\n\n  </ion-item>\n  <ion-item lines=\"none\" class=\"price-txt\">\n    <div style=\"float: left;width: 50%\">Shipping</div>\n    <div style=\"float: right;width: 50%\" class=\"ion-text-end\">{{ship_charge}}</div>\n  </ion-item>\n\n  <ion-item class=\"price-txt\" *ngIf=\"promo_charge > 0\" >\n    <div style=\"float: left;width: 50%\">PROMO-{{promo_code}}</div>\n    <div style=\"float: right;width: 50%\" class=\"ion-text-end\">-{{promo_charge}}</div>\n  </ion-item>\n\n  <ion-item class=\"total-price-txt\">\n    <div style=\"float: left;width: 50%\">To Pay</div>\n    <div style=\"float: right;width: 50%\" class=\"ion-text-end\">{{(total_amount+ship_charge)-promo_charge}}</div>\n  </ion-item>\n\n  </ion-list>\n\n    <ion-item-divider color=\"light\" class=\"couponbtn\">\n    </ion-item-divider>\n    <ion-item button lines=\"full\" (click)=\"couponAlert()\" detail mode=\"ios\">\n      <ion-icon name=\"ribbon-outline\" color=\"danger\"></ion-icon>\n      <ion-label style=\"margin-left:10px\" class=\"divider-font\"  color=\"primary\">APPLY COUPON</ion-label>\n    </ion-item>\n    <ion-item-divider color=\"light\" class=\"couponbtn\">\n    </ion-item-divider>\n</ion-content>\n<ion-footer  class=\"ion-no-padding\">\n  <ion-toolbar color=\"primary\" mode=\"ios\" size=\"small\">\n    <ion-label slot=\"start\" >\n      <ion-text class=\"itemcount\" color=\"light\">{{itemcount}} Item</ion-text>\n      <ion-text class=\"totalprice\" color=\"light\">₹{{(total_amount+ship_charge)-promo_charge}}</ion-text>\n    </ion-label>\n\n    <ion-button slot=\"end\" size=\"small\" fill=\"clear\" class=\"ion-text-bold\" style=\"font-weight: bold;font-size: 12px;color:#292828f2\" color=\"light\" (click)=\"placeOrder()\">\n      PLACE ORDER\n      <ion-icon name=\"caret-forward-sharp\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fishlist ion-img {\n  height: 50px;\n}\n.fishlist .add-remove {\n  margin-left: 20px;\n  align-items: center;\n  border: 1px solid gray;\n  border-radius: 4px;\n  height: 24px;\n  color: #08af1d;\n}\n.fishlist .add-remove1 {\n  margin-left: 25px;\n  margin-top: -10px;\n  height: 24px;\n  font-weight: bold;\n}\n.cart-btns {\n  border: 1px solid #42d77d;\n  border-radius: 4px;\n  padding: 3px;\n  color: #0c0e0c;\n}\n.itemcount, .totalprice {\n  display: block;\n  margin: 2px 10px;\n  font-weight: bold;\n}\n.price-txt {\n  font-size: 12px;\n}\n.total-price-txt {\n  font-size: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFlBQUE7QUFBRjtBQUVDO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFMO0FBRUM7RUFDTyxpQkFBQTtFQUNILGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUw7QUFHQTtFQUNDLHlCQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtBQUFEO0FBR0E7RUFDQyxlQUFBO0FBQUQ7QUFFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXNobGlzdHtcblx0aW9uLWltZ3tcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdH1cblx0LmFkZC1yZW1vdmV7XG5cdCAgICBtYXJnaW4tbGVmdDogMjBweDtcblx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuXHQgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXHQgICAgaGVpZ2h0OiAyNHB4O1xuXHQgICAgY29sb3I6ICMwOGFmMWQ7XG5cdH1cblx0LmFkZC1yZW1vdmUxe1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcblx0ICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuXHQgICAgaGVpZ2h0OiAyNHB4O1xuXHQgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbi5jYXJ0LWJ0bnN7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM0MmQ3N2Q7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBjb2xvcjogIzBjMGUwYztcbn1cbi5pdGVtY291bnQsLnRvdGFscHJpY2V7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46MnB4IDEwcHg7XG5cdC8vIGNvbG9yOiBncmVlbjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbi5wcmljZS10eHR7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn1cbi50b3RhbC1wcmljZS10eHR7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
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


      var src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cart-service.service */
      "./src/app/services/cart-service.service.ts");
      /* harmony import */


      var src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/signin.service */
      "./src/app/services/signin.service.ts");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(router, alertController, toastController, cartservice, signin) {
          _classCallCheck(this, Tab3Page);

          this.router = router;
          this.alertController = alertController;
          this.toastController = toastController;
          this.cartservice = cartservice;
          this.signin = signin;
          this.cart = [];
          this.total_amount = 100;
          this.ship_charge = 30;
          this.promo_charge = 10;
          this.promo_code = "OFF50";
          this.itemcount = 0;
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.info("ionViewWillEnter:tab2");
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.cartservice.getCart();

                    case 2:
                      this.cart = _context.sent;
                      console.info("ionViewDidEnter:tab2", this.cart);

                      this._isEmptyCart();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "increment",
          value: function increment(item) {
            this.cartservice.addCart(item);

            var _itemcount = this.cartservice.getCartItemCount();

            this.itemcount = _itemcount.value;
            console.info(this.cartservice.getCart());
          }
        }, {
          key: "decrement",
          value: function decrement(item) {
            this.cartservice.removeCart(item);

            this._isEmptyCart();
          }
        }, {
          key: "_isEmptyCart",
          value: function _isEmptyCart() {
            var _itemcount = this.cartservice.getCartItemCount();

            this.itemcount = _itemcount.value;

            if (_itemcount.value == 0) {
              this.presentToast("Your cart is empty!!");
              this.router.navigate(['/tabs/tab1']);
            }
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            if (this.signin.isLoggedIn()) {
              this.router.navigate(['/deliveryopts']);
            } else {
              console.info("please login");
              this.signin.redirectToLogin();
            }
          }
        }, {
          key: "couponAlert",
          value: function couponAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.info("couponAlert()");
                      _context2.next = 3;
                      return this.alertController.create({
                        cssClass: 'alert-coupon-class',
                        header: 'Enter Coupon',
                        backdropDismiss: false,
                        inputs: [{
                          name: 'coupon',
                          type: 'text',
                          placeholder: 'Enter Coupon Code'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Apply',
                          handler: function handler(data) {
                            if (data.coupon.length == 0) {
                              _this.presentToast("Enter valid coupon code!!");
                            }

                            console.info('coupone code', data.coupon);
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        mode: "md",
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_4__["CartServiceService"]
        }, {
          type: src_app_services_signin_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map