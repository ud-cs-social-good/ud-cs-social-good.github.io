(this["webpackJsonpcssg-website"]=this["webpackJsonpcssg-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cssg_logo_purple.e3aced0b.svg"},,,function(e,t,a){e.exports=a.p+"static/media/meeting.b242430a.jpg"},function(e,t,a){e.exports=a.p+"static/media/maria.380de9cf.png"},function(e,t,a){e.exports=a.p+"static/media/diane.938e3c3f.png"},function(e,t,a){e.exports=a.p+"static/media/emily.9b9ec1f3.jpg"},function(e,t,a){e.exports=a.p+"static/media/lauren.54df313e.jpg"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),c=(a(26),a(27),a(3)),o=a(6),m=a(5),u=(a(28),a(13)),s=a.n(u);function d(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],i=a[1],o=Object(c.e)(),u=!(e.windowSize.width>800);return Object(n.useEffect)((function(){e.windowSize.width>800&&i(!1)}),[e.windowSize.width]),Object(n.useEffect)((function(){i(!1)}),[o]),l.a.createElement("nav",{className:"NavBar"},l.a.createElement("div",{className:"NavContents"},l.a.createElement(E,{route:"/"},l.a.createElement("img",{className:"NavImage",src:s.a,alt:"CS + Social Good Logo"})),l.a.createElement(p,{mobile:u,toggle:function(){i(!r)},toggled:r},l.a.createElement(h,{mobile:u,links:e.links}))))}function E(e){return l.a.createElement(o.b,{to:e.route},l.a.createElement("button",{className:"NavLink"},e.children))}function h(e){var t=e.links.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(E,{route:e.route},e.name))})),a=e.mobile?"Column":"Row";return l.a.createElement("ul",{className:"NavList ".concat(a)},t)}function p(e){var t=l.a.createElement("button",{key:"button",onClick:e.toggle,"aria-label":"menu",className:"NavTogglerButton NavLink"},l.a.createElement("svg",{viewBox:"0 0 100 80",width:"20",height:"20"},l.a.createElement("rect",{width:"100",height:"15"}),l.a.createElement("rect",{y:"30",width:"100",height:"15"}),l.a.createElement("rect",{y:"60",width:"100",height:"15"}))),a=[];return e.mobile&&a.push(t),e.mobile&&!e.toggled||a.push(e.children),l.a.createElement("div",{className:"NavTogglerContainer"},a)}a(34);function v(e){return l.a.createElement("div",{className:"Card"},l.a.createElement("div",{className:"Centered"},e.children))}function f(e){return l.a.createElement("div",{className:"Card"},l.a.createElement("div",{className:"Dense"},e.children))}function g(e){return l.a.createElement("div",{className:"Card Split"},l.a.createElement("div",{className:"Left"},e.left),l.a.createElement("div",{className:"Right"},e.right))}function w(e){return l.a.createElement("div",{className:"Card Split Name"},l.a.createElement("div",{className:"Picture Left"},e.picture),l.a.createElement("div",{className:"Right"},e.info))}a(35);a(36);function b(e){return l.a.createElement("div",{className:"HeaderBanner"},l.a.createElement("div",{className:"HeaderName"},"University of Delaware",l.a.createElement("br",null),"CS + Social Good"),l.a.createElement("div",null,e.children))}a(37);var N=a(16),y=a.n(N);a(38);a(39);var C=a(17),S=a.n(C),k=a(18),j=a.n(k),M=a(19),L=a.n(M),x=a(20),D=a.n(x);a(40);a(41);var O=function(){return{width:window.innerWidth,height:window.innerHeight}};var T=[{name:"About",route:"/about",component:function(){return l.a.createElement("div",{className:"View"},l.a.createElement("h1",null,"About Us"),l.a.createElement("div",{className:"Cards"},l.a.createElement(f,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Our Mission"),l.a.createElement("p",null,"To foster interest in applying technical knowledge and experience in ways that will help our community and promote technology as a means for positive social change"),l.a.createElement("hr",null),l.a.createElement("h2",null,"Our Goals"),l.a.createElement("ul",null,l.a.createElement("li",null,"Connect students with technical projects that help promote social good"),l.a.createElement("li",null,"Discuss and address topics relating to technological ethics"),l.a.createElement("li",null,"Help educated K-12 student on basic programing concepts")),l.a.createElement("hr",null),l.a.createElement("h2",null,"What We Do"),l.a.createElement("ul",null,l.a.createElement("li",null,"Assistant teach and plan curricula for local middle schools and high schools good"),l.a.createElement("li",null,"Work on programing projects that aim to positively effect the local community"),l.a.createElement("li",null,"Host discussions regarding ethical topics related to computing"),l.a.createElement("li",null,"Host social and networking events for University of Delaware Computer Science majors"))))))}},{name:"Events",route:"/events",component:function(){return l.a.createElement("div",{className:"View"},l.a.createElement("h1",null,"Events"),l.a.createElement("div",{className:"Cards"},l.a.createElement(v,null,l.a.createElement("div",null,l.a.createElement("h2",null,"No Events Right Now"),l.a.createElement("p",null,"Check back in a couple days to see all of our past and future events!")))))}},{name:"Team",route:"/team",component:function(){return l.a.createElement("div",{className:"View"},l.a.createElement("h1",null,"Meet The CS+SG 2020-2021 Executive Board"),l.a.createElement("div",{className:"Cards"},l.a.createElement(w,{picture:l.a.createElement("img",{src:S.a,alt:"The Meticulous Maria"}),info:l.a.createElement("div",null,l.a.createElement("h1",null,"Maria van Venrooy"),l.a.createElement("h3",null,"President"),l.a.createElement("ul",null,l.a.createElement("li",null,"Major: Computer Science "),l.a.createElement("li",null,"Minors: Mathematics and Women's Studies"),l.a.createElement("li",null,"Hobbies: My hobbies include reading, playing ukulele, printmaking, removing invasive plants from White Clay Creek, and saving the world")))}),l.a.createElement(w,{picture:l.a.createElement("img",{src:j.a,alt:"The Dynamic Diane"}),info:l.a.createElement("div",null,l.a.createElement("h1",null,"Diane Vinson"),l.a.createElement("h3",null,"Vice President"),l.a.createElement("ul",null,l.a.createElement("li",null,"Major: Computer Science with a concentration in cybersecurity "),l.a.createElement("li",null,"Minors: Mathematics, Cybersecurity, and Legal Studies"),l.a.createElement("li",null,"Fun Fact: I've never been on a plane")))}),l.a.createElement(w,{picture:l.a.createElement("img",{src:L.a,alt:"The Enticing Emily"}),info:l.a.createElement("div",null,l.a.createElement("h1",null,"Emily Taylor"),l.a.createElement("h3",null,"Treasurer"),l.a.createElement("ul",null,l.a.createElement("li",null,"Major: Computer Science with a concentration in software engineering "),l.a.createElement("li",null,"Fun Fact: I have been to Universal Studios in Florida at least 8 times, and the one in California once")))}),l.a.createElement(w,{picture:l.a.createElement("img",{src:D.a,alt:"Lord Lauren"}),info:l.a.createElement("div",null,l.a.createElement("h1",null,"Lauren Baron"),l.a.createElement("h3",null,"Secretary"),l.a.createElement("ul",null,l.a.createElement("li",null,"Major: Computer Science"),l.a.createElement("li",null,"Hobbies: I work out of the HCI Lab to apply Virtual Reality to healthcare problems and am a backend developer for a website for our Department of Agriculture research. I also love to travel and paint/draw :)")))})))}},{name:"Volunteering",route:"/volunteering",component:function(){return l.a.createElement("div",{className:"View"},l.a.createElement("h1",null,"Volunteering"))}}],V=[{name:"Home",route:"/",component:function(){return l.a.createElement("div",{className:"View"},l.a.createElement("h1",null,"University of Delaware CS + Social Good"),l.a.createElement("div",{className:"Cards"},l.a.createElement(g,{left:l.a.createElement("img",{src:y.a,alt:"CS + Social Good Logo"}),right:l.a.createElement("div",null,l.a.createElement("h2",null,"Interest Sessions 8/31"),"Join us at one of our three interest sessions on Monday, August 31st, 2020. We'll be talking more about what our club does and answering any questions you may have.",l.a.createElement("br",null),"Our interest sessions will be held from:",l.a.createElement("ul",null,l.a.createElement("li",null,"1:15 - 1:30pm"),l.a.createElement("li",null,"2 - 2:15pm"),l.a.createElement("li",null,"2:40 - 2:55pm")),"Location is TBD! (For sure online; we'll post a zoom link)")})))}}];function H(){var e=function(){var e=Object(n.useState)(O()),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=function(){l(O())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),a}(),t=T.concat(V).map((function(e){return l.a.createElement(c.a,{key:e.name,exact:!0,path:e.route,component:e.component})}));return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(b,null,l.a.createElement("div",null,"Meetings will resume in the 2020 fall semester")),l.a.createElement(d,{windowSize:e,links:T}),t))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.db9b8ac0.chunk.js.map