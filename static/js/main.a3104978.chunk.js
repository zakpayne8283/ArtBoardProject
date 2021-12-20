(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(18),n=a.n(i),s=a(6),d=a(79),j=a.n(d),o=a(45),l=a(80),b=a(1);function h(e){var t=e.data.data;return Object(b.jsxs)("section",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Title: "}),t.title]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Medium: "}),t.medium_display]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Artist(s): "}),t.artist_display]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Created: "}),t.date_display]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Place of Origin: "}),t.place_of_origin]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Dimensions: "}),t.dimensions]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Inscriptions: "}),t.inscriptions?t.inscriptions:"None"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Credits: "}),t.credit_line]})]})}function O(e){var t=e.data.data;return void 0==t?Object(b.jsx)("section",{children:Object(b.jsx)("p",{children:"No information available"})}):Object(b.jsxs)("section",{children:[t.title&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Name: "}),t.title]}),t.alt_titles&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Other Names: "}),t.alt_titles.join(", ")]}),t.birth_date&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Birth Date: "}),t.birth_date]}),t.birth_place&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Birth Location: "}),t.birth_place]}),t.death_date&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Death Date: "}),t.death_date]}),t.death_place&&Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Death Location: "}),t.death_place]}),t.description&&Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}})]})}var u=a(76),x=a(30),p=a(24),g=a(82),f=a(19),m=a(55),v=a(31),k=a(69);function y(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1],n=Object(c.useState)([]),d=Object(s.a)(n,2),j=d[0],o=d[1],l=Object(c.useState)(!1),y=Object(s.a)(l,2),L=y[0],M=y[1],_=Object(c.useState)([]),S=Object(s.a)(_,2),w=S[0],C=S[1],D=Object(c.useState)(!1),P=Object(s.a)(D,2),A=P[0],I=P[1],N=e.item,R="https://www.artic.edu/iiif/2/"+N.image_id+"/full/843,/0/default.jpg";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(u.a,{onClick:function(){i(!0),fetch("https://api.artic.edu/api/v1/artworks/"+N.id).then((function(e){return e.json()})).then((function(e){o(e),M(!0),fetch("https://api.artic.edu/api/v1/agents/"+e.data.artist_id).then((function(e){return e.json()})).then((function(e){C(e),I(!0)}),(function(e){alert("ERROR")}))}),(function(e){M(!0)}))},children:[Object(b.jsx)(u.a.Img,{variant:"top",src:R,alt:N.title}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{children:N.title}),Object(b.jsx)("p",{children:N.artist_title})]})]},N.id),Object(b.jsxs)(f.a,{backdrop:"static",show:r,onHide:function(){return i(!1)},fullscreen:!0,size:"xl",className:"artwork-modal",children:[Object(b.jsx)(f.a.Header,{closeButton:!0,className:e.darkMode?"dark-mode":"",children:Object(b.jsx)(f.a.Title,{children:N.title})}),Object(b.jsx)(f.a.Body,{className:e.darkMode?"dark-mode show-grid":"show-grid",style:{height:"100% - 4.5rem"},children:Object(b.jsx)(p.a,{children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(x.a,{xs:12,md:8,lg:6,children:Object(b.jsx)(g.a,{fluid:!0,src:R,alt:N.title})}),Object(b.jsx)(x.a,{xs:6,md:4,lg:6,children:Object(b.jsxs)(k.a,{defaultActiveKey:"details",children:[Object(b.jsx)(v.a,{eventKey:"details",title:"Details",children:0==L?Object(b.jsx)("p",{children:"Loading..."}):1==L&&j==[]?Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Failed to Load Data"})}):Object(b.jsx)(h,{data:j})}),Object(b.jsx)(v.a,{eventKey:"artist",title:"Artist",children:0==A?Object(b.jsx)("p",{children:"Loading..."}):1==A&&w==[]?Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Failed to Load Data"})}):Object(b.jsx)(O,{data:w})})]})})]})})})]})]})}var L=a(2),M=r.a.createContext(),_={museum:"AIC",queryURL:"https://api.artic.edu/api/v1/artworks/search?limit=24&fields=id,image_id,title,artist_title",dataPage:1,artData:[],dataLoaded:!1,errorMessage:!1,darkMode:!1},S=function(e,t){switch(t.type){case"museum":return Object(L.a)(Object(L.a)({},e),{},{museum:t.museum});case"queryURL":return Object(L.a)(Object(L.a)({},e),{},{queryURL:t.queryURL});case"dataPage":return Object(L.a)(Object(L.a)({},e),{},{dataPage:t.dataPage});case"artData":return Object(L.a)(Object(L.a)({},e),{},{artData:t.artData});case"dataLoaded":return Object(L.a)(Object(L.a)({},e),{},{dataLoaded:t.dataLoaded});case"errorMessage":return Object(L.a)(Object(L.a)({},e),{},{errorMessage:t.errorMessage});case"darkMode":return Object(L.a)(Object(L.a)({},e),{},{darkMode:t.darkMode})}},w=function(e){var t=e.children,a=Object(c.useReducer)(S,_);return Object(b.jsx)(M.Provider,{value:a,children:t})};function C(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),r=(a[0],a[1],Object(c.useState)(!1)),i=Object(s.a)(r,2),n=(i[0],i[1],Object(c.useState)(!1)),d=Object(s.a)(n,2),j=d[0],h=(d[1],Object(c.useState)(1)),O=Object(s.a)(h,2),u=(O[0],O[1],Object(c.useContext)(M)),x=Object(s.a)(u,2),p=x[0],g=x[1];return Object(c.useEffect)((function(){fetch(p.queryURL+"&page="+p.dataPage).then((function(e){return e.json()})).then((function(e){var t=[];t=1==p.dataPage?e.data:[].concat(Object(o.a)(p.artData),Object(o.a)(e.data)),g({type:"artData",artData:t}),g({type:"dataLoaded",dataLoaded:!0})}),(function(e){g({type:"errorMessage",errorMessage:e}),g({type:"dataLoaded",dataLoaded:!0})}))}),[p.dataPage,p.queryURL]),0!=p.errorMessage?Object(b.jsxs)("div",{children:["Error: ",j.message]}):p.dataLoaded?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.a,{breakpointCols:4,className:"masonry-grid",columnClassName:"masonry-grid_column",children:p.artData.map((function(e){return Object(b.jsx)(y,{item:e,darkMode:p.darkMode})}))})}):Object(b.jsx)("div",{children:"Loading..."})}function D(e){var t=Object(c.useContext)(M),a=Object(s.a)(t,2),r=a[0],i=a[1];return window.onscroll=j()((function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&r.dataLoaded&&i({type:"dataPage",dataPage:r.dataPage+1})}),100),Object(b.jsx)(p.a,{children:"AIC"===r.museum&&Object(b.jsx)(C,{queryURL:r.queryURL})})}var P=a(84),A=a(63),I=a(67),N=a(40);function R(e){var t=Object(c.useContext)(M),a=Object(s.a)(t,2),r=a[0],i=a[1],n=Object(c.useState)(0),d=Object(s.a)(n,2),j=d[0],o=d[1],l=r.darkMode?"dark":"light";return Object(b.jsx)(N.a,{className:"fixed-top",bg:l,expand:"lg",id:"Nav",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(N.a.Brand,{href:"#",onClick:function(e){return e.preventDefault()},children:"Art Lookup"}),Object(b.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(I.a,{className:"me-auto",children:[Object(b.jsx)(N.a.Text,{children:"Chicago Institute of Art"}),Object(b.jsx)(P.a,{children:Object(b.jsx)(A.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){return function(e){e.preventDefault(),j&&clearTimeout(j),o(setTimeout((function(){i({type:"dataPage",dataPage:1}),i({type:"queryURL",queryURL:"https://api.artic.edu/api/v1/artworks/search?q="+e.target.value+"&limit=24&fields=id,image_id,title,artist_title"})}),500))}(e)}})})]})})]})})}a(94),a(95);var B=a(49);function T(e){var t=Object(c.useContext)(M),a=Object(s.a)(t,2),r=a[0],i=a[1],n=Object(c.useState)(!1),d=Object(s.a)(n,2),j=d[0],o=d[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"InfoBubble",onClick:function(){o(!0)},children:Object(b.jsx)("span",{id:"InfoBubbleMain",children:"i"})}),Object(b.jsxs)(f.a,{show:j,onHide:function(){return o(!1)},className:"info-modal",children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"Information"})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(x.a,{children:Object(b.jsxs)(k.a,{defaultActiveKey:"about",children:[Object(b.jsxs)(v.a,{eventKey:"about",title:"About",children:[Object(b.jsx)("h2",{children:"About"}),Object(b.jsx)("p",{children:"Thank you for visiting my Art Board Project."}),Object(b.jsxs)("p",{children:["I found this API from ",Object(b.jsx)("a",{href:"https://github.com/public-apis/public-apis",target:"_blank",children:"this"})," list and thought it would be a good API to build a portfolio piece around."]}),Object(b.jsx)("p",{children:"Since the data is centered around pieces of art, I looked to keep the interface as clean as possible to keep the focus on the art."}),Object(b.jsxs)("p",{children:["Data provided by ",Object(b.jsx)("a",{href:"https://api.artic.edu/docs/#introduction",target:"_blank",children:"Art Institute of Chicago API"})]}),Object(b.jsxs)("p",{children:["You can view the repository ",Object(b.jsx)("a",{href:"https://github.com/zakpayne8283/ArtBoardProject",target:"_blank",children:"here"}),"."]})]}),Object(b.jsxs)(v.a,{eventKey:"coming",title:"Coming Soon",children:[Object(b.jsx)("p",{children:"The following list are items I'm hoping to add in the near future."}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"SCSS Support"}),Object(b.jsx)("li",{children:"Arrows to change what piece is open"}),Object(b.jsx)("li",{children:"Links to artists"}),Object(b.jsx)("li",{children:"Caching"}),Object(b.jsx)("li",{children:"More museums"}),Object(b.jsx)("li",{children:"Minor CSS fixes"}),Object(b.jsx)("li",{children:Object(b.jsx)("strike",{children:"Infinite Scroll"})}),Object(b.jsx)("li",{children:Object(b.jsx)("strike",{children:"Dark Mode"})})]})]}),Object(b.jsx)(v.a,{eventKey:"options",title:"Options",children:Object(b.jsx)(B.a,{onClick:function(){i({type:"darkMode",darkMode:!r.darkMode}),e.toggleDarkMode()},children:"Toggle Light/Dark Mode"})})]})})})})})]})]})}function q(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=a?"dark-mode":"";return Object(b.jsx)(w,{children:Object(b.jsxs)("div",{id:"App",className:i,children:[Object(b.jsx)(R,{}),Object(b.jsx)(D,{}),Object(b.jsx)(T,{toggleDarkMode:function(){console.log("parent"),r(!a)}})]})})}var U=document.getElementById("root");n.a.render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(q,{})}),U)}},[[96,1,2]]]);
//# sourceMappingURL=main.a3104978.chunk.js.map