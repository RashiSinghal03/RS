(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,s){},function(t,e,s){"use strict";var n=s(4),i=s.n(n);e.default=i.a},function(t,e){},,,function(t,e,s){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\r\n    404\r\n")])},i=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return i})},function(t,e,s){"use strict";var n=s(7),i=s(3),a=s(0),o=Object(a.a)(i.default,n.a,n.b,!1,null,null,null);e.default=o.exports},function(t,e,s){"use strict";var n=s(2);s.n(n).a},,,,function(t,e,s){"use strict";s.r(e);var n=s(1),i={props:["profile"]},a=s(0),o={props:["menu"],data:()=>({selectedLink:"",showMenu:!0,menuIconAllow:!1}),created:function(){this.selectedLink=this.$route.path,console.log(this.$route.path)},methods:{menuToggle:function(){this.showMenu=!this.showMenu},selectLink:function(t){this.selectedLink=t}}},l={props:["data"],components:{Profile:Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("div",{staticClass:"profile-content"},[s("div",{staticClass:"profile-pic"},[s("img",{attrs:{src:t.profile.image,alt:"User"}})]),t._v(" "),s("div",{staticClass:"profile-name title"},[t._v("\r\n          "+t._s(t.profile.name)+"\r\n        ")]),t._v(" "),s("div",{staticClass:"profile-designation subtitle"},[t._v("\r\n          "+t._s(t.profile.domains)+"\r\n        ")]),t._v(" "),s("div",{staticClass:"profile-about body"},[t._v("\r\n          "+t._s(t.profile.vision)+"\r\n        ")]),t._v(" "),s("ul",{staticClass:"profile-footer"},t._l(t.profile.link,function(e){return s("a",{key:e.title,attrs:{href:e.url}},[s("li",[s("i",{class:"profile-icon "+e.icon}),t._v("\r\n              "+t._s(e.label)+"\r\n            ")])])}),0)])])},[],!1,null,null,null).exports,Menu:Object(a.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("div",{staticClass:"menu-control",on:{click:t.menuToggle}},[s("div",{staticClass:"menu-title",attrs:{id:"menuTitle"}},[t._v("About")]),t._v(" "),s("div",{staticClass:"fas fa-bars menu-icon",attrs:{id:"menuIcon"}})]),t._v(" "),t.showMenu?s("ul",{staticClass:"menu-list"},[s("span",{staticClass:"menu-list-span"},t._l(t.menu,function(e){return s("router-link",{key:e.title,attrs:{to:e.to}},[e.display?s("li",{staticClass:"menu-list-item",class:{"menu-list-selected":t.selectedLink==e.to},on:{click:function(s){return t.selectLink(e.to)}}},[t.menuIconAllow?s("i",{class:e.icon}):t._e(),t._v(t._s(e.title)+"\r\n                ")]):t._e()])}),1)]):t._e()])},[],!1,null,null,null).exports},data:()=>({render:!1,routerView:{name:"work",to:"/"}}),watch:{data:function(){this.render=!0}}},r=(s(9),Object(a.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"view"}},[t.render?s("Profile",{attrs:{profile:t.data.profile}}):s("div",[t._v("\r\n    Loading...\r\n  ")]),t._v(" "),t.render?s("div",{staticClass:"view-body"},[s("Menu",{attrs:{menu:t.data.menu}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"content-body"},[s("router-view",{attrs:{home:t.data.home,profile:t.data.profile,document:t.data.document,work:t.data.work,projects:t.data.projects,skills:t.data.skills,achievements:t.data.achievements,contributions:t.data.contributions,communities:t.data.communities,education:t.data.education,courses:t.data.courses,blog:t.data.blog,talks:t.data.talks,links:t.data.links,to:t.routerView.to}})],1),t._v(" "),t._m(0)])],1):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[this._v("\r\n            Designed and Developed by "),e("a",{attrs:{href:"https://ramantehlan.github.io"}},[this._v("Raman Tehlan")]),this._v(" | "),e("a",{attrs:{href:"https://github.com/ramantehlan/Moi"}},[this._v("Open Source")])])}],!1,null,null,null).exports),c=s(6),u={props:["home","profile","document"]},d=(Object(a.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"small-content-body"},[s("h1",[t._v(" "+t._s(t.home.title)+" ")]),t._v(" "),s("p",{staticClass:"home-p",domProps:{innerHTML:t._s(t.home.body)}}),t._v(" "),s("p",{staticClass:"home-signature",domProps:{innerHTML:t._s(t.home.signature)}}),t._v(" "),s("p",{staticClass:"social-media-box"},[s("a",{staticClass:"btn",attrs:{href:"https://twitter.com/intent/tweet?&text=Hey!%20Check%20this%20profile%20out.&tw_p=tweetbutton&url="+t.profile.url,target:"_blank"}},[s("i",{staticClass:"fab fa-twitter"}),t._v(" Tweet")]),t._v(" "),s("a",{staticClass:"btn",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.profile.url,target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-f"}),t._v(" Share ")]),t._v(" "),s("a",{staticClass:"btn",attrs:{href:"http://www.reddit.com/submit?url="+t.profile.url+"&title="+t.document.title,target:"_blank"}},[s("i",{staticClass:"fab fa-reddit-alien"}),t._v(" Post")])])])},[],!1,null,null,null).exports,{props:["info"],data:()=>({showCard:!1}),methods:{cardDown:function(){this.showCard=!this.showCard}}}),h=Object(a.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("i",{staticClass:"fa fa-arrow-down card-arrow",attrs:{id:t.info.key},on:{click:t.cardDown}}),t._v(" "),t.info.title?s("div",{staticClass:"title"},[s("a",{attrs:{href:t.info.url}},[t._v("\n        "+t._s(t.info.title)+"\n      ")])]):t._e(),t._v(" "),t.info.companyName?s("div",{staticClass:"title"},[s("a",{attrs:{href:t.info.companyUrl}},[t._v("\n        "+t._s(t.info.companyName)+"\n      ")])]):t._e(),t._v(" "),t.info.institute?s("div",{staticClass:"title"},[s("a",{attrs:{href:t.info.url}},[t._v("\n        "+t._s(t.info.institute)+"\n      ")])]):t._e(),t._v(" "),t.showCard?s("div",{staticClass:"card-section"},[t.info.subtitle?s("div",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.info.subtitle)+"   \n      ")]):t._e(),t._v(" "),t.info.level?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fas fa-user-graduate icon"}),t._v("\n        "+t._s(t.info.level)+"\n      ")]):t._e(),t._v(" "),t.info.from?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fa fa-university icon"}),t._v("\n        "+t._s(t.info.from)+"\n      ")]):t._e(),t._v(" "),t.info.role?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fas fa-user icon"}),t._v("\n        "+t._s(t.info.role)+"\n      ")]):t._e(),t._v(" "),t.info.location?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fas fa-map-marker icon"}),t._v("\n        "+t._s(t.info.location)+"\n      ")]):t._e(),t._v(" "),t.info.event?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fas fa-location-arrow icon"}),t._v(" "),s("a",{attrs:{href:t.info.eventUrl}},[t._v("\n          "+t._s(t.info.event)+"\n        ")])]):t._e(),t._v(" "),t.info.productType?s("div",{staticClass:"subtitle"},[s("i",{staticClass:"fas fa-tools icon"}),t._v("\n        "+t._s(t.info.productType)+"\n      ")]):t._e(),t._v(" "),s("div",{staticClass:"subtitle "},[s("i",{staticClass:"fas fa-clock icon"}),t._v("\n        "+t._s(t.info.timeline)+"\n      ")]),t._v(" "),t.info.tag?s("div",{staticClass:"subtitle badge-container"},[s("i",{staticClass:"fas fa-tags icon"}),t._v(" "),t._l(t.info.tag,function(e){return s("div",{key:e,staticClass:"badge"},[t._v(t._s(e))])})],2):t._e(),t._v(" "),t.info.about?s("div",{staticClass:"card-body body",domProps:{innerHTML:t._s(t.info.about)}}):t._e(),t._v(" "),t.info.coursework?s("div",{staticClass:"card-body body"},[s("div",{staticClass:"card-body-grid"},t._l(t.info.coursework,function(e,n){return s("div",{key:n,staticClass:"card-body-grid-box"},[s("b",[t._v(t._s(n))]),t._v(" "),s("ul",t._l(e,function(e){return s("li",{key:e},[t._v("- "+t._s(e))])}),0)])}),0)]):t._e(),t._v(" "),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-number"},[t._v("\n        #"+t._s(t.info.id)+"\n      ")])])]):t._e()])])},[],!1,null,null,null).exports,v={props:["achievements"],components:{Card:h}},_=Object(a.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Achievements ["+this._s(this.achievements.length)+"]")]),this._v(" "),this._l(this.achievements,function(t){return e("card",{key:t.key,attrs:{info:t}})})],2)},[],!1,null,null,null).exports,f={props:["blog"],components:{Card:h}},m=Object(a.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Blog ["+this._s(this.blog.length)+"]")]),this._v(" "),this._l(this.blog,function(t){return e("card",{key:t.key,attrs:{info:t}})})],2)},[],!1,null,null,null).exports,p={props:["info"],data:()=>({})},b=Object(a.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{attrs:{href:t.info.url}},[s("div",{staticClass:"small-card subtitle"},[t.info.title?s("div",{staticClass:"subtitle"},[t.info.icon?s("i",{class:t.info.icon+" link-logo"}):t._e(),t._v("\r\n        "+t._s(t.info.title)+"\r\n      ")]):t._e(),t._v(" "),t.info.timeline?s("div",{staticClass:"subtitle light"},[t._v("\r\n          "+t._s(t.info.timeline)+"\r\n      ")]):t._e()])])])},[],!1,null,null,null).exports,C={props:["contributions","communities"],components:{SmallCard:b}},k=Object(a.a)(C,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"break-heading"},[t._v("OpenSource Contributions ["+t._s(t.contributions.length)+"]")]),t._v(" "),s("div",{staticClass:"small-card-holder"},t._l(t.contributions,function(t){return s("SmallCard",{key:t.key,attrs:{info:t}})}),1),t._v(" "),s("div",{staticClass:"break-heading"},[t._v("Communities ["+t._s(t.communities.length)+"]")]),t._v(" "),s("div",{staticClass:"small-card-holder"},t._l(t.communities,function(t){return s("SmallCard",{key:t.key,attrs:{info:t}})}),1)])},[],!1,null,null,null).exports,g={props:["education","courses"],components:{Card:h}},y=Object(a.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.education?s("span",[s("div",{staticClass:"break-heading"},[t._v("Education ["+t._s(t.education.length)+"]")]),t._v(" "),t._l(t.education,function(t){return s("card",{key:t.key,attrs:{info:t}})})],2):t._e(),t._v(" "),t.courses?s("span",[s("div",{staticClass:"break-heading"},[t._v("Online Cources ["+t._s(t.courses.length)+"]")]),t._v(" "),t._l(t.courses,function(t){return s("card",{key:t.key,attrs:{info:t}})})],2):t._e()])},[],!1,null,null,null).exports,w={props:["links"],components:{SmallCard:b}},j=Object(a.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Links ["+this._s(this.links.length)+"]")]),this._v(" "),e("div",{staticClass:"small-card-holder"},this._l(this.links,function(t){return e("SmallCard",{key:t.key,attrs:{info:t}})}),1)])},[],!1,null,null,null).exports,x={props:["projects"],components:{Card:h}},E=Object(a.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Projects ["+this._s(this.projects.length)+"]")]),this._v(" "),this._l(this.projects,function(t){return e("card",{key:t.key,attrs:{info:t}})})],2)},[],!1,null,null,null).exports,O={props:["value","index","color","title"],data:()=>({showCard:!1}),methods:{cardDown:function(){this.showCard=!this.showCard}}},S={props:["skills"],components:{SkillBar:Object(a.a)(O,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-group"},[s("span",{staticClass:"break-heading",style:"color:"+t.color[t.index]},[t._v(t._s(t.title[t.index])+" ["+t._s(t.value.length)+"] ")]),t._v(" "),s("div",{staticClass:"skill-group-body"},t._l(t.value,function(e){return s("div",{key:e.name,staticClass:"skill-name subtitle",style:"background-color:"+t.color[t.index]},[t._v("\r\n          "+t._s(e.name)+"\r\n      ")])}),0)])},[],!1,null,null,null).exports}},$=Object(a.a)(S,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.skills.data,function(e,n){return s("SkillBar",{key:e.name,attrs:{color:t.skills.color,title:t.skills.title,value:e,index:n}})}),1)},[],!1,null,null,null).exports,A={props:["talks"],components:{Card:h}},L=Object(a.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Talks ["+this._s(this.talks.length)+"]")]),this._v(" "),this._l(this.talks,function(t){return e("card",{key:t.key,attrs:{info:t}})})],2)},[],!1,null,null,null).exports,T={props:["work"],components:{Card:h}},P=Object(a.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"break-heading"},[this._v("Work Experience ["+this._s(this.work.length)+"]")]),this._v(" "),this._l(this.work,function(t){return e("card",{key:t.key,attrs:{info:t}})})],2)},[],!1,null,null,null).exports,M=s(8);n.a.use(c.a);const q=[{path:"/",name:"Work",component:P},{path:"/achievements",name:"Achievements",component:_},{path:"/blog",name:"Blog",component:m},{path:"/contributions",name:"Contributions",component:k},{path:"/education",name:"Education",component:y},{path:"/links",name:"Links",component:j},{path:"/projects",name:"Projects",component:E},{path:"/skills",name:"Skills",component:$},{path:"/talks",name:"Talks",component:L},{path:"**",name:"PageNotFound",component:M.default}];var D=new c.a({routes:q});n.a.config.productionTip=!1;var B=new n.a({el:"#app",router:D,data:()=>({data:{}}),components:{app:r},template:'<app :data="data"/>'});fetch("data.json").then(t=>t.json()).then(t=>{B.data=t;const e=t.document,s=t.profile,n=t.document.theme;for(var i in document.querySelector("head title").textContent=e.title,document.head.querySelector('meta[name="author"]').setAttribute("content",e.author),document.head.querySelector('meta[name="title"]').setAttribute("content",e.title),document.head.querySelector('meta[name="keywords"]').setAttribute("content",e.keywords),document.head.querySelector('meta[name="description"]').setAttribute("content",e.description),document.head.querySelector('meta[name="language"]').setAttribute("content",e.language),document.head.querySelector('meta[name="charset"]').setAttribute("content",e.charset),document.head.querySelector('meta[name="robots"]').setAttribute("content",e.robots),document.head.querySelector('meta[name="google-site-verification"]').setAttribute("content",e.googleSiteVerificatin),t.themes[n])document.documentElement.style.setProperty("--"+i,t.themes[n][i]);function a(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config",e.googleAnalyticsId),function(){var t={"@context":"http://schema.org","@type":"Person",address:s.address,email:s.email,image:s.image,jobTitle:s.domains,name:s.name,alumniOf:s.alumniOf,birthPlace:s.birthPlace,birthDate:s.birthDate,height:s.height,weight:s.weight,gender:s.gender,nationality:s.nationality,url:s.url,sameAs:s.sameAs},e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(t),document.getElementsByTagName("head")[0].appendChild(e)}(document)})}],[[13,1,2]]]);