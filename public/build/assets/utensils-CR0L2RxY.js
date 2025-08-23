import{j as c,L as C,r as n}from"./app-BU3U20VA.js";function N({title:t,text:e,buttonText:r,buttonLink:o,bgColor:a="bg-indigo-600",darkBgColor:s="dark:bg-indigo-800",textColor:l="text-white",subTextColor:i="text-indigo-100",buttonBgColor:d="bg-white",buttonTextColor:h="text-indigo-600",buttonHoverBg:p="hover:bg-indigo-50",paddingY:x="py-12",paddingX:g="px-6",rounded:f="rounded-none",shadow:w="shadow-lg"}){return c.jsxs("div",{className:`${a} ${s} ${x} ${g} text-center ${f} ${w}`,children:[c.jsx("h2",{className:`text-3xl font-bold ${l} mb-4`,children:t}),c.jsx("p",{className:`${i} mb-6`,children:e}),c.jsx(C,{href:o,className:`px-6 py-3 ${d} ${h} font-semibold shadow ${p} transition`,children:r})]})}/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase()),m=t=>{const e=b(t);return e.charAt(0).toUpperCase()+e.slice(1)},u=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim(),j=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=n.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:s,iconNode:l,...i},d)=>n.createElement("svg",{ref:d,...k,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:u("lucide",a),...!s&&!j(i)&&{"aria-hidden":"true"},...i},[...l.map(([h,p])=>n.createElement(h,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(t,e)=>{const r=n.forwardRef(({className:o,...a},s)=>n.createElement(v,{ref:s,iconNode:e,className:u(`lucide-${$(m(t))}`,`lucide-${t}`,o),...a}));return r.displayName=m(t),r};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],E=y("utensils",A);export{N as C,E as U,y as c};
