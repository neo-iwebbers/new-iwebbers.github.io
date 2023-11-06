import{q as w,a5 as m,a6 as y,P as g,O as h,a4 as v,h as f}from"./entry.43ed863a.js";const p=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function k(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},a=(r||{}).decode||T;let s=0;for(;s<e.length;){const i=e.indexOf("=",s);if(i===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<i){s=e.lastIndexOf(";",i-1)+1;continue}const c=e.slice(s,i).trim();if(o[c]===void 0){let u=e.slice(i+1,n).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),o[c]=x(u,a)}s=n+1}return o}function l(e,r,o){const t=o||{},a=t.encode||b;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");const s=a(r);if(s&&!p.test(s))throw new TypeError("argument val is invalid");let i=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(n)}if(t.domain){if(!p.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!p.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(!S(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function S(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function x(e,r){try{return r(e)}catch{return e}}function T(e){return e.includes("%")?decodeURIComponent(e):e}function b(e){return encodeURIComponent(e)}const C={path:"/",watch:!0,decode:e=>v(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function d(e,r){var s;const o={...C,...r},t=E(o)||{},a=w(t[e]??((s=o.default)==null?void 0:s.call(o)));{const i=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`),n=()=>{I(e,a.value,o),i==null||i.postMessage(o.encode(a.value))};let c=!1;m()&&y(()=>{c=!0,n(),i==null||i.close()}),i&&(i.onmessage=u=>{c=!0,a.value=o.decode(u.data),g(()=>{c=!1})}),o.watch?h(a,()=>{c||n()},{deep:o.watch!=="shallow"}):n()}return a}function E(e={}){return k(document.cookie,e)}function P(e,r,o={}){return r==null?l(e,r,{...o,maxAge:-1}):l(e,r,o)}function I(e,r,o={}){document.cookie=P(e,r,o)}const N=()=>({isEnabled:()=>{const t=f().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||d("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>d("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{d("previewToken").value=t,f().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{N as u};
