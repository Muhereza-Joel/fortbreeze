import{j as e,L as y}from"./app-taj_MHvc.js";import{c as b}from"./PublicLayout-DmF6II79.js";function $({children:a,from:r="#6366f1",via:s="#a855f7",to:t="#ec4899",overlayLight:l="rgba(255,255,255,0.8)",overlayDark:i="rgba(17,24,39,0.8)"}){return e.jsxs("div",{className:"relative rounded-xl p-[2px] overflow-hidden",style:{"--overlay-light":l,"--overlay-dark":i},children:[e.jsx("div",{className:"absolute inset-0 gradient-layer",style:{background:`linear-gradient(to right, ${r}, ${s}, ${t})`}}),e.jsx("div",{className:"absolute inset-0 overlay-layer backdrop-blur-sm"}),e.jsx("div",{className:"relative rounded-xl bg-transparent",children:a}),e.jsx("style",{jsx:!0,children:`
                .overlay-layer {
                    background: var(--overlay-light);
                }
                :global(.dark) .overlay-layer {
                    background: var(--overlay-dark);
                }
                :global(.dark) .gradient-layer {
                    display: none;
                }
            `})]})}/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],k=b("utensils",m);function f({title:a,text:r,buttonText:s,buttonLink:t,bgColor:l="bg-indigo-600",darkBgColor:i="dark:bg-indigo-800",textColor:n="text-white",subTextColor:o="text-indigo-100",buttonBgColor:d="bg-white",buttonTextColor:c="text-indigo-600",buttonHoverBg:x="hover:bg-indigo-50",paddingY:g="py-12",paddingX:h="px-6",rounded:v="rounded-none",shadow:p="shadow-lg"}){return e.jsxs("div",{className:`${l} ${i} ${g} ${h} text-center ${v} ${p}`,children:[e.jsx("h2",{className:`text-3xl font-bold ${n} mb-4`,children:a}),e.jsx("p",{className:`${o} mb-6 px-80`,children:r}),e.jsx(y,{href:t,className:`px-6 py-3 ${d} ${c} font-semibold shadow ${x} transition`,children:s})]})}export{f as C,$ as G,k as U};
