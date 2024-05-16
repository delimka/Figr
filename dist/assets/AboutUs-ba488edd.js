import{r as t,e as He,h as Ue,i as K,j as e,k as _,l as ze,m as Be,n as Fe,o as ue,t as We,A as de,T as Xe,p as Ve,B as Pe,u as Ye,F as me,q as he}from"./index-f58f8d7f.js";import{E as Ke,L as qe}from"./index-c348fb4c.js";import{M as T}from"./Modal-fb1c4e57.js";import{f as Je,m as fe}from"./ElementChildren-3ad0da7e.js";import{O as Qe}from"./OrangeBtn-fd934390.js";import{A as P}from"./AnimatedImageContainer-5b3a7654.js";import{R as Ge}from"./ResizeHandler-a1495968.js";function Ze(o,n){const r=t.useRef(!0);t.useEffect(()=>{if(r.current){r.current=!1;return}return o()},n)}const Y=2**31-1;function ve(o,n,r){const c=r-Date.now();o.current=c<=Y?setTimeout(n,c):setTimeout(()=>ve(o,n,r),Y)}function es(){const o=He(),n=t.useRef();return Ue(()=>clearTimeout(n.current)),t.useMemo(()=>{const r=()=>clearTimeout(n.current);function c(u,l=0){o()&&(r(),l<=Y?n.current=setTimeout(u,l):ve(n,u,Date.now()+l))}return{set:c,clear:r}},[])}const je=t.forwardRef(({className:o,bsPrefix:n,as:r="div",...c},u)=>(n=K(n,"carousel-caption"),e.jsx(r,{ref:u,className:_(o,n),...c})));je.displayName="CarouselCaption";const ss=je,be=t.forwardRef(({as:o="div",bsPrefix:n,className:r,...c},u)=>{const l=_(r,K(n,"carousel-item"));return e.jsx(o,{ref:u,...c,className:l})});be.displayName="CarouselItem";const ts=be,ns=40;function as(o){if(!o||!o.style||!o.parentNode||!o.parentNode.style)return!1;const n=getComputedStyle(o);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(o.parentNode).display!=="none"}const ge=t.forwardRef(({defaultActiveIndex:o=0,...n},r)=>{const{as:c="div",bsPrefix:u,slide:l=!0,fade:y=!1,controls:$=!0,indicators:k=!0,indicatorLabels:v=[],activeIndex:d,onSelect:x,onSlide:S,onSlid:I,interval:R=5e3,keyboard:q=!0,onKeyDown:O,pause:g="hover",onMouseOver:H,onMouseOut:U,wrap:M=!0,touch:J=!0,onTouchStart:z,onTouchMove:B,onTouchEnd:F,prevIcon:Ce=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Q="Previous",nextIcon:Ne=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:G="Next",variant:Z,className:we,children:W,...ye}=ze({defaultActiveIndex:o,...n},{activeIndex:"onSelect"}),f=K(u,"carousel"),C=Be(),N=t.useRef(null),[ee,se]=t.useState("next"),[ke,A]=t.useState(!1),[w,te]=t.useState(!1),[i,Se]=t.useState(d||0);t.useEffect(()=>{!w&&d!==i&&(N.current?se(N.current):se((d||0)>i?"next":"prev"),l&&te(!0),Se(d||0))},[d,w,i,l]),t.useEffect(()=>{N.current&&(N.current=null)});let j=0,ne;Je(W,(s,a)=>{++j,a===d&&(ne=s.props.interval)});const ae=Fe(ne),m=t.useCallback(s=>{if(w)return;let a=i-1;if(a<0){if(!M)return;a=j-1}N.current="prev",x==null||x(a,s)},[w,i,x,M,j]),h=ue(s=>{if(w)return;let a=i+1;if(a>=j){if(!M)return;a=0}N.current="next",x==null||x(a,s)}),X=t.useRef();t.useImperativeHandle(r,()=>({element:X.current,prev:m,next:h}));const oe=ue(()=>{!document.hidden&&as(X.current)&&(C?m():h())}),b=ee==="next"?"start":"end";Ze(()=>{l||(S==null||S(i,b),I==null||I(i,b))},[i]);const Ie=`${f}-item-${ee}`,Re=`${f}-item-${b}`,Me=t.useCallback(s=>{We(s),S==null||S(i,b)},[S,i,b]),Ee=t.useCallback(()=>{te(!1),I==null||I(i,b)},[I,i,b]),Te=t.useCallback(s=>{if(q&&!/input|textarea/i.test(s.target.tagName))switch(s.key){case"ArrowLeft":s.preventDefault(),C?h(s):m(s);return;case"ArrowRight":s.preventDefault(),C?m(s):h(s);return}O==null||O(s)},[q,O,m,h,C]),_e=t.useCallback(s=>{g==="hover"&&A(!0),H==null||H(s)},[g,H]),$e=t.useCallback(s=>{A(!1),U==null||U(s)},[U]),re=t.useRef(0),L=t.useRef(0),ie=es(),Ae=t.useCallback(s=>{re.current=s.touches[0].clientX,L.current=0,g==="hover"&&A(!0),z==null||z(s)},[g,z]),Le=t.useCallback(s=>{s.touches&&s.touches.length>1?L.current=0:L.current=s.touches[0].clientX-re.current,B==null||B(s)},[B]),De=t.useCallback(s=>{if(J){const a=L.current;Math.abs(a)>ns&&(a>0?m(s):h(s))}g==="hover"&&ie.set(()=>{A(!1)},R||void 0),F==null||F(s)},[J,g,m,h,ie,R,F]),le=R!=null&&!ke&&!w,V=t.useRef();t.useEffect(()=>{var s,a;if(!le)return;const p=C?m:h;return V.current=window.setInterval(document.visibilityState?oe:p,(s=(a=ae.current)!=null?a:R)!=null?s:void 0),()=>{V.current!==null&&clearInterval(V.current)}},[le,m,h,ae,R,oe,C]);const ce=t.useMemo(()=>k&&Array.from({length:j},(s,a)=>p=>{x==null||x(a,p)}),[k,j,x]);return e.jsxs(c,{ref:X,...ye,onKeyDown:Te,onMouseOver:_e,onMouseOut:$e,onTouchStart:Ae,onTouchMove:Le,onTouchEnd:De,className:_(we,f,l&&"slide",y&&`${f}-fade`,Z&&`${f}-${Z}`),children:[k&&e.jsx("div",{className:`${f}-indicators`,children:fe(W,(s,a)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":v!=null&&v.length?v[a]:`Slide ${a+1}`,className:a===i?"active":void 0,onClick:ce?ce[a]:void 0,"aria-current":a===i},a))}),e.jsx("div",{className:`${f}-inner`,children:fe(W,(s,a)=>{const p=a===i;return l?e.jsx(Xe,{in:p,onEnter:p?Me:void 0,onEntered:p?Ee:void 0,addEndListener:Ve,children:(E,Oe)=>t.cloneElement(s,{...Oe,className:_(s.props.className,p&&E!=="entered"&&Ie,(E==="entered"||E==="exiting")&&"active",(E==="entering"||E==="exiting")&&Re)})}):t.cloneElement(s,{className:_(s.props.className,p&&"active")})})}),$&&e.jsxs(e.Fragment,{children:[(M||d!==0)&&e.jsxs(de,{className:`${f}-control-prev`,onClick:m,children:[Ce,Q&&e.jsx("span",{className:"visually-hidden",children:Q})]}),(M||d!==j-1)&&e.jsxs(de,{className:`${f}-control-next`,onClick:h,children:[Ne,G&&e.jsx("span",{className:"visually-hidden",children:G})]})]})]})});ge.displayName="Carousel";const D=Object.assign(ge,{Caption:ss,Item:ts});const os=({show:o,handleClose:n,videoLink:r})=>e.jsxs(T,{show:o,onHide:n,size:"xl",centered:!0,children:[e.jsx(T.Header,{closeButton:!0,children:e.jsx(T.Title,{children:"List of services"})}),e.jsx(T.Body,{children:e.jsx("div",{className:"video-container",children:e.jsx("iframe",{title:"Video Player",src:r,frameBorder:"0",allowFullScreen:!0})})}),e.jsx(T.Footer,{children:e.jsx(Pe,{variant:"secondary",onClick:n,children:"Close"})})]}),rs="/assets/about_photo_sm-25d66d7e.webp",is="/assets/about_photo_xs-4e77ab70.webp",pe="/assets/about_photo1_sm-ec700a79.webp",xe="/assets/about_photo2_md-40a66049.webp",ls="/assets/about_photo2_sm-c12b4a52.webp";function xs(){const[o,n]=t.useState(!1),[r,c]=t.useState(""),[u,l]=t.useState(window.innerWidth),{t:y}=Ye(),$=d=>{c(d),n(!0)},k=()=>n(!1),v=!0;return e.jsxs(Ke,{name:"about",className:"about-container",children:[e.jsxs("div",{className:"left-container",children:[e.jsxs("h3",{className:"about-h3",children:[" ",y("aboutUs.aboutHeading")]}),e.jsxs("h2",{className:"about-h2",children:[" ",y("aboutUs.subHeading")]}),e.jsxs("p",{className:"about-p",children:[y("aboutUs.description")," "]}),e.jsx(qe,{activeClass:"active",to:"services",spy:!0,smooth:!0,offset:-70,duration:300,children:e.jsx(Qe,{children:"Learn more   →"})})]}),e.jsx(Ge,{setWindowWidth:l}),e.jsx("div",{className:"right-container",children:u<1086?e.jsxs(D,{children:[e.jsx(D.Item,{children:e.jsx("div",{className:"",title:"Metallkonstruktsiooni paigaldus",children:e.jsx("img",{src:rs,loading:"lazy",alt:"Metallkonstruktsiooni paigaldus"})})}),e.jsx(D.Item,{children:e.jsx("div",{className:"",title:"Silda kraana paigaldus",children:e.jsx("img",{src:pe,alt:"Image 2",loading:"lazy"})})}),e.jsx(D.Item,{children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"play-button",onClick:()=>$("https://www.youtube.com/watch?v=oSyC8pxJdeQ"),children:e.jsx(me,{icon:he})}),e.jsx("img",{alt:"Image 3",loading:"lazy",srcSet:`${ls} 480w, ${xe} 1200w`})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx(P,{threshold:.2,initialY:60,animateY:v,children:e.jsx("div",{className:"photo photo-1",title:"Metallkonstruktsiooni paigaldus",children:e.jsx("img",{src:is,loading:"lazy",alt:"Metallkonstruktsiooni paigaldus"})})}),e.jsx(P,{threshold:.2,initialY:60,animateY:v,children:e.jsx("div",{className:"photo photo-2",title:"Silda kraana paigaldus",children:e.jsx("img",{src:pe,alt:"Image 2",loading:"lazy"})})}),e.jsx(P,{threshold:.2,initialY:60,animateY:v,children:e.jsxs("div",{className:"photo photo-3",children:[e.jsx("div",{className:"play-button",onClick:()=>$("https://www.youtube.com/embed/sifXs4XVK7g"),children:e.jsx(me,{icon:he})}),e.jsx("img",{src:xe,alt:"Image 3",loading:"lazy"})]})}),e.jsx(os,{show:o,handleClose:k,videoLink:r})]})})]})}export{xs as default};