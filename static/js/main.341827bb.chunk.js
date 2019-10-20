(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(61)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),s=t(7),o=t(15),i=t(4),m=t(16),u=t(5),d={SAVE_RESTAURANTS:"SAVE_RESTAURANTS",HAS_ERROR:"HAS_ERROR",DATA_LOADING:"DATA_LOADING"},g=function(){return{type:d.DATA_LOADING}},f=function(){return function(e){e(g()),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:d.SAVE_RESTAURANTS,payload:e}}(t)),e(g())}).catch(function(a){var t;e((t=a.message,{type:d.HAS_ERROR,payload:t})),e(g())})}};function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var p={restaurantsListData:null,hasError:"",loadingRestaurants:!1};var v=Object(i.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d.SAVE_RESTAURANTS:return E({},e,{restaurantsListData:a.payload});case d.DATA_LOADING:return E({},e,{loadingRestaurants:!e.loadingRestaurants});case d.HAS_ERROR:return E({},e,{hasError:a.payload});default:return e}},Object(o.composeWithDevTools)(Object(i.applyMiddleware)(m.a))),h=(t(33),t(34),t(17)),b=t(18),N=t(21),k=t(19),O=t(22),j=(t(35),t(20)),y=t.n(j),R=(t(55),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("h1",null,a),r.a.createElement("a",{className:"error__link",href:"/"}," Go to home page"))}),S=(t(56),function(e){var a=e.imageUrl,t=e.title,n=e.categories,l=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},l))});S.defaultProps={categories:[],etaRange:""};var A=S,w=function(e){function a(){return Object(h.a)(this,a),Object(N.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(O.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.loadRestaurants()}},{key:"render",value:function(){var e=this.props,a=e.restaurantsListData,t=e.hasError;return e.loadingRestaurants&&r.a.createElement(y.a,{className:"loader",type:"ThreeDots",color:"#5fb709",height:100,width:100})||t&&r.a.createElement(R,{message:t})||r.a.createElement("div",{className:"restaurants-list"},a.map(function(e){var a=e.uuid,t=e.heroImageUrl,n=e.title,l=e.categories,c=e.etaRange,s=e.feedback;return r.a.createElement(A,{key:a,uuid:a,title:n,categories:l,etaRange:c.text,feedback:s,imageUrl:t})}))}}]),a}(n.Component);w.defaultProps={restaurantsListData:[],hasError:"",loadingRestaurants:!1};var D=w,U=t(8),T=function(e){return e},C=Object(U.a)(T,function(e){var a=e.restaurantsListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),P=Object(U.a)(T,function(e){return e.hasError}),L=Object(U.a)(T,function(e){return e.loadingRestaurants}),I=Object(s.b)(function(e){return{restaurantsListData:C(e),hasError:P(e),loadingRestaurants:L(e)}},function(e){return{loadRestaurants:function(){return e(f())}}})(D),G=t(3),V=t(12),H=t.n(V),F=(t(57),function(e){var a=Object(n.useState)(!1),t=Object(G.a)(a,2),l=t[0],c=t[1],s=e.iconUrl,o=e.placeholder,i=e.type,m=e.onChange,d=e.value,g=e.name,f=e.className,_=e.isSmall,E=H()("control",Object(u.a)({"control--focused":l},f,!!f)),p=H()("control__input",Object(u.a)({"control__input--small":_},f,!!f)),v=Object(n.useRef)();return r.a.createElement("div",{className:E,role:"presentation",onClick:function(){v.current.focus()}},!!s&&r.a.createElement("img",{src:s,alt:o,className:"control__icon"}),r.a.createElement("input",{ref:v,type:i,vlaue:d,onChange:m,onFocus:function(){return c(!0)},onBlur:function(){return c(!1)},name:g,placeholder:o,className:p}))});F.defaultProps={isSmall:!0,iconUrl:"",placeholder:"",type:"input",className:""};var M=F,x=(t(58),function(){var e=Object(n.useState)(""),a=Object(G.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(G.a)(c,2),o=s[0],i=s[1],m=Object(n.useState)(""),u=Object(G.a)(m,2),d=u[0],g=u[1],f=Object(n.useState)(!1),_=Object(G.a)(f,2),E=_[0],p=_[1],v=Object(n.useState)(!1),h=Object(G.a)(v,2),b=h[0],N=h[1];return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("img",{className:"header__logo",alt:"Uber Eats",src:"./images/logo.svg"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(M,{name:"address",value:t,onChange:function(e){return l(e.target.value)},placeholder:"address",iconUrl:"./images/address-icon.svg"}),r.a.createElement(M,{name:"time",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Time",type:"time"})),r.a.createElement(M,{name:"search",value:d,onChange:function(e){return g(e.target.value)},placeholder:"Search",iconUrl:"./images/search-icon.svg",className:"header__search"}),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{onClick:function(){N(!b),p(!1)},type:"button",className:"header__toggle-btn"},r.a.createElement("img",{src:"./images/address-icon.svg",alt:"address icon"})),r.a.createElement("button",{onClick:function(){p(!E),N(!1)},type:"button",className:"header__toggle-btn"},r.a.createElement("img",{src:"./images/search-icon.svg",alt:"search icon"}))),r.a.createElement("a",{className:"header__link",href:"/sign-in"},"Sign in")),(E||b)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},E&&r.a.createElement(M,{name:"search",value:d,onChange:function(e){return g(e.target.value)},placeholder:"Search",iconUrl:"./images/search-icon.svg",isSmall:!1}),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{name:"time",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Time",type:"time",isSmall:!1,className:"mobile-controls--label-when"}),r.a.createElement(M,{name:"address",value:t,onChange:function(e){return l(e.target.value)},placeholder:"address",iconUrl:"./images/address-icon.svg",isSmall:!1,className:"mobile-controls--label-to"})),r.a.createElement("button",{onClick:function(){p(!1),N(!1)},type:"button",className:"mobile-controls__close"},r.a.createElement("img",{src:"./images/cross-icon.svg",alt:"cross icon"})))))}),B=(t(59),t(60),function(e){var a=e.name,t=e.value,n=e.onSelect,l=e.options,c=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:a,value:t,onChange:n,className:"select__input"},l.map(function(e){var a=e.value,n=e.label;return r.a.createElement("option",{value:a,selected:t===a},n)})),c&&r.a.createElement("img",{className:"select__icon",src:c,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arr-down.svg",alt:"arrow down"}))});B.defaultProps={options:[],iconUrl:"",onSelect:function(){}};var J=B,Q=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{src:"./images/f-logo.svg",alt:"Uber Eats",className:"footer__logo"}),r.a.createElement(J,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],value:"en",iconUrl:"./images/world-icon.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#/",className:"footer__mobile-app"},r.a.createElement("img",{alt:"download ios",src:"./images/dl-ios.png"})),r.a.createElement("a",{href:"#/",className:"footer__mobile-app"},r.a.createElement("img",{alt:"download android",src:"./images/dl-android.png"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--intended",href:"#/"},"About UberEats"),r.a.createElement("a",{className:"links__link",href:"#/"},"Read our blog"),r.a.createElement("a",{className:"links__link",href:"#/"},"Sign up to deliver"),r.a.createElement("a",{className:"links__link",href:"#/"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{className:"links__link links__link--intended",href:"#/"},"Get help"),r.a.createElement("a",{className:"links__link",href:"#/"},"Read FAQs"),r.a.createElement("a",{className:"links__link",href:"#/"},"View all cities"),r.a.createElement("a",{className:"links__link",href:"#/"},r.a.createElement("img",{alt:"language",src:"./images/lang-icon.svg"}),"English"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__bottom-misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{className:"links__link",href:"#/"},"Privacy policy"),r.a.createElement("a",{className:"links__link",href:"#/"},"Terms of use"),r.a.createElement("a",{className:"links__link",href:"#/"},"Pricing")),r.a.createElement("div",{className:"footer__bottom-social social"},r.a.createElement("a",{className:"social__link",href:"#/"},r.a.createElement("img",{alt:"facebook",src:"./images/fb-icon.svg"})),r.a.createElement("a",{className:"social__link",href:"#/"},r.a.createElement("img",{alt:"twitter",src:"./images/tw-icon.svg"})),r.a.createElement("a",{className:"social__link",href:"#/"},r.a.createElement("img",{alt:"instagram",src:"./images/inst-icon.svg"})))))))},W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement(I,null))),r.a.createElement(Q,null))};c.a.render(r.a.createElement(s.a,{store:v},r.a.createElement(W,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.341827bb.chunk.js.map