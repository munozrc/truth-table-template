var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&n(e,r,t[r]);return e},c=(e,a)=>t(e,r(a)),p=("undefined"!=typeof require&&require,(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&o.call(e,n)&&(r[n]=e[n]);return r});import{r as i,F as m,a as u,b as _,R as d}from"./vendor.cecf2fb7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={styleInitialVariables:{color:"#fafafa",bgColor:"#04aa6d"},styleOneValue:{color:"#fafafa",bgColor:"#04aa6d"},styleZeroValue:{color:"#fafafa",bgColor:"#04aa6d"},zoom:1.4},x=i.exports.createContext({}),b=({children:e})=>{const[t,r]=i.exports.useState(f);return i.exports.createElement(x.Provider,{value:{tableSettings:t,changeTableSettings:r}},e)};var E={button:"_button_k2zt3_1",primary:"_primary_k2zt3_15",flat:"_flat_k2zt3_35"};const v=e=>{var t=e,{variant:r="primary",children:a}=t,l=p(t,["variant","children"]);return i.exports.createElement("button",s({className:`${E.button} ${E[r]}`},l),a)};var g="_wrapper_11j84_1",y="_inputs_11j84_9",N="_label_11j84_19";const h=({labelValue:e="",children:t})=>i.exports.createElement("section",{className:g},i.exports.createElement("label",{className:N},e),i.exports.createElement("div",{className:y},t));var C="_wrapper_13qg2_1",w="_label_13qg2_13",O="_element_13qg2_43";const k=e=>{var t=e,{labelValue:r=""}=t,a=p(t,["labelValue"]);return i.exports.createElement("div",{className:C},""!==r&&i.exports.createElement("label",{className:w},r),i.exports.createElement("input",s({className:O,spellCheck:"false"},a)))};var V="_wrapper_kxep1_1",S="_element_kxep1_21";const j=e=>i.exports.createElement("div",{className:V},i.exports.createElement("input",c(s({className:S},e),{type:"color"})));function I(e,t){const[r,a]=i.exports.useState(null!=t?t:"");return{type:e,value:r,onChange:e=>{a(e.target.value)}}}function z(){const{tableSettings:e,changeTableSettings:t}=i.exports.useContext(x),{styleInitialVariables:r}=e;return{styleInitialVariables:r,changeStyles:i.exports.useCallback(((e,r)=>{t((t=>c(s({},t),{[e]:r})))}),[])}}const P=({labelValue:e,name:t})=>{const{changeStyles:r}=z(),a=I("number","2"),l=I("color","#04aa6d"),o=I("color","#fafafa");return i.exports.useEffect((()=>{r(t,{color:o.value,bgColor:l.value})}),[l.value,o.value]),i.exports.createElement(h,{labelValue:e},i.exports.createElement(k,s({},a)),i.exports.createElement(j,s({},l)),i.exports.createElement(j,s({},o)))};var R="_wrapper_4v0vt_1",q="_header_4v0vt_13",A="_header__title_4v0vt_29",T="_panel__wrapper_4v0vt_43";const L=()=>i.exports.createElement("section",{className:R},i.exports.createElement("header",{className:q},i.exports.createElement("h4",{className:A},"Opciones")),i.exports.createElement("div",{className:T},i.exports.createElement(P,{labelValue:"Entradas Iniciales",name:"styleInitialVariables"})));var B="_table_1ud5l_1",$="_th_1ud5l_15",D="_td_1ud5l_15",F="_td__expression_1ud5l_15";const K=i.exports.forwardRef(((e,t)=>{const{styleInitialVariables:r}=z();return i.exports.createElement("table",{ref:t,className:B},i.exports.createElement("tbody",null,i.exports.createElement("tr",null,i.exports.createElement("th",{className:$,style:{backgroundColor:r.bgColor,color:r.color}},"A"),i.exports.createElement("th",{className:$,style:{backgroundColor:r.bgColor,color:r.color}},"B"),i.exports.createElement("th",{className:$,style:{backgroundColor:r.bgColor,color:r.color},colSpan:2},"X")),i.exports.createElement("tr",null,i.exports.createElement("td",{className:D},"0"),i.exports.createElement("td",{className:D},"1"),i.exports.createElement("td",{className:D},"1"),i.exports.createElement("td",{className:F},"A'B"))))}));var M="_wrapper_19jud_1";const X=({refTable:e})=>i.exports.createElement("section",{className:M},i.exports.createElement(K,{ref:e}));var Z="_wrapper_u2te2_1",G="_wrapper__header_u2te2_19",H="_header__title_u2te2_35",J="_wrapper__toolbar_u2te2_45";const Q=()=>{const e=i.exports.useRef();return i.exports.createElement("div",{className:Z},i.exports.createElement("header",{className:G},i.exports.createElement("h1",{className:H},"😭Template"),i.exports.createElement("div",{className:J},i.exports.createElement(v,{variant:"flat",onClick:()=>{if(null!==e.current&&void 0!==e.current){const t=document.createRange(),r=window.getSelection();null==r||r.removeAllRanges(),t.selectNodeContents(e.current),null==r||r.addRange(t),document.execCommand("copy"),null==r||r.removeAllRanges()}}},i.exports.createElement(m,{size:"1.4em",color:"#fafafa"})),i.exports.createElement(v,{variant:"flat"},i.exports.createElement(u,{size:"1.4em",color:"#fafafa"})),i.exports.createElement(v,{variant:"flat"},i.exports.createElement(_,{size:"1.4em",color:"#fafafa"})))),i.exports.createElement(X,{refTable:e}),i.exports.createElement(L,null))},U=()=>i.exports.createElement("main",{className:"container"},i.exports.createElement(b,null,i.exports.createElement(Q,null)));d.render(i.exports.createElement(U,null),document.getElementById("root"));
