(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),d=n(5),s=n(8),l=n(7),r=n(1),b=n.n(r),o=(n(13),n(14),n(15),n(6)),u=n.n(o),j=n(0),h=function(t){var e,n=t.tabs,c=t.selectedTabId,a=t.onTabSelected,i=n.find((function(t){return t.id===c})),d=i?i.id:n[0].id;return Object(j.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:n.map((function(t){return Object(j.jsx)("li",{className:u()({"is-active":t.id===d}),"data-cy":"Tab",children:Object(j.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){t.id!==c&&a(t)},children:t.title})},t.title)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},f=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),d=0;d<c;d++)a[d]=arguments[d];return(t=e.call.apply(e,[this].concat(a))).state={selectedTabId:f[0].id},t.handleSwitch=function(e){t.setState({selectedTabId:e.id})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.selectedTabId;return Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("h1",{className:"title",children:"Selected tab is ".concat(f[f.findIndex((function(e){return e.id===t}))].title)}),Object(j.jsx)(h,{tabs:f,selectedTabId:this.state.selectedTabId,onTabSelected:this.handleSwitch})]})}}]),n}(b.a.Component);a.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.25b42e24.chunk.js.map