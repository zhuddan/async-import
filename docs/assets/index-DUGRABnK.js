(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="modulepreload",y=function(u){return"/async-import/"+u},d={},E=function(c,o,l){let e=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(o.map(i=>{if(i=y(i),i in d)return;d[i]=!0;const a=i.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${f}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":h,a||(s.as="script"),s.crossOrigin="",s.href=i,n&&s.setAttribute("nonce",n),document.head.appendChild(s),a)return new Promise((m,p)=>{s.addEventListener("load",m),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return e.then(t=>{for(const n of t||[])n.status==="rejected"&&r(n.reason);return c().catch(r)})};function g(){const u="abcdefg".split(""),c=document.querySelector(".card");u.forEach(o=>{const l=document.createElement("button");l.innerText=o,c.appendChild(l),l.addEventListener("click",async()=>{(await E(()=>import("/template/"+o+".js"),[])).print()})})}g();
