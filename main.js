/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./new-font.ttf */ "./src/new-font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./new-font2.ttf */ "./src/new-font2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin:0;
    padding:0;
}
@font-face{
    font-family:'myFont';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);
}
@font-face{
    font-family:'myFont2';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(truetype);
}
body{
    font-family:'myFont2';
    height:100vh;
}
.container{
    height:100vh;
}
.container>.content{
    display:grid;
    height:100%;
    width:100%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 5fr;
    position:relative;
}
.container>.content>.menu-items{
    grid-column:1/2;
    grid-row:1/3;
    background-color: #987070;
    margin:0 0.2rem 0.2rem 0;
    padding:1.2rem 0.5rem 0 0.5rem;
}
.container>.content>.menu-items>h3{
    margin-bottom:1.2rem;
    font-family:'myFont';
}
.container>.content>.menu-items>.all-projects>input,.menu-items>.today-projects>input,.menu-items>.projects>.project-list>div>input{
    width:25px;
    height:25px;
    margin-right:0.4rem;
    border-radius:5px;
}
.container>.content>.menu-items>.all-projects,.content>.menu-items>.today-projects,.menu-items>.projects>.project-list>div{
    display:flex;
    margin-bottom: 0.5rem;
}
.container>.content>.menu-items>.all-projects>p:hover,.content>.menu-items>.today-projects>p:hover,.menu-items>.projects>.project-list>div>span:hover{
    transform: translate(-4px, -4px);
}
.menu-items>.all-projects>p,.menu-items>.today-projects>p,.menu-items>.projects>.project-list>div>span{
    padding:0rem 0.3rem;
    border-radius:5px;
    font-size: 1.2rem;
}
.container>.content>.menu-items>.projects{
    margin-top:3rem;
}
.container>.content>.menu-items>.projects>h3{
    font-family:'myFont';
}
.container>.content>.menu-items>.projects>.reset-projects>button{
    border:none;
    border-radius:10px;
    background-color: #40534C;
    padding:0.3rem 0.5rem;
    color:white;
    margin-top:1.5rem;
}
.container>.content>.menu-items>.projects>.reset-projects>button:hover{
    background:#758694;
}
.container>.content>.project-view{
    grid-column:2/3;
    grid-row:1/2;
    padding-top:1.2rem;
    background-color: #DFD3C3;
    margin-bottom:0.2rem;
}
.container>.content>.project-view>h1{
    padding-left:0.8rem;
    color:whitesmoke;
}
.container>.content>.todo-list{
    grid-column:2/3;
    grid-row:2/3;
    background-color: lightgray;
    padding:2rem 1rem 1rem 4rem;
    display:flex;
    flex-direction:column;
}
.container>.content>.todo-list>.nav-title{
    margin:0 1.2rem;
}
.container>.content>.todo-list>.nav-title>span:first-child{
    width:200px;
}
.container>.content>.todo-list>.nav-title>span{
    width:100px;
    font-size:1.5rem;
    display:inline-block;
}
.container>.content>.todo-list>.Todo-list{
    display:flex;
    flex-direction:column;
    margin:1.2rem 0 0 0.5rem;
    flex:3
}
.container>.content>.todo-list>.Todo-list>div{
    display:flex;
}
.container>.content>.todo-list>.Todo-list>div>input{
    height:20px;
    margin:0.2rem 0.2rem 0 0;
}
.container>.content>.todo-list>.Todo-list>div>label{
    width:195px;
    height:25px;
    font-size:1.2rem;
    display:flex;
    align-items: center;
}
.container>.content>.todo-list>.Todo-list>div>label+span{
    width:110px;
    height:25px;
    display:flex;
    align-items: center;
    font-size:1rem;
}
.container>.content>.todo-list>.Todo-list>div>span{
    width:100px;
    height:25px;
    font-size:1.2rem;
    display:flex;
    align-items: center;
    border-radius:10px;
}
.container>.content>.todo-list>.Todo-list>div>div>img{
    width:25px;
    height:25px;
}
.container>.content>.todo-list>.add-icon-large{
    display: flex;
    justify-content: end;
    padding:0 2.5rem 1.5rem 0;
}
.container>.content>#my-dialog,.content>#my-dialog2,.content>#my-dialog3{
    grid-column:2/3;
    grid-row:2/3;
    position:absolute;
    justify-self:center;
    border:none;
    background:#987070;
    border-radius:10px;
}
.content>#my-dialog>#my-form{
    display:flex;
    flex-direction:column;
    align-items:center;
}
.content>#my-dialog{
    width:150px;
    height:140px;
    padding:1rem 0.8rem;
}
.content>#my-dialog>#my-form>legend{
    font-size:1.7rem;
    margin-bottom:1rem;
    font-family:'myFont';
}
.content>#my-dialog>#my-form>input{
    border:none;
    font-family:'myFont2';
    margin-bottom:1.2rem;
    border-radius:5px;
    height:30px;
    width:140px;
    font-size:1rem;
}
.content>#my-dialog>#my-form>input:focus,#my-dialog2>#my-form2 input:focus,#my-dialog3>#my-form3 input{
    outline:none;
}
.content>#my-dialog>#my-form>button,#my-dialog2>#my-form2>div>button,#my-dialog3>#my-form3>div>button{
    font-family:'myFont2';
    font-size:0.8rem;
    width:70px;
    height:25px;
    border:none;
    border-radius:10px;
    background:#40534C;
    display:block;
}
.content>#my-dialog>#my-form>button:hover,#my-dialog2>#my-form2>.button>button:hover,#my-dialog3>#my-form3>.button>button:hover{
    background:#758694;
}
.content>#my-dialog2,.content>#my-dialog3{
    height:280px;
    width:250px;
    padding:1rem 0.8rem;
}
.content>#my-dialog2>#my-form2,#my-dialog3>#my-form3{
    display:flex;
    flex-direction:column;
}
#my-dialog2>#my-form2>legend,#my-dialog3>#my-form3>legend{
    font-size:1.7rem;
    margin-bottom:1rem;
    font-family:'myFont';
    display:flex;
    justify-content: center;
}
#my-dialog2>#my-form2>input,#my-dialog3>#my-form3>input{
    border:none;
    font-family:'myFont2';
    margin-bottom:0.5rem;
    border-radius:5px;
    font-size:1.3rem;
    height:30px;
}
.content>#my-dialog2>#my-form2>div,#my-dialog3>#my-form3>div{
    margin:0.5rem 0 0.5rem 0;
}
#my-dialog2>#my-form2>div>label,#my-dialog3>#my-form3>div>label{
    width:70px;
    display:inline-block;
}
#my-dialog2>#my-form2>div>input,#my-dialog3>#my-form3>div>input,#my-form2>div>select,#my-form3>div>select{
    border:none;
    font-family:'myFont2';
    border-radius:5px;
}
#my-dialog2>#my-form2>.button,#my-dialog3>#my-form3>.button{
    display:flex;
    justify-content: center;
}
@media(max-width:800px){
    .container>.content{
        grid-template-columns:1fr;
        grid-template-rows:2fr 1.5fr minmax(200px);
    }
    .container>.content>.menu-items{
        grid-column:1/2;
        grid-row:1/2;
    }
    .container>.content>.menu-items>h3{
        font-size:1.7rem;
    }
    .menu-items>.all-projects>p,.menu-items>.today-projects>p,.menu-items>.projects>.project-list>div>span{
        font-size:1.3rem;
    }
    .container>.content>.menu-items>.projects{
        margin-top:1.5rem;
    }
    .container>.content>.menu-items>.projects>h3{
        font-size:1.5rem
    }
    .container>.content>.menu-items>.projects>.reset-projects>button{
        font-size:1rem;
        margin:1rem 0 1rem 0;
    }
    .container>.content>.project-view{
        grid-column:1/2;
        grid-row:2/3;
    }
    .container>.content>.todo-list{
        grid-column:1/2;
        grid-row:3/4;
        min-height:300px;
        padding:1.2rem 0 0 0;
    }
    .container>.content>.todo-list>.nav-title{
        margin:0 0.9rem;
    }
    .container>.content>.todo-list>.nav-title>span{
        width:70px;
        font-size:1rem;
    }
    .container>.content>.todo-list>.nav-title>span:first-child{
        width:78px;
    }
    .container>.content>.todo-list>.nav-title>span+span+span{
        width:60px;
    }
    .container>.content>.todo-list>.Todo-list{
        margin:0.8rem 0 0 0;
    }
    .container>.content>.todo-list>.Todo-list>div{
        margin:0.3rem 0;
        height:25px;
    }
    .container>.content>.todo-list>.Todo-list>div>input{
        height:12px;
        margin:0 0.1rem 0 0.2rem;
    }
    .container>.content>.todo-list>.Todo-list>div>label{
        width:76px;
        height:15px;
        font-size:0.9rem;
    }
    .container>.content>.todo-list>.Todo-list>div>label+span{
        width:76px;
        height:15px;
        font-size:0.8rem;
    } 
    .container>.content>.todo-list>.Todo-list>div>label+span+span{
        width:60px;
    }
    .container>.content>.todo-list>.Todo-list>div>span{
        width:75px;
        height:15px;
        font-size:0.9rem;
    }
    .container>.content>.todo-list>.Todo-list>div>div>img{
        width:17px;
        height:17px;
    }
    .container>.content>#my-dialog,.content>#my-dialog2,.content>#my-dialog3{
        grid-column:1/2;
        grid-row:2/3;
        position:absolute;
        justify-self:center;
        border:none;
        background:#987070;
        border-radius:10px;
    }
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,4DAAwC;AAC5C;AACA;IACI,qBAAqB;IACrB,4DAAyC;AAC7C;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,8BAA8B;IAC9B,2BAA2B;IAC3B,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,qBAAqB;IACrB,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,2BAA2B;IAC3B,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,wBAAwB;IACxB;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,WAAW;IACX,WAAW;IACX,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,WAAW;IACX,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI;QACI,yBAAyB;QACzB,0CAA0C;IAC9C;IACA;QACI,eAAe;QACf,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;IACA;QACI;IACJ;IACA;QACI,cAAc;QACd,oBAAoB;IACxB;IACA;QACI,eAAe;QACf,YAAY;IAChB;IACA;QACI,eAAe;QACf,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,eAAe;IACnB;IACA;QACI,UAAU;QACV,cAAc;IAClB;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,mBAAmB;IACvB;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,WAAW;QACX,wBAAwB;IAC5B;IACA;QACI,UAAU;QACV,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;QACV,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,eAAe;QACf,YAAY;QACZ,iBAAiB;QACjB,mBAAmB;QACnB,WAAW;QACX,kBAAkB;QAClB,kBAAkB;IACtB;AACJ","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family:'myFont';\n    src:url(./new-font.ttf) format(truetype);\n}\n@font-face{\n    font-family:'myFont2';\n    src:url(./new-font2.ttf) format(truetype);\n}\nbody{\n    font-family:'myFont2';\n    height:100vh;\n}\n.container{\n    height:100vh;\n}\n.container>.content{\n    display:grid;\n    height:100%;\n    width:100%;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 5fr;\n    position:relative;\n}\n.container>.content>.menu-items{\n    grid-column:1/2;\n    grid-row:1/3;\n    background-color: #987070;\n    margin:0 0.2rem 0.2rem 0;\n    padding:1.2rem 0.5rem 0 0.5rem;\n}\n.container>.content>.menu-items>h3{\n    margin-bottom:1.2rem;\n    font-family:'myFont';\n}\n.container>.content>.menu-items>.all-projects>input,.menu-items>.today-projects>input,.menu-items>.projects>.project-list>div>input{\n    width:25px;\n    height:25px;\n    margin-right:0.4rem;\n    border-radius:5px;\n}\n.container>.content>.menu-items>.all-projects,.content>.menu-items>.today-projects,.menu-items>.projects>.project-list>div{\n    display:flex;\n    margin-bottom: 0.5rem;\n}\n.container>.content>.menu-items>.all-projects>p:hover,.content>.menu-items>.today-projects>p:hover,.menu-items>.projects>.project-list>div>span:hover{\n    transform: translate(-4px, -4px);\n}\n.menu-items>.all-projects>p,.menu-items>.today-projects>p,.menu-items>.projects>.project-list>div>span{\n    padding:0rem 0.3rem;\n    border-radius:5px;\n    font-size: 1.2rem;\n}\n.container>.content>.menu-items>.projects{\n    margin-top:3rem;\n}\n.container>.content>.menu-items>.projects>h3{\n    font-family:'myFont';\n}\n.container>.content>.menu-items>.projects>.reset-projects>button{\n    border:none;\n    border-radius:10px;\n    background-color: #40534C;\n    padding:0.3rem 0.5rem;\n    color:white;\n    margin-top:1.5rem;\n}\n.container>.content>.menu-items>.projects>.reset-projects>button:hover{\n    background:#758694;\n}\n.container>.content>.project-view{\n    grid-column:2/3;\n    grid-row:1/2;\n    padding-top:1.2rem;\n    background-color: #DFD3C3;\n    margin-bottom:0.2rem;\n}\n.container>.content>.project-view>h1{\n    padding-left:0.8rem;\n    color:whitesmoke;\n}\n.container>.content>.todo-list{\n    grid-column:2/3;\n    grid-row:2/3;\n    background-color: lightgray;\n    padding:2rem 1rem 1rem 4rem;\n    display:flex;\n    flex-direction:column;\n}\n.container>.content>.todo-list>.nav-title{\n    margin:0 1.2rem;\n}\n.container>.content>.todo-list>.nav-title>span:first-child{\n    width:200px;\n}\n.container>.content>.todo-list>.nav-title>span{\n    width:100px;\n    font-size:1.5rem;\n    display:inline-block;\n}\n.container>.content>.todo-list>.Todo-list{\n    display:flex;\n    flex-direction:column;\n    margin:1.2rem 0 0 0.5rem;\n    flex:3\n}\n.container>.content>.todo-list>.Todo-list>div{\n    display:flex;\n}\n.container>.content>.todo-list>.Todo-list>div>input{\n    height:20px;\n    margin:0.2rem 0.2rem 0 0;\n}\n.container>.content>.todo-list>.Todo-list>div>label{\n    width:195px;\n    height:25px;\n    font-size:1.2rem;\n    display:flex;\n    align-items: center;\n}\n.container>.content>.todo-list>.Todo-list>div>label+span{\n    width:110px;\n    height:25px;\n    display:flex;\n    align-items: center;\n    font-size:1rem;\n}\n.container>.content>.todo-list>.Todo-list>div>span{\n    width:100px;\n    height:25px;\n    font-size:1.2rem;\n    display:flex;\n    align-items: center;\n    border-radius:10px;\n}\n.container>.content>.todo-list>.Todo-list>div>div>img{\n    width:25px;\n    height:25px;\n}\n.container>.content>.todo-list>.add-icon-large{\n    display: flex;\n    justify-content: end;\n    padding:0 2.5rem 1.5rem 0;\n}\n.container>.content>#my-dialog,.content>#my-dialog2,.content>#my-dialog3{\n    grid-column:2/3;\n    grid-row:2/3;\n    position:absolute;\n    justify-self:center;\n    border:none;\n    background:#987070;\n    border-radius:10px;\n}\n.content>#my-dialog>#my-form{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n}\n.content>#my-dialog{\n    width:150px;\n    height:140px;\n    padding:1rem 0.8rem;\n}\n.content>#my-dialog>#my-form>legend{\n    font-size:1.7rem;\n    margin-bottom:1rem;\n    font-family:'myFont';\n}\n.content>#my-dialog>#my-form>input{\n    border:none;\n    font-family:'myFont2';\n    margin-bottom:1.2rem;\n    border-radius:5px;\n    height:30px;\n    width:140px;\n    font-size:1rem;\n}\n.content>#my-dialog>#my-form>input:focus,#my-dialog2>#my-form2 input:focus,#my-dialog3>#my-form3 input{\n    outline:none;\n}\n.content>#my-dialog>#my-form>button,#my-dialog2>#my-form2>div>button,#my-dialog3>#my-form3>div>button{\n    font-family:'myFont2';\n    font-size:0.8rem;\n    width:70px;\n    height:25px;\n    border:none;\n    border-radius:10px;\n    background:#40534C;\n    display:block;\n}\n.content>#my-dialog>#my-form>button:hover,#my-dialog2>#my-form2>.button>button:hover,#my-dialog3>#my-form3>.button>button:hover{\n    background:#758694;\n}\n.content>#my-dialog2,.content>#my-dialog3{\n    height:280px;\n    width:250px;\n    padding:1rem 0.8rem;\n}\n.content>#my-dialog2>#my-form2,#my-dialog3>#my-form3{\n    display:flex;\n    flex-direction:column;\n}\n#my-dialog2>#my-form2>legend,#my-dialog3>#my-form3>legend{\n    font-size:1.7rem;\n    margin-bottom:1rem;\n    font-family:'myFont';\n    display:flex;\n    justify-content: center;\n}\n#my-dialog2>#my-form2>input,#my-dialog3>#my-form3>input{\n    border:none;\n    font-family:'myFont2';\n    margin-bottom:0.5rem;\n    border-radius:5px;\n    font-size:1.3rem;\n    height:30px;\n}\n.content>#my-dialog2>#my-form2>div,#my-dialog3>#my-form3>div{\n    margin:0.5rem 0 0.5rem 0;\n}\n#my-dialog2>#my-form2>div>label,#my-dialog3>#my-form3>div>label{\n    width:70px;\n    display:inline-block;\n}\n#my-dialog2>#my-form2>div>input,#my-dialog3>#my-form3>div>input,#my-form2>div>select,#my-form3>div>select{\n    border:none;\n    font-family:'myFont2';\n    border-radius:5px;\n}\n#my-dialog2>#my-form2>.button,#my-dialog3>#my-form3>.button{\n    display:flex;\n    justify-content: center;\n}\n@media(max-width:800px){\n    .container>.content{\n        grid-template-columns:1fr;\n        grid-template-rows:2fr 1.5fr minmax(200px);\n    }\n    .container>.content>.menu-items{\n        grid-column:1/2;\n        grid-row:1/2;\n    }\n    .container>.content>.menu-items>h3{\n        font-size:1.7rem;\n    }\n    .menu-items>.all-projects>p,.menu-items>.today-projects>p,.menu-items>.projects>.project-list>div>span{\n        font-size:1.3rem;\n    }\n    .container>.content>.menu-items>.projects{\n        margin-top:1.5rem;\n    }\n    .container>.content>.menu-items>.projects>h3{\n        font-size:1.5rem\n    }\n    .container>.content>.menu-items>.projects>.reset-projects>button{\n        font-size:1rem;\n        margin:1rem 0 1rem 0;\n    }\n    .container>.content>.project-view{\n        grid-column:1/2;\n        grid-row:2/3;\n    }\n    .container>.content>.todo-list{\n        grid-column:1/2;\n        grid-row:3/4;\n        min-height:300px;\n        padding:1.2rem 0 0 0;\n    }\n    .container>.content>.todo-list>.nav-title{\n        margin:0 0.9rem;\n    }\n    .container>.content>.todo-list>.nav-title>span{\n        width:70px;\n        font-size:1rem;\n    }\n    .container>.content>.todo-list>.nav-title>span:first-child{\n        width:78px;\n    }\n    .container>.content>.todo-list>.nav-title>span+span+span{\n        width:60px;\n    }\n    .container>.content>.todo-list>.Todo-list{\n        margin:0.8rem 0 0 0;\n    }\n    .container>.content>.todo-list>.Todo-list>div{\n        margin:0.3rem 0;\n        height:25px;\n    }\n    .container>.content>.todo-list>.Todo-list>div>input{\n        height:12px;\n        margin:0 0.1rem 0 0.2rem;\n    }\n    .container>.content>.todo-list>.Todo-list>div>label{\n        width:76px;\n        height:15px;\n        font-size:0.9rem;\n    }\n    .container>.content>.todo-list>.Todo-list>div>label+span{\n        width:76px;\n        height:15px;\n        font-size:0.8rem;\n    } \n    .container>.content>.todo-list>.Todo-list>div>label+span+span{\n        width:60px;\n    }\n    .container>.content>.todo-list>.Todo-list>div>span{\n        width:75px;\n        height:15px;\n        font-size:0.9rem;\n    }\n    .container>.content>.todo-list>.Todo-list>div>div>img{\n        width:17px;\n        height:17px;\n    }\n    .container>.content>#my-dialog,.content>#my-dialog2,.content>#my-dialog3{\n        grid-column:1/2;\n        grid-row:2/3;\n        position:absolute;\n        justify-self:center;\n        border:none;\n        background:#987070;\n        border-radius:10px;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProListToSelBox: () => (/* binding */ addProListToSelBox),
/* harmony export */   addProListToSelBox2: () => (/* binding */ addProListToSelBox2),
/* harmony export */   addProjectDom: () => (/* binding */ addProjectDom),
/* harmony export */   addTodoDom: () => (/* binding */ addTodoDom),
/* harmony export */   changeColorForAllAndTodayProject: () => (/* binding */ changeColorForAllAndTodayProject),
/* harmony export */   changeHeaderTextToAll: () => (/* binding */ changeHeaderTextToAll),
/* harmony export */   changeProjectBackground: () => (/* binding */ changeProjectBackground),
/* harmony export */   changeProjectViewColor: () => (/* binding */ changeProjectViewColor),
/* harmony export */   checkClickedInputAndProjectView: () => (/* binding */ checkClickedInputAndProjectView),
/* harmony export */   checkDialogOpenOrClose: () => (/* binding */ checkDialogOpenOrClose),
/* harmony export */   checkProjectMatches: () => (/* binding */ checkProjectMatches),
/* harmony export */   checkProjectMatches2: () => (/* binding */ checkProjectMatches2),
/* harmony export */   closeProjectDialog: () => (/* binding */ closeProjectDialog),
/* harmony export */   closeTodoDialog: () => (/* binding */ closeTodoDialog),
/* harmony export */   getAllRelatedProjectIndex: () => (/* binding */ getAllRelatedProjectIndex),
/* harmony export */   getClickedCheckbox: () => (/* binding */ getClickedCheckbox),
/* harmony export */   getClickedProjectIndex: () => (/* binding */ getClickedProjectIndex),
/* harmony export */   getDialogValues: () => (/* binding */ getDialogValues),
/* harmony export */   getProjectColor: () => (/* binding */ getProjectColor),
/* harmony export */   getProjectName: () => (/* binding */ getProjectName),
/* harmony export */   getRemovedTodo: () => (/* binding */ getRemovedTodo),
/* harmony export */   getTodayProjectIndex: () => (/* binding */ getTodayProjectIndex),
/* harmony export */   makeAction: () => (/* binding */ makeAction),
/* harmony export */   openTodoDialogForEditing: () => (/* binding */ openTodoDialogForEditing),
/* harmony export */   putAllProjectsToDOM: () => (/* binding */ putAllProjectsToDOM),
/* harmony export */   removeAllProjectsAndTodoFromDOM: () => (/* binding */ removeAllProjectsAndTodoFromDOM),
/* harmony export */   removeTodoFromDOM: () => (/* binding */ removeTodoFromDOM),
/* harmony export */   setNewIndex: () => (/* binding */ setNewIndex),
/* harmony export */   setNewIndexTodo: () => (/* binding */ setNewIndexTodo),
/* harmony export */   setProjectViewColor: () => (/* binding */ setProjectViewColor),
/* harmony export */   updateArrayData: () => (/* binding */ updateArrayData),
/* harmony export */   updateDOM: () => (/* binding */ updateDOM)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/edit.png */ "./src/images/edit.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/remove.png */ "./src/images/remove.png");
/* harmony import */ var _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo-list.js */ "./src/Todo-list.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");






