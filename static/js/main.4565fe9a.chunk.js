(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),i=a(19),c=a.n(i),s=(a(28),a(13)),r=a(5),l=a(11),d=(a(29),a(1)),h=["btn--primary","btn--outline"],j=["btn--medium","btn--large","btn--mobile","btn--wide"],b=["primary","blue","red","green"],m=function(e){var t=e.children,a=e.type,n=e.onClick,o=e.buttonStyle,i=e.buttonSize,c=e.buttonColor,s=h.includes(o)?o:h[0],r=b.includes(c)?c:null,l=j.includes(i)?i:j[0];return Object(d.jsx)("button",{className:"btn ".concat(s," ").concat(l," ").concat(r),onClick:n,type:a,children:t})},g=(a(31),a(0));var u={bannerLogo:{width:58,height:50}},p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),c=Object(s.a)(i,2),h=c[0],j=c[1],b=function(){return o(!1)},p=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.b.Provider,{value:{color:"#fff"},children:Object(d.jsx)("div",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container container",children:[Object(d.jsxs)(r.b,{to:"/u-pick-react-site/",className:"navbar-logo",onClick:b,children:[Object(d.jsx)("img",{alt:"",src:"images/upick-logo.png",style:u.bannerLogo}),"UPICK"]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return o(!a)},children:a?Object(d.jsx)(l.c,{}):Object(d.jsx)(l.a,{})}),Object(d.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/HowItWorks",className:"nav-links",onClick:b,children:"How it works"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{to:"/Contact",className:"nav-links",onClick:b,children:"Contact"})}),Object(d.jsx)("li",{className:"nav-btn",children:h?Object(d.jsx)(r.b,{to:"/Download",className:"btn-link",children:Object(d.jsx)(m,{buttonStyle:"btn--outline",children:" DOWNLOAD"})}):Object(d.jsx)(r.b,{to:"/Download",className:"btn-link",onClick:b,children:Object(d.jsx)(m,{buttonSize:"btn-mobile",buttonStyle:"btn--outline",children:" DOWNLOAD"})})})]})]})})})})},x=a(3),O=a(8),w=(a(37),a(38),a(22)),f=a.n(w);function v(e){e.preventDefault(),f.a.sendForm("service_8i41bav","template_xnxh5ew",e.target,"user_PQ7gyW7ogbb3RUw963d7N").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}function k(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:v,children:[Object(d.jsx)("input",{className:"contact__email-input",name:"email",type:"email",placeholder:"Your Email"}),Object(d.jsx)("input",{height:"50px",className:"contact__message-input",name:"message",type:"message",placeholder:"Your messasge"}),Object(d.jsx)(m,{buttonStyle:"btn--outline",type:"submit",children:"Submit"})]})})}var _=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,o=e.lightTextDesc,i=e.headline,c=e.description,s=e.buttonLabel,l=e.img,h=e.alt,j=e.imgStart,b=e.hasDownloadButton,g=e.hasContactForm,u=e.hasButton,p=e.inHomePage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row home_hero-row",style:{display:"flex",flexDirection:"start"===j?"row-reverse":"row"},children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(d.jsx)("div",{className:"top-line",children:a}),Object(d.jsx)("h1",{className:n?"heading":"heading dark",children:i}),Object(d.jsxs)("p",{className:o?"home__hero-subtitle":"home__hero-subtitle dark",children:[" ",c]}),b?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"home__download-container",children:[Object(d.jsx)("a",{href:"https://apps.apple.com/us/app/u-pick/id1549772448",children:Object(d.jsx)("img",{alt:"AppStore",src:p?"images/appstore_badge.svg":"./u-pick-react-site/images/appstore_badge.svg",className:"home__download-img"})}),Object(d.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.demboiz.upick",children:Object(d.jsx)("img",{alt:"Google Play",src:p?"images/google_play_badge.png":"./u-pick-react-site/images/google_play_badge.png",className:"home__download-img"})})]})}):null,g?Object(d.jsx)(k,{children:" "}):null,u?Object(d.jsx)(r.b,{to:"/Download",children:Object(d.jsx)(m,{buttonStyle:"btn--outline",children:s})}):null]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"home__hero-img-wrapper",children:Object(d.jsx)("img",{src:l,alt:h,className:"home__hero-img"})})})]})})})})};a(41);var y=function(e){var t=e.inHomePage,a="https://twitter.com/UPickTweets",o="https://www.instagram.com/upickig/",i="https://www.linkedin.com/in/belmontedanny/",c=Object(n.useState)(!1),h=Object(s.a)(c,2),j=h[0],b=h[1];return Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsxs)("div",{className:"footer__links",children:[Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"About Us"}),Object(d.jsx)(r.b,{to:"/HowItWorks",children:" How it works"}),Object(d.jsx)("a",{href:"https://docs.google.com/document/d/1Zh-eD9fstAjKVdRT5wVubkU4tq-jX5xSlOE_RbRECXk/edit",children:"Privacy Policy"}),Object(d.jsx)("a",{href:"https://docs.google.com/document/d/1prj6eKVwhc6JW3hu8AwGMi28ShaRFSGNxacRWzIJ3Uc/edit",children:" Terms of Use"})]}),Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"Contact Us"}),Object(d.jsx)(r.b,{to:"/Contact",children:" Email"}),Object(d.jsx)("a",{href:i,children:" LinkedIn"})]}),Object(d.jsxs)("div",{className:"footer__link-items",children:[Object(d.jsx)("h2",{children:"Social Media"}),Object(d.jsx)("a",{href:o,children:" Instagram"}),Object(d.jsx)("a",{href:a,children:" Twitter"})]})]}),Object(d.jsxs)("div",{className:"footer__bottom-bar",children:[Object(d.jsxs)("div",{className:"footer__linkedin-container",children:[Object(d.jsx)("a",{href:i,children:Object(d.jsx)("img",{onClick:function(){console.log("linkedin Click")},onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},src:t?"images/owo.jpg":"./u-pick-react-site/images/owo.jpg",alt:"logo",className:"footer__linkedin-pic"})}),Object(d.jsx)("div",{className:j?"footer__linkedin-text-wrapper-active":"footer__linkedin-text-wrapper",children:"Hi! I built this website using React. Click here to visit my LinkedIn."})]}),Object(d.jsx)("a",{href:a,children:Object(d.jsx)("div",{className:"footer__social-icon",children:Object(d.jsx)(l.d,{color:"#fff",size:35})})}),Object(d.jsx)("a",{href:o,children:Object(d.jsx)("div",{className:"footer__social-icon",children:Object(d.jsx)(l.b,{size:35,color:"#fff"})})})]})]})},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available Now",headline:"Make deciding where to eat fast and easy",description:"Tailored for indecisive couples, or any two people who can't decide on where to eat, UPick streamlines the process of selecting a place both parties can agree on.",buttonLabel:"Download Now",imgStart:"",img:"images/upick_logo_square.png",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!0,inHomePage:!0},D={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"How it works",headline:"Get restaurant suggestions for any location",description:"UPick uses Google's Places API to search for restaurants near a chosen location. Simply set a custom location to search near, or use your current one, and UPick will search for and suggest restaurants near the chosen location. Once a session has started, simply begin swiping and UPick will notify you when both parties have agreed.",buttonLabel:"See Demo",imgStart:"start",img:"images/about_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!1,inHomePage:!0},C={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Wanna get in touch?",headline:"Contact Us",description:"We're actively looking for ways to improve UPick and would love to hear what you have to say!",buttonLabel:"Download Now",imgStart:"",img:"images/contact_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!0,hasButton:!1,inHomePage:!0},P={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available now on Google Play and the App Store",headline:"Download Now!",description:"UPick is now available on both Android and Iphone devices. Download for free to start your search!",buttonLabel:"Download please",imgStart:"start",img:"images/download_image.svg",alt:"Credit card",hasDownloadButton:!0,hasContactForm:!1,hasButton:!1,inHomePage:!0},S={inHomePage:!0};var B=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,Object(O.a)({},N)),Object(d.jsx)(_,Object(O.a)({},D)),Object(d.jsx)(_,Object(O.a)({},P)),Object(d.jsx)(_,Object(O.a)({},C)),Object(d.jsx)(y,Object(O.a)({},S))]})},L={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"How it works",headline:"Get restaurant suggestions for any location",description:"UPick uses Google's Places API to search for restaurants near a chosen location. Simply set a custom location to search near, or use your current one, and UPick will search for and suggest restaurants near the chosen location. Once a session has started, simply begin swiping and UPick will notify you when both parties have agreed.",buttonLabel:"See Demo",imgStart:"start",img:"./u-pick-react-site/images/about_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!1,hasButton:!1,inHomePage:!1};var T=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,Object(O.a)({},L)),Object(d.jsx)(y,{})]})},F={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Wanna get in touch?",headline:"Contact Us",description:"We're actively looking for ways to improve UPick and would love to hear what you have to say!",buttonLabel:"Download Now",imgStart:"",img:"./u-pick-react-site/images/contact_image.svg",alt:"Credit card",hasDownloadButton:!1,hasContactForm:!0,hasButton:!1,inHomePage:!1};var U=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,Object(O.a)({},F)),Object(d.jsx)(y,{})]})},H={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Available now on Google Play and the App Store",headline:"Download Now!",description:"UPick is now available on both Android and Iphone devices. Download for free to start your search!",buttonLabel:"Download please",imgStart:"start",img:"./u-pick-react-site/images/download_image.svg",alt:"Credit card",hasDownloadButton:!0,hasContactForm:!1,hasButton:!1,inHomePage:!1};var A=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,Object(O.a)({},H)),Object(d.jsx)(y,{})]})};var I=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/u-pick-react-site",exact:!0,component:B}),Object(d.jsx)(x.a,{path:"/HowItWorks",component:T}),Object(d.jsx)(x.a,{path:"/Contact",component:U}),Object(d.jsx)(x.a,{path:"/Download",component:A})]})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),W()}},[[42,1,2]]]);
//# sourceMappingURL=main.4565fe9a.chunk.js.map