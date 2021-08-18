(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Resetpassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var token = $('meta[name="csrf-token"]').attr('content');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'recoverpswd',
  data: function data() {
    return {
      formData: {
        email: '',
        password: '',
        token: '' // _token: token

      }
    };
  },
  mounted: function mounted() {
    if (this.$route.query.token != null) {//alert(this.$route.query.token);
      //localStorage.setItem('token', this.$route.query.token);
      //this.$router.push({ path: '/v' });
      //this.$store.commit('auth/setToken', this.$route.query.token);
      //this.$store.dispatch('auth/me');
      //window.location.href = '/v';
    } //console.log(this.$route.query.token);

  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.callApi('post', 'resetpwd', _this.formData);

              case 2:
                res = _context.sent;
                console.log('res', res);

                if (res.status == 200) {
                  alert("Password reset! Please relogin");
                } else {
                  _this.e(res.data.message);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // login() {
    //     axios.get('/sanctum/csrf-cookie').then(response => {
    //         axios.post("/api/login", this.formData).then( response =>{
    //             if (response.data.status_code == 200) {
    //                 $('#message').html("");
    //                 $('#alertMessage').css("display", "none");
    //                 // set token
    //                 this.$store.commit('setToken', response.data.token)
    //                 localStorage.setItem('token', response.data.token);
    //                 // window.location.href="/v";
    //                 this.$router.push({name: 'dashboard'});
    //             } else if (response.data.status_code == 400) {
    //                 $('#message').html(response.data.message);
    //                 $('#alertMessage').css("display", "block");
    //             }else if (response.data.status_code == 500) {
    //                 $('#message').html(response.data.message);
    //                 $('#alertMessage').css("display", "block");
    //             }
    //         });
    //     });
    // },
    logGmail: function logGmail() {
      window.location.href = "../auth/google";
    },
    logFacebook: function logFacebook() {
      window.location.href = "../auth/facebook";
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.formData.token = _this2.$route.query.id; //console.log('res',this.token);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
}); // }

/***/ }),

/***/ "./resources/js/pages/Resetpassword.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Resetpassword.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resetpassword.vue?vue&type=template&id=4593859e& */ "./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e&");
/* harmony import */ var _Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resetpassword.vue?vue&type=script&lang=js& */ "./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Resetpassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resetpassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4593859e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resetpassword.vue?vue&type=template&id=4593859e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Resetpassword.vue?vue&type=template&id=4593859e& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row g-0 h-100" }, [
      _c(
        "div",
        { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" },
        [
          _c("div", { staticClass: "login-about" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "about-desc" }, [
              _vm._v(
                "\n              SchoolScan's latest CRM system provides a powerful yet User friendly tools to maintain customer relationships and the management of collected information about prospects.\n\t\t\t\t\t\t"
              )
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "know-more", attrs: { href: "#" } }, [
              _vm._v("Know More "),
              _c("img", {
                attrs: {
                  src: _vm.asset("/template/unipro/img/right-arrow.svg"),
                  alt: "Uni Pro Admin"
                }
              })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" },
        [
          _c("div", { staticClass: "login-wrapper" }, [
            _c(
              "form",
              {
                staticClass: "text-left",
                attrs: { action: "#", method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "login-screen" }, [
                  _c("div", { staticClass: "login-body form" }, [
                    _c("img", {
                      staticClass: "navbar-logo m-auto mb-3",
                      attrs: {
                        src: _vm.asset("/template/unipro/img/schoolscan.jpg"),
                        alt: "iChat",
                        width: "50%"
                      }
                    }),
                    _vm._v(" "),
                    _c("h6", [
                      _vm._v(
                        "In order to access your Uni Pro account, please enter the email id you provided during the registration process."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "field-wrapper",
                        attrs: { id: "email-field" }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.password,
                              expression: "formData.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "password",
                            name: "password",
                            type: "password",
                            placeholder: "Enter New Password"
                          },
                          domProps: { value: _vm.formData.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "field-placeholder" }, [
                          _vm._v("New Password")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slogan" }, [
      _c("span", [_vm._v("SchoolScan")]),
      _vm._v(" "),
      _c("span", [_vm._v("CRM")]),
      _vm._v(" "),
      _c("span", [_vm._v("Simple.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "actions" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", value: "" }
        },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);