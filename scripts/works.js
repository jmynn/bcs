"use strict";function _createForOfIteratorHelper(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){c=!0,o=r},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function init(){var r=document.querySelector("#categories");r.addEventListener("click",(function(t){var e,n=_createForOfIteratorHelper(r.children);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.classList.contains("_active")&&a.classList.remove("_active")}}catch(r){n.e(r)}finally{n.f()}t.target.id&&t.target.classList.add("_active")}))}document.addEventListener("DOMContentLoaded",init);