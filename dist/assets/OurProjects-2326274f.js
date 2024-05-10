import{j as e,r as b}from"./index-4d3b12f5.js";import{M as w,C as P,I as T}from"./MainContainer-473fd039.js";import{C as B}from"./styles-43416dca.js";import{G as j,d as m,e as l,f as d}from"./index-cfdafa8f.js";import{s as N,i as v,a as S}from"./consoleCrane3-4e506e0b.js";import{b as x,s as M,a as R,c as z}from"./gantryCrane5-55359371.js";import{a as E,b as F,c as G,s as H}from"./image3-a6baa50f.js";import{s as O,a as $,i as I,b as W}from"./overheadCrane4-4382e3f2.js";import{a as D,s as V}from"./image1-85230f1f.js";import{s as A}from"./image2-a05c5b09.js";import{s as q}from"./image3-6397b8ec.js";import{O as J}from"./OrangeBtn-d7f88627.js";const K="_infoContainer_1eqg0_1",Q={infoContainer:K},U="_cardContainer_11w6b_1",X="_leftTop_11w6b_11",Y="_leftMiddle_11w6b_18",Z="_leftBottom_11w6b_24",ee="_rightColumn_11w6b_33",te="_socialIcons_11w6b_38",oe="_overviewIconsContainer_11w6b_75",se="_iconLink_11w6b_84",a={cardContainer:U,leftTop:X,leftMiddle:Y,leftBottom:Z,rightColumn:ee,socialIcons:te,overviewIconsContainer:oe,iconLink:se},ie=({topImage:o,middleText:i,bottomImages:n,title:p,description:u,subHeading:h,listItems:g,socialLinks:y})=>e.jsxs("div",{className:a.cardContainer,children:[e.jsx("div",{className:a.leftTop,style:{backgroundImage:`url(${o})`}}),e.jsx("div",{className:a.leftMiddle,children:e.jsx("p",{children:i})}),e.jsx("div",{className:a.leftBottom,children:n.map((r,t)=>e.jsx("div",{style:{background:`url(${r}) no-repeat center center`,backgroundSize:"cover"}},t))}),e.jsxs("div",{className:a.rightColumn,children:[e.jsx("h1",{children:p}),e.jsx("p",{children:u}),e.jsxs("div",{className:a.overviewIconsContainer,children:[e.jsxs("div",{children:[e.jsx("h2",{children:h}),e.jsx("ul",{style:{margin:"0",padding:"0"},children:g.map((r,t)=>e.jsx("li",{children:r},t))})]}),e.jsx("div",{className:a.socialIcons,children:y.map((r,t)=>e.jsx("a",{href:r.url,className:a.iconLink,target:"_blank",rel:"noopener noreferrer",children:r.icon},t))})]})]})]}),ne="_ProductsContainer_sgozk_1",re="_grid_sgozk_9",ae="_carouselContainer_sgozk_16",ce="_item_sgozk_24",me="_buttonContainer_sgozk_32",le="_button_sgozk_32",de="_buttonRight_sgozk_58",ue="_buttonLeft_sgozk_63",pe="_hidden_sgozk_68",he="_space_sgozk_77",s={ProductsContainer:ne,grid:re,carouselContainer:ae,item:ce,buttonContainer:me,button:le,buttonRight:de,buttonLeft:ue,hidden:pe,space:he};function ge(o){return j({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},child:[]}]})(o)}function ye(o){return j({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"},child:[]}]})(o)}const fe=({projects:o})=>{const i=b.createRef(),[n,p]=b.useState({currentSlide:0,totalItems:o.length}),u=t=>{p(t)},h=()=>{if(i.current){const t=n.currentSlide+1;i.current.goToSlide(t),u({...n,currentSlide:t})}},g=()=>{if(i.current){const t=n.currentSlide-1;i.current.goToSlide(t),u({...n,currentSlide:t})}},y={superLargeDesktop:{breakpoint:{max:4e3,min:1700},items:1},desktop:{breakpoint:{max:1700,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},r=({next:t,previous:C,carouselState:k})=>{const{currentSlide:f,totalItems:_}=k;return e.jsx("div",{className:s.grid,children:e.jsxs("div",{className:s.buttonContainer,children:[e.jsxs("button",{className:`${s.button} ${s.buttonLeft} ${f>0?"":s.hidden}`,onClick:C,children:[e.jsx("span",{children:"Previous"}),e.jsx(ge,{})]}),e.jsxs("button",{className:`${s.button} ${s.buttonRight} ${f<_-1?"":s.hidden}`,onClick:t,children:[e.jsx("span",{children:"Next"}),e.jsx(ye,{})]})]})})};return e.jsx("div",{className:s.ProductsContainer,children:e.jsx(B,{swipeable:!0,draggable:!0,showDots:!1,ssr:!1,arrows:!1,keyBoardControl:!0,ref:i,customTransition:"transform 300ms ease-in-out, opacity 300ms ease-in-out",transitionDuration:300,customButtonGroup:e.jsx(r,{next:h,previous:g,carouselState:n}),renderButtonGroupOutside:!0,responsive:y,containerClass:s.carouselContainer,itemClass:s.item,children:o.map(t=>e.jsx(ie,{...t},t.id))})})},L="/assets/project1-61f00c94.webp",be="/assets/project2-fd698478.webp",xe="/assets/project3-0233d096.webp",je="/assets/project4-af711ec1.webp",ve="/assets/project5-f19f5e49.webp",Ie=()=>{const o=[{id:1,topImage:L,middleText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",bottomImages:[N,v,S,x],title:"Project Title",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",subHeading:"Project Overview",listItems:["Lorem Ipsum is simply dummy text of the printing and typesetting industry.","It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","Lorem Ipsum is simply dummy text of the printing and typesetting industry."],socialLinks:[{icon:e.jsx(m,{}),url:"http://social3.com"},{icon:e.jsx(l,{}),url:"http://social3.com"},{icon:e.jsx(d,{}),url:"http://social3.com"}]},{id:2,topImage:be,middleText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",bottomImages:[M,R,x,z],title:"Project Title",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",subHeading:"Project Overview",listItems:["Lorem Ipsum is simply dummy text of the printing and typesetting industry.","It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","Lorem Ipsum is simply dummy text of the printing and typesetting industry."],socialLinks:[{icon:e.jsx(m,{}),url:"http://social3.com"},{icon:e.jsx(l,{}),url:"http://social3.com"},{icon:e.jsx(d,{}),url:"http://social3.com"}]},{id:3,topImage:xe,middleText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",bottomImages:[E,F,G,H],title:"Project Title",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",subHeading:"Project Overview",listItems:["Lorem Ipsum is simply dummy text of the printing and typesetting industry.","It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.","Lorem Ipsum is simply dummy text of the printing and typesetting industry."],socialLinks:[{icon:e.jsx(m,{}),url:"http://social3.com"},{icon:e.jsx(l,{}),url:"http://social3.com"},{icon:e.jsx(d,{}),url:"http://social3.com"}]},{id:4,topImage:je,middleText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",bottomImages:[O,$,I,W],title:"Project Title",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",subHeading:"Project Overview",listItems:["Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum is simply dummy text of the printing and typesetting industry."],socialLinks:[{icon:e.jsx(m,{}),url:"http://social3.com"},{icon:e.jsx(l,{}),url:"http://social3.com"},{icon:e.jsx(d,{}),url:"http://social3.com"}]},{id:5,topImage:ve,middleText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",bottomImages:[D,A,q,V],title:"Project Title",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",subHeading:"Project Overview",listItems:["Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum is simply dummy text of the printing and typesetting industry."],socialLinks:[{icon:e.jsx(m,{}),url:"http://social3.com"},{icon:e.jsx(l,{}),url:"http://social3.com"},{icon:e.jsx(d,{}),url:"http://social3.com"}]}];return e.jsx(fe,{projects:o})},Le="_container_1rl99_1",Ce="_image_1rl99_11",ke="_imageWrapper_1rl99_17",_e="_overlay_1rl99_22",c={container:Le,image:Ce,imageWrapper:ke,overlay:_e},we=({img1:o,img2:i,img3:n})=>e.jsxs("div",{className:c.container,children:[e.jsx("div",{className:c.imageWrapper,children:e.jsx("img",{className:c.image,src:o,alt:"Description of image 1"})}),e.jsxs("div",{className:c.imageWrapper,children:[e.jsx("img",{className:c.image,src:i,alt:"Description of image 2"}),e.jsxs("div",{className:c.overlay,children:[e.jsx("h1",{children:"Галерея"}),e.jsx("span",{children:"Фотогалерея наших проектов"}),e.jsx(J,{children:e.jsx("span",{children:"Смотреть"})})]})]}),e.jsx("div",{className:c.imageWrapper,children:e.jsx("img",{className:c.image,src:n,alt:"Description of image 3"})})]}),Pe="/assets/ourProjectsCover-214285bb.webp",$e=()=>e.jsxs(w,{children:[e.jsx(P,{imgSrc:Pe,imgAlt:"Projects page Cover Image",h1Text:"Our Projects",h2Text:"Home / Our Projects"}),e.jsxs(T,{className:Q.infoContainer,children:[e.jsx(Ie,{}),e.jsx(we,{img1:v,img2:L,img3:I})]})]});export{$e as default};
