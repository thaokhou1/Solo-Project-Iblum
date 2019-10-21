(this["webpackJsonpprime-solo-project"]=this["webpackJsonpprime-solo-project"]||[]).push([[0],{55:function(e,t,a){e.exports=a(98)},83:function(e,t,a){},85:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),o=a(19),c=a(6),i=a(53),u=(a(64),Object(o.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},h=Object(o.c)({errors:u,loginMode:p,user:m}),d=a(5),E=a.n(d),b=a(7),f=a(20),O=a.n(f),g=E.a.mark(w),v=E.a.mark(j),y=E.a.mark(I);function w(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,O.a.post("/api/user/login",e.payload,t);case 6:return a.next=8,Object(b.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(b.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(b.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}}),g,null,[[0,10]])}function j(e){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,O.a.post("/api/user/logout",t);case 4:return e.next=6,Object(b.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}}),v,null,[[0,8]])}function I(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("LOGIN",w);case 2:return e.next=4,Object(b.c)("LOGOUT",j);case 4:case"end":return e.stop()}}),y)}var C=I,R=E.a.mark(T),_=E.a.mark(x);function T(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,O.a.post("/api/user/register",e.payload);case 5:return t.next=7,Object(b.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(b.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(b.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}}),R,null,[[0,11]])}function x(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("REGISTER",T);case 2:case"end":return e.stop()}}),_)}var N=x,S=E.a.mark(F),k=E.a.mark(M);function F(){var e,t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,O.a.get("/api/user",e);case 4:return t=a.sent,a.next=7,Object(b.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),S,null,[[0,9]])}function M(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("FETCH_USER",F);case 2:case"end":return e.stop()}}),k)}var L=M,U=E.a.mark(G),A=E.a.mark(D);function G(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("/api/user/picture",e.payload);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("Error with  picture post",t.t0);case 8:case"end":return t.stop()}}),U,null,[[0,5]])}function D(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("Upload",G);case 2:case"end":return e.stop()}}),A)}var P=D,H=E.a.mark(J);function J(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([C(),N(),L(),P()]);case 2:case"end":return e.stop()}}),H)}var q=a(13),B=a(14),W=a(16),z=a(15),K=a(17),Q=a(23),V=a(22),X=Object(c.b)()((function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")})),Y=(a(83),Object(c.b)((function(e){return{user:e.user}}))((function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement(Q.b,{to:"/home"},r.a.createElement("h2",{className:"nav-title"},"Iblum")),r.a.createElement("div",{className:"nav-right"},e.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{className:"nav-link"})),r.a.createElement(Q.b,{className:"nav-link",to:"/account"},"Account")))}))),Z=(a(85),function(){return r.a.createElement("footer",null,"\xa9 Iblum")}),$=a(54),ee=a(21),te=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(ee.a)({},e,t.target.value))}},a}return Object(K.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",null,"Login"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"log-in",type:"submit",name:"submit",value:"Log In"}),r.a.createElement("button",{type:"button",className:"register",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register"))))}}]),t}(n.Component),ae=Object(c.b)((function(e){return{errors:e.errors}}))(te),ne=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",email:"",username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.firstname&&a.state.email&&a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{firstname:a.state.firstname,email:a.state.email,username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(ee.a)({},e,t.target.value))}},a}return Object(K.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h2",null,"Create Account"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstname"},"Name:",r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChangeFor("firstname")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInputChangeFor("email")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"register",type:"submit",name:"submit",value:"Register"}),r.a.createElement("button",{type:"button",className:"log-in",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Cancel"))))}}]),t}(n.Component),re=Object(c.b)((function(e){return{errors:e.errors}}))(ne),se=Object(c.b)((function(e){return{user:e.user,loginMode:e.loginMode}}))((function(e){var t,a=e.component,n=e.user,s=e.loginMode,l=Object($.a)(e,["component","user","loginMode"]);return t=n.id?a:"login"===s?ae:re,r.a.createElement(V.b,Object.assign({},l,{component:t}))})),le=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",email:"",username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.firstname&&a.state.email&&a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{firstname:a.state.firstname,email:a.state.email,username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(ee.a)({},e,t.target.value))}},a}return Object(K.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h2",null,"Update Account"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstname"},"Name:",r.a.createElement("input",{type:"text",name:"firstname",value:this.state.firstname,onChange:this.handleInputChangeFor("firstname")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInputChangeFor("email")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"register",type:"submit",name:"Update Account",value:"Update Account"}),r.a.createElement("button",{type:"button",className:"log-in",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Delete Account"))))}}]),t}(n.Component),oe=Object(c.b)((function(e){return{errors:e.errors}}))(le),ce=a(26),ie=a(50),ue=a.n(ie),pe=a(36),me=(a(95),a(51)),he=a.n(me),de=a(52),Ee=a.n(de);a(96);Object(pe.registerPlugin)(he.a,Ee.a);var be=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(W.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={file:{img:""}},a}return Object(K.a)(t,e),Object(B.a)(t,[{key:"handleInit",value:function(){console.log("FilePond instance has initialised",this.pond),this.props.dispatch({type:"UPLOAD"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(pe.FilePond,{ref:function(t){return e.pond=t},files:this.state.files,allowMultiple:!0,maxFiles:3,url:"/api/user/picture",oninit:function(){return e.handleInit()},onupdatefiles:function(t){e.setState({files:t.map((function(e){return e.file}))})}}))}}]),t}(n.Component),fe=Object(c.b)((function(e){return{errors:e.errors}}))(be),Oe=function(e){function t(){var e;return Object(q.a)(this,t),(e=Object(W.a)(this,Object(z.a)(t).call(this))).state={img:"",location:"",date:"",voice_clip:""},e.handleInputChangeFor=function(t){return function(a){e.setState(Object(ee.a)({},t,a.target.value))}},e.handleSubmit=function(){console.log("hello from the upload btn"),e.props.dispatch({type:"UPLOAD"})},e.state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(ce.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(ce.a)(e)),e}return Object(K.a)(t,e),Object(B.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOpenModal},"Upload Picture"),r.a.createElement(ue.a,{isOpen:this.state.showModal,contentLabel:"Minimal Modal Example"},r.a.createElement("div",null,r.a.createElement("h2",null,"Upload"),"Select your memory here ",r.a.createElement(fe,{onChange:this.handleInputChangeFor}),"Always remember this place ",r.a.createElement("input",{placeholder:"location",onChange:this.handleInputChangeFor}),"On this day ",r.a.createElement("input",{placeholder:"date",onChange:this.handleInputChangeFor}),"Secure this moment ",r.a.createElement("input",{placeholder:"voice recorder will go here",onChange:this.handleInputChangeFor})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleSubmit},"Upload"),r.a.createElement("button",{onClick:this.handleCloseModal},"Cancel"))))}}]),t}(n.Component),ge=Object(c.b)((function(e){return{errors:e.errors}}))(Oe),ve=Object(c.b)((function(e){return{user:e.user}}))((function(e){return r.a.createElement("div",null,r.a.createElement("h2",{id:"welcome"},"Welcome back, ",e.user.username,"!"),r.a.createElement(ge,null))})),ye=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Info Page"))},we=(a(97),function(e){function t(){return Object(q.a)(this,t),Object(W.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(Q.a,null,r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(V.d,null,r.a.createElement(V.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(V.b,{exact:!0,path:"/account",component:oe}),r.a.createElement(se,{exact:!0,path:"/home",component:ve}),r.a.createElement(se,{exact:!0,path:"/info",component:ye}),r.a.createElement(V.b,{render:function(){return r.a.createElement("h1",null,"404")}})),r.a.createElement(Z,null)))}}]),t}(n.Component)),je=Object(c.b)()(we),Ie=Object(i.a)(),Ce=[Ie],Re=Object(o.e)(h,o.a.apply(void 0,Ce));Ie.run(J),l.a.render(r.a.createElement(c.a,{store:Re},r.a.createElement(je,null)),document.getElementById("react-root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.647d8d37.chunk.js.map