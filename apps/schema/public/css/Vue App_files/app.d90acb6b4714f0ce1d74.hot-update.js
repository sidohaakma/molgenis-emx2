webpackHotUpdate("app",{

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/ViewPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ \"../node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ \"../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js\");\n/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ckeditor: _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_0___default.a.component\n  },\n  data() {\n    return {\n      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a,\n      draft: \"<b>Hello World</b>\",\n      editorConfig: {\n        toolbar: [\n          \"heading\",\n          \"|\",\n          \"bold\",\n          \"italic\",\n          \"underline\",\n          \"bulletedList\",\n          \"numberedList\",\n          \"blockQuote\",\n          \"|\",\n          \"link\"\n        ]\n      }\n    };\n  },\n  props: {\n    page: String,\n    session: {\n      type: Object,\n      default: () => {\n        return {\n          session: {\n            settings: {\n              \"page.one\": {\n                body: \"<h1>Hello World</h1>\"\n              }\n            }\n          }\n        };\n      }\n    }\n  },\n  computed: {\n    names() {\n      _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a.toolbar.entries();\n      //return ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName);\n    },\n    contents() {\n      if (\n        this.session &&\n        this.session.settings &&\n        this.session.settings[\"page.\" + this.page]\n      ) {\n        return this.session.settings[\"page.\" + this.page];\n      }\n      return \"page '\" + this.page + \"' not found\";\n    }\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1ZpZXdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVmlld1BhZ2UudnVlPzRhYzMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIHBhZ2U6IHt7IHBhZ2UgfX0gY29udGVudHM6IHt7IGNvbnRlbnRzIH19XG5cbiAgICA8U2hvd01vcmU+IHNlc3Npb24gPSB7eyBzZXNzaW9uIH19PC9TaG93TW9yZT5cbiAgICA8Y2tlZGl0b3IgOmVkaXRvcj1cImVkaXRvclwiIHYtbW9kZWw9XCJkcmFmdFwiIDpjb25maWc9XCJlZGl0b3JDb25maWdcIiAvPlxuICAgIDxTaG93TW9yZSB0aXRsZT1cImRlYnVnXCI+XG4gICAgICA8cHJlPlxuZHJhZnQgPSB7eyBkcmFmdCB9fVxuXG4gICAgICAge3sgbmFtZXMgfX1cbiAgICAgIDwvcHJlPlxuICAgIDwvU2hvd01vcmU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDS0VkaXRvciBmcm9tIFwiQGNrZWRpdG9yL2NrZWRpdG9yNS12dWVcIjtcbmltcG9ydCBDbGFzc2ljRWRpdG9yIGZyb20gXCJAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgY2tlZGl0b3I6IENLRWRpdG9yLmNvbXBvbmVudFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0b3I6IENsYXNzaWNFZGl0b3IsXG4gICAgICBkcmFmdDogXCI8Yj5IZWxsbyBXb3JsZDwvYj5cIixcbiAgICAgIGVkaXRvckNvbmZpZzoge1xuICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgXCJoZWFkaW5nXCIsXG4gICAgICAgICAgXCJ8XCIsXG4gICAgICAgICAgXCJib2xkXCIsXG4gICAgICAgICAgXCJpdGFsaWNcIixcbiAgICAgICAgICBcInVuZGVybGluZVwiLFxuICAgICAgICAgIFwiYnVsbGV0ZWRMaXN0XCIsXG4gICAgICAgICAgXCJudW1iZXJlZExpc3RcIixcbiAgICAgICAgICBcImJsb2NrUXVvdGVcIixcbiAgICAgICAgICBcInxcIixcbiAgICAgICAgICBcImxpbmtcIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBwYWdlOiBTdHJpbmcsXG4gICAgc2Vzc2lvbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlc3Npb246IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIFwicGFnZS5vbmVcIjoge1xuICAgICAgICAgICAgICAgIGJvZHk6IFwiPGgxPkhlbGxvIFdvcmxkPC9oMT5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBuYW1lcygpIHtcbiAgICAgIENsYXNzaWNFZGl0b3IudG9vbGJhci5lbnRyaWVzKCk7XG4gICAgICAvL3JldHVybiBDbGFzc2ljRWRpdG9yLmJ1aWx0aW5QbHVnaW5zLm1hcChwbHVnaW4gPT4gcGx1Z2luLnBsdWdpbk5hbWUpO1xuICAgIH0sXG4gICAgY29udGVudHMoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2Vzc2lvbiAmJlxuICAgICAgICB0aGlzLnNlc3Npb24uc2V0dGluZ3MgJiZcbiAgICAgICAgdGhpcy5zZXNzaW9uLnNldHRpbmdzW1wicGFnZS5cIiArIHRoaXMucGFnZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uLnNldHRpbmdzW1wicGFnZS5cIiArIHRoaXMucGFnZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJwYWdlICdcIiArIHRoaXMucGFnZSArIFwiJyBub3QgZm91bmRcIjtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/ViewPage.vue?vue&type=script&lang=js&\n");

/***/ })

})