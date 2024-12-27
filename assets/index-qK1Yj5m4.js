(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const m=n=>{const e=document.createElement("a");return e.className="block rounded-md p-[13px] w-full bg-gray_700 text-white font-inter font-semibold text-sm min-[375px]:text-[15px] min-[1366px]:p-[12px] min-[1366px]:text-[14px] hover:bg-green hover:text-gray_900 dark:bg-[#ffffff50] dark:shadow-inner dark:shadow-[#ffffff50]",e.href=n.link,e.textContent=n.text,e},p=n=>{const e=document.createElement("div");return e.className="card bg-gray_800 flex flex-col relative justify-center text-center p-8 w-[270px] mx-auto rounded-lg gap-4 min-[375px]:w-[325px] min-[375px]:gap-5 min-[375px]:p-6 min-[1366px]:w-[382px] min-[1366px]:py-11 min-[1366px]:px-10 min-[1366px]:gap-6 dark:bg-[#ffffff25] dark:shadow-lg dark:shadow-inner dark:shadow-[#ffffff40] dark:shadow-lg",e.insertAdjacentElement("beforeend",n),e},g=n=>{const e=document.createElement("img");e.alt=n.name,e.title=n.name,e.src=n.img,e.className="inline-block rounded-full size-20 min-[375px]:size-[86px] min-[1366px]:size-[85px] dark:shadow-[#00000090] dark:shadow-lg";const i=document.createElement("h1");i.textContent=n.name,i.className="text-white font-inter font-bold text-2xl dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg";const o=document.createElement("h2");o.textContent=n.based_in,o.className="text-green font-inter font-bold text-xs min-[375px]:text-sm dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg";const t=document.createElement("p");t.textContent=`"${n.description}"`,t.className="text-white font-inter text-[10.5px] min-[375px]:text-[14px] dark:text-gray_900 dark:drop-shadow-[#00000090] dark:drop-shadow-lg";const a=document.createElement("div");a.className="flex flex-col items-center gap-1 min-[375px]:gap-2",a.insertAdjacentElement("afterbegin",i),a.insertAdjacentElement("beforeend",o);const r=document.createElement("div");return r.className="flex flex-col justify-center items-center gap-4 !w-full min-[375px]:gap-[27px] min-[1366px]:gap-[25px]",r.insertAdjacentElement("afterbegin",e),r.insertAdjacentElement("beforeend",a),r.insertAdjacentElement("beforeend",t),r},u="data:image/jpeg;base64,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",x=""+new URL("toonme-wSD-Vopw.jpg",import.meta.url).href,d=()=>[{name:"Jessica Randall",img:u,based_in:"London, United Kingdom",description:"Front-end developer and avid reader.",socialLinks:[{text:"Github",link:"https://github.com/"},{text:"Frontend Mentor",link:"https://www.frontendmentor.io/"},{text:"LinkedIn",link:"https://www.linkedin.com/"},{text:"Twitter",link:"https://x.com/"},{text:"Instagram",link:"https://www.instagram.com/"}]},{name:"Aakash Verma",img:x,based_in:"Punjab, India 🇮🇳",description:"Seasonal Full Stack Software Engineer, Looking for the remote job.",socialLinks:[{text:"Github",link:"https://github.com/skyv26"},{text:"Frontend Mentor",link:"https://www.frontendmentor.io/profile/skyv26"},{text:"LinkedIn",link:"https://linkedin.com/in/skyv2022"},{text:"Twitter",link:"https://x.com/devaakashv"},{text:"Instagram",link:"https://www.instagram.com/_mr.vermaaa_/"}]}];let s=0;const A=document.createElement("button");function c(){const{socialLinks:n,...e}=d()[s],i=p(g(e)),o=document.createElement("div");o.className="flex flex-col justify-center align-center text-center gap-3 min-[375px]:gap-4 min-[1366px]:gap-[17px]",n.forEach(({text:a,link:r})=>{const l=m({text:a,link:r});o.appendChild(l)});const t=document.querySelector("#app");t.innerHTML="",t.appendChild(i),i.insertAdjacentElement("beforeend",A),i.insertAdjacentElement("beforeend",o)}document.addEventListener("DOMContentLoaded",()=>{const n=document.documentElement,e=localStorage.getItem("theme");e==="dark"?(s=(s+1)%d().length,c(),n.classList.add("dark")):e==="light"&&n.classList.remove("dark"),A.textContent="🌟",A.className=`hidden bg-transparent border-none outline-none 
    absolute top-5 right-5 text-lg z-20 
    animate-rotateScale themeToggle`,A.addEventListener("click",()=>{n.classList.contains("dark")?(n.classList.remove("dark"),localStorage.setItem("theme","light")):(n.classList.add("dark"),localStorage.setItem("theme","dark")),s=(s+1)%d().length,c()}),c()});
