(this["webpackJsonpport-folio-2"]=this["webpackJsonpport-folio-2"]||[]).push([[0],{13:function(e,t,l){},14:function(e,t,l){},15:function(e,t,l){"use strict";l.r(t);var n=l(0),c=l(1),s=l.n(c),i=l(7),o=l.n(i),a=(l(13),l(5)),r=l(2);l(14);var u=function(e){var t=e.item,l=e.addItem,s=e.removeItem,i=e.newItem,o=(e.list,e.setNewItem),a=Object(c.useState)(!1),u=Object(r.a)(a,2),j=u[0],b=u[1],m=Object(c.useRef)(null),f=Object(c.useRef)(null),d=Object(c.useRef)(null);return Object(c.useEffect)((function(){o({text:null,textColor:null,imgUrl:null,key:100*Math.random(),empty:!1})}),[j]),Object(n.jsxs)("div",{className:t.empty?"empty-item":"item",style:{backgroundImage:"url("+t.imgUrl+")"},children:[Object(n.jsx)("button",{className:"delete-proj-btn",onClick:function(e){e.preventDefault(),s()},style:{color:"rgb("+t.textColor+")",display:t.empty?"none":"inline-block"},children:Object(n.jsx)("i",{className:"fas fa-minus"})}),Object(n.jsxs)("div",{className:"in-item",children:[Object(n.jsx)("button",{onClick:function(){b(!0)},style:j||!t.empty?{display:"none"}:{display:"inline-block"},className:"plus-btn",children:Object(n.jsx)("i",{className:"fas fa-plus"})}),Object(n.jsx)("div",{className:"proj-text",style:{color:"rgb("+t.textColor+")"},children:t.text}),Object(n.jsxs)("form",{className:"new-proj-form",style:{display:j?"flex":"none"},children:[Object(n.jsxs)("div",{className:"enter-url",children:["Image URL: ",Object(n.jsx)("input",{type:"text",ref:f,id:"img-url-input",autoComplete:"off"})]}),Object(n.jsxs)("div",{className:"enter-text",children:["Text: ",Object(n.jsx)("input",{type:"text",ref:m,id:"txt-input",autoComplete:"off"})]}),Object(n.jsxs)("div",{className:"enter-text-color",children:["Text Color: rgb(",Object(n.jsx)("input",{type:"text",ref:d,autoComplete:"off",id:"txt-color-input"}),")"]}),Object(n.jsxs)("div",{className:"forum-btns",children:[Object(n.jsx)("button",{id:"cancel-proj",onClick:function(e){e.preventDefault(),b(!1)},children:"Cancel"}),Object(n.jsx)("button",{id:"confirm-proj",onClick:function(e){e.preventDefault();var t=i;t.imgUrl=f.current.value,t.text=m.current.value,t.textColor=d.current.value,o(t),l(),b(!1)},children:"Confirm"})]})]})]})]})};var j=function(){var e=Object(c.useState)({text:null,imgUrl:null,textColor:null,key:100*Math.random(),empty:!0}),t=Object(r.a)(e,2),l=t[0],s=t[1],i=Object(c.useState)([l]),o=Object(r.a)(i,2),j=o[0],b=o[1],m=Object(c.useState)(!1),f=Object(r.a)(m,2),d=f[0],x=f[1],O=Object(c.useState)(!1),p=Object(r.a)(O,2),h=p[0],g=p[1],y=Object(c.useState)(0),v=Object(r.a)(y,2),C=v[0],N=v[1],k=Object(c.useState)({text:null,textColor:null,imgUrl:null,key:100*Math.random(),empty:!1}),I=Object(r.a)(k,2),S=I[0],w=I[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("list"));b(JSON.parse(localStorage.getItem("list")));var t={text:"Lorem Ipsum",imgUrl:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80",textColor:"0,100,100",key:100*Math.random(),empty:!1},l={text:null,imgUrl:null,textColor:null,key:100*Math.random(),empty:!0};(null===e||0===e.length)&&b([t,l])}),[]),Object(c.useEffect)((function(){C===j.length-1?g(!1):g(!0),x(0!==C),s(j[C]),localStorage.setItem("list",JSON.stringify(j))}),[j,l]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:"Port Folio"}),Object(n.jsxs)("div",{className:"contain-list",children:[Object(n.jsx)("button",{onClick:function(e){C>0&&(s(j[C-1]),N(C-1))},style:d?{visibility:"visible"}:{visibility:"hidden"},className:"scroll-btn scroll-btn-left",children:Object(n.jsx)("i",{className:"fas fa-angle-left"})}),Object(n.jsx)(u,{removeItem:function(){b([].concat(Object(a.a)(j.slice(0,C)),Object(a.a)(j.slice(C+1))))},list:j,newItem:S,setNewItem:w,addItem:function(){b([].concat(Object(a.a)(j.slice(0,j.length-1)),[S,j[j.length-1]]))},item:l}),Object(n.jsx)("button",{onClick:function(e){C<j.length-1&&(s(j[C+1]),N(C+1))},style:h?{visibility:"visible"}:{visibility:"hidden"},className:"scroll-btn scroll-btn-right",children:Object(n.jsx)("i",{className:"fas fa-angle-right"})})]})]})},b=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,16)).then((function(t){var l=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;l(e),n(e),c(e),s(e),i(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d709dd4f.chunk.js.map