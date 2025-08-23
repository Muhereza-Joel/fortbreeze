import{j as a}from"./app-D9MJue0d.js";function i({children:r,from:e="#6366f1",via:l="#a855f7",to:s="#ec4899",overlayLight:o="rgba(255,255,255,0.8)",overlayDark:t="rgba(17,24,39,0.8)"}){return a.jsxs("div",{className:"relative rounded-xl p-[2px] overflow-hidden",style:{"--overlay-light":o,"--overlay-dark":t},children:[a.jsx("div",{className:"absolute inset-0 gradient-layer",style:{background:`linear-gradient(to right, ${e}, ${l}, ${s})`}}),a.jsx("div",{className:"absolute inset-0 overlay-layer backdrop-blur-sm"}),a.jsx("div",{className:"relative rounded-xl bg-transparent",children:r}),a.jsx("style",{jsx:!0,children:`
                .overlay-layer {
                    background: var(--overlay-light);
                }
                :global(.dark) .overlay-layer {
                    background: var(--overlay-dark);
                }
                :global(.dark) .gradient-layer {
                    display: none;
                }
            `})]})}export{i as G};
