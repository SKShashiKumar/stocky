(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{175:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(14),s=t.n(n),i=t(68),l=t(50),o=t.n(l),d=t(64),h=t(7),j=t(79),m=t(56),b=t(220),u=t(78),p=t.n(u),x=t(59),O=t.n(x),v=t(5),f=[{field:"id",headerName:"ID",width:100,headerClassName:"bgprl"},{field:"cname",headerName:"Company Name",headerClassName:"bgprl txtal",width:250,editable:!1},{field:"symbol",headerName:"Symbol",headerClassName:"bgprl txtal",width:150,editable:!1},{field:"market_cap",headerName:"Market Cap",headerClassName:"bgprl txtal",width:200,editable:!1},{field:"act",headerName:"Action",sortable:!1,width:130,disableClickEventBubbling:!0,headerClassName:"bgprl",renderCell:function(e){return Object(v.jsx)(m.a,{onClick:function(a){a.preventDefault(),function(){var a=e.row;alert("Saved ".concat(a.cname)),O.a.post("http://localhost:8000/savecn",a).then((function(){console.log("Coin Saved")})).catch((function(e){console.error(e)}))}()},variant:"contained",color:"primary",children:" Save "})}},{field:"current_price",headerName:"Current Price",headerClassName:"bgprl txtal",width:250,editable:!1}];function N(){var e=Object(c.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1],n=Object(c.useState)(""),s=Object(h.a)(n,2),i=s[0],l=s[1],m=function(){var e=Object(d.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_descpage=1&sparkline=false");case 2:return a=e.sent,t=a.data,e.next=6,r(t.map((function(e){return{id:e.market_cap_rank,cname:e.name,symbol:e.symbol,market_cap:e.market_cap,current_price:e.current_price}})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return i.length>0&&(t=t.filter((function(e){return e.cname.toLowerCase().match(i.toLowerCase())}))),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h6",{className:"col-sm-3 text-center",children:"Coin details table"}),Object(v.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"col-sm-3 bgprl",children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(b.a,{color:"primary",placeholder:"Search by Company Name ",onChange:function(e){e.preventDefault(),l(e.target.value)},value:i})]})]})}),Object(v.jsx)("div",{className:"container m-2",style:{height:400,width:"100%"},children:Object(v.jsx)(j.a,{rows:t,columns:f,pageSize:5})})]})}var g=t(118);function w(e){var a=e.item;return Object(v.jsx)("div",{className:"col-sm-4",style:{width:"400px",minHeight:"200px"},children:Object(v.jsxs)("div",{className:"container m-2 bg-grey",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-sm-6 p-2",children:Object(v.jsx)("h6",{children:a.heads})}),Object(v.jsx)("div",{className:"col-sm-6 p-2",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-sm-12 p-3",children:Object(v.jsx)("img",{src:a.src,alt:a.alt,align:"right",width:"50px",height:"50px"})})})})]}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-sm-12 p-2 text-center",children:Object(v.jsx)("h2",{children:a.vals})})})]})})}function C(){var e=Object(c.useState)([{heads:"GOOGL",id:"1",src:"img/GOOGL.png",alt:"Google",vals:"1515 USD"},{heads:"FB",id:"2",src:"img/FB.png",alt:"Facebook",vals:"266 USD"},{heads:"AMZN",id:"3",src:"img/AMZN.svg",alt:"Amazon",vals:"3116 USD"}]),a=Object(h.a)(e,2),t=a[0],r=a[1];return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(g.ReactSortable,{list:t,setList:r,animation:150,onChange:function(e,a,t){},onEnd:function(e){},className:"row",children:t.map((function(e){return Object(v.jsx)(w,{item:e},e.id)}))})})})}var y=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(C,{}),Object(v.jsx)(N,{})]})},k=[{field:"id",headerName:"ID",width:100,headerClassName:"bgprl"},{field:"cname",headerName:"Company Name",headerClassName:"bgprl txtal",width:250,editable:!1},{field:"symbol",headerName:"Symbol",headerClassName:"bgprl txtal",width:150,editable:!1},{field:"market_cap",headerName:"Market Cap",headerClassName:"bgprl txtal",width:200,editable:!1},{field:"act",headerName:"Action",sortable:!1,width:130,disableClickEventBubbling:!0,headerClassName:"bgprl",renderCell:function(e){var a=function(){var a=Object(d.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.row,a.next=3,O.a.post("http://localhost:8000/deletecn",t).then((function(e){return alert("Coin Deleted")})).catch((function(e){console.error(e)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(v.jsx)(m.a,{onClick:function(e){a()},variant:"contained",color:"secondary",children:" Delete "})}},{field:"current_price",headerName:"Current Price",headerClassName:"bgprl txtal",width:250,editable:!1}];function S(){var e=Object(c.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1],n=Object(c.useState)(""),s=Object(h.a)(n,2),i=s[0],l=s[1],m=function(){var e=Object(d.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:8000/getCoin");case 2:return a=e.sent,t=a.data,e.next=6,r(t.map((function(e){return{id:e.id,cname:e.cname,symbol:e.symbol,market_cap:e.market_cap,current_price:e.current_price}})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return i.length>0&&(t=t.filter((function(e){return e.cname.toLowerCase().match(i.toLowerCase())}))),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h6",{className:"col-sm-3 text-center",children:"Saved Coins"}),Object(v.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"col-sm-3 bgprl",children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(b.a,{color:"primary",placeholder:"Search by Company Name ",onChange:function(e){e.preventDefault(),l(e.target.value)},value:i})]})]})}),Object(v.jsx)("div",{className:"container m-2",style:{height:400,width:"100%"},children:Object(v.jsx)(j.a,{rows:t,columns:k,pageSize:5})})]})}var _=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(C,{}),Object(v.jsx)(S,{})]})},D=t(85),L=function(){return Object(v.jsxs)("nav",{className:"navbar navbar-expand-sm naybg navbar-dark",children:[Object(v.jsx)(D.a,{className:"navbar-brand",to:"/",children:Object(v.jsx)("img",{src:"/img/quikieapps.png",alt:"Logo",height:"40px",width:"100px"})}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item mx-4",children:Object(v.jsx)(D.a,{className:"nav-link",to:"/",children:Object(v.jsx)("h6",{className:"text-white",children:"HOME"})})}),Object(v.jsx)("li",{className:"nav-item mx-4",children:Object(v.jsx)(D.a,{className:"nav-link",to:"View",children:Object(v.jsx)("h6",{className:"text-white",children:"View Saved"})})})]})})]})};var E=function(){return Object(v.jsxs)(i.BrowserRouter,{children:[Object(v.jsx)(L,{}),Object(v.jsxs)(i.Switch,{children:[Object(v.jsx)(i.Route,{exact:!0,path:"/",children:Object(v.jsx)(y,{})}),Object(v.jsx)(i.Route,{path:"/View",children:Object(v.jsx)(_,{})})]})]})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.7897eb96.chunk.js.map