var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;"undefined"!=typeof require&&require;import{r as o,R as a}from"./vendor.d7acb0cf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();function i(e){var a=e,{labelValue:i}=a,c=((e,l)=>{var o={};for(var a in e)t.call(e,a)&&l.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&r)for(var a of r(e))l.indexOf(a)<0&&n.call(e,a)&&(o[a]=e[a]);return o})(a,["labelValue"]);return o.exports.createElement("div",{className:"input"},o.exports.createElement("label",{className:"input__label"},i),o.exports.createElement("input",((e,o)=>{for(var a in o||(o={}))t.call(o,a)&&l(e,a,o[a]);if(r)for(var a of r(o))n.call(o,a)&&l(e,a,o[a]);return e})({className:"input__element",spellCheck:"false"},c)))}const c=()=>o.exports.createElement("div",null,o.exports.createElement("form",null,o.exports.createElement(i,{type:"number",labelValue:"Número de entradas"})));function s(){return o.exports.createElement("main",{className:"container"},o.exports.createElement(c,null))}a.render(o.exports.createElement(s,null),document.getElementById("root"));
