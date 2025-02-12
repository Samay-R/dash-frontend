"use strict";(self.webpackChunkdash=self.webpackChunkdash||[]).push([[94],{5094:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var l=s(5043),a=s(6870),n=s(8092),r=s(3935),c=s(1054),i=s(8964),m=s(5929),d=s(5071),x=s(7516),o=s(9244),f=s(2983),u=s(4061),h=s(5082),p=s(5258),j=s(579);const g=[{Icon:u.A,text:"Our website features a simple and secure file upload system. Users can easily share files, with data safely stored in firebase storage and managed by an Express backend."},{Icon:h.A,text:"Our platform offers seamless file sharing across all devices, allowing you to upload and access files from smartphones, tablets or computers anytime anywhere."},{Icon:p.A,text:"Our token-based system simplifies file sharing by generating a unique token for each file, allowing recipients to access it without needing an account."}];function b(){const[e,t]=(0,l.useState)(!1),s=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=new IntersectionObserver((s=>{let[l]=s;l.isIntersecting&&(t(!0),e.unobserve(l.target))}),{rootMargin:"0px",threshold:.1});return s.current&&e.observe(s.current),()=>{s.current&&e.unobserve(s.current)}}),[]),(0,j.jsx)("div",{ref:s,className:"mt-10 px-5 md:px-0",children:(0,j.jsx)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-8 justify-center align-middle",children:g.map(((t,s)=>{let{Icon:l,text:a}=t;return(0,j.jsx)("li",{className:"flex transition-all duration-1000 ease-out "+(e?"opacity-100 translate-y-0":"opacity-0 translate-y-16"),style:{transitionDelay:250*s+"ms"},children:(0,j.jsxs)("div",{className:"bg-white bg-opacity-5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg flex flex-col w-full transition-all duration-300 ease-in-out hover:bg-opacity-10 mx-10 my-20",children:[(0,j.jsx)("div",{className:"p-6 flex items-center justify-center",children:(0,j.jsx)(l,{className:"w-16 h-16 text-[#FD914C]"})}),(0,j.jsx)("div",{className:"px-6 pb-6",children:(0,j.jsx)("p",{className:"text-center text-sm",children:a})})]})},s)}))})})}var N=s(948),y=s(8957),w=s(13);function v(e){let{to:t,from:s=0,direction:a="up",delay:n=0,duration:r=2,className:c="",startWhen:i=!0,separator:m="",onStart:d,onEnd:x}=e;const o=(0,l.useRef)(null),f=(0,N.d)("down"===a?t:s),u=20+1/r*40,h=1/r*100,p=(0,y.z)(f,{damping:u,stiffness:h}),g=(0,w.W)(o,{once:!0,margin:"0px"});return(0,l.useEffect)((()=>{o.current&&(o.current.textContent=String("down"===a?t:s))}),[s,t,a]),(0,l.useEffect)((()=>{if(g&&i){"function"===typeof d&&d();const e=setTimeout((()=>{f.set("down"===a?s:t)}),1e3*n),l=setTimeout((()=>{"function"===typeof x&&x()}),1e3*n+1e3*r);return()=>{clearTimeout(e),clearTimeout(l)}}}),[g,i,f,a,s,t,n,d,x,r]),(0,l.useEffect)((()=>{const e=p.on("change",(e=>{if(o.current){const t={useGrouping:!!m,minimumFractionDigits:0,maximumFractionDigits:0},s=Intl.NumberFormat("en-US",t).format(e.toFixed(0));o.current.textContent=m?s.replace(/,/g,m):s}}));return()=>e()}),[p,m]),(0,j.jsx)("span",{className:`${c}`,ref:o})}const C=()=>{const{isOpen:e,onOpen:t,onClose:s}=(0,a.j)(),[u]=(0,l.useState)("right"),h=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{className:"block mb-4 md:inline-block md:mr-2",children:(0,j.jsx)("a",{href:"/upload",className:"active:text-[#FD914C] w-full text-left text-lg md:text-base",children:"UPLOAD"})}),(0,j.jsx)("li",{className:"block mb-4 md:inline-block md:mx-2",children:(0,j.jsx)("a",{href:"/download",className:"active:text-[#FD914C] w-full text-left text-lg md:text-base",children:"DOWNLOAD"})}),(0,j.jsx)("li",{className:"block mb-4 md:inline-block md:mx-2",children:(0,j.jsx)("a",{href:"/about",className:"active:text-[#FD914C] w-full text-left text-lg md:text-base",children:"ABOUT US"})}),(0,j.jsx)("li",{className:"block mb-4 md:inline-block md:mr-2",children:(0,j.jsx)("a",{className:"active:text-[#FD914C] w-full text-left text-lg md:text-base",children:"CONTACT US"})})]});return(0,j.jsx)("div",{className:"min-h-dvh bg-gradient-to-b from-gray-900 to-black text-white",style:{fontFamily:"Poppins"},children:(0,j.jsxs)("div",{className:"min-h-full",children:[(0,j.jsxs)("div",{className:"top-0 p-4 md:p-5 flex justify-between items-center",children:[(0,j.jsxs)("div",{className:"flex items-center",children:[(0,j.jsx)(o.A,{className:"w-6 h-6 md:w-8 md:h-8 text-orange-400 mr-2"}),(0,j.jsx)("h1",{className:"text-xl md:text-2xl lg:text-3xl font-semibold",children:"Dash"})]}),(0,j.jsx)(n.K,{className:"md:hidden","aria-label":"Open menu",icon:(0,j.jsx)(f.A,{color:"#ffffff"}),onClick:t,display:{base:"flex",md:"none"},bg:"transparent",_hover:{bg:"transparent"},_active:{bg:"transparent"}}),(0,j.jsx)("ul",{className:"hidden md:flex font-medium",children:(0,j.jsx)(h,{})})]}),(0,j.jsxs)(r._s,{placement:u,onClose:s,isOpen:e,children:[(0,j.jsx)(c.m,{}),(0,j.jsxs)(i.z,{bg:"black",opacity:75,children:[(0,j.jsx)(m.s,{color:"white"}),(0,j.jsx)(d.r,{borderBottomWidth:"1px",className:"text-white",children:"Menu"}),(0,j.jsx)(x.c,{children:(0,j.jsx)("ul",{className:"font-medium text-white",children:(0,j.jsx)(h,{})})})]})]}),(0,j.jsxs)("div",{className:"px-4 md:px-5 min-h-screen flex flex-col justify-center",children:[(0,j.jsx)("div",{className:"font-semibold text-3xl md:text-4xl lg:text-5xl text-center mt-8 md:mt-12",children:"QUICK. EASY. SECURE"}),(0,j.jsx)("p",{className:"text-center mt-4 md:mt-5 text-sm md:text-base",children:"Need To Send Files Urgently? Seamless File Transfers At Your Fingertips"}),(0,j.jsxs)("ul",{className:"flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-8 md:mt-10",children:[(0,j.jsx)("li",{className:"",children:(0,j.jsx)("a",{href:"/upload",className:"bg-[#FD914C] w-full md:w-36 h-10 rounded px-4 md:px-0",children:(0,j.jsx)("p",{className:"p-5 bg-[#FD914C] w-full md:w-36 h-10 rounded px-4 md:px-0 flex justify-center items-center",children:"UPLOAD"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"/download",className:"",children:(0,j.jsx)("p",{className:"w-full md:w-36 h-10 rounded border-[#FD914C] border-2 px-4 md:px-0 flex justify-center items-center",children:"DOWNLOAD"})})})]})]}),(0,j.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-4 md:space-y-8 my-12 md:my-20",children:[(0,j.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4",children:[(0,j.jsx)(v,{from:0,to:1e6,separator:",",direction:"up",duration:.3,className:"text-3xl md:text-5xl lg:text-6xl font-bold"}),(0,j.jsx)("span",{className:"text-xl md:text-3xl lg:text-4xl text-center",children:"uploads to date"})]}),(0,j.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4",children:[(0,j.jsx)(v,{from:0,to:1000231230,separator:",",direction:"up",duration:.3,className:"text-3xl md:text-5xl lg:text-6xl font-bold"}),(0,j.jsx)("span",{className:"text-xl md:text-3xl lg:text-4xl text-center",children:"downloads to date"})]})]}),(0,j.jsx)(b,{}),(0,j.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 bg-black my-12 md:my-20 lg:my-56 px-4 md:px-5 bg-transparent",children:[(0,j.jsxs)("div",{className:"flex flex-col items-center",children:[(0,j.jsx)("h1",{className:"text-4xl md:text-6xl lg:text-9xl",children:"Dash"}),(0,j.jsx)("h5",{className:"text-xl md:text-2xl lg:text-3xl mt-2",children:"QUICK.EASY.SECURE"})]}),(0,j.jsx)("p",{className:"mx-auto w-full md:w-48 my-6 md:my-8 font-medium text-center md:text-left text-sm md:text-base",children:"Discovered some bugs? Feel free to tell us about them at: teamdash@gmail.com"})]}),(0,j.jsx)("hr",{className:"bg-[#FD914C] h-0.5 w-11/12 md:w-4/5 mx-auto border-0 mt-4 md:mt-5"}),(0,j.jsx)("div",{className:"w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-5",children:(0,j.jsx)("p",{className:"mb-4 md:mb-0"})})]})})}}}]);
//# sourceMappingURL=94.12cb41b6.chunk.js.map