var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&n(e,r,t[r]);return e};"undefined"!=typeof require&&require;import{r as c,R as m}from"./vendor.d7acb0cf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var p="_wrapper_15d6m_1",i="_label_15d6m_15",_="_display_15d6m_45",u="_element_15d6m_61",d="_wrapper__input_15d6m_95";const x=e=>{var n,m=e,{labelValue:x}=m,f=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(m,["labelValue"]);return c.exports.createElement("div",{className:p},c.exports.createElement("label",{className:i},x),c.exports.createElement("div",{className:d},c.exports.createElement("input",(n=o({className:u},f),t(n,r({type:"color"})))),c.exports.createElement("span",{className:_},f.value)))};var f="_wrapper_1jvx2_1",E="_header_1jvx2_13",b="_header__title_1jvx2_29",v="_panel__wrapper_1jvx2_43";const y=()=>{const e=function(e,t){const[r,a]=c.exports.useState(null!=t?t:"");return{type:e,value:r,onChange:e=>{a(e.target.value)}}}("#ccc");return c.exports.createElement("section",{className:f},c.exports.createElement("header",{className:E},c.exports.createElement("h4",{className:b},"Opciones")),c.exports.createElement("div",{className:v},c.exports.createElement(x,o({labelValue:"Variables Iniciales"},e))))};var N="_table_5lbu1_1",h="_th_5lbu1_15",g="_td_5lbu1_15";const O=()=>c.exports.createElement("table",{className:N},c.exports.createElement("tbody",null,c.exports.createElement("tr",null,c.exports.createElement("th",{className:h},"A"),c.exports.createElement("th",{className:h},"B"),c.exports.createElement("th",{className:h,colSpan:2},"X")),c.exports.createElement("tr",null,c.exports.createElement("td",{className:g},"0"),c.exports.createElement("td",{className:g},"1"),c.exports.createElement("td",{className:g},"1"),c.exports.createElement("td",{className:g},"A'B"))));var j="_wrapper_19jud_1";const w=()=>c.exports.createElement("section",{className:j},c.exports.createElement(O,null));var P="_wrapper_1rmy5_1",I="_wrapper__header_1rmy5_19",L="_header__title_1rmy5_33";const S=()=>c.exports.createElement("div",{className:P},c.exports.createElement("header",{className:I},c.exports.createElement("h1",{className:L},"😭Template")),c.exports.createElement(w,null),c.exports.createElement(y,null)),V=()=>c.exports.createElement("main",{className:"container"},c.exports.createElement(S,null));m.render(c.exports.createElement(V,null),document.getElementById("root"));
