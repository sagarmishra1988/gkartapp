"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[558],{9558:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t=n(2791),a=n(4165),l=n(5861),s=n(9439),o=n(2302),u=n(3999),c=n(1512),i=n(9508),d=n(9895),h=n(685),v=n(7689),f=n(3108),m=n(184),p=function(){var e=(0,i.x)(),r=e.isLoading,n=e.error,p=e.sendRequest,x=e.clearError,j=(0,t.useState)([]),Z=(0,s.Z)(j,2),b=Z[0],g=Z[1],C=(0,t.useContext)(f.V),k=(0,v.UO)().cid,y=(0,v.s0)(),w=(0,c.Z)((function(e){return""!==e.trim()})),E=w.value,N=w.entervalueisvalid,O=w.haserror,T=w.valuechangehandler,B=w.valueblurhandler,S=w.reset,_=(0,c.Z)((function(e){return e.includes("@")})),R=_.value,A=_.entervalueisvalid,D=_.haserror,F=_.valuechangehandler,L=_.valueblurhandler,I=_.reset,M=(0,c.Z)((function(e){return""!==e.trim()})),P=M.value,U=M.entervalueisvalid,q=M.haserror,H=M.valuechangehandler,J=M.valueblurhandler,V=M.reset,W=(0,c.Z)((function(e){return""!==e.trim()})),z=W.value,G=W.entervalueisvalid,K=W.haserror,Q=W.valuechangehandler,X=W.valueblurhandler,Y=W.reset,$=(0,t.useRef)(),ee=(0,t.useRef)(),re=(0,t.useRef)(),ne=(0,t.useRef)(),te=!1;N&&A&&U&&G&&(te=!0),(0,t.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("http://localhost:8000/api"+"/customers/".concat(k));case 3:r=e.sent,g(r.customer),console.log(r.customer),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[p,k]);var ae=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),N){e.next=3;break}return e.abrupt("return");case 3:if(A){e.next=5;break}return e.abrupt("return");case 5:if(U){e.next=7;break}return e.abrupt("return");case 7:if(G){e.next=9;break}return e.abrupt("return");case 9:return S(),I(),V(),Y(),e.prev=13,e.next=16,p("http://localhost:8000/api"+"/customers/".concat(k),"PATCH",JSON.stringify({email:R,name:E,mobile:P,password:z}),{"Content-Type":"application/json"});case 16:y("/customerlogin"),e.next=21;break;case 19:e.prev=19,e.t0=e.catch(13);case 21:case"end":return e.stop()}}),e,null,[[13,19]])})));return function(r){return e.apply(this,arguments)}}(),le=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("http://localhost:8000/api"+"/customers/".concat(k),"DELETE");case 3:C.delet(),y("/customerregistration"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),se=O?"form-control invalid":"form-control",oe=q?"form-control invalid":"form-control",ue=D?"form-control invalid":"form-control",ce=K?"form-control invalid":"form-control";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{error:n,onClear:x}),r&&(0,m.jsx)(d.Z,{asOverlay:!0}),(0,m.jsx)("h2",{children:"Edit Users"}),(0,m.jsx)("div",{className:"form_input_div",children:(0,m.jsxs)("form",{onSubmit:ae,children:[(0,m.jsxs)("div",{className:se,children:[(0,m.jsx)(o.Z,{id:"NAME",ref:$,onChange:T,onBlur:B,value:E||b.name}),O&&(0,m.jsx)("p",{children:"enter valid name"})]}),(0,m.jsxs)("div",{className:ue,children:[(0,m.jsx)(o.Z,{id:"EMAIL",ref:ee,onChange:F,onBlur:L,value:R||b.email}),D&&(0,m.jsx)("p",{children:"enter valid email"})]}),(0,m.jsxs)("div",{className:oe,children:[(0,m.jsx)(o.Z,{id:"MOBILE",ref:re,onChange:H,onBlur:J,value:P||b.mobile}),q&&(0,m.jsx)("p",{children:"enter valid mobile"})]}),(0,m.jsxs)("div",{className:ce,children:[(0,m.jsx)(o.Z,{id:"PASSWORD",ref:ne,onChange:Q,onBlur:X,value:z||b.password}),K&&(0,m.jsx)("p",{children:"enter valid password"})]}),(0,m.jsx)(u.Z,{disabled:!te,children:"Update"}),(0,m.jsx)(u.Z,{onClick:le,children:"Delete"})]})})]})},x=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p,{})})}},2302:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(2791),a=n(1413),l=n(4164),s=n(1176),o=n(9422),u=n(184),c=function(e){var r=(0,u.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,u.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,u.jsx)("h2",{children:e.header})}),(0,u.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,u.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,u.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.createPortal(r,document.getElementById("modal-hook"))},i=function(e){return(0,u.jsxs)(t.Fragment,{children:[e.show&&(0,u.jsx)(o.Z,{onClick:e.onCancel}),(0,u.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,u.jsx)(c,(0,a.Z)({},e))})]})},d=n(3999),h=function(e){return(0,u.jsx)(i,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,u.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,u.jsx)("p",{children:e.error})})}},1512:function(e,r,n){var t=n(9439),a=n(2791),l={value:"",isTouched:!1},s=function e(r,n){return"input"===n.type?{value:n.value,isTouched:r.isTouched}:"blur"===n.type?{isTouched:!0,value:r.value}:"reset"===n.type?{isTouched:!1,value:""}:e};r.Z=function(e){var r=(0,a.useReducer)(s,l),n=(0,t.Z)(r,2),o=n[0],u=n[1],c=e(o.value),i=!c&&o.isTouched;return{value:o.value,entervalueisvalid:c,haserror:i,valuechangehandler:function(e){u({type:"input",value:e.target.value})},valueblurhandler:function(){u({type:"blur"})},reset:function(){u({type:"reset"})}}}}}]);
//# sourceMappingURL=558.312c9423.chunk.js.map