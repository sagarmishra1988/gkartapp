"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[677],{3677:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t=n(4165),a=n(5861),l=n(9439),s=n(2791),u=n(2302),o=n(3999),c=n(1512),i=n(9508),d=n(9895),h=n(685),v=n(7689),f=n(3108),p=n(184),m=function(){var e=(0,i.x)(),r=e.isLoading,n=e.error,m=e.sendRequest,x=e.clearError,j=(0,s.useState)([]),Z=(0,l.Z)(j,2),b=Z[0],C=Z[1],g=(0,s.useContext)(f.V),k=(0,v.UO)().uid,y=(0,v.s0)(),w=(0,c.Z)((function(e){return""!==e.trim()})),E=w.value,N=w.entervalueisvalid,O=w.haserror,T=w.valuechangehandler,B=w.valueblurhandler,S=w.reset,_=(0,c.Z)((function(e){return e.includes("@")})),R=_.value,A=_.entervalueisvalid,D=_.haserror,F=_.valuechangehandler,L=_.valueblurhandler,I=_.reset,M=(0,c.Z)((function(e){return""!==e.trim()})),P=M.value,U=M.entervalueisvalid,q=M.haserror,H=M.valuechangehandler,J=M.valueblurhandler,V=M.reset,W=(0,c.Z)((function(e){return""!==e.trim()})),z=W.value,G=W.entervalueisvalid,K=W.haserror,Q=W.valuechangehandler,X=W.valueblurhandler,Y=W.reset,$=(0,s.useRef)(),ee=(0,s.useRef)(),re=(0,s.useRef)(),ne=(0,s.useRef)(),te=!1;N&&A&&U&&G&&(te=!0),(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("http://localhost:8000/api"+"/users/".concat(k));case 3:r=e.sent,C(r.users),console.log(r.users),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,k]);var ae=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),N){e.next=3;break}return e.abrupt("return");case 3:if(A){e.next=5;break}return e.abrupt("return");case 5:if(U){e.next=7;break}return e.abrupt("return");case 7:if(G){e.next=9;break}return e.abrupt("return");case 9:return S(),I(),V(),Y(),e.prev=13,e.next=16,m("http://localhost:8000/api"+"/users/".concat(k),"PATCH",JSON.stringify({email:R,name:E,mobile:P,password:z}),{"Content-Type":"application/json"});case 16:y("/sellerlogin"),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(13);case 21:case"end":return e.stop()}}),e,null,[[13,19]])})));return function(r){return e.apply(this,arguments)}}(),le=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("http://localhost:8000/api"+"/users/".concat(k),"DELETE");case 3:g.delet(),y("/sellerregistration"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),se=O?"form-control invalid":"form-control",ue=q?"form-control invalid":"form-control",oe=D?"form-control invalid":"form-control",ce=K?"form-control invalid":"form-control";return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{error:n,onClear:x}),r&&(0,p.jsx)(d.Z,{asOverlay:!0}),(0,p.jsx)("h2",{children:"Edit Users"}),(0,p.jsx)("div",{className:"form_input_div",children:(0,p.jsxs)("form",{onSubmit:ae,children:[(0,p.jsxs)("div",{className:se,children:[(0,p.jsx)(u.Z,{id:"NAME",ref:$,onChange:T,onBlur:B,value:E||b.name}),O&&(0,p.jsx)("p",{children:"enter valid name"})]}),(0,p.jsxs)("div",{className:oe,children:[(0,p.jsx)(u.Z,{id:"EMAIL",ref:ee,onChange:F,onBlur:L,value:R||b.email}),D&&(0,p.jsx)("p",{children:"enter valid email"})]}),(0,p.jsxs)("div",{className:ue,children:[(0,p.jsx)(u.Z,{id:"MOBILE",ref:re,onChange:H,onBlur:J,value:P||b.mobile}),q&&(0,p.jsx)("p",{children:"enter valid mobile"})]}),(0,p.jsxs)("div",{className:ce,children:[(0,p.jsx)(u.Z,{id:"PASSWORD",ref:ne,onChange:Q,onBlur:X,value:z||b.password}),K&&(0,p.jsx)("p",{children:"enter valid password"})]}),(0,p.jsx)(o.Z,{disabled:!te,children:"Update"}),(0,p.jsx)(o.Z,{onClick:le,children:"Delete"})]})})]})}},2302:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(2791),a=n(1413),l=n(4164),s=n(1176),u=n(9422),o=n(184),c=function(e){var r=(0,o.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,o.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,o.jsx)("h2",{children:e.header})}),(0,o.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,o.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,o.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.createPortal(r,document.getElementById("modal-hook"))},i=function(e){return(0,o.jsxs)(t.Fragment,{children:[e.show&&(0,o.jsx)(u.Z,{onClick:e.onCancel}),(0,o.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,o.jsx)(c,(0,a.Z)({},e))})]})},d=n(3999),h=function(e){return(0,o.jsx)(i,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,o.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,o.jsx)("p",{children:e.error})})}},1512:function(e,r,n){var t=n(9439),a=n(2791),l={value:"",isTouched:!1},s=function e(r,n){return"input"===n.type?{value:n.value,isTouched:r.isTouched}:"blur"===n.type?{isTouched:!0,value:r.value}:"reset"===n.type?{isTouched:!1,value:""}:e};r.Z=function(e){var r=(0,a.useReducer)(s,l),n=(0,t.Z)(r,2),u=n[0],o=n[1],c=e(u.value),i=!c&&u.isTouched;return{value:u.value,entervalueisvalid:c,haserror:i,valuechangehandler:function(e){o({type:"input",value:e.target.value})},valueblurhandler:function(){o({type:"blur"})},reset:function(){o({type:"reset"})}}}}}]);
//# sourceMappingURL=677.0d128fb5.chunk.js.map