let projectCounter=0;
let projectClicked=false;
let todoCounter=0;
let previousProjSelected="";
let todayDate;
//Retrieves the project name given while creating a new project
function getProjectName(){
    const projectInput=document.querySelector('#project-name');
    return projectInput;
}
//It gets the index of the todo item where the delete button is clicked
function getRemovedProject(e){
    let clickedParentContainer=e.target.parentNode;
    let clickedParentContainerIndex=clickedParentContainer.parentNode.getAttribute('data-index');
    return clickedParentContainerIndex;
}

// function removeProjectFromDOM(index){
//     let selector= `.project-list>[data-index="${index}"]`;
//     let itemToRemove=document.querySelector(selector);
//     document.querySelector('.project-list').removeChild(itemToRemove);
// }

function setNewIndex(){
    projectCounter=0;
    let myNodeList=document.querySelectorAll('.project-list>div')
    myNodeList.forEach((item)=>{
        item.setAttribute('data-index',projectCounter);
        projectCounter+=1;
    })
}

function closeProjectDialog(){
    const projectDialog=document.querySelector('#my-dialog');
    document.querySelector('#my-form').reset();
    projectDialog.close();
}

function addProjectDom(color,projectName){
    
    const projectContainer=document.querySelector('.project-list');
    const newProjectContainer=document.createElement('div');

    const newColorInput=document.createElement('INPUT');
    const newProjectName=document.createElement('span');
    
    newProjectContainer.setAttribute('data-index',`${projectCounter}`);
    newColorInput.setAttribute('type','color');
    newColorInput.setAttribute('value',color);
    newColorInput.setAttribute('id',`color-input${projectCounter}`);
    newColorInput.setAttribute('class','myColorInput');

    if(!_local_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadingFromLS){
        newProjectName.textContent=`${_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList[_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList.length-1]}`;
    }
    else{
        newProjectName.textContent=`${projectName}`;
    }

    newProjectContainer.appendChild(newColorInput);
    newProjectContainer.appendChild(newProjectName);
    projectContainer.appendChild(newProjectContainer);

    projectCounter+=1;
}
//Finds the index of all todo items with the same project name
function getAllRelatedProjectIndex(e){
    let relatedProjectList=[];
    let clickedProjectIndex=e.target.parentNode.getAttribute('data-index');
    let clickedProjectName=document.querySelector(`.project-list>[data-index="${clickedProjectIndex}"]>span`).textContent;
    document.querySelector('.project-view>h1').textContent=clickedProjectName;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems.map((item,index)=>{
        if(item.project===clickedProjectName){
            relatedProjectList.push(index);
        }
    });
    return relatedProjectList;
}
//Adds all todo items into the DOM when all projects is clicked
function putAllProjectsToDOM(myArray){
    todoCounter=0;
    projectClicked=true;
    document.querySelector('.Todo-list').innerHTML="";
    myArray.forEach(item=>{
        addTodoDom(item);
    });
    projectClicked=false;
}
//Retrieves the index of all projects with the same date 
function getTodayProjectIndex(){
    document.querySelector('.project-view>h1').textContent="Today"

    let todayArrayIndex=[];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    todayDate=today;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems.map((item,index)=>{
        if(item.date===today){
            todayArrayIndex.push(index);
        }
    });
    return todayArrayIndex;
}
//Clears all projects from the DOM
function removeAllProjectsAndTodoFromDOM(){
    document.querySelector('.Todo-list').innerHTML="";
    document.querySelector('.project-list').innerHTML="";
}

function changeHeaderTextToAll(){
    document.querySelector('.project-view>h1').textContent="All";
}

function changeProjectBackground(e){
    //The if else clauses is used for removing the project background of the previously clicked project and setting background for the clicked project
    if(previousProjSelected==="All"){
        document.querySelector(".all-projects>p").style.background="";
        e.target.style.background="#40534C";
    }
    else if(previousProjSelected==="Today"){
        document.querySelector(".today-projects>p").style.background="";
        e.target.style.background="#40534C";
    }
    else if(previousProjSelected===""){
        document.querySelector(".all-projects>p").style.background="#40534C";
    }
    else{
        let previousProject;
        if(e.target.textContent==="All"||e.target.textContent==="Today"){
            previousProject=document.querySelector(".project-list").children[previousProjSelected].children[1];
            previousProject.style.background="";
            e.target.style.background="#40534C";
        }
        else{
            previousProject=e.target.parentNode.parentNode.children[previousProjSelected].children[1];
            previousProject.style.background="";
            e.target.style.background="#40534C";
        }
    }
}

function getClickedProjectIndex(e){
    previousProjSelected=e.target.parentNode.getAttribute('data-index');
}
//Checks whether the input of the project name is the same as the currently opened project 
function checkClickedInputAndProjectView(e){
    if(e.target.parentNode.children[1].textContent===document.querySelector(".project-view>h1").textContent){
        return true;
    }
}
//Used for changing the color of the project view same as the color selected by the currently selected project list color input
function changeProjectViewColor(e){
    document.querySelector(".project-view").style.background=e.target.value;
}
//For loading the previously selected color from the local storage
function changeColorForAllAndTodayProject(){
    let colorArray=JSON.parse(localStorage.getItem('colorList'));
    document.querySelector('#all').value=colorArray[0];
    document.querySelector('#today').value=colorArray[1];
}

