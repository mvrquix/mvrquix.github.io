(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{22:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(6),l=c.n(s),r=(c(22),c(2)),i=c(4),a=c(5),d="pomodoro",j="short",b="long",u="Kumbh Sans",m="Roboto Slab",h="Space Mono",x="#F87070",O="#70F3F8",g="#D881F8",v=c(29),p=c(0),f=function(e){var t,c,o,s=e.show,l=e.settings,d=e.onUpdate,j=e.onHide,b=Object(n.useState)({}),f=Object(i.a)(b,2),k=f[0],N=f[1],y=function(e){var t=e.target,c=t.name,n=t.value;N(Object(r.a)(Object(r.a)({},k),{},Object(a.a)({},c,n)))},C=function(e,t){N(Object(r.a)(Object(r.a)({},k),{},Object(a.a)({},e,t)))},F=function(e,t){var c;return null!==(c=k[e]&&k[e]===t)&&void 0!==c?c:l[e]===t};return Object(p.jsxs)(v.a,{show:s,onHide:j,style:{color:"#161932"},children:[Object(p.jsx)(v.a.Header,{closeButton:!0,children:Object(p.jsx)("h3",{children:"Settings"})}),Object(p.jsxs)(v.a.Body,{children:[Object(p.jsx)("h6",{children:"TIME (MINUTES)"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("label",{className:"timer-setting-label",children:"pomodoro"}),Object(p.jsxs)("select",{onChange:y,name:"pomodoro",className:"form-select",value:null!==(t=k.pomodoro)&&void 0!==t?t:l.pomodoro,children:[Object(p.jsx)("option",{value:"900",children:"15"}),Object(p.jsx)("option",{value:"1800",children:"30"}),Object(p.jsx)("option",{value:"2700",children:"45"}),Object(p.jsx)("option",{value:"3600",children:"60"})]})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("label",{className:"timer-setting-label",children:"short break"}),Object(p.jsxs)("select",{onChange:y,name:"short",className:"form-select",value:null!==(c=k.short)&&void 0!==c?c:l.short,children:[Object(p.jsx)("option",{value:"900",children:"15"}),Object(p.jsx)("option",{value:"1800",children:"30"}),Object(p.jsx)("option",{value:"2700",children:"45"}),Object(p.jsx)("option",{value:"3600",children:"60"})]})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("label",{className:"timer-setting-label",children:"long break"}),Object(p.jsxs)("select",{onChange:y,name:"long",className:"form-select",value:null!==(o=k.long)&&void 0!==o?o:l.long,children:[Object(p.jsx)("option",{value:"900",children:"15"}),Object(p.jsx)("option",{value:"1800",children:"30"}),Object(p.jsx)("option",{value:"2700",children:"45"}),Object(p.jsx)("option",{value:"3600",children:"60"})]})]})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row  align-items-center",children:[Object(p.jsx)("div",{className:"col-md-6 d-flex justify-content-start",children:Object(p.jsx)("h6",{children:"FONT"})}),Object(p.jsx)("div",{className:"col-md-6 d-flex justify-content-end",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return C("selectedFont",u)},type:"button",className:"btn timer-setting-btn ".concat(F("selectedFont",u)?"btn-dark":"btn-light"),style:{fontFamily:u},children:"Aa"}),Object(p.jsx)("button",{onClick:function(){return C("selectedFont",m)},type:"button",className:"btn timer-setting-btn mx-2 ".concat(F("selectedFont",m)?"btn-dark":"btn-light"),style:{fontFamily:m},children:"Aa"}),Object(p.jsx)("button",{onClick:function(){return C("selectedFont",h)},type:"button",className:"btn timer-setting-btn ".concat(F("selectedFont",h)?"btn-dark":"btn-light"),style:{fontFamily:h},children:"Aa"})]})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6 d-flex justify-content-start",children:Object(p.jsx)("h6",{children:"COLOR"})}),Object(p.jsx)("div",{className:"col-md-6 d-flex justify-content-end",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return C("selectedColor",x)},type:"button",className:"btn timer-setting-btn",style:{background:x},children:F("selectedColor",x)&&Object(p.jsx)("img",{src:"/assets/icon-check.svg",className:"checkmark",alt:"checked"})}),Object(p.jsx)("button",{onClick:function(){return C("selectedColor",O)},type:"button",className:"btn timer-setting-btn mx-2",style:{background:O},children:F("selectedColor",O)&&Object(p.jsx)("img",{src:"/assets/icon-check.svg",className:"checkmark",alt:"checked"})}),Object(p.jsx)("button",{onClick:function(){return C("selectedColor",g)},type:"button",className:"btn timer-setting-btn",style:{background:g},children:F("selectedColor",g)&&Object(p.jsx)("img",{src:"/assets/icon-check.svg",className:"checkmark",alt:"checked"})})]})})]})]}),Object(p.jsx)(v.a.Footer,{className:"border-0",children:Object(p.jsx)("button",{onClick:function(){var e,t,c,n,o;d({pomodoro:null!==(e=k.pomodoro)&&void 0!==e?e:l.pomodoro,short:null!==(t=k.short)&&void 0!==t?t:l.short,long:null!==(c=k.long)&&void 0!==c?c:l.long,selectedColor:null!==(n=k.selectedColor)&&void 0!==n?n:l.selectedColor,selectedFont:null!==(o=k.selectedFont)&&void 0!==o?o:l.selectedFont}),j()},type:"button",className:"btn rounded-pill text-white mx-auto px-5",style:{background:"#F87070",marginBottom:"-30px"},children:"Apply"})})]})};function k(e){var t=Math.floor(e/3600),c=e%3600,n=c%60;return{m:Math.floor(c/60)+60*t,s:Math.ceil(n)}}var N=function(e){var t=e.color,c=e.percentage,n=2*Math.PI*150,o=(100-c)*n/100;return Object(p.jsx)("circle",{r:150,cx:25,cy:175,fill:"transparent",stroke:o!==n?t:"",strokeWidth:"10px",strokeDasharray:n,strokeDashoffset:c?o:0,strokeLinecap:"round"})},y=function(){var e={pomodoro:3600,short:900,long:1800,selectedColor:x,selectedFont:u},t=Object(n.useState)(e),c=Object(i.a)(t,2),o=c[0],s=c[1],l=Object(n.useState)(d),a=Object(i.a)(l,2),m=a[0],h=a[1],O=Object(n.useState)({time:{},seconds:o.pomodoro}),g=Object(i.a)(O,2),v=g[0],y=g[1],C=Object(n.useState)(!1),F=Object(i.a)(C,2),S=F[0],w=F[1],I=Object(n.useState)(!0),A=Object(i.a)(I,2),M=A[0],B=A[1],U=Object(n.useRef)();Object(n.useEffect)((function(){var e=k(v.seconds);y(Object(r.a)(Object(r.a)({},v),{},{time:e}))}),[]);var D=function(){M?(U.current=setInterval(E,1e3),B(!1)):(clearInterval(U.current),B(!0))},E=function(){y((function(e){var t=e.seconds-1;return 0===t&&clearInterval(U.current),{time:k(t),seconds:t}}))},T=function(e,t){return e||t?"".concat(e.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),":").concat(t.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})):"00:00"},H=function(e){h(e),y({time:k(o[e]),seconds:o[e]})};return Object(p.jsxs)("div",{className:"container-fluid",style:{fontFamily:o.selectedFont},children:[Object(p.jsx)(f,{show:S,settings:o,onUpdate:s,onHide:function(){return w(!1)}}),Object(p.jsx)("div",{className:"row text-center mt-5",children:Object(p.jsx)("h1",{children:Object(p.jsx)("img",{src:"/assets/logo.svg",alt:"logo"})})}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsx)("div",{className:"col-md-6 mx-auto text-center",children:Object(p.jsxs)("div",{className:"btn-group btn-container p-2 rounded-pill",role:"group","aria-label":"Basic example",children:[Object(p.jsx)("button",{onClick:function(){return H(d)},type:"button",className:"btn mode-toggle rounded-pill",style:{background:m===d?o.selectedColor:""},children:"pomodoro"}),Object(p.jsx)("button",{onClick:function(){return H(j)},type:"button",className:"btn mode-toggle rounded-pill",style:{background:m===j?o.selectedColor:""},children:"short break"}),Object(p.jsx)("button",{onClick:function(){return H(b)},type:"button",className:"btn mode-toggle rounded-pill",style:{background:m===b?o.selectedColor:""},children:"long break"})]})})}),function(){var e,t=v.seconds/o[m]*100;return Object(p.jsx)("div",{className:"row my-5",children:Object(p.jsx)("div",{className:"col-md-6 mx-auto text-center",children:Object(p.jsx)("div",{onClick:D,className:"timer-circle mx-auto d-flex flex-column align-items-center justify-content-center",style:{cursor:"pointer"},children:Object(p.jsxs)("svg",{width:"350",height:"350",children:[Object(p.jsxs)("g",{transform:"rotate(-90 ".concat("100 100",")"),children:[Object(p.jsx)(N,{color:"rgba(22, 25, 50, 1)"}),Object(p.jsx)(N,{color:o.selectedColor,percentage:t})]}),Object(p.jsx)("text",{x:"50%",y:"50%",dominantBaseline:"central",textAnchor:"middle",fontSize:"100px",className:"time-text",children:T(null===(e=v.time)||void 0===e?void 0:e.m,v.time.s)}),Object(p.jsx)("text",{x:"50%",y:"70%",dominantBaseline:"central",textAnchor:"middle",fontSize:"16px",className:"time-text-detail",children:M?"START":"PAUSE"})]})})})})}(),Object(p.jsx)("div",{className:"row mb-5",children:Object(p.jsx)("div",{className:"col-md-6 mx-auto text-center",children:Object(p.jsx)("button",{onClick:function(){return w(!0)},type:"button",className:"btn bg-none",children:Object(p.jsx)("img",{src:"/assets/icon-settings.svg",alt:"settings"})})})})]})};l.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.08f5e248.chunk.js.map