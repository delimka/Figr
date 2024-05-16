import{a as j,j as t,F as C,f as M,r as x,J as k,K as w,L as R}from"./index-f58f8d7f.js";import{C as E}from"./styles-4607ef70.js";const N="_cardContainer_ofqug_1",y="_readMoreContainer_ofqug_27",T="_readMore_ofqug_27",$="_title_ofqug_38",q="_intro_ofqug_43",A="_active_ofqug_47",a={cardContainer:N,readMoreContainer:y,readMore:T,title:$,intro:q,active:A},I=({intro:n,title:s,readMore:r,isActive:i,slug:c})=>{const l=j(),m=()=>{l(`/${c}`)};return t.jsxs("div",{className:i?`${a.cardContainer} ${a.active}`:a.cardContainer,onClick:m,children:[t.jsx("p",{className:a.intro,children:n}),t.jsx("span",{className:a.title,children:s}),t.jsxs("div",{className:a.readMoreContainer,children:[t.jsx("span",{className:a.readMore,children:r}),t.jsx(C,{icon:M})]})]})},L="_otherServicesContainer_18c60_1",V="_carouselContainer_18c60_7",D="_carouselTrack_18c60_11",G="_buttonContainer_18c60_15",B="_item_18c60_21",z="_button_18c60_15",F="_hidden_18c60_51",o={otherServicesContainer:L,carouselContainer:V,carouselTrack:D,buttonContainer:G,item:B,button:z,hidden:F},O=({services:n,activeServiceId:s})=>{const r=x.createRef(),[i,c]=x.useState({currentSlide:0,totalItems:n.length}),l=e=>{c(e)},m=()=>{if(r.current){const e=i.currentSlide+1;r.current.goToSlide(e),l({...i,currentSlide:e})}},g=()=>{if(r.current){const e=i.currentSlide-1;r.current.goToSlide(e),l({...i,currentSlide:e})}};x.useEffect(()=>{const e=n.findIndex(p=>p.id===s);e!==-1&&r.current&&(window.innerWidth<=920?r.current.goToSlide(e):r.current.goToSlide(e===0?e:e-1))},[s,n]);const d={superLargeDesktop:{breakpoint:{max:4e3,min:1700},items:3},desktop:{breakpoint:{max:1700,min:1335},items:3},tablet:{breakpoint:{max:1335,min:730},items:2},wideMobile:{breakpoint:{max:730,min:550},items:1,partialVisibilityGutter:130},mobile:{breakpoint:{max:550,min:0},items:1,partialVisibilityGutter:60}},S=({next:e,previous:p,carouselState:f})=>{const{currentSlide:_,totalItems:b}=f,h=(()=>{const u=window.innerWidth;return u>=1700?d.superLargeDesktop.items:u>=1335?d.desktop.items:u>=730?d.tablet.items:u>=550?d.wideMobile.items:d.mobile.items})(),v=_+h>=b;return t.jsxs("div",{className:o.buttonContainer,children:[t.jsx("button",{className:`${o.button} ${_>0?"":o.hidden}`,onClick:p,children:t.jsx(C,{icon:k,size:"2x",color:"#f4983c"})}),t.jsx("button",{className:`${o.button} 
            ${v?o.hidden:""}`,onClick:e,children:t.jsx(C,{icon:w,size:"2x",color:"#f4983c"})})]})};return t.jsxs("div",{className:o.otherServicesContainer,children:[t.jsx("h2",{children:"Other Services"}),t.jsx(E,{swipeable:!0,draggable:!0,showDots:!0,ssr:!1,arrows:!1,keyBoardControl:!0,ref:r,customTransition:"transform 300ms ease-in-out, opacity 300ms ease-in-out",transitionDuration:300,customButtonGroup:t.jsx(S,{next:m,previous:g,carouselState:i}),removeArrowOnDeviceType:["mobile"],responsive:d,containerClass:o.carouselContainer,itemClass:o.item,sliderClass:o.slider,partialVisible:!0,children:n.map(e=>t.jsx(I,{...e,isActive:e.id===s,slug:e.slug},e.id))})]})},W=()=>{var c;const{pathname:n}=R(),s=[{id:1,intro:"Explore Service",title:"Производство",slug:"production",readMore:"Read"},{id:2,intro:"Explore Service",title:"Монтаж",slug:"installation",readMore:"Read"},{id:3,intro:"Explore Service",title:"Обслуживание",slug:"maintenance",readMore:"Read"},{id:4,intro:"Explore Service",title:"Металлообработка",slug:"metalworking",readMore:"Read"},{id:5,intro:"Explore Service",title:"Консольные краны",slug:"consoleCranes",readMore:"Read"},{id:6,intro:"Explore Service",title:"Навесные краны",slug:"overheadCranes",readMore:"Read"},{id:7,intro:"Explore Service",title:"Козловые краны",slug:"gantryCranes",readMore:"Read"},{id:8,intro:"Explore Service",title:"Проекты",slug:"ourProjects",readMore:"Read"},{id:9,intro:"Explore Service",title:"Галерея",slug:"gallery",readMore:"Read"}],r=n.split("/").pop(),i=(c=s.find(l=>l.slug===r))==null?void 0:c.id;return t.jsx(O,{services:s,activeServiceId:i})},H=W;export{H as S};