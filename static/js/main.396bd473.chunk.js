(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),o=c(0),l=function(t){var e,c=t.onTabSelected,n=t.tabs,a=t.selectedTabId,i=null===(e=n.find((function(t){return t.id===a})))||void 0===e?void 0:e.content,s=n.some((function(t){return t.id===a}));return Object(o.jsxs)("div",{className:"TabsComponent","data-cy":"tab-content",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:n.map((function(t,e){var n=t.id,i=t.title;return Object(o.jsx)("li",{className:d()({"is-active":a===n||!s&&0===e}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(n),"data-cy":"TabLink",onClick:function(){n!==a&&c(t)},children:i})},n)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(r[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(o.jsx)(l,{onTabSelected:function(t){n(t)},tabs:r,selectedTabId:c.id})]})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.396bd473.chunk.js.map