"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[394],{3394:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var a=n(2791),t=n(4165),l=n(5861),s=n(2302),o=n(3999),i=n(1512),u=n(9508),c=n(9895),d=n(685),h=n(7689),v=n(3108),f=n(184),m=function(){var e=(0,u.x)(),r=e.isLoading,n=e.error,m=e.sendRequest,p=e.clearError,x=(0,a.useContext)(v.V),j=(0,h.s0)(),g=(0,i.Z)((function(e){return""!==e.trim()})),b=g.value,Z=g.entervalueisvalid,y=g.haserror,C=g.valuechangehandler,k=g.valueblurhandler,I=g.reset,N=(0,i.Z)((function(e){return e.includes("@")})),w=N.value,L=N.entervalueisvalid,S=N.haserror,O=N.valuechangehandler,E=N.valueblurhandler,B=N.reset,R=(0,i.Z)((function(e){return""!==e.trim()})),T=R.value,_=R.entervalueisvalid,F=R.haserror,P=R.valuechangehandler,A=R.valueblurhandler,D=R.reset,M=(0,i.Z)((function(e){return""!==e.trim()})),V=M.value,q=M.entervalueisvalid,U=M.haserror,H=M.valuechangehandler,J=M.valueblurhandler,W=M.reset,z=(0,a.useRef)(),G=(0,a.useRef)(),K=(0,a.useRef)(),Q=(0,a.useRef)(),X=!1;Z&&L&&_&&q&&(X=!0);var Y=function(){var e=(0,l.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),Z){e.next=3;break}return e.abrupt("return");case 3:if(L){e.next=5;break}return e.abrupt("return");case 5:if(_){e.next=7;break}return e.abrupt("return");case 7:if(q){e.next=9;break}return e.abrupt("return");case 9:return I(),B(),D(),W(),e.prev=13,e.next=16,m("http://localhost:8000/api/users/signup","POST",JSON.stringify({email:w,name:b,mobile:T,password:V}),{"Content-Type":"application/json"});case 16:n=e.sent,x.login(n.userId,n.token),j("/sellerlogin"),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(13);case 23:case"end":return e.stop()}}),e,null,[[13,21]])})));return function(r){return e.apply(this,arguments)}}(),$=y?"form-control invalid":"form-control",ee=F?"form-control invalid":"form-control",re=S?"form-control invalid":"form-control",ne=U?"form-control invalid":"form-control";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{error:n,onClear:p}),r&&(0,f.jsx)(c.Z,{asOverlay:!0}),!x.isLoggedIn&&(0,f.jsx)("h2",{children:"Signup Required"}),x.isLoggedIn&&(0,f.jsxs)("h2",{style:{textDecoration:"none"},children:["Hello ",x.userName]}),(0,f.jsxs)("div",{className:"form_input_div",children:[!x.isLoggedIn&&(0,f.jsxs)("form",{onSubmit:Y,children:[(0,f.jsxs)("div",{className:$,children:[(0,f.jsx)(s.Z,{id:"NAME",type:"text",ref:z,onChange:C,onBlur:k,value:b}),y&&(0,f.jsx)("p",{children:"enter valid name"})]}),(0,f.jsxs)("div",{className:re,children:[(0,f.jsx)(s.Z,{id:"EMAIL",type:"email",ref:G,onChange:O,onBlur:E,value:w}),S&&(0,f.jsx)("p",{children:"enter valid email"})]}),(0,f.jsxs)("div",{className:ee,children:[(0,f.jsx)(s.Z,{id:"MOBILE",type:"number",ref:K,onChange:P,onBlur:A,value:T}),F&&(0,f.jsx)("p",{children:"enter valid mobile"})]}),(0,f.jsxs)("div",{className:ne,children:[(0,f.jsx)(s.Z,{id:"PASSWORD",type:"password",ref:Q,onChange:H,onBlur:J,value:V}),U&&(0,f.jsx)("p",{children:"enter valid password"})]}),(0,f.jsx)(o.Z,{disabled:!X,children:"Signup"}),!x.isLoggedIn&&(0,f.jsx)(o.Z,{to:"/sellerlogin",children:"Login"})]}),(0,f.jsxs)("div",{className:"loginbuttonpannel",children:[x.isLoggedIn&&(0,f.jsx)(o.Z,{to:"/".concat(x.userId,"/sellerupdate"),children:"Edit Seller"}),x.isLoggedIn&&(0,f.jsx)(o.Z,{to:"/sellernewproduct",children:"Upload Products"}),x.isLoggedIn&&(0,f.jsx)(o.Z,{to:"/".concat(x.userId,"/selleralluploadedproduct"),children:"View Uploaded Products"}),x.isLoggedIn&&(0,f.jsx)(o.Z,{to:"/".concat(x.userId,"/productcreator"),children:"View Order"})]})]})]})},p=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(m,{})})}},2302:function(e,r,n){n(2791);var a=n(184);r.Z=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{htmlFor:e.id,children:e.id}),(0,a.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var a=n(2791),t=n(1413),l=n(4164),s=n(1176),o=n(9422),i=n(184),u=function(e){var r=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.createPortal(r,document.getElementById("modal-hook"))},c=function(e){return(0,i.jsxs)(a.Fragment,{children:[e.show&&(0,i.jsx)(o.Z,{onClick:e.onCancel}),(0,i.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(u,(0,t.Z)({},e))})]})},d=n(3999),h=function(e){return(0,i.jsx)(c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},1512:function(e,r,n){var a=n(9439),t=n(2791),l={value:"",isTouched:!1},s=function e(r,n){return"input"===n.type?{value:n.value,isTouched:r.isTouched}:"blur"===n.type?{isTouched:!0,value:r.value}:"reset"===n.type?{isTouched:!1,value:""}:e};r.Z=function(e){var r=(0,t.useReducer)(s,l),n=(0,a.Z)(r,2),o=n[0],i=n[1],u=e(o.value),c=!u&&o.isTouched;return{value:o.value,entervalueisvalid:u,haserror:c,valuechangehandler:function(e){i({type:"input",value:e.target.value})},valueblurhandler:function(){i({type:"blur"})},reset:function(){i({type:"reset"})}}}}}]);
//# sourceMappingURL=394.44019d55.chunk.js.map