//Todo-list module DOM
//Adds the list of projects into the select box of the dialog used for creating a new project
function addProListToSelBox(projectList){
    let select=document.querySelector('#todo-project');
    select.innerHTML="";
    projectList.forEach(item=>{
        let option=document.createElement('option');
        option.value=item;
        option.innerHTML=item;
        select.appendChild(option);
    })
}
//Retrieves the input given by the user from the dialog box
function getDialogValues(){
    let TodoObject={};
    TodoObject.todoName=document.querySelector('#todo-name').value;
    TodoObject.date=document.querySelector('#todo-date').value;
    TodoObject.priority=document.querySelector('#todo-priority').value;
    TodoObject.status=document.querySelector('#todo-status').value;
    TodoObject.project=document.querySelector('#todo-project').value;
    return TodoObject;
}
//Closes the dialog for creating a new todo after the user fill and submit the add dialog box
function closeTodoDialog(){
    const TodoDialog=document.querySelector('#my-dialog2');
    document.querySelector('#my-form2').reset();
    TodoDialog.close();
}
//Adds new todo item and its components into the DOM
function addTodoDom(index){
    const TodoContainer=document.querySelector('.Todo-list');
    const newTodoContainer=document.createElement('div');

    const TodoCheck=document.createElement('input');
    TodoCheck.type='checkbox';
    TodoCheck.setAttribute('class',`myCheckbox`);

    if(!projectClicked){
        newTodoContainer.setAttribute('data-index',`${todoCounter}`);
        TodoCheck.setAttribute('data-index',`${todoCounter}`);
    }
    else{
        newTodoContainer.setAttribute('data-index',`${index}`);
        TodoCheck.setAttribute('data-index',`${index}`);
    }

    const TodoName=document.createElement('label');
    TodoName.for = todoCounter;

    const TodoDate=document.createElement('span');
    const TodoPriority=document.createElement('span');
    const TodoStatus=document.createElement('span');
    const newEditIcon=document.createElement('div');
    const newRemoveIcon=document.createElement('div');
//Used for strick through the label and date when the status is complete and vise versal
    if(_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].status==="Completed"){
        TodoName.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].todoName.split('').map(char => char + '\u0336').join('')}`;
        TodoDate.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].date.split('').map(char => char + '\u0336').join('')}`;
        TodoPriority.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].priority}`;
        TodoStatus.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].status}`;
        TodoCheck.checked=true;
        TodoStatus.style.background="green";
    }
    else{
        TodoName.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].todoName}`;
        TodoDate.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].date}`;
        TodoPriority.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].priority}`;
        TodoStatus.textContent=`${_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].status}`;
    }
//Applies background color to the priority
    if(_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].priority==="Medium"){
        TodoPriority.style.background="#FF9A00";
    }
    else if(_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[index].priority==="High"){
        TodoPriority.style.background="red";
    }

    const editIcon=new Image();
    editIcon.src=_images_edit_png__WEBPACK_IMPORTED_MODULE_1__;
    newEditIcon.setAttribute('id','edit-icon');
    newEditIcon.appendChild(editIcon);

    const removeIcon=new Image();
    removeIcon.src=_images_remove_png__WEBPACK_IMPORTED_MODULE_2__;
    newRemoveIcon.setAttribute('id','remove-icon2');
    newRemoveIcon.appendChild(removeIcon);

    newTodoContainer.appendChild(TodoCheck);
    newTodoContainer.appendChild(TodoName);
    newTodoContainer.appendChild(TodoDate);
    newTodoContainer.appendChild(TodoPriority);
    newTodoContainer.appendChild(TodoStatus);
    newTodoContainer.appendChild(newEditIcon);
    newTodoContainer.appendChild(newRemoveIcon);

    TodoContainer.appendChild(newTodoContainer);

    todoCounter+=1;
}
//gets the specific index of the  todo item div after the delete icon is clicked
function getRemovedTodo(e){
    return getRemovedProject(e);
}

function removeTodoFromDOM(index){
    let selector= `.Todo-list>[data-index="${index}"]`;
    let itemToRemove=document.querySelector(selector);
    document.querySelector('.Todo-list').removeChild(itemToRemove);
}

function setNewIndexTodo(){
    todoCounter=0;
    let myNodeList=document.querySelectorAll('.Todo-list>div')
    myNodeList.forEach((item)=>{
        item.setAttribute('data-index',todoCounter);
        todoCounter+=1;
    })
}

function getClickedCheckbox(e){
    let clickedCheckBox=e.target;
    return clickedCheckBox;
}
//Used when a check box is checked or unchecked
function makeAction(checkboxClicked){
    let parentContainerIndex=checkboxClicked.parentNode.getAttribute('data-index');
    let myLabel=document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent;
    let myDate=document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent;

    if(checkboxClicked.checked){
        let strikethroughLabel=myLabel.split('').map(char => char + '\u0336').join(''); 
        let strikethroughDate=myDate.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=strikethroughLabel;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=strikethroughDate;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent="Completed";
        _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].status="Completed";
        checkboxClicked.parentNode.children[4].style.background="green";
    }
    else{
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=myLabel.replace(/[\u0336]/g, '');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=myDate.replace(/[\u0336]/g, '');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent="Not Started";
        _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].status="Not Started";
        checkboxClicked.parentNode.children[4].style.background="";
    }
}
//Checks whether all the dialogues are open or closed
function checkDialogOpenOrClose(){
    if(!document.querySelector('#my-dialog').open&&!document.querySelector('#my-dialog2').open){
        return true;
    }
}
//Opens the edit dialog and it adds the previous values to it
function openTodoDialogForEditing(e){
    let TodoDialog=document.querySelector('#my-dialog3');
    TodoDialog.show();

    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');

    document.querySelector('#todo-name-update').value=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].todoName;
    document.querySelector('#todo-date-update').value=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].date;
    document.querySelector('#todo-priority-update').value=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].priority;
    document.querySelector('#todo-status-update').value=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].status;   
    document.querySelector('#todo-project-update').value=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].project;  
}
//Updates the todo items data from the edited dialogue
function updateArrayData(e){
    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].todoName=document.querySelector('#todo-name-update').value;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].date=document.querySelector('#todo-date-update').value;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].priority=document.querySelector('#todo-priority-update').value;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].status=document.querySelector('#todo-status-update').value;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].project=document.querySelector('#todo-project-update').value;
}

function updateDOM(e){
    const parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    let todoName=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].todoName;
    let todoDate=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].date;
    let todoPriority=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].priority;
    let todoStatus=_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].status;
//Used for strick through the label and date when the status is complete and vise versal
    if(todoStatus==="Completed"){
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=todoName.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=todoDate.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[3].textContent=todoPriority;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent=todoStatus;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[0].checked=true;
        e.target.parentNode.parentNode.children[4].style.background="green";
    }
    else{
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=todoName;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=todoDate;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[3].textContent=todoPriority;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent=todoStatus;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[0].checked=false;
        e.target.parentNode.parentNode.children[4].style.background="";
    }
//Applies background color to the priority
    if(todoPriority==="Medium"){
        e.target.parentNode.parentNode.children[3].style.background="#FF9A00";
    }
    else if(todoPriority==="High"){
        e.target.parentNode.parentNode.children[3].style.background="red";
    }
    else{
        e.target.parentNode.parentNode.children[3].style.background="";
    }

    const editDialog=document.querySelector('#my-dialog3');
    editDialog.close();
}
//Adds the project list to the select box of the edit dialogue
function addProListToSelBox2(projectList){
    let select=document.querySelector('#todo-project-update');
    select.innerHTML="";
    projectList.forEach(item=>{
        let option=document.createElement('option');
        option.value=item;
        option.innerHTML=item;
        select.appendChild(option);
    })
}
//used for checking the input project given match's with the actual project selected while adding new todo item
function checkProjectMatches(){
    if( document.querySelector('.project-view>h1').textContent===_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems.length-1].project){
        return true;
    }
    else if(document.querySelector('.project-view>h1').textContent==="All"){
        return "All";
    }
    else if(document.querySelector('.project-view>h1').textContent==="Today"){
        return "Today";
    }
}
//used for checking the input project given match's with the actual project selected while editing todo item
function checkProjectMatches2(e){
    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    if(document.querySelector('.project-view>h1').textContent===_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].project){
        return true;
    }
    else if(document.querySelector('.project-view>h1').textContent===previousProjSelected&&previousProjSelected!="Today"){
        return true;
    }
    else if(previousProjSelected==="Today"&&todayDate===_Todo_list_js__WEBPACK_IMPORTED_MODULE_3__.TodoItems[parentContainerIndex].date){
        return true;
    }
    else{
        document.querySelector('.Todo-list').removeChild(e.target.parentNode.parentNode);
    }
    document.querySelector('#my-dialog3').close();
}

//Setting the project view color

function setProjectViewColor(e){
    let myProjectView=document.querySelector(".project-view");
    if(e==="All"){
        myProjectView.style.background=document.querySelector("#all").value;
        previousProjSelected="All";
    }
    else if(e==="Today"){
        myProjectView.style.background=document.querySelector("#today").value;
        previousProjSelected="Today";
    }
    else{
        let myColor=e.target.parentNode.children[0].value;
        myProjectView.style.background=myColor;
    }
}

//For getting all the project colors

function getProjectColor(){
    let myColorArray=[];
    let allProjectColor=document.querySelector("#all").value;
    let todayProjectColor=document.querySelector("#today").value;
    myColorArray.push(allProjectColor);
    myColorArray.push(todayProjectColor);
    let projectNodeList=document.querySelectorAll(".project-list>div");
    projectNodeList.forEach(item=>{
        myColorArray.push(item.children[0].value);
    });
    return myColorArray;
}



/***/ }),

/***/ "./src/Todo-list.js":
/*!**************************!*\
  !*** ./src/Todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoEditAction: () => (/* binding */ TodoEditAction),
/* harmony export */   TodoItems: () => (/* binding */ TodoItems),
/* harmony export */   addProjectsToSelectBox: () => (/* binding */ addProjectsToSelectBox),
/* harmony export */   addProjectsToSelectBox2: () => (/* binding */ addProjectsToSelectBox2),
/* harmony export */   addTodoList: () => (/* binding */ addTodoList),
/* harmony export */   checkboxAction: () => (/* binding */ checkboxAction),
/* harmony export */   removeTodoItem: () => (/* binding */ removeTodoItem),
/* harmony export */   updateTodoInfo: () => (/* binding */ updateTodoInfo)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");




let TodoItems=[];
//For adding the project list into the select box
function addProjectsToSelectBox(){
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addProListToSelBox)(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);
}
//For adding todo list to the todo list box
function addTodoList(){
    let todoInputs=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.getDialogValues)();
    TodoItems.push(todoInputs);
    let myIndex=TodoItems.length-1;
    if((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.checkProjectMatches)()){//used for checking the input project given match's with the actual project selected while adding new todo item
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addTodoDom)(myIndex);
    }
    else if((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.checkProjectMatches)()==="All"){
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addAllProjectsToTodoList)();
    }
    else if((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.checkProjectMatches)()==="Today"){
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addTodayProjectsToTodoList)();
    }
    console.log(TodoItems);//Just for viewing todoItems array in the console
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.closeTodoDialog)();
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectColorAndTodo)().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//This function removes removes todo item from the todo list box
function removeTodoItem(e){
    let todoIndex=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.getRemovedTodo)(e);
    TodoItems.splice(todoIndex,1);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.removeTodoFromDOM)(todoIndex);
    console.log(TodoItems);//Just for viewing todoItems array in the console
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.setNewIndexTodo)();
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectColorAndTodo)().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//Action taken when check box is checked or unchecked
function checkboxAction(e){
    let checkboxClicked=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.getClickedCheckbox)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.makeAction)(checkboxClicked);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectColorAndTodo)().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//For showing the edit dialog after the edit todo list is clicked
function TodoEditAction(e){
    if(_DOM_js__WEBPACK_IMPORTED_MODULE_1__.checkDialogOpenOrClose){
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.openTodoDialogForEditing)(e);
    }
}
//For updating the edited todo list
function updateTodoInfo(e){
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.updateArrayData)(e);
    console.log(TodoItems);
    if((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.checkProjectMatches2)(e)){
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.updateDOM)(e);
    }
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectColorAndTodo)().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//Used for adding the projects to the project select box of the edit dialog
function addProjectsToSelectBox2(){
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addProListToSelBox2)(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectList);
}



/***/ }),

/***/ "./src/color-view.js":
/*!***************************!*\
  !*** ./src/color-view.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSelectedProjectViewColor: () => (/* binding */ changeSelectedProjectViewColor),
/* harmony export */   generateRandomColor: () => (/* binding */ generateRandomColor)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");


//This function generates a random color for the newly created projects
function generateRandomColor(){
    const letters="123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    if(color==="#000000"){
        generateRandomColor();
    }
    return color;
}
//Changes the color of the selected project after the color is edited
function changeSelectedProjectViewColor(e){
    if((0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.checkClickedInputAndProjectView)(e)){
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectViewColor)(e);
    }
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectColorAndTodo)().saveColor();
}



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectColorAndTodo: () => (/* binding */ loadProjectColorAndTodo),
/* harmony export */   loadingFromLS: () => (/* binding */ loadingFromLS),
/* harmony export */   saveProjectColorAndTodo: () => (/* binding */ saveProjectColorAndTodo)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _Todo_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo-list.js */ "./src/Todo-list.js");




let loadingFromLS=false;
//Used for saving the project list,todo list and colors after every update is made on either one of them
function saveProjectColorAndTodo(){
    let saveProject=(projectData)=>{
        localStorage.setItem('projectList',JSON.stringify(projectData));
        saveColor();
    };

    let saveTodo=(todoData)=>{
        localStorage.setItem('todoList',JSON.stringify(todoData));
        saveColor();
    };

    let saveColor=()=>{
        let colorArray=[]
        colorArray=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getProjectColor)();
        localStorage.setItem('colorList',JSON.stringify(colorArray));
    };

    return{saveProject,saveTodo,saveColor,};
}
//For loading the project list, todo list and colors when the website is closed or restarted
function loadProjectColorAndTodo(){

    let loadProjects=()=>{
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectList.length=0;
        let myArray=JSON.parse(localStorage.getItem('projectList'));
        myArray.forEach(item=>{
            _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectList.push(item);
        });
        let myColorList=JSON.parse(localStorage.getItem('colorList'));
        let colorCounter=2;
    //Loading project list items and placing them to the DOM
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeColorForAllAndTodayProject)();
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach((item)=>{
            loadingFromLS=true;
            (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.addProjectDom)(myColorList[colorCounter],item);
            colorCounter+=1;
        });
        loadingFromLS=false;
    };
    //Loading TodoItems array with the previously filled todoItems from local storage
    let loadTodoList=()=>{
        let myArray=JSON.parse(localStorage.getItem('todoList'));
        myArray.forEach(item=>{
            _Todo_list_js__WEBPACK_IMPORTED_MODULE_2__.TodoItems.push(item);
        });
    }

    return {loadProjects,loadTodoList};
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAllProjectsToTodoList: () => (/* binding */ addAllProjectsToTodoList),
/* harmony export */   addProjects: () => (/* binding */ addProjects),
/* harmony export */   addProjectsToTodoList: () => (/* binding */ addProjectsToTodoList),
/* harmony export */   addTodayProjectsToTodoList: () => (/* binding */ addTodayProjectsToTodoList),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   removeAllProjects: () => (/* binding */ removeAllProjects)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _Todo_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo-list.js */ "./src/Todo-list.js");
/* harmony import */ var _color_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-view.js */ "./src/color-view.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");





let projectList=["Personal"];
//For adding a project to the project list
function addProjects(){
    const projectInput=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getProjectName)();
    projectList.push(projectInput.value);
    let myColor=(0,_color_view_js__WEBPACK_IMPORTED_MODULE_2__.generateRandomColor)();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.addProjectDom)(myColor);
    console.log(projectList);//Just for viewing the project list array in the console
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.closeProjectDialog)();
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectColorAndTodo)().saveProject(projectList);//For saving the projectList array in the local storage
}

// function removeProjects(e){
//     const projectIndex=getRemovedProject(e);
//     projectList.splice(projectIndex,1);
//     removeProjectFromDOM(projectIndex);
//     console.log(projectList);//Just for viewing the project list array in the console
//     setNewIndex(); 
// }
//Functions when one of the project list div is clicked and it previews all the todo lists related to the same project in the todo list
function addProjectsToTodoList(e){
    let relatedProjectsIndex=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getAllRelatedProjectIndex)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.putAllProjectsToDOM)(relatedProjectsIndex);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.setProjectViewColor)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectBackground)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getClickedProjectIndex)(e);
}
//Functions when all div is clicked and it displays all projects at the same time in the todo list
function addAllProjectsToTodoList(e){
    let allProjectsList=[];
    for(let i=0;i<_Todo_list_js__WEBPACK_IMPORTED_MODULE_1__.TodoItems.length;i++){
        allProjectsList.push(i);
    }
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeHeaderTextToAll)();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.putAllProjectsToDOM)(allProjectsList);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectBackground)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.setProjectViewColor)("All");
}
//Functions when today div is clicked and it displays projects that are for today
function addTodayProjectsToTodoList(e){
    let todayProjectsIndex=(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.getTodayProjectIndex)();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.putAllProjectsToDOM)(todayProjectsIndex);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.changeProjectBackground)(e);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.setProjectViewColor)("Today");
}

//For removing all the projects
function removeAllProjects(){
    projectList.length=1;
    _Todo_list_js__WEBPACK_IMPORTED_MODULE_1__.TodoItems.length=0;
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.removeAllProjectsAndTodoFromDOM)();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.addProjectDom)("#DEAC80");
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectColorAndTodo)().saveProject(projectList);//For saving the projectList array in the local storage
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.saveProjectColorAndTodo)().saveTodo(_Todo_list_js__WEBPACK_IMPORTED_MODULE_1__.TodoItems);
}



/***/ }),

/***/ "./src/images/add-large.png":
/*!**********************************!*\
  !*** ./src/images/add-large.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edb755c23d1ebcf9c7a4.png";

/***/ }),

/***/ "./src/images/add-small.png":
/*!**********************************!*\
  !*** ./src/images/add-small.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9cd32fdb85c8223c2f1.png";

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39cc05457bde16865c61.png";

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d0680bbf42a454f2041.png";

/***/ }),

/***/ "./src/new-font.ttf":
/*!**************************!*\
  !*** ./src/new-font.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "669a98069dca05b90662.ttf";

/***/ }),

/***/ "./src/new-font2.ttf":
/*!***************************!*\
  !*** ./src/new-font2.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b1e6579a4ae98f4318.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_add_small_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/add-small.png */ "./src/images/add-small.png");
/* harmony import */ var _images_add_large_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/add-large.png */ "./src/images/add-large.png");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _Todo_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo-list.js */ "./src/Todo-list.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _color_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-view.js */ "./src/color-view.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");









let addProjToSelBoxContr=true;
let addProjToSelBoxContr2=true;

const addContainer=document.querySelector(".add-icon-small");
const addIconSmallImage=new Image();
addIconSmallImage.src=_images_add_small_png__WEBPACK_IMPORTED_MODULE_1__;
addContainer.appendChild(addIconSmallImage);

const addContainerLarge=document.querySelector(".add-icon-large");
const addIconLargeImage=new Image();
addIconLargeImage.src=_images_add_large_png__WEBPACK_IMPORTED_MODULE_2__;
addContainerLarge.appendChild(addIconLargeImage);
//This if statement is used for loading the page when the local storage is empty
if(window.localStorage.length===0){
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_5__.addProjectDom)("#DEAC80");//Used for initially putting the Personal project in the project list
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addAllProjectsToTodoList)();//Used for initially selection the all projects
}
//This else statement is used for loading the page from the local storage when the local storage is not empty
else{
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_7__.loadProjectColorAndTodo)().loadProjects();
    if(localStorage.getItem('todoList')!==null){
        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_7__.loadProjectColorAndTodo)().loadTodoList();
    }
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addAllProjectsToTodoList)();
}

addIconSmallImage.addEventListener('click',()=>{
    document.querySelector('#my-dialog').show();
});

//Used for hiding dialogs when user clicks outside of the dialog boxes

let myDialog=document.querySelector('#my-dialog');
let myDialog2=document.querySelector('#my-dialog2');
let myDialog3=document.querySelector('#my-dialog3');
document.addEventListener('click',(e)=>{
    if(!myDialog.contains(e.target)&&myDialog.open&&!addIconSmallImage.contains(e.target)){
        document.querySelector('#my-form').reset();
        myDialog.close();
    }
    else if(!myDialog2.contains(e.target)&&myDialog2.open&&!addIconLargeImage.contains(e.target)){
        document.querySelector('#my-form2').reset();
        myDialog2.close();
    }
    else if(!myDialog3.contains(e.target)&&myDialog3.open){
        myDialog3.close();
    }
});

//Used for adding the project from the dialog submitted to the project list

document.querySelector("#my-form").addEventListener('submit',(e)=>{
    e.preventDefault;
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addProjects)();
    addProjToSelBoxContr=true;
    addProjToSelBoxContr2=true;
});

document.addEventListener('click',function(e){
    // const target=e.target.closest("#remove-icon>img");//For removing items from the list of projects
    const target2=e.target.closest("#remove-icon2>img");//For removing items in the todo list
    const target3=e.target.closest('.project-list>div>span');//After one of the project list div is clicked

    // if((target)){
    //     removeProjects(e);
    // }
    if(target2){
        (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.removeTodoItem)(e);
    }
    else if(target3){
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addProjectsToTodoList)(e);
    }
});
//Used when all projects is clicked for showing the all todo lists 
document.querySelector('.all-projects>.all').addEventListener('click',(e)=>{
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addAllProjectsToTodoList)(e);
});
//Used when today projects is clicked for showing the all todo lists that are for today
document.querySelector('.today-projects>.today').addEventListener('click',(e)=>{
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.addTodayProjectsToTodoList)(e);
});
//Used when reset projects button is clicked
document.querySelector('.reset-projects>button').addEventListener('click',()=>{
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.removeAllProjects)();
});
//For adding action listener when a color input is changed by the projects
document.querySelector('#all').addEventListener('input',(e)=>{
    (0,_color_view_js__WEBPACK_IMPORTED_MODULE_6__.changeSelectedProjectViewColor)(e);
});

document.querySelector('#today').addEventListener('input',(e)=>{
    (0,_color_view_js__WEBPACK_IMPORTED_MODULE_6__.changeSelectedProjectViewColor)(e);
});

document.querySelector('.project-list').addEventListener('input',(e)=>{
    (0,_color_view_js__WEBPACK_IMPORTED_MODULE_6__.changeSelectedProjectViewColor)(e);
})


//Todo-list module

//After clicking the add item the dialog box will show
addIconLargeImage.addEventListener('click',()=>{
    document.querySelector('#my-dialog2').show();
    if(addProjToSelBoxContr){
        (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.addProjectsToSelectBox)();
        addProjToSelBoxContr=false;
    }
});
//For submitting the newly added todo item
document.querySelector("#my-form2").addEventListener('submit',(e)=>{
    e.preventDefault;
    (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.addTodoList)();
});
//
document.addEventListener('click',function(e){
    const checkboxClick=e.target.closest('.myCheckbox');
    const TodoEdit=e.target.closest('.Todo-list>div>div>img');
    let todoEditClicked=false;

    if(checkboxClick){
        (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.checkboxAction)(e);
    }
    else if(TodoEdit){//After one of the todo list edit image is clicked
        (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.TodoEditAction)(e);
        if(addProjToSelBoxContr2){
            (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.addProjectsToSelectBox2)();
            addProjToSelBoxContr2=false;
        }
        todoEditClicked=true;
    }
    document.querySelector("#my-form3").addEventListener('submit',()=>{
        e.preventDefault;
        if(todoEditClicked){
            (0,_Todo_list_js__WEBPACK_IMPORTED_MODULE_4__.updateTodoInfo)(e);
            todoEditClicked=false;
        }
    });
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSwyQkFBMkIsZUFBZSxnQkFBZ0IsR0FBRyxhQUFhLDJCQUEyQiwrQ0FBK0MsR0FBRyxhQUFhLDRCQUE0QixnREFBZ0QsR0FBRyxPQUFPLDRCQUE0QixtQkFBbUIsR0FB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O0FBQ0E7QUFDQSxJQUFJLHNFQUF3QjtBQUM1QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksd0VBQTBCO0FBQzlCLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwrREFBaUI7QUFDckIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLDhFQUE4QjtBQUNsQyxDQUFDOztBQUVEO0FBQ0EsSUFBSSw4RUFBOEI7QUFDbEMsQ0FBQzs7QUFFRDtBQUNBLElBQUksOEVBQThCO0FBQ2xDLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBc0I7QUFDOUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFXO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDZEQUFjO0FBQ3RCO0FBQ0Esc0JBQXNCO0FBQ3RCLFFBQVEsNkRBQWM7QUFDdEI7QUFDQSxZQUFZLHNFQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kby1saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb2xvci12aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9uZXctZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL25ldy1mb250Mi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuYm9keXtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuLmNvbnRhaW5lcntcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG4uY29udGFpbmVyPi5jb250ZW50e1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1ze1xuICAgIGdyaWQtY29sdW1uOjEvMjtcbiAgICBncmlkLXJvdzoxLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4NzA3MDtcbiAgICBtYXJnaW46MCAwLjJyZW0gMC4ycmVtIDA7XG4gICAgcGFkZGluZzoxLjJyZW0gMC41cmVtIDAgMC41cmVtO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz5oM3tcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcbiAgICBmb250LWZhbWlseTonbXlGb250Jztcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cz5pbnB1dCwubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHM+aW5wdXQsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2PmlucHV0e1xuICAgIHdpZHRoOjI1cHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OjAuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cywuY29udGVudD4ubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHMsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPi5hbGwtcHJvamVjdHM+cDpob3ZlciwuY29udGVudD4ubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHM+cDpob3ZlciwubWVudS1pdGVtcz4ucHJvamVjdHM+LnByb2plY3QtbGlzdD5kaXY+c3Bhbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcbn1cbi5tZW51LWl0ZW1zPi5hbGwtcHJvamVjdHM+cCwubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHM+cCwubWVudS1pdGVtcz4ucHJvamVjdHM+LnByb2plY3QtbGlzdD5kaXY+c3BhbntcbiAgICBwYWRkaW5nOjByZW0gMC4zcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4ucHJvamVjdHN7XG4gICAgbWFyZ2luLXRvcDozcmVtO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4ucHJvamVjdHM+aDN7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPi5wcm9qZWN0cz4ucmVzZXQtcHJvamVjdHM+YnV0dG9ue1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MzRDO1xuICAgIHBhZGRpbmc6MC4zcmVtIDAuNXJlbTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnByb2plY3RzPi5yZXNldC1wcm9qZWN0cz5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDojNzU4Njk0O1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4ucHJvamVjdC12aWV3e1xuICAgIGdyaWQtY29sdW1uOjIvMztcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgcGFkZGluZy10b3A6MS4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkQzQzM7XG4gICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi5wcm9qZWN0LXZpZXc+aDF7XG4gICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0e1xuICAgIGdyaWQtY29sdW1uOjIvMztcbiAgICBncmlkLXJvdzoyLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6MnJlbSAxcmVtIDFyZW0gNHJlbTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGV7XG4gICAgbWFyZ2luOjAgMS4ycmVtO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGU+c3BhbjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDoyMDBweDtcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4ubmF2LXRpdGxlPnNwYW57XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgbWFyZ2luOjEuMnJlbSAwIDAgMC41cmVtO1xuICAgIGZsZXg6M1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdj5pbnB1dHtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBtYXJnaW46MC4ycmVtIDAuMnJlbSAwIDA7XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWx7XG4gICAgd2lkdGg6MTk1cHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdj5sYWJlbCtzcGFue1xuICAgIHdpZHRoOjExMHB4O1xuICAgIGhlaWdodDoyNXB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZToxcmVtO1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PnNwYW57XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+ZGl2PmltZ3tcbiAgICB3aWR0aDoyNXB4O1xuICAgIGhlaWdodDoyNXB4O1xufVxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5hZGQtaWNvbi1sYXJnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmc6MCAyLjVyZW0gMS41cmVtIDA7XG59XG4uY29udGFpbmVyPi5jb250ZW50PiNteS1kaWFsb2csLmNvbnRlbnQ+I215LWRpYWxvZzIsLmNvbnRlbnQ+I215LWRpYWxvZzN7XG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xuICAgIGdyaWQtcm93OjIvMztcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQ6Izk4NzA3MDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG4uY29udGVudD4jbXktZGlhbG9nPiNteS1mb3Jte1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuLmNvbnRlbnQ+I215LWRpYWxvZ3tcbiAgICB3aWR0aDoxNTBweDtcbiAgICBoZWlnaHQ6MTQwcHg7XG4gICAgcGFkZGluZzoxcmVtIDAuOHJlbTtcbn1cbi5jb250ZW50PiNteS1kaWFsb2c+I215LWZvcm0+bGVnZW5ke1xuICAgIGZvbnQtc2l6ZToxLjdyZW07XG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xufVxuLmNvbnRlbnQ+I215LWRpYWxvZz4jbXktZm9ybT5pbnB1dHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG4gICAgbWFyZ2luLWJvdHRvbToxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6MTQwcHg7XG4gICAgZm9udC1zaXplOjFyZW07XG59XG4uY29udGVudD4jbXktZGlhbG9nPiNteS1mb3JtPmlucHV0OmZvY3VzLCNteS1kaWFsb2cyPiNteS1mb3JtMiBpbnB1dDpmb2N1cywjbXktZGlhbG9nMz4jbXktZm9ybTMgaW5wdXR7XG4gICAgb3V0bGluZTpub25lO1xufVxuLmNvbnRlbnQ+I215LWRpYWxvZz4jbXktZm9ybT5idXR0b24sI215LWRpYWxvZzI+I215LWZvcm0yPmRpdj5idXR0b24sI215LWRpYWxvZzM+I215LWZvcm0zPmRpdj5idXR0b257XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xuICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYmFja2dyb3VuZDojNDA1MzRDO1xuICAgIGRpc3BsYXk6YmxvY2s7XG59XG4uY29udGVudD4jbXktZGlhbG9nPiNteS1mb3JtPmJ1dHRvbjpob3ZlciwjbXktZGlhbG9nMj4jbXktZm9ybTI+LmJ1dHRvbj5idXR0b246aG92ZXIsI215LWRpYWxvZzM+I215LWZvcm0zPi5idXR0b24+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6Izc1ODY5NDtcbn1cbi5jb250ZW50PiNteS1kaWFsb2cyLC5jb250ZW50PiNteS1kaWFsb2cze1xuICAgIGhlaWdodDoyODBweDtcbiAgICB3aWR0aDoyNTBweDtcbiAgICBwYWRkaW5nOjFyZW0gMC44cmVtO1xufVxuLmNvbnRlbnQ+I215LWRpYWxvZzI+I215LWZvcm0yLCNteS1kaWFsb2czPiNteS1mb3JtM3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuI215LWRpYWxvZzI+I215LWZvcm0yPmxlZ2VuZCwjbXktZGlhbG9nMz4jbXktZm9ybTM+bGVnZW5ke1xuICAgIGZvbnQtc2l6ZToxLjdyZW07XG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNteS1kaWFsb2cyPiNteS1mb3JtMj5pbnB1dCwjbXktZGlhbG9nMz4jbXktZm9ybTM+aW5wdXR7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgaGVpZ2h0OjMwcHg7XG59XG4uY29udGVudD4jbXktZGlhbG9nMj4jbXktZm9ybTI+ZGl2LCNteS1kaWFsb2czPiNteS1mb3JtMz5kaXZ7XG4gICAgbWFyZ2luOjAuNXJlbSAwIDAuNXJlbSAwO1xufVxuI215LWRpYWxvZzI+I215LWZvcm0yPmRpdj5sYWJlbCwjbXktZGlhbG9nMz4jbXktZm9ybTM+ZGl2PmxhYmVse1xuICAgIHdpZHRoOjcwcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4jbXktZGlhbG9nMj4jbXktZm9ybTI+ZGl2PmlucHV0LCNteS1kaWFsb2czPiNteS1mb3JtMz5kaXY+aW5wdXQsI215LWZvcm0yPmRpdj5zZWxlY3QsI215LWZvcm0zPmRpdj5zZWxlY3R7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuI215LWRpYWxvZzI+I215LWZvcm0yPi5idXR0b24sI215LWRpYWxvZzM+I215LWZvcm0zPi5idXR0b257XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhKG1heC13aWR0aDo4MDBweCl7XG4gICAgLmNvbnRhaW5lcj4uY29udGVudHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjJmciAxLjVmciBtaW5tYXgoMjAwcHgpO1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1ze1xuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XG4gICAgICAgIGdyaWQtcm93OjEvMjtcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz5oM3tcbiAgICAgICAgZm9udC1zaXplOjEuN3JlbTtcbiAgICB9XG4gICAgLm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cz5wLC5tZW51LWl0ZW1zPi50b2RheS1wcm9qZWN0cz5wLC5tZW51LWl0ZW1zPi5wcm9qZWN0cz4ucHJvamVjdC1saXN0PmRpdj5zcGFue1xuICAgICAgICBmb250LXNpemU6MS4zcmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPi5wcm9qZWN0c3tcbiAgICAgICAgbWFyZ2luLXRvcDoxLjVyZW07XG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnByb2plY3RzPmgze1xuICAgICAgICBmb250LXNpemU6MS41cmVtXG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnByb2plY3RzPi5yZXNldC1wcm9qZWN0cz5idXR0b257XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICBtYXJnaW46MXJlbSAwIDFyZW0gMDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4ucHJvamVjdC12aWV3e1xuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XG4gICAgICAgIGdyaWQtcm93OjIvMztcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0e1xuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XG4gICAgICAgIGdyaWQtcm93OjMvNDtcbiAgICAgICAgbWluLWhlaWdodDozMDBweDtcbiAgICAgICAgcGFkZGluZzoxLjJyZW0gMCAwIDA7XG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4ubmF2LXRpdGxle1xuICAgICAgICBtYXJnaW46MCAwLjlyZW07XG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4ubmF2LXRpdGxlPnNwYW57XG4gICAgICAgIHdpZHRoOjcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+Lm5hdi10aXRsZT5zcGFuOmZpcnN0LWNoaWxke1xuICAgICAgICB3aWR0aDo3OHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+Lm5hdi10aXRsZT5zcGFuK3NwYW4rc3BhbntcbiAgICAgICAgd2lkdGg6NjBweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3R7XG4gICAgICAgIG1hcmdpbjowLjhyZW0gMCAwIDA7XG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdntcbiAgICAgICAgbWFyZ2luOjAuM3JlbSAwO1xuICAgICAgICBoZWlnaHQ6MjVweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PmlucHV0e1xuICAgICAgICBoZWlnaHQ6MTJweDtcbiAgICAgICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4ycmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWx7XG4gICAgICAgIHdpZHRoOjc2cHg7XG4gICAgICAgIGhlaWdodDoxNXB4O1xuICAgICAgICBmb250LXNpemU6MC45cmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWwrc3BhbntcbiAgICAgICAgd2lkdGg6NzZweDtcbiAgICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgfSBcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWwrc3BhbitzcGFue1xuICAgICAgICB3aWR0aDo2MHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+c3BhbntcbiAgICAgICAgd2lkdGg6NzVweDtcbiAgICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTowLjlyZW07XG4gICAgfVxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdj5kaXY+aW1ne1xuICAgICAgICB3aWR0aDoxN3B4O1xuICAgICAgICBoZWlnaHQ6MTdweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4jbXktZGlhbG9nLC5jb250ZW50PiNteS1kaWFsb2cyLC5jb250ZW50PiNteS1kaWFsb2cze1xuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XG4gICAgICAgIGdyaWQtcm93OjIvMztcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiM5ODcwNzA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB9XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiw0REFBd0M7QUFDNUM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0REFBeUM7QUFDN0M7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFD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LFdBQVc7UUFDWCx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxuICAgIHNyYzp1cmwoLi9uZXctZm9udC50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQyJztcXG4gICAgc3JjOnVybCguL25ldy1mb250Mi50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQyJztcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG4uY29udGFpbmVye1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcbi5jb250YWluZXI+LmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtc3tcXG4gICAgZ3JpZC1jb2x1bW46MS8yO1xcbiAgICBncmlkLXJvdzoxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODcwNzA7XFxuICAgIG1hcmdpbjowIDAuMnJlbSAwLjJyZW0gMDtcXG4gICAgcGFkZGluZzoxLjJyZW0gMC41cmVtIDAgMC41cmVtO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPmgze1xcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxufVxcbi5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cz5pbnB1dCwubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHM+aW5wdXQsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2PmlucHV0e1xcbiAgICB3aWR0aDoyNXB4O1xcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxufVxcbi5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cywuY29udGVudD4ubWVudS1pdGVtcz4udG9kYXktcHJvamVjdHMsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4uYWxsLXByb2plY3RzPnA6aG92ZXIsLmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnRvZGF5LXByb2plY3RzPnA6aG92ZXIsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2PnNwYW46aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC00cHgpO1xcbn1cXG4ubWVudS1pdGVtcz4uYWxsLXByb2plY3RzPnAsLm1lbnUtaXRlbXM+LnRvZGF5LXByb2plY3RzPnAsLm1lbnUtaXRlbXM+LnByb2plY3RzPi5wcm9qZWN0LWxpc3Q+ZGl2PnNwYW57XFxuICAgIHBhZGRpbmc6MHJlbSAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4ucHJvamVjdHN7XFxuICAgIG1hcmdpbi10b3A6M3JlbTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4ucHJvamVjdHM+aDN7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPi5wcm9qZWN0cz4ucmVzZXQtcHJvamVjdHM+YnV0dG9ue1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MzRDO1xcbiAgICBwYWRkaW5nOjAuM3JlbSAwLjVyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz4ucHJvamVjdHM+LnJlc2V0LXByb2plY3RzPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDojNzU4Njk0O1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi5wcm9qZWN0LXZpZXd7XFxuICAgIGdyaWQtY29sdW1uOjIvMztcXG4gICAgZ3JpZC1yb3c6MS8yO1xcbiAgICBwYWRkaW5nLXRvcDoxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkQzQzM7XFxuICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi5wcm9qZWN0LXZpZXc+aDF7XFxuICAgIHBhZGRpbmctbGVmdDowLjhyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdHtcXG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzoycmVtIDFyZW0gMXJlbSA0cmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGV7XFxuICAgIG1hcmdpbjowIDEuMnJlbTtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGU+c3BhbjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6MjAwcHg7XFxufVxcbi5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4ubmF2LXRpdGxlPnNwYW57XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBtYXJnaW46MS4ycmVtIDAgMCAwLjVyZW07XFxuICAgIGZsZXg6M1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXZ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PmlucHV0e1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgbWFyZ2luOjAuMnJlbSAwLjJyZW0gMCAwO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWx7XFxuICAgIHdpZHRoOjE5NXB4O1xcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWwrc3BhbntcXG4gICAgd2lkdGg6MTEwcHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+c3BhbntcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBmb250LXNpemU6MS4ycmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PmRpdj5pbWd7XFxuICAgIHdpZHRoOjI1cHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbn1cXG4uY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LmFkZC1pY29uLWxhcmdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZzowIDIuNXJlbSAxLjVyZW0gMDtcXG59XFxuLmNvbnRhaW5lcj4uY29udGVudD4jbXktZGlhbG9nLC5jb250ZW50PiNteS1kaWFsb2cyLC5jb250ZW50PiNteS1kaWFsb2cze1xcbiAgICBncmlkLWNvbHVtbjoyLzM7XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kOiM5ODcwNzA7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuLmNvbnRlbnQ+I215LWRpYWxvZz4jbXktZm9ybXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmNvbnRlbnQ+I215LWRpYWxvZ3tcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIGhlaWdodDoxNDBweDtcXG4gICAgcGFkZGluZzoxcmVtIDAuOHJlbTtcXG59XFxuLmNvbnRlbnQ+I215LWRpYWxvZz4jbXktZm9ybT5sZWdlbmR7XFxuICAgIGZvbnQtc2l6ZToxLjdyZW07XFxuICAgIG1hcmdpbi1ib3R0b206MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxufVxcbi5jb250ZW50PiNteS1kaWFsb2c+I215LWZvcm0+aW5wdXR7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XFxuICAgIG1hcmdpbi1ib3R0b206MS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIHdpZHRoOjE0MHB4O1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmNvbnRlbnQ+I215LWRpYWxvZz4jbXktZm9ybT5pbnB1dDpmb2N1cywjbXktZGlhbG9nMj4jbXktZm9ybTIgaW5wdXQ6Zm9jdXMsI215LWRpYWxvZzM+I215LWZvcm0zIGlucHV0e1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcbi5jb250ZW50PiNteS1kaWFsb2c+I215LWZvcm0+YnV0dG9uLCNteS1kaWFsb2cyPiNteS1mb3JtMj5kaXY+YnV0dG9uLCNteS1kaWFsb2czPiNteS1mb3JtMz5kaXY+YnV0dG9ue1xcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XFxuICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIHdpZHRoOjcwcHg7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiM0MDUzNEM7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcbi5jb250ZW50PiNteS1kaWFsb2c+I215LWZvcm0+YnV0dG9uOmhvdmVyLCNteS1kaWFsb2cyPiNteS1mb3JtMj4uYnV0dG9uPmJ1dHRvbjpob3ZlciwjbXktZGlhbG9nMz4jbXktZm9ybTM+LmJ1dHRvbj5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6Izc1ODY5NDtcXG59XFxuLmNvbnRlbnQ+I215LWRpYWxvZzIsLmNvbnRlbnQ+I215LWRpYWxvZzN7XFxuICAgIGhlaWdodDoyODBweDtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIHBhZGRpbmc6MXJlbSAwLjhyZW07XFxufVxcbi5jb250ZW50PiNteS1kaWFsb2cyPiNteS1mb3JtMiwjbXktZGlhbG9nMz4jbXktZm9ybTN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG4jbXktZGlhbG9nMj4jbXktZm9ybTI+bGVnZW5kLCNteS1kaWFsb2czPiNteS1mb3JtMz5sZWdlbmR7XFxuICAgIGZvbnQtc2l6ZToxLjdyZW07XFxuICAgIG1hcmdpbi1ib3R0b206MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNteS1kaWFsb2cyPiNteS1mb3JtMj5pbnB1dCwjbXktZGlhbG9nMz4jbXktZm9ybTM+aW5wdXR7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XFxuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXG4gICAgaGVpZ2h0OjMwcHg7XFxufVxcbi5jb250ZW50PiNteS1kaWFsb2cyPiNteS1mb3JtMj5kaXYsI215LWRpYWxvZzM+I215LWZvcm0zPmRpdntcXG4gICAgbWFyZ2luOjAuNXJlbSAwIDAuNXJlbSAwO1xcbn1cXG4jbXktZGlhbG9nMj4jbXktZm9ybTI+ZGl2PmxhYmVsLCNteS1kaWFsb2czPiNteS1mb3JtMz5kaXY+bGFiZWx7XFxuICAgIHdpZHRoOjcwcHg7XFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbn1cXG4jbXktZGlhbG9nMj4jbXktZm9ybTI+ZGl2PmlucHV0LCNteS1kaWFsb2czPiNteS1mb3JtMz5kaXY+aW5wdXQsI215LWZvcm0yPmRpdj5zZWxlY3QsI215LWZvcm0zPmRpdj5zZWxlY3R7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbn1cXG4jbXktZGlhbG9nMj4jbXktZm9ybTI+LmJ1dHRvbiwjbXktZGlhbG9nMz4jbXktZm9ybTM+LmJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhKG1heC13aWR0aDo4MDBweCl7XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnR7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjJmciAxLjVmciBtaW5tYXgoMjAwcHgpO1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXN7XFxuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XFxuICAgICAgICBncmlkLXJvdzoxLzI7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4ubWVudS1pdGVtcz5oM3tcXG4gICAgICAgIGZvbnQtc2l6ZToxLjdyZW07XFxuICAgIH1cXG4gICAgLm1lbnUtaXRlbXM+LmFsbC1wcm9qZWN0cz5wLC5tZW51LWl0ZW1zPi50b2RheS1wcm9qZWN0cz5wLC5tZW51LWl0ZW1zPi5wcm9qZWN0cz4ucHJvamVjdC1saXN0PmRpdj5zcGFue1xcbiAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi5tZW51LWl0ZW1zPi5wcm9qZWN0c3tcXG4gICAgICAgIG1hcmdpbi10b3A6MS41cmVtO1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnByb2plY3RzPmgze1xcbiAgICAgICAgZm9udC1zaXplOjEuNXJlbVxcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+Lm1lbnUtaXRlbXM+LnByb2plY3RzPi5yZXNldC1wcm9qZWN0cz5idXR0b257XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIG1hcmdpbjoxcmVtIDAgMXJlbSAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnByb2plY3Qtdmlld3tcXG4gICAgICAgIGdyaWQtY29sdW1uOjEvMjtcXG4gICAgICAgIGdyaWQtcm93OjIvMztcXG4gICAgfVxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3R7XFxuICAgICAgICBncmlkLWNvbHVtbjoxLzI7XFxuICAgICAgICBncmlkLXJvdzozLzQ7XFxuICAgICAgICBtaW4taGVpZ2h0OjMwMHB4O1xcbiAgICAgICAgcGFkZGluZzoxLjJyZW0gMCAwIDA7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGV7XFxuICAgICAgICBtYXJnaW46MCAwLjlyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5uYXYtdGl0bGU+c3BhbntcXG4gICAgICAgIHdpZHRoOjcwcHg7XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+Lm5hdi10aXRsZT5zcGFuOmZpcnN0LWNoaWxke1xcbiAgICAgICAgd2lkdGg6NzhweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+Lm5hdi10aXRsZT5zcGFuK3NwYW4rc3BhbntcXG4gICAgICAgIHdpZHRoOjYwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3R7XFxuICAgICAgICBtYXJnaW46MC44cmVtIDAgMCAwO1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdntcXG4gICAgICAgIG1hcmdpbjowLjNyZW0gMDtcXG4gICAgICAgIGhlaWdodDoyNXB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdj5pbnB1dHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgbWFyZ2luOjAgMC4xcmVtIDAgMC4ycmVtO1xcbiAgICB9XFxuICAgIC5jb250YWluZXI+LmNvbnRlbnQ+LnRvZG8tbGlzdD4uVG9kby1saXN0PmRpdj5sYWJlbHtcXG4gICAgICAgIHdpZHRoOjc2cHg7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjlyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PmxhYmVsK3NwYW57XFxuICAgICAgICB3aWR0aDo3NnB4O1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgICAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICB9IFxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+bGFiZWwrc3BhbitzcGFue1xcbiAgICAgICAgd2lkdGg6NjBweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyPi5jb250ZW50Pi50b2RvLWxpc3Q+LlRvZG8tbGlzdD5kaXY+c3BhbntcXG4gICAgICAgIHdpZHRoOjc1cHg7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjlyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4udG9kby1saXN0Pi5Ub2RvLWxpc3Q+ZGl2PmRpdj5pbWd7XFxuICAgICAgICB3aWR0aDoxN3B4O1xcbiAgICAgICAgaGVpZ2h0OjE3cHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcj4uY29udGVudD4jbXktZGlhbG9nLC5jb250ZW50PiNteS1kaWFsb2cyLC5jb250ZW50PiNteS1kaWFsb2cze1xcbiAgICAgICAgZ3JpZC1jb2x1bW46MS8yO1xcbiAgICAgICAgZ3JpZC1yb3c6Mi8zO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICAgICAgYm9yZGVyOm5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiM5ODcwNzA7XFxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtwcm9qZWN0TGlzdH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgZWRpdEljb25JbWFnZSBmcm9tICcuL2ltYWdlcy9lZGl0LnBuZyc7XG5pbXBvcnQgcmVtb3ZlSWNvbkltYWdlIGZyb20gJy4vaW1hZ2VzL3JlbW92ZS5wbmcnO1xuaW1wb3J0IHtUb2RvSXRlbXN9IGZyb20gJy4vVG9kby1saXN0LmpzJztcbmltcG9ydCB7bG9hZGluZ0Zyb21MU30gIGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5cbmxldCBwcm9qZWN0Q291bnRlcj0wO1xubGV0IHByb2plY3RDbGlja2VkPWZhbHNlO1xubGV0IHRvZG9Db3VudGVyPTA7XG5sZXQgcHJldmlvdXNQcm9qU2VsZWN0ZWQ9XCJcIjtcbmxldCB0b2RheURhdGU7XG4vL1JldHJpZXZlcyB0aGUgcHJvamVjdCBuYW1lIGdpdmVuIHdoaWxlIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbmZ1bmN0aW9uIGdldFByb2plY3ROYW1lKCl7XG4gICAgY29uc3QgcHJvamVjdElucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICByZXR1cm4gcHJvamVjdElucHV0O1xufVxuLy9JdCBnZXRzIHRoZSBpbmRleCBvZiB0aGUgdG9kbyBpdGVtIHdoZXJlIHRoZSBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWRcbmZ1bmN0aW9uIGdldFJlbW92ZWRQcm9qZWN0KGUpe1xuICAgIGxldCBjbGlja2VkUGFyZW50Q29udGFpbmVyPWUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IGNsaWNrZWRQYXJlbnRDb250YWluZXJJbmRleD1jbGlja2VkUGFyZW50Q29udGFpbmVyLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgcmV0dXJuIGNsaWNrZWRQYXJlbnRDb250YWluZXJJbmRleDtcbn1cblxuLy8gZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21ET00oaW5kZXgpe1xuLy8gICAgIGxldCBzZWxlY3Rvcj0gYC5wcm9qZWN0LWxpc3Q+W2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWA7XG4vLyAgICAgbGV0IGl0ZW1Ub1JlbW92ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JykucmVtb3ZlQ2hpbGQoaXRlbVRvUmVtb3ZlKTtcbi8vIH1cblxuZnVuY3Rpb24gc2V0TmV3SW5kZXgoKXtcbiAgICBwcm9qZWN0Q291bnRlcj0wO1xuICAgIGxldCBteU5vZGVMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3Q+ZGl2JylcbiAgICBteU5vZGVMaXN0LmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyxwcm9qZWN0Q291bnRlcik7XG4gICAgICAgIHByb2plY3RDb3VudGVyKz0xO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdERpYWxvZygpe1xuICAgIGNvbnN0IHByb2plY3REaWFsb2c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWRpYWxvZycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1mb3JtJykucmVzZXQoKTtcbiAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3REb20oY29sb3IscHJvamVjdE5hbWUpe1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBuZXdDb2xvcklucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIFxuICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxgJHtwcm9qZWN0Q291bnRlcn1gKTtcbiAgICBuZXdDb2xvcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NvbG9yJyk7XG4gICAgbmV3Q29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxjb2xvcik7XG4gICAgbmV3Q29sb3JJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJyxgY29sb3ItaW5wdXQke3Byb2plY3RDb3VudGVyfWApO1xuICAgIG5ld0NvbG9ySW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ215Q29sb3JJbnB1dCcpO1xuXG4gICAgaWYoIWxvYWRpbmdGcm9tTFMpe1xuICAgICAgICBuZXdQcm9qZWN0TmFtZS50ZXh0Q29udGVudD1gJHtwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5sZW5ndGgtMV19YDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQ9YCR7cHJvamVjdE5hbWV9YDtcbiAgICB9XG5cbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbG9ySW5wdXQpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0Q291bnRlcis9MTtcbn1cbi8vRmluZHMgdGhlIGluZGV4IG9mIGFsbCB0b2RvIGl0ZW1zIHdpdGggdGhlIHNhbWUgcHJvamVjdCBuYW1lXG5mdW5jdGlvbiBnZXRBbGxSZWxhdGVkUHJvamVjdEluZGV4KGUpe1xuICAgIGxldCByZWxhdGVkUHJvamVjdExpc3Q9W107XG4gICAgbGV0IGNsaWNrZWRQcm9qZWN0SW5kZXg9ZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBsZXQgY2xpY2tlZFByb2plY3ROYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWxpc3Q+W2RhdGEtaW5kZXg9XCIke2NsaWNrZWRQcm9qZWN0SW5kZXh9XCJdPnNwYW5gKS50ZXh0Q29udGVudDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3PmgxJykudGV4dENvbnRlbnQ9Y2xpY2tlZFByb2plY3ROYW1lO1xuICAgIFRvZG9JdGVtcy5tYXAoKGl0ZW0saW5kZXgpPT57XG4gICAgICAgIGlmKGl0ZW0ucHJvamVjdD09PWNsaWNrZWRQcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICByZWxhdGVkUHJvamVjdExpc3QucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVsYXRlZFByb2plY3RMaXN0O1xufVxuLy9BZGRzIGFsbCB0b2RvIGl0ZW1zIGludG8gdGhlIERPTSB3aGVuIGFsbCBwcm9qZWN0cyBpcyBjbGlja2VkXG5mdW5jdGlvbiBwdXRBbGxQcm9qZWN0c1RvRE9NKG15QXJyYXkpe1xuICAgIHRvZG9Db3VudGVyPTA7XG4gICAgcHJvamVjdENsaWNrZWQ9dHJ1ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kby1saXN0JykuaW5uZXJIVE1MPVwiXCI7XG4gICAgbXlBcnJheS5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgYWRkVG9kb0RvbShpdGVtKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q2xpY2tlZD1mYWxzZTtcbn1cbi8vUmV0cmlldmVzIHRoZSBpbmRleCBvZiBhbGwgcHJvamVjdHMgd2l0aCB0aGUgc2FtZSBkYXRlIFxuZnVuY3Rpb24gZ2V0VG9kYXlQcm9qZWN0SW5kZXgoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3PmgxJykudGV4dENvbnRlbnQ9XCJUb2RheVwiXG5cbiAgICBsZXQgdG9kYXlBcnJheUluZGV4PVtdO1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgdG9kYXlEYXRlPXRvZGF5O1xuICAgIFRvZG9JdGVtcy5tYXAoKGl0ZW0saW5kZXgpPT57XG4gICAgICAgIGlmKGl0ZW0uZGF0ZT09PXRvZGF5KXtcbiAgICAgICAgICAgIHRvZGF5QXJyYXlJbmRleC5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0b2RheUFycmF5SW5kZXg7XG59XG4vL0NsZWFycyBhbGwgcHJvamVjdHMgZnJvbSB0aGUgRE9NXG5mdW5jdGlvbiByZW1vdmVBbGxQcm9qZWN0c0FuZFRvZG9Gcm9tRE9NKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG8tbGlzdCcpLmlubmVySFRNTD1cIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKS5pbm5lckhUTUw9XCJcIjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSGVhZGVyVGV4dFRvQWxsKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtdmlldz5oMScpLnRleHRDb250ZW50PVwiQWxsXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3RCYWNrZ3JvdW5kKGUpe1xuICAgIC8vVGhlIGlmIGVsc2UgY2xhdXNlcyBpcyB1c2VkIGZvciByZW1vdmluZyB0aGUgcHJvamVjdCBiYWNrZ3JvdW5kIG9mIHRoZSBwcmV2aW91c2x5IGNsaWNrZWQgcHJvamVjdCBhbmQgc2V0dGluZyBiYWNrZ3JvdW5kIGZvciB0aGUgY2xpY2tlZCBwcm9qZWN0XG4gICAgaWYocHJldmlvdXNQcm9qU2VsZWN0ZWQ9PT1cIkFsbFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtcHJvamVjdHM+cFwiKS5zdHlsZS5iYWNrZ3JvdW5kPVwiXCI7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQ9XCIjNDA1MzRDXCI7XG4gICAgfVxuICAgIGVsc2UgaWYocHJldmlvdXNQcm9qU2VsZWN0ZWQ9PT1cIlRvZGF5XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXByb2plY3RzPnBcIikuc3R5bGUuYmFja2dyb3VuZD1cIlwiO1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kPVwiIzQwNTM0Q1wiO1xuICAgIH1cbiAgICBlbHNlIGlmKHByZXZpb3VzUHJvalNlbGVjdGVkPT09XCJcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXByb2plY3RzPnBcIikuc3R5bGUuYmFja2dyb3VuZD1cIiM0MDUzNENcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGV0IHByZXZpb3VzUHJvamVjdDtcbiAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQ9PT1cIkFsbFwifHxlLnRhcmdldC50ZXh0Q29udGVudD09PVwiVG9kYXlcIil7XG4gICAgICAgICAgICBwcmV2aW91c1Byb2plY3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3RcIikuY2hpbGRyZW5bcHJldmlvdXNQcm9qU2VsZWN0ZWRdLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgcHJldmlvdXNQcm9qZWN0LnN0eWxlLmJhY2tncm91bmQ9XCJcIjtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQ9XCIjNDA1MzRDXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHByZXZpb3VzUHJvamVjdD1lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bcHJldmlvdXNQcm9qU2VsZWN0ZWRdLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgcHJldmlvdXNQcm9qZWN0LnN0eWxlLmJhY2tncm91bmQ9XCJcIjtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQ9XCIjNDA1MzRDXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldENsaWNrZWRQcm9qZWN0SW5kZXgoZSl7XG4gICAgcHJldmlvdXNQcm9qU2VsZWN0ZWQ9ZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbn1cbi8vQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IG9mIHRoZSBwcm9qZWN0IG5hbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRseSBvcGVuZWQgcHJvamVjdCBcbmZ1bmN0aW9uIGNoZWNrQ2xpY2tlZElucHV0QW5kUHJvamVjdFZpZXcoZSl7XG4gICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS50ZXh0Q29udGVudD09PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC12aWV3PmgxXCIpLnRleHRDb250ZW50KXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuLy9Vc2VkIGZvciBjaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIHByb2plY3QgdmlldyBzYW1lIGFzIHRoZSBjb2xvciBzZWxlY3RlZCBieSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgbGlzdCBjb2xvciBpbnB1dFxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdFZpZXdDb2xvcihlKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtdmlld1wiKS5zdHlsZS5iYWNrZ3JvdW5kPWUudGFyZ2V0LnZhbHVlO1xufVxuLy9Gb3IgbG9hZGluZyB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBjb2xvciBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBjaGFuZ2VDb2xvckZvckFsbEFuZFRvZGF5UHJvamVjdCgpe1xuICAgIGxldCBjb2xvckFycmF5PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yTGlzdCcpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJykudmFsdWU9Y29sb3JBcnJheVswXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKS52YWx1ZT1jb2xvckFycmF5WzFdO1xufVxuXG4vL1RvZG8tbGlzdCBtb2R1bGUgRE9NXG4vL0FkZHMgdGhlIGxpc3Qgb2YgcHJvamVjdHMgaW50byB0aGUgc2VsZWN0IGJveCBvZiB0aGUgZGlhbG9nIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcbmZ1bmN0aW9uIGFkZFByb0xpc3RUb1NlbEJveChwcm9qZWN0TGlzdCl7XG4gICAgbGV0IHNlbGVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcm9qZWN0Jyk7XG4gICAgc2VsZWN0LmlubmVySFRNTD1cIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goaXRlbT0+e1xuICAgICAgICBsZXQgb3B0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWU9aXRlbTtcbiAgICAgICAgb3B0aW9uLmlubmVySFRNTD1pdGVtO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxufVxuLy9SZXRyaWV2ZXMgdGhlIGlucHV0IGdpdmVuIGJ5IHRoZSB1c2VyIGZyb20gdGhlIGRpYWxvZyBib3hcbmZ1bmN0aW9uIGdldERpYWxvZ1ZhbHVlcygpe1xuICAgIGxldCBUb2RvT2JqZWN0PXt9O1xuICAgIFRvZG9PYmplY3QudG9kb05hbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbmFtZScpLnZhbHVlO1xuICAgIFRvZG9PYmplY3QuZGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJykudmFsdWU7XG4gICAgVG9kb09iamVjdC5wcmlvcml0eT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgIFRvZG9PYmplY3Quc3RhdHVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXN0YXR1cycpLnZhbHVlO1xuICAgIFRvZG9PYmplY3QucHJvamVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcm9qZWN0JykudmFsdWU7XG4gICAgcmV0dXJuIFRvZG9PYmplY3Q7XG59XG4vL0Nsb3NlcyB0aGUgZGlhbG9nIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvIGFmdGVyIHRoZSB1c2VyIGZpbGwgYW5kIHN1Ym1pdCB0aGUgYWRkIGRpYWxvZyBib3hcbmZ1bmN0aW9uIGNsb3NlVG9kb0RpYWxvZygpe1xuICAgIGNvbnN0IFRvZG9EaWFsb2c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWRpYWxvZzInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybTInKS5yZXNldCgpO1xuICAgIFRvZG9EaWFsb2cuY2xvc2UoKTtcbn1cbi8vQWRkcyBuZXcgdG9kbyBpdGVtIGFuZCBpdHMgY29tcG9uZW50cyBpbnRvIHRoZSBET01cbmZ1bmN0aW9uIGFkZFRvZG9Eb20oaW5kZXgpe1xuICAgIGNvbnN0IFRvZG9Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG8tbGlzdCcpO1xuICAgIGNvbnN0IG5ld1RvZG9Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBUb2RvQ2hlY2s9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBUb2RvQ2hlY2sudHlwZT0nY2hlY2tib3gnO1xuICAgIFRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxgbXlDaGVja2JveGApO1xuXG4gICAgaWYoIXByb2plY3RDbGlja2VkKXtcbiAgICAgICAgbmV3VG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLGAke3RvZG9Db3VudGVyfWApO1xuICAgICAgICBUb2RvQ2hlY2suc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxgJHt0b2RvQ291bnRlcn1gKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbmV3VG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLGAke2luZGV4fWApO1xuICAgICAgICBUb2RvQ2hlY2suc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyxgJHtpbmRleH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBUb2RvTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIFRvZG9OYW1lLmZvciA9IHRvZG9Db3VudGVyO1xuXG4gICAgY29uc3QgVG9kb0RhdGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IFRvZG9Qcmlvcml0eT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgVG9kb1N0YXR1cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbmV3RWRpdEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3UmVtb3ZlSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vVXNlZCBmb3Igc3RyaWNrIHRocm91Z2ggdGhlIGxhYmVsIGFuZCBkYXRlIHdoZW4gdGhlIHN0YXR1cyBpcyBjb21wbGV0ZSBhbmQgdmlzZSB2ZXJzYWxcbiAgICBpZihUb2RvSXRlbXNbaW5kZXhdLnN0YXR1cz09PVwiQ29tcGxldGVkXCIpe1xuICAgICAgICBUb2RvTmFtZS50ZXh0Q29udGVudD1gJHtUb2RvSXRlbXNbaW5kZXhdLnRvZG9OYW1lLnNwbGl0KCcnKS5tYXAoY2hhciA9PiBjaGFyICsgJ1xcdTAzMzYnKS5qb2luKCcnKX1gO1xuICAgICAgICBUb2RvRGF0ZS50ZXh0Q29udGVudD1gJHtUb2RvSXRlbXNbaW5kZXhdLmRhdGUuc3BsaXQoJycpLm1hcChjaGFyID0+IGNoYXIgKyAnXFx1MDMzNicpLmpvaW4oJycpfWA7XG4gICAgICAgIFRvZG9Qcmlvcml0eS50ZXh0Q29udGVudD1gJHtUb2RvSXRlbXNbaW5kZXhdLnByaW9yaXR5fWA7XG4gICAgICAgIFRvZG9TdGF0dXMudGV4dENvbnRlbnQ9YCR7VG9kb0l0ZW1zW2luZGV4XS5zdGF0dXN9YDtcbiAgICAgICAgVG9kb0NoZWNrLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgVG9kb1N0YXR1cy5zdHlsZS5iYWNrZ3JvdW5kPVwiZ3JlZW5cIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgVG9kb05hbWUudGV4dENvbnRlbnQ9YCR7VG9kb0l0ZW1zW2luZGV4XS50b2RvTmFtZX1gO1xuICAgICAgICBUb2RvRGF0ZS50ZXh0Q29udGVudD1gJHtUb2RvSXRlbXNbaW5kZXhdLmRhdGV9YDtcbiAgICAgICAgVG9kb1ByaW9yaXR5LnRleHRDb250ZW50PWAke1RvZG9JdGVtc1tpbmRleF0ucHJpb3JpdHl9YDtcbiAgICAgICAgVG9kb1N0YXR1cy50ZXh0Q29udGVudD1gJHtUb2RvSXRlbXNbaW5kZXhdLnN0YXR1c31gO1xuICAgIH1cbi8vQXBwbGllcyBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBwcmlvcml0eVxuICAgIGlmKFRvZG9JdGVtc1tpbmRleF0ucHJpb3JpdHk9PT1cIk1lZGl1bVwiKXtcbiAgICAgICAgVG9kb1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmQ9XCIjRkY5QTAwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYoVG9kb0l0ZW1zW2luZGV4XS5wcmlvcml0eT09PVwiSGlnaFwiKXtcbiAgICAgICAgVG9kb1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmQ9XCJyZWRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SWNvbj1uZXcgSW1hZ2UoKTtcbiAgICBlZGl0SWNvbi5zcmM9ZWRpdEljb25JbWFnZTtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC1pY29uJyk7XG4gICAgbmV3RWRpdEljb24uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gICAgY29uc3QgcmVtb3ZlSWNvbj1uZXcgSW1hZ2UoKTtcbiAgICByZW1vdmVJY29uLnNyYz1yZW1vdmVJY29uSW1hZ2U7XG4gICAgbmV3UmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywncmVtb3ZlLWljb24yJyk7XG4gICAgbmV3UmVtb3ZlSWNvbi5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcblxuICAgIG5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoVG9kb0NoZWNrKTtcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKFRvZG9OYW1lKTtcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKFRvZG9EYXRlKTtcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKFRvZG9Qcmlvcml0eSk7XG4gICAgbmV3VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChUb2RvU3RhdHVzKTtcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VkaXRJY29uKTtcbiAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1JlbW92ZUljb24pO1xuXG4gICAgVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQ29udGFpbmVyKTtcblxuICAgIHRvZG9Db3VudGVyKz0xO1xufVxuLy9nZXRzIHRoZSBzcGVjaWZpYyBpbmRleCBvZiB0aGUgIHRvZG8gaXRlbSBkaXYgYWZ0ZXIgdGhlIGRlbGV0ZSBpY29uIGlzIGNsaWNrZWRcbmZ1bmN0aW9uIGdldFJlbW92ZWRUb2RvKGUpe1xuICAgIHJldHVybiBnZXRSZW1vdmVkUHJvamVjdChlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kb0Zyb21ET00oaW5kZXgpe1xuICAgIGxldCBzZWxlY3Rvcj0gYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWA7XG4gICAgbGV0IGl0ZW1Ub1JlbW92ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kby1saXN0JykucmVtb3ZlQ2hpbGQoaXRlbVRvUmVtb3ZlKTtcbn1cblxuZnVuY3Rpb24gc2V0TmV3SW5kZXhUb2RvKCl7XG4gICAgdG9kb0NvdW50ZXI9MDtcbiAgICBsZXQgbXlOb2RlTGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVG9kby1saXN0PmRpdicpXG4gICAgbXlOb2RlTGlzdC5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsdG9kb0NvdW50ZXIpO1xuICAgICAgICB0b2RvQ291bnRlcis9MTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRDbGlja2VkQ2hlY2tib3goZSl7XG4gICAgbGV0IGNsaWNrZWRDaGVja0JveD1lLnRhcmdldDtcbiAgICByZXR1cm4gY2xpY2tlZENoZWNrQm94O1xufVxuLy9Vc2VkIHdoZW4gYSBjaGVjayBib3ggaXMgY2hlY2tlZCBvciB1bmNoZWNrZWRcbmZ1bmN0aW9uIG1ha2VBY3Rpb24oY2hlY2tib3hDbGlja2VkKXtcbiAgICBsZXQgcGFyZW50Q29udGFpbmVySW5kZXg9Y2hlY2tib3hDbGlja2VkLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgbGV0IG15TGFiZWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRvZG8tbGlzdD5bZGF0YS1pbmRleD1cIiR7cGFyZW50Q29udGFpbmVySW5kZXh9XCJdYCkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgbGV0IG15RGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblsyXS50ZXh0Q29udGVudDtcblxuICAgIGlmKGNoZWNrYm94Q2xpY2tlZC5jaGVja2VkKXtcbiAgICAgICAgbGV0IHN0cmlrZXRocm91Z2hMYWJlbD1teUxhYmVsLnNwbGl0KCcnKS5tYXAoY2hhciA9PiBjaGFyICsgJ1xcdTAzMzYnKS5qb2luKCcnKTsgXG4gICAgICAgIGxldCBzdHJpa2V0aHJvdWdoRGF0ZT1teURhdGUuc3BsaXQoJycpLm1hcChjaGFyID0+IGNoYXIgKyAnXFx1MDMzNicpLmpvaW4oJycpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblsxXS50ZXh0Q29udGVudD1zdHJpa2V0aHJvdWdoTGFiZWw7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke3BhcmVudENvbnRhaW5lckluZGV4fVwiXWApLmNoaWxkcmVuWzJdLnRleHRDb250ZW50PXN0cmlrZXRocm91Z2hEYXRlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlbls0XS50ZXh0Q29udGVudD1cIkNvbXBsZXRlZFwiO1xuICAgICAgICBUb2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnN0YXR1cz1cIkNvbXBsZXRlZFwiO1xuICAgICAgICBjaGVja2JveENsaWNrZWQucGFyZW50Tm9kZS5jaGlsZHJlbls0XS5zdHlsZS5iYWNrZ3JvdW5kPVwiZ3JlZW5cIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRvZG8tbGlzdD5bZGF0YS1pbmRleD1cIiR7cGFyZW50Q29udGFpbmVySW5kZXh9XCJdYCkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ9bXlMYWJlbC5yZXBsYWNlKC9bXFx1MDMzNl0vZywgJycpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblsyXS50ZXh0Q29udGVudD1teURhdGUucmVwbGFjZSgvW1xcdTAzMzZdL2csICcnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRvZG8tbGlzdD5bZGF0YS1pbmRleD1cIiR7cGFyZW50Q29udGFpbmVySW5kZXh9XCJdYCkuY2hpbGRyZW5bNF0udGV4dENvbnRlbnQ9XCJOb3QgU3RhcnRlZFwiO1xuICAgICAgICBUb2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnN0YXR1cz1cIk5vdCBTdGFydGVkXCI7XG4gICAgICAgIGNoZWNrYm94Q2xpY2tlZC5wYXJlbnROb2RlLmNoaWxkcmVuWzRdLnN0eWxlLmJhY2tncm91bmQ9XCJcIjtcbiAgICB9XG59XG4vL0NoZWNrcyB3aGV0aGVyIGFsbCB0aGUgZGlhbG9ndWVzIGFyZSBvcGVuIG9yIGNsb3NlZFxuZnVuY3Rpb24gY2hlY2tEaWFsb2dPcGVuT3JDbG9zZSgpe1xuICAgIGlmKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZGlhbG9nJykub3BlbiYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1kaWFsb2cyJykub3Blbil7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbi8vT3BlbnMgdGhlIGVkaXQgZGlhbG9nIGFuZCBpdCBhZGRzIHRoZSBwcmV2aW91cyB2YWx1ZXMgdG8gaXRcbmZ1bmN0aW9uIG9wZW5Ub2RvRGlhbG9nRm9yRWRpdGluZyhlKXtcbiAgICBsZXQgVG9kb0RpYWxvZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZGlhbG9nMycpO1xuICAgIFRvZG9EaWFsb2cuc2hvdygpO1xuXG4gICAgbGV0IHBhcmVudENvbnRhaW5lckluZGV4PWUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUtdXBkYXRlJykudmFsdWU9VG9kb0l0ZW1zW3BhcmVudENvbnRhaW5lckluZGV4XS50b2RvTmFtZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlLXVwZGF0ZScpLnZhbHVlPVRvZG9JdGVtc1twYXJlbnRDb250YWluZXJJbmRleF0uZGF0ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eS11cGRhdGUnKS52YWx1ZT1Ub2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnByaW9yaXR5O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXN0YXR1cy11cGRhdGUnKS52YWx1ZT1Ub2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnN0YXR1czsgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcm9qZWN0LXVwZGF0ZScpLnZhbHVlPVRvZG9JdGVtc1twYXJlbnRDb250YWluZXJJbmRleF0ucHJvamVjdDsgIFxufVxuLy9VcGRhdGVzIHRoZSB0b2RvIGl0ZW1zIGRhdGEgZnJvbSB0aGUgZWRpdGVkIGRpYWxvZ3VlXG5mdW5jdGlvbiB1cGRhdGVBcnJheURhdGEoZSl7XG4gICAgbGV0IHBhcmVudENvbnRhaW5lckluZGV4PWUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBUb2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnRvZG9OYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUtdXBkYXRlJykudmFsdWU7XG4gICAgVG9kb0l0ZW1zW3BhcmVudENvbnRhaW5lckluZGV4XS5kYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUtdXBkYXRlJykudmFsdWU7XG4gICAgVG9kb0l0ZW1zW3BhcmVudENvbnRhaW5lckluZGV4XS5wcmlvcml0eT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eS11cGRhdGUnKS52YWx1ZTtcbiAgICBUb2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnN0YXR1cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1zdGF0dXMtdXBkYXRlJykudmFsdWU7XG4gICAgVG9kb0l0ZW1zW3BhcmVudENvbnRhaW5lckluZGV4XS5wcm9qZWN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByb2plY3QtdXBkYXRlJykudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTShlKXtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXJJbmRleD1lLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgbGV0IHRvZG9OYW1lPVRvZG9JdGVtc1twYXJlbnRDb250YWluZXJJbmRleF0udG9kb05hbWU7XG4gICAgbGV0IHRvZG9EYXRlPVRvZG9JdGVtc1twYXJlbnRDb250YWluZXJJbmRleF0uZGF0ZTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5PVRvZG9JdGVtc1twYXJlbnRDb250YWluZXJJbmRleF0ucHJpb3JpdHk7XG4gICAgbGV0IHRvZG9TdGF0dXM9VG9kb0l0ZW1zW3BhcmVudENvbnRhaW5lckluZGV4XS5zdGF0dXM7XG4vL1VzZWQgZm9yIHN0cmljayB0aHJvdWdoIHRoZSBsYWJlbCBhbmQgZGF0ZSB3aGVuIHRoZSBzdGF0dXMgaXMgY29tcGxldGUgYW5kIHZpc2UgdmVyc2FsXG4gICAgaWYodG9kb1N0YXR1cz09PVwiQ29tcGxldGVkXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblsxXS50ZXh0Q29udGVudD10b2RvTmFtZS5zcGxpdCgnJykubWFwKGNoYXIgPT4gY2hhciArICdcXHUwMzM2Jykuam9pbignJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke3BhcmVudENvbnRhaW5lckluZGV4fVwiXWApLmNoaWxkcmVuWzJdLnRleHRDb250ZW50PXRvZG9EYXRlLnNwbGl0KCcnKS5tYXAoY2hhciA9PiBjaGFyICsgJ1xcdTAzMzYnKS5qb2luKCcnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRvZG8tbGlzdD5bZGF0YS1pbmRleD1cIiR7cGFyZW50Q29udGFpbmVySW5kZXh9XCJdYCkuY2hpbGRyZW5bM10udGV4dENvbnRlbnQ9dG9kb1ByaW9yaXR5O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlbls0XS50ZXh0Q29udGVudD10b2RvU3RhdHVzO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblswXS5jaGVja2VkPXRydWU7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbls0XS5zdHlsZS5iYWNrZ3JvdW5kPVwiZ3JlZW5cIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRvZG8tbGlzdD5bZGF0YS1pbmRleD1cIiR7cGFyZW50Q29udGFpbmVySW5kZXh9XCJdYCkuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ9dG9kb05hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke3BhcmVudENvbnRhaW5lckluZGV4fVwiXWApLmNoaWxkcmVuWzJdLnRleHRDb250ZW50PXRvZG9EYXRlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuVG9kby1saXN0PltkYXRhLWluZGV4PVwiJHtwYXJlbnRDb250YWluZXJJbmRleH1cIl1gKS5jaGlsZHJlblszXS50ZXh0Q29udGVudD10b2RvUHJpb3JpdHk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke3BhcmVudENvbnRhaW5lckluZGV4fVwiXWApLmNoaWxkcmVuWzRdLnRleHRDb250ZW50PXRvZG9TdGF0dXM7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5Ub2RvLWxpc3Q+W2RhdGEtaW5kZXg9XCIke3BhcmVudENvbnRhaW5lckluZGV4fVwiXWApLmNoaWxkcmVuWzBdLmNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlbls0XS5zdHlsZS5iYWNrZ3JvdW5kPVwiXCI7XG4gICAgfVxuLy9BcHBsaWVzIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHByaW9yaXR5XG4gICAgaWYodG9kb1ByaW9yaXR5PT09XCJNZWRpdW1cIil7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblszXS5zdHlsZS5iYWNrZ3JvdW5kPVwiI0ZGOUEwMFwiO1xuICAgIH1cbiAgICBlbHNlIGlmKHRvZG9Qcmlvcml0eT09PVwiSGlnaFwiKXtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzNdLnN0eWxlLmJhY2tncm91bmQ9XCJyZWRcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzNdLnN0eWxlLmJhY2tncm91bmQ9XCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0RGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1kaWFsb2czJyk7XG4gICAgZWRpdERpYWxvZy5jbG9zZSgpO1xufVxuLy9BZGRzIHRoZSBwcm9qZWN0IGxpc3QgdG8gdGhlIHNlbGVjdCBib3ggb2YgdGhlIGVkaXQgZGlhbG9ndWVcbmZ1bmN0aW9uIGFkZFByb0xpc3RUb1NlbEJveDIocHJvamVjdExpc3Qpe1xuICAgIGxldCBzZWxlY3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvamVjdC11cGRhdGUnKTtcbiAgICBzZWxlY3QuaW5uZXJIVE1MPVwiXCI7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChpdGVtPT57XG4gICAgICAgIGxldCBvcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZT1pdGVtO1xuICAgICAgICBvcHRpb24uaW5uZXJIVE1MPWl0ZW07XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG59XG4vL3VzZWQgZm9yIGNoZWNraW5nIHRoZSBpbnB1dCBwcm9qZWN0IGdpdmVuIG1hdGNoJ3Mgd2l0aCB0aGUgYWN0dWFsIHByb2plY3Qgc2VsZWN0ZWQgd2hpbGUgYWRkaW5nIG5ldyB0b2RvIGl0ZW1cbmZ1bmN0aW9uIGNoZWNrUHJvamVjdE1hdGNoZXMoKXtcbiAgICBpZiggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtdmlldz5oMScpLnRleHRDb250ZW50PT09VG9kb0l0ZW1zW1RvZG9JdGVtcy5sZW5ndGgtMV0ucHJvamVjdCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXZpZXc+aDEnKS50ZXh0Q29udGVudD09PVwiQWxsXCIpe1xuICAgICAgICByZXR1cm4gXCJBbGxcIjtcbiAgICB9XG4gICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3PmgxJykudGV4dENvbnRlbnQ9PT1cIlRvZGF5XCIpe1xuICAgICAgICByZXR1cm4gXCJUb2RheVwiO1xuICAgIH1cbn1cbi8vdXNlZCBmb3IgY2hlY2tpbmcgdGhlIGlucHV0IHByb2plY3QgZ2l2ZW4gbWF0Y2gncyB3aXRoIHRoZSBhY3R1YWwgcHJvamVjdCBzZWxlY3RlZCB3aGlsZSBlZGl0aW5nIHRvZG8gaXRlbVxuZnVuY3Rpb24gY2hlY2tQcm9qZWN0TWF0Y2hlczIoZSl7XG4gICAgbGV0IHBhcmVudENvbnRhaW5lckluZGV4PWUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3PmgxJykudGV4dENvbnRlbnQ9PT1Ub2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLnByb2plY3Qpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC12aWV3PmgxJykudGV4dENvbnRlbnQ9PT1wcmV2aW91c1Byb2pTZWxlY3RlZCYmcHJldmlvdXNQcm9qU2VsZWN0ZWQhPVwiVG9kYXlcIil7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKHByZXZpb3VzUHJvalNlbGVjdGVkPT09XCJUb2RheVwiJiZ0b2RheURhdGU9PT1Ub2RvSXRlbXNbcGFyZW50Q29udGFpbmVySW5kZXhdLmRhdGUpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG8tbGlzdCcpLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1kaWFsb2czJykuY2xvc2UoKTtcbn1cblxuLy9TZXR0aW5nIHRoZSBwcm9qZWN0IHZpZXcgY29sb3JcblxuZnVuY3Rpb24gc2V0UHJvamVjdFZpZXdDb2xvcihlKXtcbiAgICBsZXQgbXlQcm9qZWN0Vmlldz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtdmlld1wiKTtcbiAgICBpZihlPT09XCJBbGxcIil7XG4gICAgICAgIG15UHJvamVjdFZpZXcuc3R5bGUuYmFja2dyb3VuZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKS52YWx1ZTtcbiAgICAgICAgcHJldmlvdXNQcm9qU2VsZWN0ZWQ9XCJBbGxcIjtcbiAgICB9XG4gICAgZWxzZSBpZihlPT09XCJUb2RheVwiKXtcbiAgICAgICAgbXlQcm9qZWN0Vmlldy5zdHlsZS5iYWNrZ3JvdW5kPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIikudmFsdWU7XG4gICAgICAgIHByZXZpb3VzUHJvalNlbGVjdGVkPVwiVG9kYXlcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGV0IG15Q29sb3I9ZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS52YWx1ZTtcbiAgICAgICAgbXlQcm9qZWN0Vmlldy5zdHlsZS5iYWNrZ3JvdW5kPW15Q29sb3I7XG4gICAgfVxufVxuXG4vL0ZvciBnZXR0aW5nIGFsbCB0aGUgcHJvamVjdCBjb2xvcnNcblxuZnVuY3Rpb24gZ2V0UHJvamVjdENvbG9yKCl7XG4gICAgbGV0IG15Q29sb3JBcnJheT1bXTtcbiAgICBsZXQgYWxsUHJvamVjdENvbG9yPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsXCIpLnZhbHVlO1xuICAgIGxldCB0b2RheVByb2plY3RDb2xvcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpLnZhbHVlO1xuICAgIG15Q29sb3JBcnJheS5wdXNoKGFsbFByb2plY3RDb2xvcik7XG4gICAgbXlDb2xvckFycmF5LnB1c2godG9kYXlQcm9qZWN0Q29sb3IpO1xuICAgIGxldCBwcm9qZWN0Tm9kZUxpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3Q+ZGl2XCIpO1xuICAgIHByb2plY3ROb2RlTGlzdC5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgbXlDb2xvckFycmF5LnB1c2goaXRlbS5jaGlsZHJlblswXS52YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG15Q29sb3JBcnJheTtcbn1cblxuZXhwb3J0IHtnZXRQcm9qZWN0TmFtZSxjbG9zZVByb2plY3REaWFsb2csYWRkUHJvamVjdERvbSxzZXROZXdJbmRleFxuICAgICAgICAsYWRkUHJvTGlzdFRvU2VsQm94LGdldERpYWxvZ1ZhbHVlcyxnZXRBbGxSZWxhdGVkUHJvamVjdEluZGV4LHB1dEFsbFByb2plY3RzVG9ET01cbiAgICAgICAgLGdldFRvZGF5UHJvamVjdEluZGV4LHJlbW92ZUFsbFByb2plY3RzQW5kVG9kb0Zyb21ET00sY2hhbmdlSGVhZGVyVGV4dFRvQWxsLGNoYW5nZVByb2plY3RCYWNrZ3JvdW5kLFxuICAgICAgICBnZXRDbGlja2VkUHJvamVjdEluZGV4LGNoZWNrQ2xpY2tlZElucHV0QW5kUHJvamVjdFZpZXcsY2hhbmdlUHJvamVjdFZpZXdDb2xvcixjaGFuZ2VDb2xvckZvckFsbEFuZFRvZGF5UHJvamVjdFxuICAgICAgICAsY2xvc2VUb2RvRGlhbG9nLGFkZFRvZG9Eb20sZ2V0UmVtb3ZlZFRvZG8scmVtb3ZlVG9kb0Zyb21ET00sc2V0TmV3SW5kZXhUb2RvLGdldENsaWNrZWRDaGVja2JveCxtYWtlQWN0aW9uLFxuICAgICAgICBjaGVja0RpYWxvZ09wZW5PckNsb3NlLG9wZW5Ub2RvRGlhbG9nRm9yRWRpdGluZyx1cGRhdGVBcnJheURhdGEsdXBkYXRlRE9NLGFkZFByb0xpc3RUb1NlbEJveDIsY2hlY2tQcm9qZWN0TWF0Y2hlc1xuICAgICAgICAsY2hlY2tQcm9qZWN0TWF0Y2hlczIsc2V0UHJvamVjdFZpZXdDb2xvcixnZXRQcm9qZWN0Q29sb3J9OyIsImltcG9ydCB7cHJvamVjdExpc3QsYWRkQWxsUHJvamVjdHNUb1RvZG9MaXN0LGFkZFRvZGF5UHJvamVjdHNUb1RvZG9MaXN0fSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCB7YWRkUHJvTGlzdFRvU2VsQm94LGdldERpYWxvZ1ZhbHVlcyxhZGRUb2RvRG9tLGNsb3NlVG9kb0RpYWxvZyxnZXRSZW1vdmVkVG9kb1xuICAgICAgICxyZW1vdmVUb2RvRnJvbURPTSxzZXROZXdJbmRleFRvZG8sZ2V0Q2xpY2tlZENoZWNrYm94LG1ha2VBY3Rpb24sY2hlY2tEaWFsb2dPcGVuT3JDbG9zZVxuICAgICAgICxvcGVuVG9kb0RpYWxvZ0ZvckVkaXRpbmcsdXBkYXRlQXJyYXlEYXRhLHVwZGF0ZURPTSxhZGRQcm9MaXN0VG9TZWxCb3gyLGNoZWNrUHJvamVjdE1hdGNoZXMsXG4gICAgICAgY2hlY2tQcm9qZWN0TWF0Y2hlczJ9IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7c2F2ZVByb2plY3RDb2xvckFuZFRvZG99IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5cbmxldCBUb2RvSXRlbXM9W107XG4vL0ZvciBhZGRpbmcgdGhlIHByb2plY3QgbGlzdCBpbnRvIHRoZSBzZWxlY3QgYm94XG5mdW5jdGlvbiBhZGRQcm9qZWN0c1RvU2VsZWN0Qm94KCl7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIGFkZFByb0xpc3RUb1NlbEJveChwcm9qZWN0TGlzdCk7XG59XG4vL0ZvciBhZGRpbmcgdG9kbyBsaXN0IHRvIHRoZSB0b2RvIGxpc3QgYm94XG5mdW5jdGlvbiBhZGRUb2RvTGlzdCgpe1xuICAgIGxldCB0b2RvSW5wdXRzPWdldERpYWxvZ1ZhbHVlcygpO1xuICAgIFRvZG9JdGVtcy5wdXNoKHRvZG9JbnB1dHMpO1xuICAgIGxldCBteUluZGV4PVRvZG9JdGVtcy5sZW5ndGgtMTtcbiAgICBpZihjaGVja1Byb2plY3RNYXRjaGVzKCkpey8vdXNlZCBmb3IgY2hlY2tpbmcgdGhlIGlucHV0IHByb2plY3QgZ2l2ZW4gbWF0Y2gncyB3aXRoIHRoZSBhY3R1YWwgcHJvamVjdCBzZWxlY3RlZCB3aGlsZSBhZGRpbmcgbmV3IHRvZG8gaXRlbVxuICAgICAgICBhZGRUb2RvRG9tKG15SW5kZXgpO1xuICAgIH1cbiAgICBlbHNlIGlmKGNoZWNrUHJvamVjdE1hdGNoZXMoKT09PVwiQWxsXCIpe1xuICAgICAgICBhZGRBbGxQcm9qZWN0c1RvVG9kb0xpc3QoKTtcbiAgICB9XG4gICAgZWxzZSBpZihjaGVja1Byb2plY3RNYXRjaGVzKCk9PT1cIlRvZGF5XCIpe1xuICAgICAgICBhZGRUb2RheVByb2plY3RzVG9Ub2RvTGlzdCgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhUb2RvSXRlbXMpOy8vSnVzdCBmb3Igdmlld2luZyB0b2RvSXRlbXMgYXJyYXkgaW4gdGhlIGNvbnNvbGVcbiAgICBjbG9zZVRvZG9EaWFsb2coKTtcbiAgICBzYXZlUHJvamVjdENvbG9yQW5kVG9kbygpLnNhdmVUb2RvKFRvZG9JdGVtcyk7Ly9Gb3Igc2F2aW5nIHRoZSBUb2RvSXRlbXMgYXJyYXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2Vcbn1cbi8vVGhpcyBmdW5jdGlvbiByZW1vdmVzIHJlbW92ZXMgdG9kbyBpdGVtIGZyb20gdGhlIHRvZG8gbGlzdCBib3hcbmZ1bmN0aW9uIHJlbW92ZVRvZG9JdGVtKGUpe1xuICAgIGxldCB0b2RvSW5kZXg9Z2V0UmVtb3ZlZFRvZG8oZSk7XG4gICAgVG9kb0l0ZW1zLnNwbGljZSh0b2RvSW5kZXgsMSk7XG4gICAgcmVtb3ZlVG9kb0Zyb21ET00odG9kb0luZGV4KTtcbiAgICBjb25zb2xlLmxvZyhUb2RvSXRlbXMpOy8vSnVzdCBmb3Igdmlld2luZyB0b2RvSXRlbXMgYXJyYXkgaW4gdGhlIGNvbnNvbGVcbiAgICBzZXROZXdJbmRleFRvZG8oKTtcbiAgICBzYXZlUHJvamVjdENvbG9yQW5kVG9kbygpLnNhdmVUb2RvKFRvZG9JdGVtcyk7Ly9Gb3Igc2F2aW5nIHRoZSBUb2RvSXRlbXMgYXJyYXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2Vcbn1cbi8vQWN0aW9uIHRha2VuIHdoZW4gY2hlY2sgYm94IGlzIGNoZWNrZWQgb3IgdW5jaGVja2VkXG5mdW5jdGlvbiBjaGVja2JveEFjdGlvbihlKXtcbiAgICBsZXQgY2hlY2tib3hDbGlja2VkPWdldENsaWNrZWRDaGVja2JveChlKTtcbiAgICBtYWtlQWN0aW9uKGNoZWNrYm94Q2xpY2tlZCk7XG4gICAgc2F2ZVByb2plY3RDb2xvckFuZFRvZG8oKS5zYXZlVG9kbyhUb2RvSXRlbXMpOy8vRm9yIHNhdmluZyB0aGUgVG9kb0l0ZW1zIGFycmF5IGluIHRoZSBsb2NhbCBzdG9yYWdlXG59XG4vL0ZvciBzaG93aW5nIHRoZSBlZGl0IGRpYWxvZyBhZnRlciB0aGUgZWRpdCB0b2RvIGxpc3QgaXMgY2xpY2tlZFxuZnVuY3Rpb24gVG9kb0VkaXRBY3Rpb24oZSl7XG4gICAgaWYoY2hlY2tEaWFsb2dPcGVuT3JDbG9zZSl7XG4gICAgICAgIG9wZW5Ub2RvRGlhbG9nRm9yRWRpdGluZyhlKTtcbiAgICB9XG59XG4vL0ZvciB1cGRhdGluZyB0aGUgZWRpdGVkIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0luZm8oZSl7XG4gICAgdXBkYXRlQXJyYXlEYXRhKGUpO1xuICAgIGNvbnNvbGUubG9nKFRvZG9JdGVtcyk7XG4gICAgaWYoY2hlY2tQcm9qZWN0TWF0Y2hlczIoZSkpe1xuICAgICAgICB1cGRhdGVET00oZSk7XG4gICAgfVxuICAgIHNhdmVQcm9qZWN0Q29sb3JBbmRUb2RvKCkuc2F2ZVRvZG8oVG9kb0l0ZW1zKTsvL0ZvciBzYXZpbmcgdGhlIFRvZG9JdGVtcyBhcnJheSBpbiB0aGUgbG9jYWwgc3RvcmFnZVxufVxuLy9Vc2VkIGZvciBhZGRpbmcgdGhlIHByb2plY3RzIHRvIHRoZSBwcm9qZWN0IHNlbGVjdCBib3ggb2YgdGhlIGVkaXQgZGlhbG9nXG5mdW5jdGlvbiBhZGRQcm9qZWN0c1RvU2VsZWN0Qm94Migpe1xuICAgIGFkZFByb0xpc3RUb1NlbEJveDIocHJvamVjdExpc3QpO1xufVxuXG5leHBvcnQge2FkZFByb2plY3RzVG9TZWxlY3RCb3gsYWRkVG9kb0xpc3QsVG9kb0l0ZW1zLHJlbW92ZVRvZG9JdGVtXG4gICAgICAgLGNoZWNrYm94QWN0aW9uLFRvZG9FZGl0QWN0aW9uLHVwZGF0ZVRvZG9JbmZvLGFkZFByb2plY3RzVG9TZWxlY3RCb3gyfTsiLCJpbXBvcnQge2NoZWNrQ2xpY2tlZElucHV0QW5kUHJvamVjdFZpZXcsY2hhbmdlUHJvamVjdFZpZXdDb2xvcn0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHtzYXZlUHJvamVjdENvbG9yQW5kVG9kb30gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcbi8vVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYSByYW5kb20gY29sb3IgZm9yIHRoZSBuZXdseSBjcmVhdGVkIHByb2plY3RzXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvbG9yKCl7XG4gICAgY29uc3QgbGV0dGVycz1cIjEyMzQ1Njc4OUFCQ0RFRlwiO1xuICAgIGxldCBjb2xvcj1cIiNcIjtcbiAgICBmb3IobGV0IGk9MDtpPDY7aSsrKXtcbiAgICAgICAgY29sb3IrPWxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2KV07XG4gICAgfVxuICAgIGlmKGNvbG9yPT09XCIjMDAwMDAwXCIpe1xuICAgICAgICBnZW5lcmF0ZVJhbmRvbUNvbG9yKCk7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcjtcbn1cbi8vQ2hhbmdlcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHByb2plY3QgYWZ0ZXIgdGhlIGNvbG9yIGlzIGVkaXRlZFxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0ZWRQcm9qZWN0Vmlld0NvbG9yKGUpe1xuICAgIGlmKGNoZWNrQ2xpY2tlZElucHV0QW5kUHJvamVjdFZpZXcoZSkpe1xuICAgICAgICBjaGFuZ2VQcm9qZWN0Vmlld0NvbG9yKGUpO1xuICAgIH1cbiAgICBzYXZlUHJvamVjdENvbG9yQW5kVG9kbygpLnNhdmVDb2xvcigpO1xufVxuXG5leHBvcnQge2dlbmVyYXRlUmFuZG9tQ29sb3IsY2hhbmdlU2VsZWN0ZWRQcm9qZWN0Vmlld0NvbG9yfTsiLCJpbXBvcnQge2dldFByb2plY3RDb2xvcixjaGFuZ2VDb2xvckZvckFsbEFuZFRvZGF5UHJvamVjdCxhZGRQcm9qZWN0RG9tfSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQge3Byb2plY3RMaXN0fSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCB7VG9kb0l0ZW1zfSBmcm9tICcuL1RvZG8tbGlzdC5qcyc7XG5cbmV4cG9ydCBsZXQgbG9hZGluZ0Zyb21MUz1mYWxzZTtcbi8vVXNlZCBmb3Igc2F2aW5nIHRoZSBwcm9qZWN0IGxpc3QsdG9kbyBsaXN0IGFuZCBjb2xvcnMgYWZ0ZXIgZXZlcnkgdXBkYXRlIGlzIG1hZGUgb24gZWl0aGVyIG9uZSBvZiB0aGVtXG5mdW5jdGlvbiBzYXZlUHJvamVjdENvbG9yQW5kVG9kbygpe1xuICAgIGxldCBzYXZlUHJvamVjdD0ocHJvamVjdERhdGEpPT57XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpKTtcbiAgICAgICAgc2F2ZUNvbG9yKCk7XG4gICAgfTtcblxuICAgIGxldCBzYXZlVG9kbz0odG9kb0RhdGEpPT57XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsSlNPTi5zdHJpbmdpZnkodG9kb0RhdGEpKTtcbiAgICAgICAgc2F2ZUNvbG9yKCk7XG4gICAgfTtcblxuICAgIGxldCBzYXZlQ29sb3I9KCk9PntcbiAgICAgICAgbGV0IGNvbG9yQXJyYXk9W11cbiAgICAgICAgY29sb3JBcnJheT1nZXRQcm9qZWN0Q29sb3IoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yTGlzdCcsSlNPTi5zdHJpbmdpZnkoY29sb3JBcnJheSkpO1xuICAgIH07XG5cbiAgICByZXR1cm57c2F2ZVByb2plY3Qsc2F2ZVRvZG8sc2F2ZUNvbG9yLH07XG59XG4vL0ZvciBsb2FkaW5nIHRoZSBwcm9qZWN0IGxpc3QsIHRvZG8gbGlzdCBhbmQgY29sb3JzIHdoZW4gdGhlIHdlYnNpdGUgaXMgY2xvc2VkIG9yIHJlc3RhcnRlZFxuZnVuY3Rpb24gbG9hZFByb2plY3RDb2xvckFuZFRvZG8oKXtcblxuICAgIGxldCBsb2FkUHJvamVjdHM9KCk9PntcbiAgICAgICAgcHJvamVjdExpc3QubGVuZ3RoPTA7XG4gICAgICAgIGxldCBteUFycmF5PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgICAgICBteUFycmF5LmZvckVhY2goaXRlbT0+e1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBteUNvbG9yTGlzdD1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvckxpc3QnKSk7XG4gICAgICAgIGxldCBjb2xvckNvdW50ZXI9MjtcbiAgICAvL0xvYWRpbmcgcHJvamVjdCBsaXN0IGl0ZW1zIGFuZCBwbGFjaW5nIHRoZW0gdG8gdGhlIERPTVxuICAgICAgICBjaGFuZ2VDb2xvckZvckFsbEFuZFRvZGF5UHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICAgICAgbG9hZGluZ0Zyb21MUz10cnVlO1xuICAgICAgICAgICAgYWRkUHJvamVjdERvbShteUNvbG9yTGlzdFtjb2xvckNvdW50ZXJdLGl0ZW0pO1xuICAgICAgICAgICAgY29sb3JDb3VudGVyKz0xO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGluZ0Zyb21MUz1mYWxzZTtcbiAgICB9O1xuICAgIC8vTG9hZGluZyBUb2RvSXRlbXMgYXJyYXkgd2l0aCB0aGUgcHJldmlvdXNseSBmaWxsZWQgdG9kb0l0ZW1zIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxldCBsb2FkVG9kb0xpc3Q9KCk9PntcbiAgICAgICAgbGV0IG15QXJyYXk9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChpdGVtPT57XG4gICAgICAgICAgICBUb2RvSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkUHJvamVjdHMsbG9hZFRvZG9MaXN0fTtcbn1cblxuZXhwb3J0IHtzYXZlUHJvamVjdENvbG9yQW5kVG9kbyxsb2FkUHJvamVjdENvbG9yQW5kVG9kb307IiwiaW1wb3J0IHtnZXRQcm9qZWN0TmFtZSxjbG9zZVByb2plY3REaWFsb2csYWRkUHJvamVjdERvbVxuICAgICAgICAsZ2V0QWxsUmVsYXRlZFByb2plY3RJbmRleCxwdXRBbGxQcm9qZWN0c1RvRE9NXG4gICAgICAgICxnZXRUb2RheVByb2plY3RJbmRleCxyZW1vdmVBbGxQcm9qZWN0c0FuZFRvZG9Gcm9tRE9NLFxuICAgICAgICBjaGFuZ2VIZWFkZXJUZXh0VG9BbGwsc2V0UHJvamVjdFZpZXdDb2xvcixjaGFuZ2VQcm9qZWN0QmFja2dyb3VuZCxnZXRDbGlja2VkUHJvamVjdEluZGV4fSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQge1RvZG9JdGVtc30gZnJvbSAnLi9Ub2RvLWxpc3QuanMnO1xuaW1wb3J0IHtnZW5lcmF0ZVJhbmRvbUNvbG9yfSBmcm9tICcuL2NvbG9yLXZpZXcuanMnO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RDb2xvckFuZFRvZG8gfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xuXG5sZXQgcHJvamVjdExpc3Q9W1wiUGVyc29uYWxcIl07XG4vL0ZvciBhZGRpbmcgYSBwcm9qZWN0IHRvIHRoZSBwcm9qZWN0IGxpc3RcbmZ1bmN0aW9uIGFkZFByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdElucHV0PWdldFByb2plY3ROYW1lKCk7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgIGxldCBteUNvbG9yPWdlbmVyYXRlUmFuZG9tQ29sb3IoKTtcbiAgICBhZGRQcm9qZWN0RG9tKG15Q29sb3IpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTsvL0p1c3QgZm9yIHZpZXdpbmcgdGhlIHByb2plY3QgbGlzdCBhcnJheSBpbiB0aGUgY29uc29sZVxuICAgIGNsb3NlUHJvamVjdERpYWxvZygpO1xuICAgIHNhdmVQcm9qZWN0Q29sb3JBbmRUb2RvKCkuc2F2ZVByb2plY3QocHJvamVjdExpc3QpOy8vRm9yIHNhdmluZyB0aGUgcHJvamVjdExpc3QgYXJyYXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2Vcbn1cblxuLy8gZnVuY3Rpb24gcmVtb3ZlUHJvamVjdHMoZSl7XG4vLyAgICAgY29uc3QgcHJvamVjdEluZGV4PWdldFJlbW92ZWRQcm9qZWN0KGUpO1xuLy8gICAgIHByb2plY3RMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgsMSk7XG4vLyAgICAgcmVtb3ZlUHJvamVjdEZyb21ET00ocHJvamVjdEluZGV4KTtcbi8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7Ly9KdXN0IGZvciB2aWV3aW5nIHRoZSBwcm9qZWN0IGxpc3QgYXJyYXkgaW4gdGhlIGNvbnNvbGVcbi8vICAgICBzZXROZXdJbmRleCgpOyBcbi8vIH1cbi8vRnVuY3Rpb25zIHdoZW4gb25lIG9mIHRoZSBwcm9qZWN0IGxpc3QgZGl2IGlzIGNsaWNrZWQgYW5kIGl0IHByZXZpZXdzIGFsbCB0aGUgdG9kbyBsaXN0cyByZWxhdGVkIHRvIHRoZSBzYW1lIHByb2plY3QgaW4gdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gYWRkUHJvamVjdHNUb1RvZG9MaXN0KGUpe1xuICAgIGxldCByZWxhdGVkUHJvamVjdHNJbmRleD1nZXRBbGxSZWxhdGVkUHJvamVjdEluZGV4KGUpO1xuICAgIHB1dEFsbFByb2plY3RzVG9ET00ocmVsYXRlZFByb2plY3RzSW5kZXgpO1xuICAgIHNldFByb2plY3RWaWV3Q29sb3IoZSk7XG4gICAgY2hhbmdlUHJvamVjdEJhY2tncm91bmQoZSk7XG4gICAgZ2V0Q2xpY2tlZFByb2plY3RJbmRleChlKTtcbn1cbi8vRnVuY3Rpb25zIHdoZW4gYWxsIGRpdiBpcyBjbGlja2VkIGFuZCBpdCBkaXNwbGF5cyBhbGwgcHJvamVjdHMgYXQgdGhlIHNhbWUgdGltZSBpbiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiBhZGRBbGxQcm9qZWN0c1RvVG9kb0xpc3QoZSl7XG4gICAgbGV0IGFsbFByb2plY3RzTGlzdD1bXTtcbiAgICBmb3IobGV0IGk9MDtpPFRvZG9JdGVtcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYWxsUHJvamVjdHNMaXN0LnB1c2goaSk7XG4gICAgfVxuICAgIGNoYW5nZUhlYWRlclRleHRUb0FsbCgpO1xuICAgIHB1dEFsbFByb2plY3RzVG9ET00oYWxsUHJvamVjdHNMaXN0KTtcbiAgICBjaGFuZ2VQcm9qZWN0QmFja2dyb3VuZChlKTtcbiAgICBzZXRQcm9qZWN0Vmlld0NvbG9yKFwiQWxsXCIpO1xufVxuLy9GdW5jdGlvbnMgd2hlbiB0b2RheSBkaXYgaXMgY2xpY2tlZCBhbmQgaXQgZGlzcGxheXMgcHJvamVjdHMgdGhhdCBhcmUgZm9yIHRvZGF5XG5mdW5jdGlvbiBhZGRUb2RheVByb2plY3RzVG9Ub2RvTGlzdChlKXtcbiAgICBsZXQgdG9kYXlQcm9qZWN0c0luZGV4PWdldFRvZGF5UHJvamVjdEluZGV4KCk7XG4gICAgcHV0QWxsUHJvamVjdHNUb0RPTSh0b2RheVByb2plY3RzSW5kZXgpO1xuICAgIGNoYW5nZVByb2plY3RCYWNrZ3JvdW5kKGUpO1xuICAgIHNldFByb2plY3RWaWV3Q29sb3IoXCJUb2RheVwiKTtcbn1cblxuLy9Gb3IgcmVtb3ZpbmcgYWxsIHRoZSBwcm9qZWN0c1xuZnVuY3Rpb24gcmVtb3ZlQWxsUHJvamVjdHMoKXtcbiAgICBwcm9qZWN0TGlzdC5sZW5ndGg9MTtcbiAgICBUb2RvSXRlbXMubGVuZ3RoPTA7XG4gICAgcmVtb3ZlQWxsUHJvamVjdHNBbmRUb2RvRnJvbURPTSgpO1xuICAgIGFkZFByb2plY3REb20oXCIjREVBQzgwXCIpO1xuICAgIHNhdmVQcm9qZWN0Q29sb3JBbmRUb2RvKCkuc2F2ZVByb2plY3QocHJvamVjdExpc3QpOy8vRm9yIHNhdmluZyB0aGUgcHJvamVjdExpc3QgYXJyYXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdENvbG9yQW5kVG9kbygpLnNhdmVUb2RvKFRvZG9JdGVtcyk7XG59XG5cbmV4cG9ydCB7YWRkUHJvamVjdHMscHJvamVjdExpc3QsYWRkUHJvamVjdHNUb1RvZG9MaXN0LGFkZEFsbFByb2plY3RzVG9Ub2RvTGlzdCxcbiAgICAgICAgYWRkVG9kYXlQcm9qZWN0c1RvVG9kb0xpc3QscmVtb3ZlQWxsUHJvamVjdHN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhZGRJY29uU21hbGwgZnJvbSAnLi9pbWFnZXMvYWRkLXNtYWxsLnBuZyc7XG5pbXBvcnQgYWRkSWNvbkxhcmdlIGZyb20gJy4vaW1hZ2VzL2FkZC1sYXJnZS5wbmcnO1xuaW1wb3J0IHthZGRQcm9qZWN0cyxhZGRQcm9qZWN0c1RvVG9kb0xpc3QsYWRkQWxsUHJvamVjdHNUb1RvZG9MaXN0LFxuICAgICAgICBhZGRUb2RheVByb2plY3RzVG9Ub2RvTGlzdCxyZW1vdmVBbGxQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQge2FkZFByb2plY3RzVG9TZWxlY3RCb3gsYWRkVG9kb0xpc3QscmVtb3ZlVG9kb0l0ZW1cbiAgICAgICAgLGNoZWNrYm94QWN0aW9uLFRvZG9FZGl0QWN0aW9uLHVwZGF0ZVRvZG9JbmZvLGFkZFByb2plY3RzVG9TZWxlY3RCb3gyfSBmcm9tICcuL1RvZG8tbGlzdC5qcyc7XG5pbXBvcnQge2FkZFByb2plY3REb219IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7Y2hhbmdlU2VsZWN0ZWRQcm9qZWN0Vmlld0NvbG9yfSBmcm9tICcuL2NvbG9yLXZpZXcuanMnO1xuaW1wb3J0IHtsb2FkUHJvamVjdENvbG9yQW5kVG9kb30gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcblxubGV0IGFkZFByb2pUb1NlbEJveENvbnRyPXRydWU7XG5sZXQgYWRkUHJvalRvU2VsQm94Q29udHIyPXRydWU7XG5cbmNvbnN0IGFkZENvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1pY29uLXNtYWxsXCIpO1xuY29uc3QgYWRkSWNvblNtYWxsSW1hZ2U9bmV3IEltYWdlKCk7XG5hZGRJY29uU21hbGxJbWFnZS5zcmM9YWRkSWNvblNtYWxsO1xuYWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEljb25TbWFsbEltYWdlKTtcblxuY29uc3QgYWRkQ29udGFpbmVyTGFyZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaWNvbi1sYXJnZVwiKTtcbmNvbnN0IGFkZEljb25MYXJnZUltYWdlPW5ldyBJbWFnZSgpO1xuYWRkSWNvbkxhcmdlSW1hZ2Uuc3JjPWFkZEljb25MYXJnZTtcbmFkZENvbnRhaW5lckxhcmdlLmFwcGVuZENoaWxkKGFkZEljb25MYXJnZUltYWdlKTtcbi8vVGhpcyBpZiBzdGF0ZW1lbnQgaXMgdXNlZCBmb3IgbG9hZGluZyB0aGUgcGFnZSB3aGVuIHRoZSBsb2NhbCBzdG9yYWdlIGlzIGVtcHR5XG5pZih3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aD09PTApe1xuICAgIGFkZFByb2plY3REb20oXCIjREVBQzgwXCIpOy8vVXNlZCBmb3IgaW5pdGlhbGx5IHB1dHRpbmcgdGhlIFBlcnNvbmFsIHByb2plY3QgaW4gdGhlIHByb2plY3QgbGlzdFxuICAgIGFkZEFsbFByb2plY3RzVG9Ub2RvTGlzdCgpOy8vVXNlZCBmb3IgaW5pdGlhbGx5IHNlbGVjdGlvbiB0aGUgYWxsIHByb2plY3RzXG59XG4vL1RoaXMgZWxzZSBzdGF0ZW1lbnQgaXMgdXNlZCBmb3IgbG9hZGluZyB0aGUgcGFnZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIHdoZW4gdGhlIGxvY2FsIHN0b3JhZ2UgaXMgbm90IGVtcHR5XG5lbHNle1xuICAgIGxvYWRQcm9qZWN0Q29sb3JBbmRUb2RvKCkubG9hZFByb2plY3RzKCk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykhPT1udWxsKXtcbiAgICAgICAgbG9hZFByb2plY3RDb2xvckFuZFRvZG8oKS5sb2FkVG9kb0xpc3QoKTtcbiAgICB9XG4gICAgYWRkQWxsUHJvamVjdHNUb1RvZG9MaXN0KCk7XG59XG5cbmFkZEljb25TbWFsbEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1kaWFsb2cnKS5zaG93KCk7XG59KTtcblxuLy9Vc2VkIGZvciBoaWRpbmcgZGlhbG9ncyB3aGVuIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgdGhlIGRpYWxvZyBib3hlc1xuXG5sZXQgbXlEaWFsb2c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWRpYWxvZycpO1xubGV0IG15RGlhbG9nMj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZGlhbG9nMicpO1xubGV0IG15RGlhbG9nMz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZGlhbG9nMycpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGlmKCFteURpYWxvZy5jb250YWlucyhlLnRhcmdldCkmJm15RGlhbG9nLm9wZW4mJiFhZGRJY29uU21hbGxJbWFnZS5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIG15RGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYoIW15RGlhbG9nMi5jb250YWlucyhlLnRhcmdldCkmJm15RGlhbG9nMi5vcGVuJiYhYWRkSWNvbkxhcmdlSW1hZ2UuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0yJykucmVzZXQoKTtcbiAgICAgICAgbXlEaWFsb2cyLmNsb3NlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYoIW15RGlhbG9nMy5jb250YWlucyhlLnRhcmdldCkmJm15RGlhbG9nMy5vcGVuKXtcbiAgICAgICAgbXlEaWFsb2czLmNsb3NlKCk7XG4gICAgfVxufSk7XG5cbi8vVXNlZCBmb3IgYWRkaW5nIHRoZSBwcm9qZWN0IGZyb20gdGhlIGRpYWxvZyBzdWJtaXR0ZWQgdG8gdGhlIHByb2plY3QgbGlzdFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIGFkZFByb2plY3RzKCk7XG4gICAgYWRkUHJvalRvU2VsQm94Q29udHI9dHJ1ZTtcbiAgICBhZGRQcm9qVG9TZWxCb3hDb250cjI9dHJ1ZTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgLy8gY29uc3QgdGFyZ2V0PWUudGFyZ2V0LmNsb3Nlc3QoXCIjcmVtb3ZlLWljb24+aW1nXCIpOy8vRm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICBjb25zdCB0YXJnZXQyPWUudGFyZ2V0LmNsb3Nlc3QoXCIjcmVtb3ZlLWljb24yPmltZ1wiKTsvL0ZvciByZW1vdmluZyBpdGVtcyBpbiB0aGUgdG9kbyBsaXN0XG4gICAgY29uc3QgdGFyZ2V0Mz1lLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1saXN0PmRpdj5zcGFuJyk7Ly9BZnRlciBvbmUgb2YgdGhlIHByb2plY3QgbGlzdCBkaXYgaXMgY2xpY2tlZFxuXG4gICAgLy8gaWYoKHRhcmdldCkpe1xuICAgIC8vICAgICByZW1vdmVQcm9qZWN0cyhlKTtcbiAgICAvLyB9XG4gICAgaWYodGFyZ2V0Mil7XG4gICAgICAgIHJlbW92ZVRvZG9JdGVtKGUpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRhcmdldDMpe1xuICAgICAgICBhZGRQcm9qZWN0c1RvVG9kb0xpc3QoZSk7XG4gICAgfVxufSk7XG4vL1VzZWQgd2hlbiBhbGwgcHJvamVjdHMgaXMgY2xpY2tlZCBmb3Igc2hvd2luZyB0aGUgYWxsIHRvZG8gbGlzdHMgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzPi5hbGwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgYWRkQWxsUHJvamVjdHNUb1RvZG9MaXN0KGUpO1xufSk7XG4vL1VzZWQgd2hlbiB0b2RheSBwcm9qZWN0cyBpcyBjbGlja2VkIGZvciBzaG93aW5nIHRoZSBhbGwgdG9kbyBsaXN0cyB0aGF0IGFyZSBmb3IgdG9kYXlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1wcm9qZWN0cz4udG9kYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgYWRkVG9kYXlQcm9qZWN0c1RvVG9kb0xpc3QoZSk7XG59KTtcbi8vVXNlZCB3aGVuIHJlc2V0IHByb2plY3RzIGJ1dHRvbiBpcyBjbGlja2VkXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtcHJvamVjdHM+YnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgcmVtb3ZlQWxsUHJvamVjdHMoKTtcbn0pO1xuLy9Gb3IgYWRkaW5nIGFjdGlvbiBsaXN0ZW5lciB3aGVuIGEgY29sb3IgaW5wdXQgaXMgY2hhbmdlZCBieSB0aGUgcHJvamVjdHNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGUpPT57XG4gICAgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0Vmlld0NvbG9yKGUpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3RWaWV3Q29sb3IoZSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3RWaWV3Q29sb3IoZSk7XG59KVxuXG5cbi8vVG9kby1saXN0IG1vZHVsZVxuXG4vL0FmdGVyIGNsaWNraW5nIHRoZSBhZGQgaXRlbSB0aGUgZGlhbG9nIGJveCB3aWxsIHNob3dcbmFkZEljb25MYXJnZUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1kaWFsb2cyJykuc2hvdygpO1xuICAgIGlmKGFkZFByb2pUb1NlbEJveENvbnRyKXtcbiAgICAgICAgYWRkUHJvamVjdHNUb1NlbGVjdEJveCgpO1xuICAgICAgICBhZGRQcm9qVG9TZWxCb3hDb250cj1mYWxzZTtcbiAgICB9XG59KTtcbi8vRm9yIHN1Ym1pdHRpbmcgdGhlIG5ld2x5IGFkZGVkIHRvZG8gaXRlbVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteS1mb3JtMlwiKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgYWRkVG9kb0xpc3QoKTtcbn0pO1xuLy9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBjb25zdCBjaGVja2JveENsaWNrPWUudGFyZ2V0LmNsb3Nlc3QoJy5teUNoZWNrYm94Jyk7XG4gICAgY29uc3QgVG9kb0VkaXQ9ZS50YXJnZXQuY2xvc2VzdCgnLlRvZG8tbGlzdD5kaXY+ZGl2PmltZycpO1xuICAgIGxldCB0b2RvRWRpdENsaWNrZWQ9ZmFsc2U7XG5cbiAgICBpZihjaGVja2JveENsaWNrKXtcbiAgICAgICAgY2hlY2tib3hBY3Rpb24oZSk7XG4gICAgfVxuICAgIGVsc2UgaWYoVG9kb0VkaXQpey8vQWZ0ZXIgb25lIG9mIHRoZSB0b2RvIGxpc3QgZWRpdCBpbWFnZSBpcyBjbGlja2VkXG4gICAgICAgIFRvZG9FZGl0QWN0aW9uKGUpO1xuICAgICAgICBpZihhZGRQcm9qVG9TZWxCb3hDb250cjIpe1xuICAgICAgICAgICAgYWRkUHJvamVjdHNUb1NlbGVjdEJveDIoKTtcbiAgICAgICAgICAgIGFkZFByb2pUb1NlbEJveENvbnRyMj1mYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvRWRpdENsaWNrZWQ9dHJ1ZTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteS1mb3JtM1wiKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCgpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmKHRvZG9FZGl0Q2xpY2tlZCl7XG4gICAgICAgICAgICB1cGRhdGVUb2RvSW5mbyhlKTtcbiAgICAgICAgICAgIHRvZG9FZGl0Q2xpY2tlZD1mYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==