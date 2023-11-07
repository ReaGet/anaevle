(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function h(a){let r=a.split(".").map(Number),s,i,t,e,o,c,n,d,u,m,b;return s=r[0],i=r[1],t=(""+r[2]).split("").map(Number).reduce((f,v)=>f+v),s=l(s),t=l(t),e=s+i+t,e=l(e),o=s+i+t+e,o=l(o),c=s+i+t+e+o,c=l(c),n=l(s+i),d=l(i+t),u=l(t+e),m=l(e+o),b=l(o+s),[s,i,t,e,o,c,n,d,u,m,b]}function l(a,r=22){return a>r&&(a=(""+a).split("").map(Number).reduce((s,i)=>s+i)),a}const x="/assets/photo-9ad8880d.png",$="/assets/photo_1-57b162ef.png";function g(a){const[r,s,i,t,e,o,c,n,d,u,m]=a;return`
    <div class="relative flex items-center justify-center w-[300px] h-[300px] text-[25px] text-white">
      <img src="${x}" width="250" height="250">
      <div class="absolute top-[110px] left-0">${r}</div>
      <div class="absolute top-0">${s}</div>
      <div class="absolute top-[110px] right-0">${i}</div>
      <div class="absolute bottom-0 right-24">${t}</div>
      <div class="absolute bottom-0 left-24">${e}</div>
      <div class="absolute mt-16">${o}</div>
      <div class="absolute -mt-32 ml-40">${c}</div>
      <div class="absolute mt-36 ml-64">${n}</div>
      <div class="absolute bottom-16">${d}</div>
      <div class="absolute mt-36 mr-64">${u}</div>
      <div class="absolute -mt-32 mr-40">${m}</div>
    </div>
  `}function N(a){const[r,s,i]=a;let t=l(i+r),e=l(s+r),o=l(s+i),c=l(t+e),n=l(r+o);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[28px] text-white">ТРЕУГОЛЬНИК ЛИЧНОСТИ</div>
      <div class="relative flex items-center justify-center w-[300px] h-[300px] text-[25px] text-white">
        <img src="${$}" width="250" height="250">
        <div class="absolute -top-8 text-purple-600">${r}</div>
        <div class="absolute -bottom-6 -left-2 text-cyan-500">${i}</div>
        <div class="absolute  -bottom-6 -right-2 text-cyan-500">${s}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${t}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${e}</div>
        <div class="absolute -bottom-6 text-pink-400">${o}</div>
        <div class="absolute -ml-20 mb-8">${c}</div>
        <div class="absolute -mr-20 mb-8">${n}</div>
      </div>
    </div>
  `}const y="03.04.1998",p=h(y);document.querySelector("#app").innerHTML=`
  <div class="flex flex-col items-center gap-40 min-h-screen bg-gray-950">
    ${g(p)}
    ${N([p[0],p[6],p[10]])}
  </div>
`;
