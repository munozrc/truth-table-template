var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;"undefined"!=typeof require&&require;import{r as a,R as l}from"./vendor.d7acb0cf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var i={button:"_button_k2zt3_1",primary:"_primary_k2zt3_15",flat:"_flat_k2zt3_35"};const c=e=>{var l=e,{variant:c="primary",children:s}=l,p=((e,o)=>{var a={};for(var l in e)t.call(e,l)&&o.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&r)for(var l of r(e))o.indexOf(l)<0&&n.call(e,l)&&(a[l]=e[l]);return a})(l,["variant","children"]);return a.exports.createElement("button",((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&o(e,l,a[l]);if(r)for(var l of r(a))n.call(a,l)&&o(e,l,a[l]);return e})({className:`${i.button} ${i[c]}`},p),s)};var s="_wrapper_1ky40_1",p="_panel__result_1ky40_21",u="_panel__options_1ky40_31";const m=()=>a.exports.createElement("div",{className:s},a.exports.createElement("section",{className:p},a.exports.createElement(c,{style:{maxWidth:"220px"}},"Generar")),a.exports.createElement("section",{className:u})),f=()=>a.exports.createElement("main",{className:"container"},a.exports.createElement(m,null));l.render(a.exports.createElement(f,null),document.getElementById("root"));