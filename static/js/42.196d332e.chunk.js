"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var i=a(791),l=a(689),t=a(87),c=a(351),r=a(503);const n="MovieDetailsPage_back-navigation__hWhsh",o="MovieDetailsPage_back-navigation-link__g7SVH",d="MovieDetailsPage_movie__ge9gn",v="MovieDetailsPage_details__pkcOH",_="MovieDetailsPage_preview-wrapper__a09Rc",h="MovieDetailsPage_preview-image__YBRHX",j="MovieDetailsPage_description__JSzNh",x="MovieDetailsPage_movie-title__wswFf",m="MovieDetailsPage_movie-subtitle__EvNz9",g="MovieDetailsPage_genres-list__Wf0FC";var p=a(184);const u=()=>{var e,s;const{movieId:a}=(0,l.UO)(),u=(0,l.TH)(),[w,N]=(0,i.useState)({}),[M,f]=(0,i.useState)(!1),[k,D]=(0,i.useState)(null);(0,i.useEffect)((()=>{f(!0),r.Z.getMovieDetailsById(a).then((e=>{if(e.adult)throw new Error("Unsupported type of content.");N(e)})).catch((e=>{D(e),console.error(e)})).finally((()=>{f(!1)}))}),[a]);const{title:P,overview:S,poster_path:b,release_date:E,vote_average:I,genres:U}=w,F=E&&new Date(E).getFullYear();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("section",{className:n,children:(0,p.jsx)(c.W2,{children:(0,p.jsx)(t.rU,{className:o,to:null!==(e=null===(s=u.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/",children:"Go back"})})}),M?(0,p.jsx)(c.aN,{}):(0,p.jsx)("section",{className:d,children:(0,p.jsx)(c.W2,{children:k?(0,p.jsx)(c.nn,{}):(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("div",{className:_,children:(0,p.jsx)("img",{className:h,src:"".concat(r.Z.IMAGE_BASE_URL).concat(r.Z.IMAGE_POSTER_SIZE).concat(b)||"images/no-preview.jpg",alt:"","aria-label":"".concat(P," preview")})}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{className:x,children:[P," ",F&&"(".concat(F,")")]}),(0,p.jsxs)("p",{children:["User Score: ",Math.trunc(10*I),"%"]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:m,children:"Overview"}),(0,p.jsx)("p",{children:S})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:m,children:"Genres"}),(0,p.jsx)("ul",{className:g,children:U&&U.map((e=>{let{name:s}=e;return(0,p.jsx)("li",{children:(0,p.jsx)("span",{children:s})},s)}))})]})]})]}),(0,p.jsx)(c.j0,{}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(c.aN,{}),children:(0,p.jsx)(l.j3,{})})]})})})]})}}}]);
//# sourceMappingURL=42.196d332e.chunk.js.map