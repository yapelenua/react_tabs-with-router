(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a.n(c),s=a(4),i=(a(14),a(15),a(16),a(2)),b=a(6),j=a.n(b),r=a(0),l=a.n(r),o=a(1),d=Object(r.memo)((function(e){var t=e.to,a=e.text;return Object(o.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:a})})),x=function(){return Object(o.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(d,{to:"/",text:"Home"}),Object(o.jsx)(d,{to:"/tabs",text:"Tabs"})]})})})},h=function(){return Object(o.jsx)("h1",{className:"title",children:"Home page"})},O=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},m=l.a.memo((function(e){var t=e.tabs,a=e.selectedTab;return Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),children:Object(o.jsx)(s.b,{to:"../".concat(e.id),"data-cy":"TabLink",children:e.title})},e.id)}))})})})),u=function(e){var t=e.tabs,a=Object(i.h)().tabId,c=Object(r.useMemo)((function(){return t.find((function(e){return e.id===a}))||null}),[t,a]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"Tabs page"}),Object(o.jsx)(m,{tabs:t,selectedTab:c}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===c||void 0===c?void 0:c.content)||"Please select a tab"})]})},v=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(x,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",element:Object(o.jsx)(h,{})}),Object(o.jsx)(i.b,{path:"/home",element:Object(o.jsx)(i.a,{to:"/",replace:!0})}),Object(o.jsx)(i.b,{path:"*",element:Object(o.jsx)(O,{})}),Object(o.jsxs)(i.b,{path:"tabs",children:[Object(o.jsx)(i.b,{index:!0,element:Object(o.jsx)(u,{tabs:v})}),Object(o.jsx)(i.b,{path:":tabId",element:Object(o.jsx)(u,{tabs:v})})]})]})})})]})};n.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b2d11e99.chunk.js.map