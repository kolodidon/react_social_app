(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(2),s=n(3),a=n(4),i=n(6),c=n(7),o=n(0),u=n(1),l=n.n(u),d=n(8),j=n(11),p=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(c.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(r.a)({},this.props)):Object(o.jsx)(d.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(p)(t)}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(12),s=n(2),a=n(14),i="ADD-MESSAGE",c={contactData:[{id:1,name:"Alex",avatar:a.a},{id:2,name:"Doodie",avatar:a.a},{id:3,name:"Moodie",avatar:a.a},{id:4,name:"John",avatar:a.a},{id:5,name:"Doe",avatar:a.a}],messageData:[{id:1,text:"Sup homie! How are you doing with ur react stuff? Are u done for today?"},{id:2,text:"Ain't ya doing ur app or smth?"},{id:3,text:"Wanna drink this evening?"}]},o=function(e){return{type:i,messageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[{id:5,text:t.messageText}])});default:return e}}},110:function(e,t,n){e.exports={preloader:"Preloader_preloader__CNKtc"}},111:function(e,t,n){e.exports={author:"ProfileInfo_author__-XgLT"}},113:function(e,t,n){e.exports={post:"Post_post__1jere"}},125:function(e,t,n){},14:function(e,t,n){"use strict";t.a=n.p+"static/media/Ava.5d85ca03.png"},247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),i=n(50),c=n.n(i),o=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,254)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},u=n(3),l=n(4),d=n(6),j=n(7),p=(n(125),n(29)),h=n.n(p),b=n(13),f=n(58),g=n.n(f),O=n(69),m=n.n(O),x=function(e){return Object(r.jsxs)("div",{id:e.id,className:m.a.friend,children:[Object(r.jsx)("img",{className:m.a.friendImage,src:e.avatar,alt:"Ava"}),e.name,Object(r.jsx)("br",{}),e.surname]})},v=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(x,{id:e.id,avatar:e.avatar,name:e.name,surname:e.surname},e.id)}));return Object(r.jsxs)("div",{className:g.a.friendsWrapper,children:[Object(r.jsx)("span",{className:g.a.friendsTitle,children:"Friends"}),Object(r.jsx)("div",{className:g.a.friends,children:t})]})},C=n(11),_=Object(C.b)((function(e){return{friends:e.sidebar.friends}}),null)((function(e){return Object(r.jsxs)("aside",{className:h.a.nav,children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)(b.b,{activeClassName:h.a.active,exact:!0,to:"/",children:"Profile"}),Object(r.jsx)(b.b,{activeClassName:h.a.active,to:"/dialogs",children:"Dialogs"}),Object(r.jsx)(b.b,{activeClassName:h.a.active,to:"/users",children:"Users"}),Object(r.jsx)(b.b,{activeClassName:h.a.active,to:"/news",children:"News"}),Object(r.jsx)(b.b,{activeClassName:h.a.active,to:"/music",children:"Music"}),Object(r.jsx)(b.b,{activeClassName:h.a.active,to:"/settings",children:"Settings"})]}),Object(r.jsx)(v,{friends:e.friends})]})})),P=n(8),w=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"blue",width:"100%",height:"100%"},children:"News"})},k=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"green",width:"100%",height:"100%"},children:"Music"})},S=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"yellow",width:"100%",height:"100%"},children:"Settings"})},y=n(12),T=n(2),U=n(109).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"9138b932-6739-4fbe-9f9b-99075b9836f5"}}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return U.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},N=function(e){return U.delete("follow/".concat(e)).then((function(e){return e.data}))},F=function(e){return U.post("follow/".concat(e)).then((function(e){return e.data}))},E=function(){return U.get("auth/me").then((function(e){return e.data}))},A=function(e,t,n,r){return U.post("auth/login/",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},D=function(){return U.delete("auth/login/")},L=function(){return U.get("security/get-captcha-url").then((function(e){return e.data}))},M=function(e){return U.get("profile/".concat(e)).then((function(e){return e.data}))},z=function(e){return U.get("profile/status/".concat(e)).then((function(e){return e.data}))},B=function(e){return U.put("profile/status/",{status:e}).then((function(e){return e.data}))},R="FOLLOW",G="UNFOLLOW",W="SET_USERS",H="SET_PAGE",V="SET_TOTAL_USERS_COUNT",J="TOGGLE_IS_FETCHING",X="TOGGLE_IS_FOLLOWING_PROGRESS",Y={users:[],pageSize:21,totalUsersCount:0,currentPage:1,portionSize:10,isFetching:!1,followingInProgress:[]},q=function(e){return{type:G,userID:e}},K=function(e){return{type:H,currentPage:e}},Q=function(e){return{type:V,totalUsersCount:e}},Z=function(e){return{type:J,isFetching:e}},$=function(e,t){return{type:X,followingInProgress:e,userId:t}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(T.a)(Object(T.a)({},e),{},{followed:!0}):e}))});case G:return Object(T.a)(Object(T.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(T.a)(Object(T.a)({},e),{},{followed:!1}):e}))});case W:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case H:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case V:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.totalUsersCount});case J:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case X:return Object(T.a)(Object(T.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},te=n(59),ne=n.n(te),re=n(14),se=n(21),ae=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.changeCurrentPage,i=e.currentPage,c=e.portionSize,o=e.styles,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var j=u/c,p=Object(s.useState)(1),h=Object(se.a)(p,2),b=h[0],f=h[1],g=(b-1)*c+1,O=b*c;return Object(r.jsxs)("div",{className:o.pagCont,children:[b>1&&Object(r.jsx)("button",{className:o.pagBtn,onClick:function(){f(b-1)},children:"PREV"}),l.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(r.jsx)("span",{onClick:function(){a(e)},className:i===e?"".concat(o.selectedPage," ").concat(o.pagBtn):"".concat(o.pagBtn),children:e},e)})),b<j&&Object(r.jsx)("button",{className:o.pagBtn,onClick:function(){f(b+1)},children:"NEXT"})]})},ie=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(ae,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,changeCurrentPage:e.changeCurrentPage,currentPage:e.currentPage,portionSize:e.portionSize,styles:ne.a}),Object(r.jsx)("div",{className:ne.a.main,children:e.users.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id+"/",children:Object(r.jsx)("img",{className:ne.a.photo,src:null!==t.photos.small?t.photos.small:re.a,alt:"avatar"})})})}),Object(r.jsx)("span",{children:t.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowThunkCreator(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:"Follow"})}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"Russia"}),Object(r.jsx)("div",{children:"Moscow"})]})]})]},t.id)}))})]})},ce=n(110),oe=n.n(ce),ue=n.p+"static/media/preloader.7e45af41.svg",le=function(){return Object(r.jsx)("img",{className:oe.a.preloader,src:ue,alt:"preloader"})},de=function(e){return e.usersPage.users},je=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},he=function(e){return e.usersPage.portionSize},be=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.isFetching},ge=function(e){return e.usersPage.followingInProgress},Oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).changeCurrentPage=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(le,{}):null,Object(r.jsx)(ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,portionSize:this.props.portionSize,currentPage:this.props.currentPage,users:this.props.users,changeCurrentPage:this.changeCurrentPage,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,followThunkCreator:this.props.followThunkCreator,unfollowThunkCreator:this.props.unfollowThunkCreator})]})}}]),n}(a.a.Component),me={unfollow:q,setPage:K,setTotalUsersCount:Q,getUsersThunkCreator:function(e,t){return function(n){n(Z(!0)),I(e,t).then((function(t){var r;n(Q(t.totalCount)),n(Z(!1)),n((r=t.items,{type:W,users:r})),n(K(e))}))}},followThunkCreator:function(e){return function(t){t($(!0,e)),F(e).then((function(n){t($(!1,e)),0===n.resultCode&&t({type:R,userID:e})}))}},unfollowThunkCreator:function(e){return function(t){t($(!0,e)),N(e).then((function(n){t($(!1,e)),0===n.resultCode&&t(q(e))}))}}},xe=Object(C.b)((function(e){return{users:de(e),pageSize:je(e),totalUsersCount:pe(e),currentPage:be(e),portionSize:he(e),isFetching:fe(e),followingInProgress:ge(e)}}),me)(Oe),ve=n(73),Ce=n.n(ve),_e=n.p+"static/media/BC.8041bfd8.png",Pe=n(111),we=n.n(Pe),ke=function(e){var t=Object(s.useState)(!1),n=Object(se.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)(e.status),o=Object(se.a)(c,2),u=o[0],l=o[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]);return a?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",onChange:function(e){l(e.currentTarget.value)},value:u}),Object(r.jsx)("button",{onClick:function(){i(!1),e.changeUserStatusThunkCreator(u)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:e.status})}),e.userId===e.myId&&e.isAuth?Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){i(!0)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}):null]})},Se=function(e){return e.profile?Object(r.jsxs)("div",{className:we.a.author,children:[Object(r.jsx)("img",{src:e.profile.photos.large,alt:"Avatar"}),Object(r.jsxs)("span",{children:[e.profile.fullName,Object(r.jsx)("p",{children:e.profile.aboutMe}),Object(r.jsx)("p",{children:e.profile.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":"\u041d\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(r.jsx)("p",{children:e.profile.lookingForAJobDescription})]}),Object(r.jsx)("span",{children:Object(r.jsx)(ke,{status:e.status,userId:e.userId,isAuth:e.isAuth,myId:e.myId,setUserStatus:e.setUserStatus,changeUserStatusThunkCreator:e.changeUserStatusThunkCreator})}),Object(r.jsxs)("span",{children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:",e.profile.contacts.facebook?Object(r.jsxs)("p",{children:["Facebook: ",e.profile.contacts.facebook]}):null,e.profile.contacts.github?Object(r.jsxs)("p",{children:["GitHub: ",e.profile.contacts.github]}):null,e.profile.contacts.instagram?Object(r.jsxs)("p",{children:["Instagram: ",e.profile.contacts.instagram]}):null,e.profile.contacts.mainLink?Object(r.jsxs)("p",{children:["Link: ",e.profile.contacts.mainLink]}):null,e.profile.contacts.twitter?Object(r.jsxs)("p",{children:["Twitter: ",e.profile.contacts.twitter]}):null,e.profile.contacts.vk?Object(r.jsxs)("p",{children:["VK: ",e.profile.contacts.vk]}):null,e.profile.contacts.website?Object(r.jsxs)("p",{children:["Website: ",e.profile.contacts.website]}):null,e.profile.contacts.youtube?Object(r.jsxs)("p",{children:["Youtube: ",e.profile.contacts.youtube]}):null]})]}):Object(r.jsx)(le,{})},ye=n(74),Te=n.n(ye),Ue=n(112),Ie="ADD-POST",Ne="DELETE-POST",Fe="SET-USER-PROFILE",Ee="CHANGE-STATUS",Ae="TOGGLE_IS_FETCHING",De={postData:[{id:1,message:"Whassaup homie!",likesCounter:25},{id:2,message:"Hawaya doin here?",likesCounter:10},{id:3,message:"Exdee git rect",likesCounter:6}],profile:null,status:"",isFetching:!1},Le=function(e){return{type:Ee,typedStatus:e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(T.a)(Object(T.a)({},e),{},{postData:[].concat(Object(y.a)(e.postData),[{id:4,message:t.postText,likesCounter:0}])});case Ne:return Object(T.a)(Object(T.a)({},e),{},{postData:Object(y.a)(e.postData.filter((function(e){return e.id!==t.postId})))});case Fe:return Object(T.a)(Object(T.a)({},e),{},{profile:t.profile});case Ee:return Object(T.a)(Object(T.a)({},e),{},{status:t.typedStatus});case Ae:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});default:return e}},ze=n(41),Be=n.n(ze),Re=n(113),Ge=n.n(Re),We=function(e){return Object(r.jsxs)("div",{className:Ge.a.post,children:[Object(r.jsx)("img",{src:e.avatar,alt:"Avatar"}),Object(r.jsx)("div",{children:e.message}),Object(r.jsxs)("span",{children:[e.likesCounter," Likes"]})]})},He=n(52),Ve=n(33),Je=a.a.memo((function(e){var t=e.postData.map((function(e){return Object(r.jsx)(We,{id:e.id,avatar:re.a,message:e.message,likesCounter:e.likesCounter},e.id)}));return Object(r.jsxs)("div",{className:Be.a.posts,children:[Object(r.jsx)("h2",{children:"My Posts"}),Object(r.jsx)(Xe,{addPost:e.addPost}),Object(r.jsx)("div",{className:Be.a.postList,children:t})]})})),Xe=function(e){var t=Ve.a().shape({newPost:Ve.b().required("First type your post's text")});return Object(r.jsx)(He.a,{initialValues:{newPost:""},onSubmit:function(t,n){var r,s=n.resetForm;r=t.newPost,e.addPost(r),s({values:""})},validationSchema:t,children:function(e){var t=e.values,n=e.errors,s=e.touched,a=e.handleChange,i=e.handleBlur,c=e.isValid,o=e.handleSubmit,u=e.dirty;return Object(r.jsxs)("form",{className:Be.a.writeMessage,children:[Object(r.jsx)("textarea",{placeholder:"Type your post...",name:"newPost",onChange:a,onBlur:i,value:t.newPost}),Object(r.jsx)("button",{disabled:!c&&!u,onClick:o,type:"submit",children:"Add Post"}),s.newPost&&n.newPost&&Object(r.jsx)("p",{className:Be.a.error,children:n.newPost})]})}})},Ye=Je,qe=Object(C.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:Ie,postText:e}}(t))}}}))(Ye),Ke=function(e){return Object(r.jsxs)("main",{className:Ce.a.profile,children:[Object(r.jsx)("div",{className:Ce.a.background,style:{backgroundImage:"url("+_e+")"}}),Object(r.jsx)(Se,{profile:e.profile,status:e.status,isAuth:e.isAuth,userId:e.userId,myId:e.myId,setUserStatus:e.setUserStatus,changeUserStatusThunkCreator:e.changeUserStatusThunkCreator}),Object(r.jsx)(qe,{})]})},Qe=n(106),Ze=n(24),$e=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.id),this.props.getUserProfileThunkCreator(e),this.props.getUserStatusThunkCreator(e)}},{key:"render",value:function(){var e=this.props.match.params.userId;return e||(e=this.props.id),Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(le,{}):null,Object(r.jsx)(Ke,Object(T.a)(Object(T.a)({},this.props),{},{userId:e,myId:this.props.id}))]})}}]),n}(a.a.Component),et={getUserProfileThunkCreator:function(e){return function(t){M(e).then((function(e){t({type:Fe,profile:e})}))}},getUserStatusThunkCreator:function(e){return function(){var t=Object(Ue.a)(Te.a.mark((function t(n){var r;return Te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:r=t.sent,n(Le(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeUserStatusThunkCreator:function(e){return function(t){B(e).then((function(n){0===n.resultCode&&t(Le(e))}))}},setUserStatus:Le},tt=Object(Ze.d)(P.f,Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,id:e.auth.id}}),et),Qe.a)($e),nt="SET-USER-DATA",rt="SET-ERROR-MESSAGE",st="SET-CAPTCHA-URL",at={id:null,login:null,email:null,captchaUrl:"",isAuth:!1,isFetching:!1,errorMessage:""},it=function(e,t,n,r){return{type:nt,data:{id:e,login:t,email:n,isAuth:r}}},ct=function(e){return{type:rt,errorMessage:e}},ot=function(){return function(e){return E().then((function(t){if(0===t.resultCode){var n=t.data,r=n.id,s=n.login,a=n.email;e(it(r,s,a,!0))}}))}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case nt:return Object(T.a)(Object(T.a)({},e),t.data);case rt:return Object(T.a)(Object(T.a)({},e),{},{errorMessage:t.errorMessage});case st:return Object(T.a)(Object(T.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},lt=n(60),dt=n.n(lt),jt=n.p+"static/media/logo.a797d364.svg",pt=function(e){return Object(r.jsxs)("header",{className:dt.a.header,children:[Object(r.jsxs)("div",{className:dt.a.logo,children:[Object(r.jsx)("img",{src:jt,alt:"Logo"}),Object(r.jsx)("span",{children:"Another React App"})]}),Object(r.jsx)("div",{className:dt.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login+" "+e.email,Object(r.jsx)("button",{onClick:e.logoutUserThunkCreator,children:"Logout"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},ht=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(pt,Object(T.a)({},this.props))}}]),n}(a.a.Component),bt={logoutUserThunkCreator:function(){return function(e){D().then((function(t){0===t.data.resultCode&&(e(it(null,null,null,!1)),e(ct("")))}))}}},ft=Object(C.b)((function(e){return{login:e.auth.login,email:e.auth.email,isFetching:e.auth.isFetching,isAuth:e.auth.isAuth}}),bt)(ht),gt=n(30),Ot=n.n(gt),mt=function(e){var t=Ve.a().shape({email:Ve.b().email("Valid email is required"),password:Ve.b().typeError("Must be string").required("Password is required").min(3,"Password must be more than 3 symbols")});return Object(r.jsx)("div",{className:Ot.a.loginWrapper,children:Object(r.jsx)(He.a,{initialValues:{email:"",password:"",remember:!1,captcha:""},validateOnBlur:!0,onSubmit:function(t){e.loginUserThunkCreator(t.email,t.password,t.remember,t.captcha)},validationSchema:t,children:function(t){var n=t.values,s=t.errors,a=t.touched,i=t.handleChange,c=t.handleBlur,o=t.isValid,u=t.handleSubmit,l=t.dirty;return Object(r.jsxs)("div",{className:Ot.a.loginForm,children:[e.errorMessage&&Object(r.jsx)("p",{className:"Logged Successful!"===e.errorMessage?Ot.a.success:Ot.a.error,children:e.errorMessage}),Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"text",name:"email",onChange:i,onBlur:c,value:n.email}),a.email&&s.email&&Object(r.jsx)("p",{className:Ot.a.error,children:s.email}),Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",name:"password",onChange:i,onBlur:c,value:n.password}),a.password&&s.password&&Object(r.jsx)("p",{className:Ot.a.error,children:s.password}),Object(r.jsxs)("label",{htmlFor:"remember",children:["Remember me",Object(r.jsx)("input",{type:"checkbox",name:"remember",onChange:i,onBlur:c,value:n.remember})]}),e.captchaUrl&&Object(r.jsxs)("label",{htmlFor:"captcha",children:["Captcha",Object(r.jsx)("input",{type:"text",name:"captcha",onChange:i,onBlur:c,value:n.captcha}),Object(r.jsx)("img",{src:e.captchaUrl,alt:"captcha"})]}),Object(r.jsx)("button",{disabled:!o&&!l,onClick:u,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}})})},xt={loginUserThunkCreator:function(e,t,n,r){return function(s){A(e,t,n,r).then((function(e){1===e.resultCode?s(ct(e.messages)):10===e.resultCode?(s(ct(e.messages)),L().then((function(e){var t;s((t=e.url,{type:st,captchaUrl:t}))}))):0===e.resultCode&&(s(ct("Logged Successful!")),s(ot()))}))}}},vt=Object(C.b)((function(e){return{errorMessage:e.auth.errorMessage,captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),xt)((function(e){return e.isAuth?Object(r.jsx)(P.a,{to:"/profile"}):Object(r.jsxs)("div",{className:Ot.a.loginWrapper,children:[Object(r.jsx)("h1",{children:"You need to login first:"}),Object(r.jsx)(mt,{loginUserThunkCreator:e.loginUserThunkCreator,errorMessage:e.errorMessage,captchaUrl:e.captchaUrl})]})})),Ct="SET-INITIALIZED",_t={initialized:!1},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ct:return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},wt=n(107),kt={friends:[{id:1,name:"Viktor",surname:"Doodiev",avatar:re.a},{id:2,name:"Piter",surname:"Parker",avatar:re.a},{id:3,name:"Woodie",surname:"Bamboozle",avatar:re.a},{id:4,name:"Vlad",surname:"Goonie",avatar:re.a},{id:5,name:"Josef",surname:"Tiki",avatar:re.a}]},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt;return e},yt=n(119),Tt=Object(Ze.c)({messagesPage:wt.b,profilePage:Me,sidebar:St,usersPage:ee,auth:ut,app:Pt}),Ut=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ze.d,It=Object(Ze.e)(Tt,Ut(Object(Ze.a)(yt.a))),Nt=a.a.lazy((function(){return n.e(3).then(n.bind(null,255))})),Ft=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ft,{}),Object(r.jsx)(_,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(P.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(tt,{})}}),Object(r.jsx)(P.b,{path:"/login",render:function(){return Object(r.jsx)(vt,{})}}),Object(r.jsx)(P.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(tt,{})}}),Object(r.jsx)(P.b,{path:"/dialogs",render:(e=Nt,function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(e,Object(T.a)({},t))})})}),Object(r.jsx)(P.b,{path:"/users",render:function(){return Object(r.jsx)(xe,{})}}),Object(r.jsx)(P.b,{path:"/news",component:w}),Object(r.jsx)(P.b,{path:"/music",component:k}),Object(r.jsx)(P.b,{path:"/settings",component:S})]})]}):Object(r.jsx)(le,{});var e}}]),n}(a.a.Component),Et={initialize:function(){return function(e){var t=e(ot());Promise.all([t]).then((function(){e({type:Ct})}))}}},At=Object(C.b)((function(e){return{initialized:e.app.initialized}}),Et)(Ft),Dt=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(C.a,{store:It,children:Object(r.jsx)(At,{})})})};n(247);c.a.render(Object(r.jsx)(Dt,{}),document.getElementById("root")),o()},29:function(e,t,n){e.exports={nav:"Sidebar_nav__18KQo",active:"Sidebar_active__9wFJE"}},30:function(e,t,n){e.exports={loginWrapper:"login_loginWrapper__3Ulem",loginForm:"login_loginForm__1UFcn",error:"login_error__I4I2E",success:"login_success__z5dWb"}},41:function(e,t,n){e.exports={posts:"MyPosts_posts__1P0sL",postList:"MyPosts_postList__Eg7wY",error:"MyPosts_error__8ySYA"}},58:function(e,t,n){e.exports={friendsWrapper:"Friends_friendsWrapper__2Lr-y",friends:"Friends_friends__3Ibbc",friendsTitle:"Friends_friendsTitle__2rBWY"}},59:function(e,t,n){e.exports={main:"Users_main__27bUd",photo:"Users_photo__1H5VH",pagBtn:"Users_pagBtn__1EMuU",selectedPage:"Users_selectedPage__16HiA",pagCont:"Users_pagCont__3TX8F"}},60:function(e,t,n){e.exports={header:"Header_header__1v0yI",logo:"Header_logo__3T0lc",loginBlock:"Header_loginBlock__3g_eP"}},69:function(e,t,n){e.exports={friend:"Friend_friend__2Xct_",friendImage:"Friend_friendImage__1Dnuv"}},73:function(e,t,n){e.exports={profile:"Profile_profile__15I9R",background:"Profile_background__2Vxu8"}}},[[248,1,2]]]);
//# sourceMappingURL=main.bf49ce41.chunk.js.map