(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(43),a=n(5),c="SEND_MESSAGE",s={dialogs:[{id:1,name:"Max"},{id:2,name:"Seryi"},{id:3,name:"Lera"},{id:4,name:"Silvia"},{id:5,name:"Lena"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"What's up"},{id:3,message:"Hey bro"},{id:4,message:"Yo"},{id:5,message:"Yo"},{id:6,message:"Yo"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__1tiY1",item:"Navbar_item__1vS40",active:"Navbar_active__1vy60"}},130:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3y01E"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"703013ee-1a2e-4284-ac13-0e83bb4decfa"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},164:function(e,t,n){},165:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(0),c=n.n(a),s=n(65),i=n.n(s),o=(n(164),n(34)),u=n(35),l=n(38),d=n(37),j=n(11),f=n(15),b=(n(165),n(1)),p=function(){return Object(b.jsx)("div",{children:"News"})},g=function(){return Object(b.jsx)("div",{children:"Music"})},h=function(){return Object(b.jsx)("div",{children:"Settings"})},O=n(13),m=n.n(O),v=function(){return Object(b.jsxs)("nav",{className:m.a.nav,children:[Object(b.jsx)("div",{className:m.a.item,children:Object(b.jsx)(f.b,{to:"/profile",activeClassName:m.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:"".concat(m.a.item," ").concat(m.a.active),children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:m.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:"".concat(m.a.item," ").concat(m.a.active),children:Object(b.jsx)(f.b,{to:"/users",activeClassName:m.a.active,children:"Users"})}),Object(b.jsx)("div",{className:m.a.item,children:Object(b.jsx)(f.b,{to:"/news",activeClassName:m.a.active,children:"News"})}),Object(b.jsx)("div",{className:m.a.item,children:Object(b.jsx)(f.b,{to:"/music",activeClassName:m.a.active,children:"Music"})}),Object(b.jsx)("div",{className:m.a.item,children:Object(b.jsx)(f.b,{to:"/settings",activeClassName:m.a.active,children:"Settings"})})]})},x=n(55),w=n(68),P=n(127),_=n(71),C=n.n(_),y=n(129),S=n.n(y),E=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(a.useState)(1),f=Object(P.a)(j,2),p=f[0],g=f[1],h=(p-1)*i+1,O=p*i;return Object(b.jsxs)("div",{className:C.a.paginator,children:[p>1&&Object(b.jsx)("button",{onClick:function(){g(p-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(b.jsx)("span",{className:S()(Object(w.a)({},C.a.selectedPage,r===e),C.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>p&&Object(b.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},N=n(130),I=n.n(N),k=n.p+"static/media/user.e5ee284b.png",F=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:k,className:I.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.location.country"}),Object(b.jsx)("div",{children:"user.location.city"})]})]})]})},T=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,s=Object(x.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(b.jsx)("div",{children:c.map((function(e){return Object(b.jsx)(F,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},U=n(18),z=n(10),L=n.n(z),A=n(20),M=n(43),D=n(5),R=n(14),B=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(D.a)(Object(D.a)({},e),r):e}))},G="FOLLOW",H="UNFOLLOW",Y="SET_USERS",V="SET_CURRENT_PAGE",W="SET_TOTAL_USERS_COUNT",q="TOGGLE_IS_FETCHING",K="TOGGLE_IS_FOLLOWING_PROGRESS",X={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},J=function(e){return{type:G,userId:e}},Q=function(e){return{type:H,userId:e}},Z=function(e){return{type:V,currentPage:e}},$=function(e){return{type:q,isFetching:e}},ee=function(e,t){return{type:K,isFetching:e,userId:t}},te=function(){var e=Object(A.a)(L.a.mark((function e(t,n,r,a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ee(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(ee(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(D.a)(Object(D.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!0})});case H:return Object(D.a)(Object(D.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!1})});case Y:return Object(D.a)(Object(D.a)({},e),{},{users:t.users});case V:return Object(D.a)(Object(D.a)({},e),{},{currentPage:t.currentPage});case W:return Object(D.a)(Object(D.a)({},e),{},{totalUsersCount:t.count});case q:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});case K:return Object(D.a)(Object(D.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(M.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},re=n(49),ae=n(9),ce=n(132),se=Object(ce.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ie=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ue=function(e){return e.usersPage.currentPage},le=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(re.a,{}):null,Object(b.jsx)(T,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),fe=Object(ae.d)(Object(U.b)((function(e){return{users:se(e),pageSize:ie(e),totalUsersCount:oe(e),currentPage:ue(e),isFetching:le(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(A.a)(L.a.mark((function t(n){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=R.c.follow.bind(R.c),te(n,e,r,J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(L.a.mark((function t(n){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=R.c.unfollow.bind(R.c),te(n,e,r,Q);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Z,toggleFollowingProgress:ee,getUsers:function(e,t){return function(){var n=Object(A.a)(L.a.mark((function n(r){var a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r($(!0)),r(Z(e)),n.next=4,R.c.getUsers(e,t);case 4:a=n.sent,r($(!1)),r((s=a.items,{type:Y,users:s})),r((c=a.totalCount,{type:W,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(je),be=n(92),pe=n.n(be),ge=function(e){return Object(b.jsxs)("header",{className:pe.a.header,children:[Object(b.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),Object(b.jsx)("div",{className:pe.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(b.jsx)(f.b,{to:"/login",children:"Login"})})]})},he=n(33),Oe="SET_USER_DATA",me={userId:null,email:null,login:null,isAuth:!1},ve=function(e,t,n,r){return{type:Oe,payload:{userId:e,email:t,login:n,isAuth:r}}},xe=function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){var n,r,a,c,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(ve(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(D.a)(Object(D.a)({},e),t.payload);default:return e}},Pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(ge,Object(D.a)({},this.props))}}]),n}(c.a.Component),_e=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logout();case 2:0===e.sent.data.resultCode&&t(ve(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Pe),Ce=n(89),ye=n(126),Se=n(66),Ee=n(56),Ne=n(52),Ie=n.n(Ne),ke=Object(ye.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(Ce.a,{placeholder:"Email",name:"email",validate:[Ee.b],component:Se.a})}),Object(b.jsx)("div",{children:Object(b.jsx)(Ce.a,{placeholder:"Password",name:"password",type:"password",validate:[Ee.b],component:Se.a})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Ce.a,{component:Se.a,name:"rememberMe",type:"checkbox"})," remember me"]}),e.error&&Object(b.jsx)("div",{className:Ie.a.formSummeryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Fe=Object(U.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(A.a)(L.a.mark((function r(a){var c,s;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(xe()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(he.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(j.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Te="INITIALIZED_SUCCESS",Ue={initialized:!1},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(D.a)(Object(D.a)({},e),{},{initialized:!0});default:return e}},Le=n(125),Ae=n(95),Me=n(134),De=n(128),Re=Object(ae.c)({profilePage:Ae.b,dialogsPage:Le.a,usersPage:ne,auth:we,form:De.a,app:ze}),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,Ge=Object(ae.e)(Re,Be(Object(ae.a)(Me.a)));window.__store__=Ge;var He=Ge,Ye=c.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ve=c.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),We=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(_e,{}),Object(b.jsx)(v,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(c.a.Suspense,{fallback:Object(b.jsx)(re.a,{}),children:[Object(b.jsx)(j.b,{path:"/dialogs",render:function(){return Object(b.jsx)(Ve,{})}}),Object(b.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Ye,{})}}),Object(b.jsx)(j.b,{path:"/users",render:function(){return Object(b.jsx)(fe,{})}}),Object(b.jsx)(j.b,{path:"/login",render:function(){return Object(b.jsx)(Fe,{})}}),Object(b.jsx)(j.b,{path:"/news",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(j.b,{path:"/music",render:function(){return Object(b.jsx)(g,{})}}),Object(b.jsx)(j.b,{path:"/settings",render:function(){return Object(b.jsx)(h,{})}})]})})]}):Object(b.jsx)(re.a,{})}}]),n}(a.Component),qe=Object(ae.d)(j.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(xe()).then((function(){e({type:Te})}))}}}))(We),Ke=function(e){return Object(b.jsx)(f.a,{children:Object(b.jsx)(U.a,{store:He,children:Object(b.jsx)(qe,{})})})};i.a.render(Object(b.jsx)(Ke,{}),document.getElementById("root")),r()},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n.p+"static/media/preloader.58139a2d.svg",a=n(1),c=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"preloader"})})}},52:function(e,t,n){e.exports={"form-control":"FormsControls_form-control__3EEV8",formControl:"FormsControls_formControl__1Pgqq",error:"FormsControls_error__22-8h",formSummeryError:"FormsControls_formSummeryError__3m0Fw"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(5),a=n(55),c=(n(0),n(52)),s=n.n(c),i=(n(56),n(89),n(1)),o=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__mEyuz",pageNumber:"Paginator_pageNumber__3uuQn",selectedPage:"Paginator_selectedPage__Cr8-p"}},92:function(e,t,n){e.exports={header:"Header_header__2pBwF",loginBlock:"Header_loginBlock__KKk9g"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),c=n(20),s=n(43),i=n(5),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.39e31dd4.chunk.js.map