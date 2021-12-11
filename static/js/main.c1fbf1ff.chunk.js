(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{108:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,o,l,d,u,j,b,x,f,O,p,h,v,g,m=t(0),y=t.n(m),S=t(26),w=t.n(S),z=t(44),k=t(10),C=t(110),L=t(8),J=t(9),I=J.a.div(i||(i=Object(L.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),N=t(2),F=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(N.jsx)(C.a,{component:"span",children:Object(N.jsx)(I,{size:t,bold:a,children:i})})},E=t(14),M=t(138),U=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(N.jsx)(M.a,{size:n,color:t,thickness:i,variant:a})},A=t(139),B=t(140),G=t(68),V=t.n(G),q=J.a.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n  min-width: 50vw;\n  max-width: 50vw;\n"]))),H=J.a.div(c||(c=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  gap: 35px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: scroll;\n  border: 2px outset #dcdcdc;\n  background: #6f6f6f;\n  padding: 2em;\n"]))),P=J.a.div(r||(r=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),T=J.a.div(s||(s=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),D=J.a.img(o||(o=Object(L.a)(["\n  border-radius: 45%;\n"]))),K=J.a.div(l||(l=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Q=J.a.div(d||(d=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),R=J.a.div(u||(u=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),W=function(e){var n=e.usersList,t=e.isLoading,i=e.isOnlyFavs,a=Object(m.useState)(),c=Object(E.a)(a,2),r=c[0],s=c[1],o=Object(m.useState)([]),l=Object(E.a)(o,2),d=l[0],u=l[1],j=Object(m.useState)([]),b=Object(E.a)(j,2),x=b[0],f=b[1];Object(m.useEffect)((function(){f(JSON.parse(localStorage.getItem("favorites"))),u(i?n.filter((function(e){return x.includes(e.login.username)})):n)}),[n,i,x]);var O=function(){s()};return Object(N.jsxs)(H,{children:[d.map((function(e,t){return Object(N.jsxs)(y.a.Fragment,{children:[Object(N.jsxs)(P,{onMouseEnter:function(){return function(e){s(e)}(t)},onMouseLeave:O,children:[Object(N.jsx)(D,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(N.jsxs)(T,{children:[Object(N.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(N.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(N.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(N.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(N.jsx)(Q,{isVisible:t===r||x.includes(e.login.username),children:Object(N.jsx)(A.a,{onClick:function(){return function(e){var n=JSON.parse(localStorage.getItem("favorites")),t=n.indexOf(e);t>-1?n.splice(t,1):n.push(e),f(n),localStorage.setItem("favorites",JSON.stringify(n))}(e.login.username)},children:Object(N.jsx)(V.a,{color:"error"})})})]},e.login.username),n.length-1!==t&&Object(N.jsx)(B.a,{})]},e.login.username)})),t&&Object(N.jsx)(K,{children:Object(N.jsx)(U,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})},X=t(146),Y=t(141),Z=J.a.div(j||(j=Object(L.a)([""]))),$=function(e){var n=e.isChecked,t=e.onChange,i=e.label,a=e.value;return Object(N.jsx)(Z,{children:Object(N.jsx)(Y.a,{control:Object(N.jsx)(X.a,{checked:n,onChange:function(){t&&t(a)},color:"primary"}),label:i})})},_=function(e){var n=e.users,t=e.isLoading,i=Object(m.useState)([]),a=Object(E.a)(i,2),c=a[0],r=a[1],s=Object(m.useState)([]),o=Object(E.a)(s,2),l=o[0],d=o[1];Object(m.useEffect)((function(){r(n)}),[n]);var u=function(e){var t=l,i=t.indexOf(e);i>-1?t.splice(i,1):t.push(e),d(t);var a=n;l.length>0&&(a=a.filter((function(e){return l.includes(e.location.country)}))),r(a)};return Object(N.jsxs)(q,{children:[Object(N.jsxs)(R,{children:[Object(N.jsx)($,{value:"Australia",onChange:u,label:"Australia"}),Object(N.jsx)($,{value:"Canada",onChange:u,label:"Canada"}),Object(N.jsx)($,{value:"Brazil",onChange:u,label:"Brazil"}),Object(N.jsx)($,{value:"Germany",onChange:u,label:"Germany"}),Object(N.jsx)($,{value:"United States",onChange:u,label:"United States"})]}),Object(N.jsx)(W,{usersList:c,isLoading:t,isOnlyFavs:!1})]})},ee=t(45),ne=t.n(ee),te=t(69),ie=t(70),ae=t.n(ie),ce=function(){var e=Object(m.useState)([]),n=Object(E.a)(e,2),t=n[0],i=n[1],a=Object(m.useState)(!1),c=Object(E.a)(a,2),r=c[0],s=c[1];function o(){return l.apply(this,arguments)}function l(){return(l=Object(te.a)(ne.a.mark((function e(){var n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,ae.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,s(!1),i(n.data.results),localStorage.setItem("users",JSON.stringify(n.data.results)),localStorage.setItem("favorites",JSON.stringify([]));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){localStorage.getItem("users")?i(JSON.parse(localStorage.getItem("users"))):o()}),[]),{users:t,isLoading:r,fetchUsers:o}},re=J.a.div(b||(b=Object(L.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),se=J.a.div(x||(x=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),oe=J.a.div(f||(f=Object(L.a)(["\n  display: flex;\n"]))),le=(J.a.div(O||(O=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=ce(),n=e.users,t=e.isLoading;return Object(N.jsx)(re,{children:Object(N.jsxs)(se,{children:[Object(N.jsx)(oe,{children:Object(N.jsx)(F,{size:"64px",bold:!0,children:"PplFinder"})}),Object(N.jsx)(_,{users:n,isLoading:t})]})})}),de=J.a.div(p||(p=Object(L.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ue=J.a.div(h||(h=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),je=J.a.div(v||(v=Object(L.a)(["\n  display: flex;\n"]))),be=(J.a.div(g||(g=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=ce(),n=e.users,t=e.isLoading,i=Object(m.useState)([]),a=Object(E.a)(i,2),c=a[0],r=a[1];return Object(m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites")),t=n;t=t.filter((function(n){return e.includes(n.login.username)})),r(t)}),[c]),Object(N.jsx)(de,{children:Object(N.jsxs)(ue,{children:[Object(N.jsx)(je,{children:Object(N.jsx)(F,{size:"64px",bold:!0,children:"Favorites"})}),Object(N.jsx)(W,{usersList:n,isLoading:t,isOnlyFavs:!0})]})})}),xe=t(71),fe=t(142),Oe=t(143),pe=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=y.a.useMemo((function(){return Object(xe.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(N.jsxs)(fe.a,{theme:i,children:[Object(N.jsx)(Oe.a,{}),n]})},he=t(147),ve=t(145),ge=t(144),me=["/","/favorites"],ye=function(){var e=Object(m.useState)("/"),n=Object(E.a)(e,2),t=n[0],i=n[1],a=Object(k.f)(),c=Object(k.g)();Object(m.useEffect)((function(){var e=c.pathname;me.includes(e)?i(e):a.replace("/")}),[c]);return Object(N.jsx)(he.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(N.jsxs)(ve.a,{value:t,onChange:function(e,n){i(n),a.push(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(N.jsx)(ge.a,{label:"Home",value:"/",index:0}),Object(N.jsx)(ge.a,{label:"Favorites",value:"/favorites",index:1})]})})},Se=function(){return Object(N.jsx)(pe,{children:Object(N.jsxs)(z.a,{children:[Object(N.jsx)(ye,{}),Object(N.jsxs)(k.c,{children:[Object(N.jsx)(k.a,{exact:!0,path:"/",component:le}),Object(N.jsx)(k.a,{exact:!0,path:"/favorites",component:be})]})]})})};w.a.render(Object(N.jsx)(Se,{}),document.querySelector("#root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.c1fbf1ff.chunk.js.map