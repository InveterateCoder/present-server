!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,m=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);m.length;)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([258,1]),n()}({104:function(e,t,n){"use strict";t.a=n.p+"images/02466d29967943906f6f8375149589c7.jpg"},105:function(e,t,n){"use strict";t.a=n.p+"images/9a9e0d559801e1435fe2143e4b3bd75f.png"},139:function(e,t,n){var r=n(21),a=n(140);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},140:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r)()(!1);a.push([e.i,".jumbotron {\n  background-color: transparent;\n  background-image: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)), var(--jumbotron-bg-image) !important;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  margin-bottom: 0 !important;\n}\n\n.jumbotron>div:first-child {\n  font-size: 10vw;\n  font-weight: 300;\n  line-height: 1.2;\n  text-shadow: 0 0 10px black;\n  color: honeydew;\n  user-select: none;\n}\n\n@keyframes pacman {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}",""]),t.default=a},141:function(e,t,n){var r=n(21),a=n(142);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},142:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r)()(!1);a.push([e.i,".navbar {\n    box-shadow: 0 3px 5px 1px black;\n    border-top: 1px inset black !important;\n}\n#dpicker {\n    display: inline;\n    position: absolute;\n    right: 15px;\n    margin-left: 15px;\n    box-shadow: 0 0 10px 2px var(--dark);\n    border-radius: 0.30rem;\n}\n#date-search > input {\n  outline: none;\n  border: none;\n  border-bottom: 1px solid var(--dark)\n}\n#date-search > input:focus {\n  border-bottom: 1px solid var(--warning)\n}",""]),t.default=a},249:function(e,t,n){var r=n(21),a=n(250);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},250:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(5),i=n.n(o),c=n(91),l=a()(!1),u=i()(c.a);l.push([e.i,".letter {\n    background-image: url("+u+');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 30px;\n    border-radius: 30px;\n    box-shadow: 0 0 15px 3px black;\n}\n.letter-content {\n    margin: auto;\n    max-width: 95%;\n    border-radius: 30px;\n    border: 2px solid black;\n}\n.letter-content > div:first-child {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n.letter-content > div:first-child > div > span {\n    vertical-align: middle;\n}\n.letter-content .date {\n    font-family: \'Courier New\', Courier, monospace;\n}\n.letter-content .text {\n    overflow-wrap: break-word;\n}\n.letter-content .text > p {\n  margin: 0;\n}\n.text .ql-align-center {\n  text-align: center;\n}\n.text .ql-align-right {\n  text-align: right;\n}\n.text .ql-align-justify {\n  text-align: justify;\n}\n.text .ql-indent-1 {\n  text-indent: 20px;\n}\n.text blockquote {\n  background: #f9f9f9;\n  border-left: 10px solid #ccc;\n  margin: 1.5em 10px;\n  padding: 0.5em 10px;\n  quotes: "\\201C""\\201D""\\2018""\\2019";\n}\n.text blockquote:before {\n  color: #ccc;\n  content: open-quote;\n  font-size: 4em;\n  line-height: 0.1em;\n  margin-right: 0.25em;\n  vertical-align: -0.4em;\n}\n.text blockquote p {\n  display: inline;\n}',""]),t.default=l},256:function(e,t,n){var r=n(21),a=n(257);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},257:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(5),i=n.n(o),c=n(104),l=n(105),u=a()(!1),s=i()(c.a),f=i()(l.a);u.push([e.i,":root {\n    --bg: mediumpurple;\n    --jumbotron-bg-image : url("+s+");\n}\nbody {\n    box-sizing: border-box;\n    background-color: var(--bg);\n    background-image: url("+f+");\n    background-attachment: fixed;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    padding-bottom: 30px;\n}\n@media screen and (min-width: 576px){\n    .jumbotron > div:first-child {\n        font-size: 3rem;\n    }\n    .letter-content {\n        max-width: 90%;\n    }\n}\n@media screen and (min-width: 768px){\n    .jumbotron > div:first-child {\n        font-size: 4rem;\n    }\n    .letter-content {\n        max-width: 85%;\n    }\n}\n@media screen and (min-width: 992px){\n    .jumbotron > div:first-child {\n        font-size: 4.7rem;\n    }\n    .letter-content {\n        max-width: 80%;\n    }\n}\n@media screen and (min-width: 1200px){\n    .jumbotron > div:first-child {\n        font-size: 5.5rem;\n    }\n    .letter-content {\n        max-width: 70%;\n    }\n}",""]),t.default=u},258:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=n(20),l=n(29);function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={GET:"/api/all",POST:"/api/create",PUT:"/api/update",DELETE:"/api/delete",signin:"/api/signin"};function m(e,t,n){var r=sessionStorage.getItem("love_token");if(r||"GET"===n){r="Bearer "+r;var a=f[n]+("DELETE"===n?"/"+t.payload:""),o="POST"===n||"PUT"===n?JSON.stringify(t.payload):void 0;return fetch(a,{method:n,headers:{"Content-Type":"application/json",Authorization:r},body:o}).then((function(r){if(200!==r.status)throw new Error("Request has failed.");"GET"===n||"POST"===n?r.json().then((function(n){t.payload=n,e(t)})):e(t)})).catch((function(){alert("Something went terribly wrong. Please, try again later.")}))}alert("Something went terribly wrong. Please, try again later.")}var p=Object(l.c)((function(e,t){switch(t.type){case"load":return{letters:t.payload,dirty:!1};case"create":var n=u(e.letters),r=new Date(t.payload.datetime),a=n.findIndex((function(e){return new Date(e.datetime)<r}));return a<0?n.push(t.payload):n.splice(a,0,t.payload),{letters:n,dirty:!0};case"update":return{letters:e.letters.map((function(e){return e._id===t.payload._id?t.payload:e})),dirty:!0};case"delete":return{letters:e.letters.filter((function(e){return e._id!==t.payload})),dirty:!0};case"clear":return{letters:e.letters,dirty:!1};default:return e}}),Object(l.a)((function(){return function(e){return function(t){switch(t.type){case"load":m(e,t,"GET");break;case"create":m(e,t,"POST");break;case"update":m(e,t,"PUT");break;case"delete":m(e,t,"DELETE")}}}}))),d=n(10),h=n(7),y=(n(4),n(85));var b={name:"1rxfgjg-override",styles:"display:inline-block;margin:0 50px 0 0;animation-name:pacman;animation-duration:2s;;label:override;"};function g(e){return a.a.createElement("div",{style:{textAlign:"center",position:"relative",top:"100px"}},a.a.createElement(y.PacmanLoader,{css:b,size:50,color:"purple",loading:e.loading}))}n(139),n(141);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){var t=v(Object(r.useState)(""),2),n=t[0],o=t[1],i=v(Object(r.useState)(""),2),c=i[0],l=i[1],u=v(Object(r.useState)(""),2),s=u[0],f=u[1],m=Object(r.useRef)(),p=Object(r.useRef)(),d=e.ddRef;Object(r.useEffect)((function(){var t=e.date.split("-");(t[0]||"")!==n&&o(t[0]||""),(t[1]||"")!==c&&l(t[1]||""),(t[2]||"")!==s&&f(t[2]||"")}),[e.date]),Object(r.useEffect)((function(){switch(document.activeElement){case m.current:4===n.length&&p.current.focus();break;case p.current:c>1&&d.current.focus()}}),[n,c]);var h=function(e){var t=e.target,r=t.name,a=t.value;if(!isNaN(a)){var i=new Date,u=i.getFullYear().toString(),s=i.getMonth()+1,m=i.getDate();switch(r){case"yyyy":switch(a.length){case 0:return p();case 1:if(a<2||a>u[0])return;return p();case 2:if(a>u.slice(0,2))return;return p();case 3:if(a<202||a>u.slice(0,3))return;return p();default:if(a>u)return;return p()}case"mm":if(0===a.length)return p(!0);if(a<1||a>12)return;if(u===n&&a>s)return;return p(!0);case"dd":if(0===a.length)return f(a);if(a<1||a>31)return;if(n===u&&c==s&&a>m)return;if(new Date("".concat(n,"-").concat(c,"-").concat(a)).getDate()!=a)return;return f(a)}}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?l(a):(o(a),l("")),f("")}},y=function(e){var t=e.which,n=e.target.name;8===t&&("mm"===n?0===c.length&&m.current.focus():0===s.length&&p.current.focus())},b=function(e){var t=e.target.name;"yyyy"===t?s?d.current.focus():c&&p.current.focus():"mm"===t?!n||n.length<4?m.current.focus():s&&d.current.focus():c||p.current.focus()};return a.a.createElement("form",{id:"dpicker",onSubmit:function(e){return e.preventDefault()},style:e.dateFocused?{}:{display:"none"},onBlur:function(t){!t.relatedTarget||"clear"!==t.relatedTarget.id&&"ok"!==t.relatedTarget.id&&"yyyy"!==t.relatedTarget.name&&"mm"!==t.relatedTarget.name&&"dd"!==t.relatedTarget.name?e.hide():t.preventDefault()}},a.a.createElement("div",{className:"input-group"},a.a.createElement("div",{id:"date-search",className:"form-control"},a.a.createElement("input",{type:"text",ref:m,name:"yyyy",placeholder:"yyyy",size:"4",onFocus:b,onChange:h,value:n}),a.a.createElement("input",{ref:p,type:"text",name:"mm",placeholder:"mm",size:"2",onFocus:b,onChange:h,onKeyDown:y,value:c}),a.a.createElement("input",{ref:e.ddRef,type:"text",name:"dd",placeholder:"dd",size:"2",onFocus:b,onChange:h,onKeyDown:y,value:s})),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{id:"clear",className:"btn btn-secondary",type:"button",onClick:function(){e.changeDateQuery("")}},a.a.createElement("i",{className:"fa fa-undo"})),a.a.createElement("button",{id:"ok",className:"btn btn-primary",onClick:function(){var t;e.changeDateQuery((t="",n&&4===n.length&&(t+=n,c&&(t+="-"+c,s&&(t+="-"+s))),t))}},a.a.createElement("i",{className:"fa fa-check"})))))}var S=n(261),x=n(86),k=n.n(x);n(246);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"+1"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["link"],["clean"]]},_=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","align"],P={createLetter:function(e){return{type:"create",payload:e}},updateLetter:function(e){return{type:"update",payload:e}},deleteLetter:function(e){return{type:"delete",payload:e}}},T=Object(c.b)(null,P)((function(e){var t=N(Object(r.useState)(e.name||"Setareh"),2),n=t[0],o=t[1],i=N(Object(r.useState)(m(e.datetime||(new Date).toISOString())),2),c=i[0],l=i[1],u=N(Object(r.useState)(e.text||""),2),s=u[0],f=u[1];function m(e){function t(e){return(e<10?"0":"")+e}var n=new Date(e);return"".concat(n.getFullYear(),"-").concat(t(n.getMonth()+1),"-").concat(t(n.getDate()),"T").concat(t(n.getHours()),":").concat(t(n.getMinutes()))}var p=function(){e.closeShow()};return a.a.createElement(S.a,{size:"lg",show:e.show,onEnter:function(){o(e.name||"Setareh"),l(m(e.datetime||(new Date).toISOString())),f(e.text||"")},onHide:p},a.a.createElement(S.a.Header,{closeButton:!0},a.a.createElement(S.a.Title,null,e._id?"Edit Letter":"New Letter")),a.a.createElement(S.a.Body,null,a.a.createElement("div",{className:"form-group mt-3"},a.a.createElement("select",{className:"form-control",name:"name",onChange:function(e){var t=e.target.value;"Setareh"!==t&&"Arthur"!==t||o(t)},value:n},a.a.createElement("option",null,"Setareh"),a.a.createElement("option",null,"Arthur"))),!e.datetime&&a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"datetime-local",className:"form-control",value:c,name:"datetime",onChange:function(e){var t=e.target.value;l(t)}})),a.a.createElement("div",{className:"form-group"},a.a.createElement(k.a,{value:s,onChange:function(e){return f(e)},modules:O,formats:_}))),a.a.createElement(S.a.Footer,null,a.a.createElement("div",{className:"form-group"},e._id&&a.a.createElement("button",{className:"btn btn-danger mr-1",style:{width:100},onClick:function(){window.confirm("Are you sure you want to delete this letter?")&&(e.deleteLetter(e._id),e.closeShow())}},"Delete"),a.a.createElement("button",{className:"btn btn-dark mr-1",style:{width:100},onClick:p},"Cancel"),a.a.createElement("button",{className:"btn btn-info",style:{width:100},onClick:function(){var t=new Date(c);t>new Date&&(t=new Date);var r={name:n,datetime:t.toISOString(),text:s};0!==(new DOMParser).parseFromString(r.text,"text/html").body.textContent.length&&(e._id?(r._id=e._id,e.updateLetter(r)):e.createLetter(r),p())}},"Save"))))}));function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var a=F(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return L(this,n)}}function L(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(n,e);var t=I(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),q(M(r=t.call(this,e)),"onSearchChange",(function(){clearTimeout(r.debouncer),r.debouncer=setTimeout((function(){r.searchRef.current.value!==r.state.search&&r.props.history.push("/book/1".concat(r.formNewSearch(r.searchRef.current.value,null)))}),700)})),q(M(r),"changeDateQuery",(function(e){if(r.setState({dateFocused:!1}),e!==r.state.date){var t=r.formNewSearch(null,e);r.setState({date:t},(function(){return r.props.history.push("/book/1".concat(t))}))}})),q(M(r),"showDatePicker",(function(){r.setState({dateFocused:!0},(function(){return setTimeout((function(){return r.ddRef.current.focus()}),150)}))})),q(M(r),"hideDatePicker",(function(){r.setState({dateFocused:!1})})),q(M(r),"checkAndShow",(function(){r.state.show||(sessionStorage.getItem("love_token")?r.setState({show:!0}):r.props.history.push("/signin"))})),q(M(r),"closeShow",(function(){r.setState({show:!1})})),r.state={dateFocused:!1,search:"",show:!1,date:""},r.ddRef=a.a.createRef(),r.searchRef=a.a.createRef(),r}return A(n,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=new URLSearchParams(e.location.search),r=n.get("search")||"",a=n.get("date")||"";return t.search!==r||t.date!==a?{search:r,date:a}:null}}]),A(n,[{key:"formNewSearch",value:function(e,t){var n=null!==e?e:this.state.search,r=null!==t?t:this.state.date,a="?".concat(n?"search=".concat(n):"").concat(n&&r?"&":"").concat(r?"date=".concat(r):"");return a.length<5?"":a}},{key:"render",value:function(){return a.a.createElement("nav",{className:"navbar navbar-expand bg-light navbar-light sticky-top"},a.a.createElement("div",{className:"navbar-item"},a.a.createElement("form",{className:"form-inline"},a.a.createElement("div",{className:"input-group"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("span",{className:"input-group-text"},a.a.createElement("i",{className:"fa fa-search"}))),a.a.createElement("input",{type:"text",name:"search",className:"form-control",defaultValue:this.state.search,placeholder:"Search",ref:this.searchRef,onChange:this.onSearchChange})))),a.a.createElement("div",{className:"navbar-item ml-auto"},a.a.createElement("button",{onClick:this.showDatePicker,className:"btn btn-light"},a.a.createElement("i",{className:"fa fa-calendar"})),a.a.createElement(E,{dateFocused:this.state.dateFocused,hide:this.hideDatePicker,ddRef:this.ddRef,changeDateQuery:this.changeDateQuery,date:this.state.date})),a.a.createElement("div",{className:"navbar-item"},a.a.createElement("button",{className:"btn btn-light",draggable:!1,onClick:this.checkAndShow},a.a.createElement("i",{className:"fa fa-plus"}))),a.a.createElement(T,{show:this.state.show,closeShow:this.closeShow}))}}]),n}(r.Component);n(249);function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e){var t=U(Object(r.useState)(!1),2),n=t[0],o=t[1];return a.a.createElement("div",{className:"letter p-3",id:e._id},a.a.createElement("div",{className:"letter-content p-3 text-dark bg-light"},a.a.createElement("div",{className:"mb-2"},a.a.createElement("div",{className:"text-primary h4",style:{userSelect:"none",textDecoration:"underline"}},e.name),a.a.createElement("div",{className:"ml-auto"},a.a.createElement("span",{className:"date ml-3",style:{userSelect:"none"}},e.date),a.a.createElement("button",{className:"btn btn-light btn-sm ml-2",onClick:function(){n||(sessionStorage.getItem("love_token")?o(!0):e.requireSignIn())}},a.a.createElement("i",{className:"fa fa-cog"})))),a.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:e.altText||e.text}})),a.a.createElement(T,{show:n,closeShow:function(){return o(!1)},_id:e._id,datetime:e.datetime,name:e.name,text:e.text}))}function $(e){return e.total<2||e.page>e.total?null:a.a.createElement("ul",{className:"pagination pagination-sm justify-content-center mt-4"},function(){var t=[];if(1!==e.page){var n=e.page-1;if(e.total-e.page<4)for(;n>e.total-4&&n>0;n--)t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n)));if(n>0&&(t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n))),--n),n-1>1)t.push(a.a.createElement("li",{className:"page-item",key:n-1},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n-1+e.search)},"..."))),t.push(a.a.createElement("li",{className:"page-item",key:1},a.a.createElement(d.b,{className:"page-link",to:"/book/1"+e.search},"1")));else for(;n>0;n--)t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n)));return t.reverse()}}(),a.a.createElement("li",{className:"page-item active",key:e.page},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(e.page+e.search)},e.page)),function(){var t=[];if(!(e.page>=e.total)){var n=e.page+1;if(t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n))),++n<6&&n<e.total)for(;n<6&&n<=e.total;n++)t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n)));if(n+1<e.total)t.push(a.a.createElement("li",{className:"page-item",key:n+1},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+1+e.search)},"..."))),t.push(a.a.createElement("li",{className:"page-item",key:e.total},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(e.total+e.search)},e.total)));else for(;n<=e.total;n++)t.push(a.a.createElement("li",{className:"page-item",key:n},a.a.createElement(d.b,{className:"page-link",to:"/book/".concat(n+e.search)},n)));return t}}())}var Q=n(58),G=n.n(Q);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t&&Y(e.prototype,t),n&&Y(e,n),e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=te(e);if(t){var a=te(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Z(this,n)}}function Z(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=new DOMParser;function oe(e,t,n){var r,a=ae.parseFromString(e,"text/html"),o=RegExp(G()(t),"i"),i=n?RegExp(G()(t),"gi"):null,c=ne(a.body.childNodes);try{for(c.s();!(r=c.n()).done;){var l=r.value;if("UL"===l.nodeName||"OL"===l.nodeName){var u,s=ne(l.childNodes);try{for(s.s();!(u=s.n()).done;){var f=u.value;if(o.test(f.textContent)){if(!n)return!0;f.innerHTML=f.textContent.replace(i,'<span class="bg-warning">$&</span>')}}}catch(e){s.e(e)}finally{s.f()}}else if(o.test(l.textContent)){if(!n)return!0;l.innerHTML=l.textContent.replace(i,'<span class="bg-warning">$&</span>')}}}catch(e){c.e(e)}finally{c.f()}return!!n&&a.body.innerHTML}var ie={clearState:function(){return{type:"clear"}}},ce=Object(c.b)((function(e){return{letters:e.letters,dirty:e.dirty}}),ie)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(n,e);var t=X(n);function n(e){var r,a,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=t.call(this,e),a=ee(r),i=function(){r.props.history.push("/signin")},(o="requireSignIn")in a?Object.defineProperty(a,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[o]=i,r.state={page:0,total:0,letters:null,pageLetters:null,date:null,search:null},r}return V(n,[{key:"onComponentDidUpdate",value:function(){this.props.dirty&&this.props.clearState()}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=Number(e.match.params.page);if(Number.isNaN(n))return null;var r=new URLSearchParams(e.location.search),a=r.get("search"),o=r.get("date"),i=null;if(o!==t.date||a!==t.search||e.dirty){var c=o?new Date(o):null;i=e.letters.filter((function(e){var t=new Date(e.datetime);return!(c&&!(t>c)||a&&!function(e,t){return oe(e,t,!1)}(e.text,a))})),c&&(i=i.reverse())}else i=null===t.letters?e.letters:t.letters;var l=Math.ceil(i.length/5)||1;if(n>l||n<1)return null;var u=i.slice(5*(n-1),5*n);return u.forEach((function(e){a?e.altText=function(e,t){return oe(e,t,!0)}(e.text,a):delete e.altText})),{page:n,total:l,letters:i,pageLetters:u,date:o,search:a}}}]),V(n,[{key:"getDate",value:function(e){var t=new Date(e),n=t.getFullYear(),r=(t.getMonth()+1).toString();1===r.length&&(r="0"+r);var a=t.getDate().toString();return 1===a.length&&(a="0"+a),"".concat(n,"-").concat(r,"-").concat(a)}},{key:"render",value:function(){var e=this,t=this.props.location.search,n=this.state,r=n.page,o=n.total;return a.a.createElement(a.a.Fragment,null,a.a.createElement($,{page:r,total:o,search:t}),this.state.pageLetters.map((function(n){return a.a.createElement(H,K({key:n._id},n,{date:e.getDate(n.datetime),search:t,page:r,requireSignIn:e.requireSignIn}))})),a.a.createElement($,{page:r,total:o,search:t}))}}]),n}(r.Component));function le(e){var t=Object(r.useRef)(),n=function(n){!n.isTrusted||t.current.value.length<6||fetch(f.signin,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t.current.value})}).then((function(t){200===t.status?t.json().then((function(t){sessionStorage.setItem("love_token",t),e.history.goBack()})):400===t.status?alert("Wrong password. Access denied."):alert("Something went terribly wrong. Please, try again later.")})).catch((function(e){return alert(e.message)}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"signin",className:"display-2 text-center text-light",style:{textShadow:"0 0 7px black",userSelect:"none"}},"Sign In"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"password",className:"text-light",style:{fontSize:"27px",textShadow:"0 0 3px black",userSelect:"none"}},"Password"),a.a.createElement("div",{className:"input-group"},a.a.createElement("input",{ref:t,id:"password",type:"password",className:"form-control",placeholder:"Enter Password",onKeyPress:function(e){var t=e.isTrusted;13===e.which&&n({isTrusted:t})}}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{className:"btn btn-success",onClick:n},a.a.createElement("i",{className:"fa fa-heartbeat mr-2"}),"Sign In")))),a.a.createElement("div",{className:"text-right"},a.a.createElement("button",{className:"btn btn-outline-light mr-4",style:{borderRadius:"75px"},onClick:function(){return e.history.goBack()}},a.a.createElement("i",{className:"fa fa-arrow-left"}))))}function ue(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.b,{path:"/:route/:page/:id?",component:z}),a.a.createElement(h.d,null,a.a.createElement(h.b,{path:"/book/:page",exact:!0,strict:!0,component:ce}),a.a.createElement(h.b,{path:"/signin",exact:!0,strict:!0,component:le}),a.a.createElement(h.a,{to:"/book/1"})))}function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ye(e);if(t){var a=ye(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return he(this,n)}}function he(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var be={loadLetters:function(){return{type:"load"}}},ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(i,e);var t,n,r,o=de(i);function i(){return fe(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){this.props.loadLetters()}},{key:"render",value:function(){return this.props.state?a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"jumbotron"},a.a.createElement("div",{className:"display-4"},"Setareh ♡♡ Arthur ")),a.a.createElement(d.a,null,a.a.createElement(h.b,{component:ue}))):a.a.createElement(g,{loading:!0})}}])&&me(t.prototype,n),r&&me(t,r),i}(r.Component),ve=Object(c.b)((function(e){return{state:e}}),be)(ge);n(252),n(254),n(256);i.a.render(a.a.createElement(c.a,{store:p},a.a.createElement(ve,null)),document.getElementById("root"))},91:function(e,t,n){"use strict";t.a=n.p+"images/062fab2a43684c7fa019c3e6c4b9df1e.jpg"}});