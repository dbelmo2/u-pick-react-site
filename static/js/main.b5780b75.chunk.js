(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(19),c=n.n(i),s=(n(28),n(13)),r=n(5),l=n(11),d=(n(29),n(1)),h=["btn--primary","btn--outline"],j=["btn--medium","btn--large","btn--mobile","btn--wide"],b=["primary","blue","red","green"],m=function(e){var t=e.children,n=e.type,a=e.onClick,o=e.buttonStyle,i=e.buttonSize,c=e.buttonColor,s=h.includes(o)?o:h[0],r=b.includes(c)?c:null,l=j.includes(i)?i:j[0];return Object(d.jsx)("button",{className:"btn ".concat(s," ").concat(l," ").concat(r),onClick:a,type:n,children:t})},u=(n(31),n(0));var g={bannerLogo:{width:58,height:50}},x=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),h=c[0],j=c[1],b=function(){return o(!1)},x=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(a.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.b.Provider,{value:{color:"#fff"},children:Object(d.jsx)("div",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container container",children:[Object(d.jsxs)(r.b,{to:"/u-pick-react-site",className:"navbar-logo",onClick:b,children:[Object(d.jsx)("img",{alt:"",src:"/images/upick-logo.png",style:g.bannerLogo}),"UPICK"]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return o(!n)},children:n?Object(d.jsx)(l.c,{}):Object(d.jsx)(l.a,{})}),Object(d.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/HowItWorks",className:"nav-links",onClick:b,children:"How it works"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/Contact",className:"nav-links",onClick:b,children:"Contact"})}),Object(d.jsx)("li",{className:"nav-btn",children:h?Object(d.jsx)(r.b,{to:"/Download",className:"btn-link",children:Object(d.jsx)(m,{buttonStyle:"btn--outline",children:" DOWNLOAD"})}):Object(d.jsx)(r.b,{to:"/sign-up",className:"btn-link",onClick:b,children:Object(d.jsx)(m,{buttonSize:"btn-mobile",buttonStyle:"btn--outline",children:" DOWNLOAD"})})})]})]})})})})},p=n(3),O=n(9),w=(n(37),n(38),n(22)),f=n.n(w);function v(e){e.preventDefault(),f.a.sendForm("service_8i41bav","template_xnxh5ew",e.target,"user_PQ7gyW7ogbb3RUw963d7N").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}function _(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:v,children:[Object(d.jsx)("input",{className:"contact__email-input",name:"email",type:"email",placeholder:"Your Email"}),Object(d.jsx)("input",{height:"50px",className:"contact__message-input",name:"message",type:"message",placeholder:"Your messasge"}),Object(d.jsx)(m,{buttonStyle:"btn--outline",type:"submit",children:"Submit"})]})})}var k=function(e){var t=e.lightBg,n=e.topLine,a=e.lightText,o=e.lightTextDesc,i=e.headline,c=e.description,s=e.buttonLabel,l=e.img,h=e.alt,j=e.imgStart,b=e.hasDownloadButton,u=e.hasContactForm,g=e.hasButton;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row home_hero-row",style:{display:"flex",flexDirection:"start"===j?"row-reverse":"row"},children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(d.jsx)("div",{className:"top-line",children:n}),Object(d.jsx)("h1",{className:a?"heading":"heading dark",children:i}),Object(d.jsxs)("p",{className:o?"home__hero-subtitle":"home__hero-subtitle dark",children:[" ",c]}),b?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"home__download-container",children:[Object(d.jsx)("a",{href:"https://apps.apple.com/us/app/u-pick/id1549772448",children:Object(d.jsx)("img",{alt:"AppStore",src:"../images/appstore_badge.svg",className:"home__download-img"})}),Object(d.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.demboiz.upick",children:Object(d.jsx)("img",{alt:"Google Play",src:"../images/google_play_badge.png",className:"home__download-img"})})]})}):null,u?Object(d.jsx)(_,{children:" "}):null,g?Object(d.jsx)(r.b,{to:"/Download",children:Object(d.jsx)(m,{buttonStyle:"btn--outline",children:s})}):null]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"home__hero-img-wrapper",children:Object(d.jsx)("img",{src:l,alt:h,className:"home__hero-img"})})})]})})})})};n(41);var y=function(){var e="https://twitter.com/UPickTweets",t="https://www.instagram.com/upickig/",n="https://www.linkedin.com/in/belmontedanny/",o=Object(a.useState)(!1),i=Object(s.a)(o,2),c=i[0],h=i[1];return Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsxs)("div",{className:"footer__links",children:[Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"About Us"}),Object(d.jsx)(r.b,{to:"/HowItWorks",children:" How it works"}),Object(d.jsx)("a",{href:"https://docs.google.com/document/d/1Zh-eD9fstAjKVdRT5wVubkU4tq-jX5xSlOE_RbRECXk/edit",children:"Privacy Policy"}),Object(d.jsx)("a",{href:"https://docs.google.com/document/d/1prj6eKVwhc6JW3hu8AwGMi28ShaRFSGNxacRWzIJ3Uc/edit",children:" Terms of Use"})]}),Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"Contact Us"}),Object(d.jsx)(r.b,{to:"/Contact",children:" Email"}),Object(d.jsx)("a",{href:n,children:" LinkedIn"})]}),Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"Social Media"}),Object(d.jsx)("a",{href:t,children:" Instagram"}),Object(d.jsx)("a",{href:e,children:" Twitter"})]})]}),Object(d.jsxs)("div",{className:"footer__bottom-bar",children:[Object(d.jsxs)("div",{className:"footer__linkedin-container",children:[Object(d.jsx)("a",{href:n,children:Object(d.jsx)("img",{onClick:function(){console.log("linkedin Click")},onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},src:"../images/owo.jpg",alt:"logo",className:"footer__linkedin-pic"})}),Object(d.jsx)("div",{className:c?"footer__linkedin-text-wrapper-active":"footer__linkedin-text-wrapper",children:"Hi! I built this website using React. Click here to visit my LinkedIn."})]}),Object(d.jsx)("a",{href:e,children:Object(d.jsx)("div",{className:"footer__social-icon",children:Object(d.jsx)(l.d,{color:"#fff",size:35})})}),Object(d.jsx)("a",{href:t,children:Object(d.jsx)("div",{className:"footer__social-icon",children:Object(d.jsx)(l.b,{size:35,color:"#fff"})})})]})]})},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available Now",headline:"Make deciding where to eat fast and easy",description:"Tailored for indecisive couples, or any two people who can't decide on where to eat, UPick streamlines the process of selecting a place both parties can agree on.",buttonLabel:"Download Now",imgStart:"",img:"../images/upick_logo_square.png",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!0},C={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"How it works",headline:"Get restaurant suggestions for any location",description:"UPick uses Google's Places API to search for restaurants near a chosen location. Simply set a custom location to search near, or use your current one, and UPick will search for and suggest restaurants near the chosen location. Once a session has started, simply begin swiping and UPick will notify you when both parties have agreed.",buttonLabel:"See Demo",imgStart:"start",img:"../images/about_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!1},D={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Wanna get in touch?",headline:"Contact Us",description:"We're actively looking for ways to improve UPick and would love to hear what you have to say!",buttonLabel:"Download Now",imgStart:"",img:"../images/contact_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!0,hasButton:!1},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available now on Google Play and the App Store",headline:"Download Now!",description:"UPick is now available on both Android and Iphone devices. Download for free to start your search!",buttonLabel:"Download please",imgStart:"start",img:"../images/download_image.svg",alt:"Credit card",hasDownloadButton:!0,hasContactForm:!1,hasButton:!1};var B=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(O.a)({},N)),Object(d.jsx)(k,Object(O.a)({},C)),Object(d.jsx)(k,Object(O.a)({},S)),Object(d.jsx)(k,Object(O.a)({},D)),Object(d.jsx)(y,{})]})},L={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"How it works",headline:"Get restaurant suggestions for any location",description:"UPick uses Google's Places API to search for restaurants near a chosen location. Simply set a custom location to search near, or use your current one, and UPick will search for and suggest restaurants near the chosen location. Once a session has started, simply begin swiping and UPick will notify you when both parties have agreed.",buttonLabel:"See Demo",imgStart:"start",img:"../images/about_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!1};var P=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(O.a)({},L)),Object(d.jsx)(y,{})]})},T={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Wanna get in touch?",headline:"Contact Us",description:"We're actively looking for ways to improve UPick and would love to hear what you have to say!",buttonLabel:"Download Now",imgStart:"",img:"../images/contact_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!0,hasButton:!1};var F=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(O.a)({},T)),Object(d.jsx)(y,{})]})},U={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available now on Google Play and the App Store",headline:"Download Now!",description:"UPick is now available on both Android and Iphone devices. Download for free to start your search!",buttonLabel:"Download please",imgStart:"start",img:"../images/download_image.svg",alt:"Credit card",hasDownloadButton:!0,hasContactForm:!1,hasButton:!1};var A=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(O.a)({},U)),Object(d.jsx)(y,{})]})};var I=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/u-pick-react-site",exact:!0,component:B}),Object(d.jsx)(p.a,{path:"/HowItWorks",component:P}),Object(d.jsx)(p.a,{path:"/Contact",component:F}),Object(d.jsx)(p.a,{path:"/Download",component:A})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),W()}},[[42,1,2]]]);
//# sourceMappingURL=main.b5780b75.chunk.js.map