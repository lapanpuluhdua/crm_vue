(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Role_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isDeleting: false
    };
  },
  methods: {
    deleteTag: function deleteTag() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isDeleting = true;
                _context.next = 3;
                return _this.callApi('delete', _this.getDeleteModalObj.deleteUrl, _this.getDeleteModalObj.data);

              case 3:
                res = _context.sent;

                if (res.status === 200) {
                  _this.s(_this.getDeleteModalObj.successMsg);

                  _this.$store.commit('setDeleteModal', true);
                } else {
                  _this.swr();

                  _this.$store.commit('setDeleteModal', false);
                }

                _this.isDeleting = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    closeModal: function closeModal() {
      this.$store.commit('setDeleteModal', false);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['getDeleteModalObj']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DeleteModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DeleteModal.vue */ "./resources/js/components/DeleteModal.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'role',
  components: {
    ClipboardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ClipboardIcon,
    DeleteModal: _components_DeleteModal_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      data: {
        id: '',
        name: '' // description: '',

      },
      roles: [],
      addModal: false,
      isAdding: false,
      index: -1
    };
  },
  methods: {
    clearForm: function clearForm() {
      var _this = this;

      Object.keys(this.data).forEach(function (k) {
        return _this.data[k] = '';
      });
    },
    add: function add() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.data.name.trim() == '')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this2.e('Name is required'));

              case 2:
                _context.next = 4;
                return _this2.callApi('post', 'roles', _this2.data);

              case 4:
                res = _context.sent;

                //api created success, success status will be 201
                if (res.status === 201) {
                  _this2.roles.unshift(res.data);

                  _this2.s('Role has been added successfully!');

                  _this2.addModal = false;

                  _this2.clearForm();
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this2.e(res.data.errors.name[0]);
                    }
                  } else {
                    _this2.swr();
                  }
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    edit: function edit(data, index) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.addModal = true;
                _this3.isAdding = false;
                _context2.next = 4;
                return _this3.callApi('get', 'roles/' + data.id);

              case 4:
                res = _context2.sent;

                if (res.status == 200) {
                  _this3.data = res.data;
                  _this3.addModal = true;
                  _this3.index = index;
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this3.e(res.data.errors.name[0]);
                    }
                  } else {
                    _this3.swr();
                  }
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    update: function update() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.callApi('put', 'roles/' + _this4.data.id, _this4.data);

              case 2:
                res = _context3.sent;

                if (res.status == 200) {
                  _this4.roles[_this4.index] = res.data;

                  _this4.s('Role has been edited successfully!');

                  _this4.addModal = false;

                  _this4.clearForm();
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this4.e(res.data.errors.name[0]);
                    }
                  } else {
                    _this4.swr();
                  }
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showDeletingModal: function showDeletingModal(data, i) {
      var deleteModalObj = {
        showDeleteModal: true,
        deleteUrl: 'roles/' + data.id,
        data: data,
        deletingIndex: i,
        isDeleted: false
      };
      this.$store.commit('setDeletingModalObj', deleteModalObj);
      console.log('delete method called');
    }
  },
  created: function created() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.callApi('get', 'roles');

            case 2:
              res = _context4.sent;
              console.log('res', res);

              if (res.status == 200) {
                _this5.roles = res.data;
              } else {
                _this5.swr();
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getDeleteModalObj'])),
  watch: {
    getDeleteModalObj: function getDeleteModalObj(obj) {
      if (obj.isDeleted) {
        this.roles.splice(obj.deletingIndex, 1);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/DeleteModal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteModal.vue?vue&type=template&id=cae0bcb2& */ "./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&");
/* harmony import */ var _DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Role.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Role.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=9997ff02& */ "./resources/js/pages/Role.vue?vue&type=template&id=9997ff02&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/pages/Role.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__.render,
  _Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Role.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Role.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Role.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteModal.vue?vue&type=template&id=cae0bcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&");


/***/ }),

/***/ "./resources/js/pages/Role.vue?vue&type=template&id=9997ff02&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Role.vue?vue&type=template&id=9997ff02& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_9997ff02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=template&id=9997ff02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=template&id=9997ff02&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "Modal",
        {
          attrs: {
            value: _vm.getDeleteModalObj.showDeleteModal,
            "mask-closable": false,
            closable: false,
            width: "360"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "ios-information-circle" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Delete confirmation!")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("Are you sure you want to delete this item?")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "default", size: "large" },
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    loading: _vm.isDeleting,
                    disabled: _vm.isDeleting
                  },
                  on: { click: _vm.deleteTag }
                },
                [_vm._v("Delete")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=template&id=9997ff02&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Role.vue?vue&type=template&id=9997ff02& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid pd-x-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        },
        [
          _c("div", [
            _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
              _c(
                "ol",
                { staticClass: "breadcrumb breadcrumb-style1 mg-b-10" },
                [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "dashboard" } } },
                        [_vm._v("Dashboard")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v("Role")]
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", {}, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("b", [_vm._v(" LIST ROLE ")]),
            _vm._v(" "),
            _vm.$can(["Role Create"])
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-info btn-xs float-right",
                    attrs: { href: "#", "data-toggle": "modal" },
                    on: {
                      click: function() {
                        _vm.addModal = true
                        _vm.isAdding = true
                        _vm.clearForm()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-plus" }),
                    _vm._v(" Add New Role\n        ")
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pd-lg-25" }, [
            _c(
              "div",
              {
                staticClass: "table table-bordered table-striped m-0 responsive"
              },
              [
                _c("table", { staticClass: "table products-table" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.$can(["Role View"])
                    ? _c(
                        "tbody",
                        _vm._l(_vm.roles, function(role, i) {
                          return _vm.roles.length
                            ? _c("tr", { key: i }, [
                                _c("td", [_vm._v(_vm._s((_vm.key = i + 1)))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(role.name))]),
                                _vm._v(" "),
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatDate")(role.created_at)
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "dropdown custom-dropdown" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary dropdown-toggle btn-sm",
                                          attrs: {
                                            type: "button",
                                            id: "dropdownMenuButton",
                                            "data-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      Options\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.$can(["Role Update", "Role Delete"])
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "dropdown-menu",
                                              attrs: {
                                                "aria-labelledby":
                                                  "dropdownMenuButton"
                                              }
                                            },
                                            [
                                              _vm.$can(["Role Update"])
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        "data-toggle": "modal"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.edit(
                                                            role,
                                                            i
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-edit"
                                                      }),
                                                      _vm._v("  Update")
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.$can(["Role Delete"])
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        "data-toggle": "modal"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.showDeletingModal(
                                                            role,
                                                            i
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-trash"
                                                      }),
                                                      _vm._v("  Remove")
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e()
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: {
            title: "Roles Form",
            "mask-closable": true,
            closable: true,
            width: "800px"
          },
          model: {
            value: _vm.addModal,
            callback: function($$v) {
              _vm.addModal = $$v
            },
            expression: "addModal"
          }
        },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("div", { staticClass: "media align-items-center" }, [
              _c(
                "span",
                { staticClass: "tx-color-03 d-none d-sm-block" },
                [_c("ClipboardIcon")],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "media-body mg-sm-l-20" }, [
                _c("h4", { staticClass: "tx-18 tx-sm-20 mg-b-2" }, [
                  _vm._v("Role Form")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "alert alert-danger alert-dismissible mg-b-20 fade show",
              attrs: { role: "alert" }
            },
            [
              _c("strong", [_vm._v("Reminder!")]),
              _vm._v(" All fields must be filled in.\n    ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pd-sm-20", attrs: { slot: "" }, slot: "default" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("p", [
                      _c("b", [
                        _vm._v(" Name"),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.name,
                          expression: "data.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Full Name"
                      },
                      domProps: { value: _vm.data.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "name", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.id,
                expression: "data.id"
              }
            ],
            attrs: { type: "hidden", name: "id" },
            domProps: { value: _vm.data.id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "id", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-dark",
                on: {
                  click: function($event) {
                    _vm.addModal = false
                  }
                }
              },
              [_vm._v("Close")]
            ),
            _vm._v(" "),
            _vm.isAdding
              ? _c(
                  "button",
                  { staticClass: "btn btn-info", on: { click: _vm.add } },
                  [_vm._v("Add Role")]
                )
              : _c(
                  "button",
                  { staticClass: "btn btn-info", on: { click: _vm.update } },
                  [_vm._v("Update Role")]
                )
          ])
        ]
      ),
      _vm._v(" "),
      _c("DeleteModal")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Permissions")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created At")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _vm._v("Create\n                    "),
      _c("input", { attrs: { type: "checkbox", name: "name1" } }),
      _vm._v(" \n                    View\n                    "),
      _c("input", { attrs: { type: "checkbox", name: "name1" } }),
      _vm._v(" \n                    Edit\n                    "),
      _c("input", { attrs: { type: "checkbox", name: "name1" } }),
      _vm._v(" \n                    Delete\n                    "),
      _c("input", { attrs: { type: "checkbox", name: "name1" } }),
      _vm._v("                 \n                ")
    ])
  }
]
render._withStripped = true



/***/ })

}]);