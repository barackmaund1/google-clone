(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),o=(t(55),t(56),t(57),t(5)),s=t(40),m=t.n(s),i=t(81),u=t(35),h=t(18),d=(t(58),t(25)),E=t.n(d),g=t(39),_=t.n(g),p=t(80),v=t(3),b=Object(n.createContext)(),f=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(b.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(b)},P=t(30),j="SET_SEARCH_TERM",w=function(e,a){switch(console.log("Action",a),a.type){case j:return Object(P.a)(Object(P.a)({},e),{},{term:a.term});default:return e}},y=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=Object(n.useState)(""),r=Object(h.a)(l,2),o=r[0],s=r[1],m=Object(v.f)(),i=N(),d=Object(h.a)(i,2);Object(u.a)(d[0]);var g=d[1],b=function(e){e.preventDefault(),console.log("You hit the search button >>>",o),g({type:j,term:o}),m.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(E.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},placeholder:"Search Google or type a URL"}),c.a.createElement(_.a,null)),t?c.a.createElement("div",{className:"search__button"},c.a.createElement(p.a,{className:"search__buttonHiddden",type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{className:"search__buttonHiddden",variant:"outlined"},"i'm feeling lucky")):c.a.createElement("div",{className:"search__button"},c.a.createElement(p.a,{type:"submit",onClick:b,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{variant:"outlined"},"i'm feeling lucky")))},O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(o.b,{to:"/about"},"About"),c.a.createElement(o.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(o.b,{to:"/gmail"},"Gmail"),c.a.createElement(o.b,{to:"/images"},"Images"),c.a.createElement(m.a,{className:"home__appicon"}),c.a.createElement(i.a,{className:"home__avatar"}))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""}),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(y,null))))},S=(t(65),t(29)),k=t.n(S),x=t(41),C=function(e){var a=Object(n.useState)(null),t=Object(h.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(x.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyBX41Cihd74aIG1pNYK-pIlNReX6BVy_1g","&cx=").concat("e7bca036859be93d4","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},I=t(42),R=t.n(I),T=t(43),A=t.n(T),B=t(44),G=t.n(B),L=t(45),H=t.n(L),J=t(46),M=t.n(J),X=function(){var e=N(),a=Object(h.a)(e,2),t=a[0].term,n=(a[1],C(t).data);return console.log("data",n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})),c.a.createElement("div",{className:"search__headerBody"},c.a.createElement(y,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage__options"},c.a.createElement("div",{className:"searchPage__optionsLeft"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(E.a,null),c.a.createElement(o.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(R.a,null),c.a.createElement(o.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(A.a,null),c.a.createElement(o.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(G.a,null),c.a.createElement(o.b,{to:"/shopping"},"shopping")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(H.a,null),c.a.createElement(o.b,{to:"/map"},"maps")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(M.a,null),c.a.createElement(o.b,{to:"/more"},"more"))),c.a.createElement("div",{className:"searchPage__optionsRight"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(o.b,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"searchPage__results"},c.a.createElement("p",{className:"searchPage__resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults,"results(",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds) for",t),(null===n||void 0===n?void 0:n.items)&&(null===n||void 0===n?void 0:n.items.map((function(e){return c.a.createElement("div",{className:"searchPage__result"},c.a.createElement("a",{href:e.link},e.displayLink,"\ud83d\udc47"),c.a.createElement("a",{className:"searchPage__resultTitle",href:e.link},c.a.createElement("h2",{className:"searchPage__resultTitle"},e.title)),c.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))})))))};var Y=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null,c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/search"},c.a.createElement(X,null)),c.a.createElement(v.a,{path:"/"},c.a.createElement(O,null)))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{initialState:{term:null},reducer:w},c.a.createElement(Y,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.bf97cb9a.chunk.js.map