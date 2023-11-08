(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=i(e);fetch(e.href,l)}})();function h(d){let t=d.split(".").map(Number),i,s,e,l,a,o,m,u,c,n,b;return i=t[0],s=t[1],e=(""+t[2]).split("").map(Number).reduce((v,f)=>v+f),i=r(i),e=r(e),l=i+s+e,l=r(l),a=i+s+e+l,a=r(a),o=i+s+e+l+a,o=r(o),m=r(i+s),u=r(s+e),c=r(e+l),n=r(l+a),b=r(a+i),{firstWorkNumber:i,secondWorkNumber:s,thirdWorkNumber:e,fourthWorkNumber:l,fifthWorkNumber:a,sixthWorkNumber:o,firstPairNumber:m,secondPairNumber:u,thirdPairNumber:c,fourthPairNumber:n,fifthPairNumber:b}}function r(d,t=22){return d>t&&(d=(""+d).split("").map(Number).reduce((i,s)=>i+s)),d}const N="/assets/photo-9ad8880d.png",p="/assets/photo-2-e04f53ec.png",x="/assets/photo_1-57b162ef.png";function $(d){const{firstWorkNumber:t,secondWorkNumber:i,thirdWorkNumber:s,fourthWorkNumber:e,fifthWorkNumber:l,sixthWorkNumber:a,firstPairNumber:o,secondPairNumber:m,thirdPairNumber:u,fourthPairNumber:c,fifthPairNumber:n}=d;return`
    <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white bg-gray-900 rounded-3xl">
      <img src="${N}" width="250" height="250">
      <div class="absolute -mt-[260px]">${i}</div>
      <div class="absolute -ml-[290px] -mt-16">${t}</div>
      <div class="absolute -mr-[290px] -mt-16">${s}</div>
      <div class="absolute -mb-[270px] ml-56">${e}</div>
      <div class="absolute -mb-[270px] mr-[170px]">${l}</div>
      <div class="absolute mt-16">${a}</div>
      <div class="absolute -mt-32 ml-40">${m}</div>
      <div class="absolute mt-36 ml-64">${u}</div>
      <div class="absolute -mb-80">${c}</div>
      <div class="absolute mt-36 mr-64">${n}</div>
      <div class="absolute -mt-32 mr-40">${o}</div>
    </div>
  `}function g(d){const{firstWorkNumber:t,firstPairNumber:i,fifthPairNumber:s}=d;let e=r(s+t),l=r(i+t),a=r(i+s),o=r(e+l),m=r(t+a);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ЛИЧНОСТИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${x}" width="250" height="250">
        <div class="absolute -mt-[300px] text-purple-600">${t}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${s}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${i}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${e}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${l}</div>
        <div class="absolute -mb-[300px] text-pink-400">${a}</div>
        <div class="absolute -ml-20 mb-8">${o}</div>
        <div class="absolute -mr-20 mb-8">${m}</div>
      </div>
    </div>
  `}function y(d){const{secondWorkNumber:t,firstPairNumber:i,secondPairNumber:s}=d;let e=r(i+t),l=r(s+t),a=r(i+s),o=r(e+l),m=r(t+a);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ДУХОВНОСТИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${x}" width="250" height="250">
        <div class="absolute -mt-[300px] text-green-400">${t}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${i}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${s}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${e}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${l}</div>
        <div class="absolute -mb-[300px] text-pink-400">${a}</div>
        <div class="absolute -ml-20 mb-8">${o}</div>
        <div class="absolute -mr-20 mb-8">${m}</div>
      </div>
    </div>
  `}function w(d){const{thirdWorkNumber:t,secondPairNumber:i,thirdPairNumber:s}=d;let e=r(i+t),l=r(s+t),a=r(i+s),o=r(e+l),m=r(t+a);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ДЕНЕЖНЫЙ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${x}" width="250" height="250">
        <div class="absolute -mt-[300px] text-red-600">${t}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${i}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${s}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${e}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${l}</div>
        <div class="absolute -mb-[300px] text-pink-400">${a}</div>
        <div class="absolute -ml-20 mb-8">${o}</div>
        <div class="absolute -mr-20 mb-8">${m}</div>
      </div>
    </div>
  `}function k(d){const{fourthWorkNumber:t,thirdPairNumber:i,fourthPairNumber:s}=d;let e=r(i+t),l=r(s+t),a=r(i+s),o=r(e+l),m=r(t+a);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ОТНОШЕНИЙ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${x}" width="250" height="250">
        <div class="absolute -mt-[300px] text-indigo-500">${t}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${i}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${s}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${e}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${l}</div>
        <div class="absolute -mb-[300px] text-pink-400">${a}</div>
        <div class="absolute -ml-20 mb-8">${o}</div>
        <div class="absolute -mr-20 mb-8">${m}</div>
      </div>
    </div>
  `}function P(d){const{fourthWorkNumber:t,fifthWorkNumber:i,thirdPairNumber:s,fourthPairNumber:e,fifthPairNumber:l}=d;let a=r(s+t),o=r(e+t),m=r(s+e),u=r(a+o),c=r(t+m);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ЗДОРОВЬЯ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${x}" width="250" height="250">
        <div class="absolute -mt-[300px] text-white">${i}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${e}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${l}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${a}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${o}</div>
        <div class="absolute -mb-[300px] text-pink-400">${m}</div>
        <div class="absolute -ml-20 mb-8">${u}</div>
        <div class="absolute -mr-20 mb-8">${c}</div>
      </div>
    </div>
  `}function W(d){const{fourthWorkNumber:t,fifthWorkNumber:i}=d;let s=r(t+i);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">РОКОВАЯ ОШИБКА</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${p}" width="280" height="280">
        <div class="absolute w-6 h-6 -mb-56 -ml-3 rounded-full bg-orange-500"></div>
        <div class="absolute -mb-[210px] text-orange-500">${s}</div>
      </div>
    </div>
  `}function j(d){const{firstWorkNumber:t,thirdWorkNumber:i,firstPairNumber:s,secondPairNumber:e}=d;let l=r(t+s),a=r(s+e),o=r(e+i);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">Чакры</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${p}" width="280" height="280">
        <div class="absolute -mt-32 -ml-[250px] text-indigo-500">${t}</div>
        <div class="absolute -mt-32 -ml-[180px] text-white">${l}</div>
        <div class="absolute -mt-32 -ml-[110px] text-cyan-500">${s}</div>
        <div class="absolute -mt-32 text-red-600">${a}</div>
        <div class="absolute -mt-32 -mr-[110px] text-cyan-500">${e}</div>
        <div class="absolute -mt-32 -mr-[180px] text-white">${o}</div>
        <div class="absolute -mt-32 -mr-[250px] text-red-600">${i}</div>
      </div>
    </div>
  `}function L(d){const{firstWorkNumber:t,secondWorkNumber:i,thirdWorkNumber:s,fourthWorkNumber:e,fifthWorkNumber:l,firstPairNumber:a,secondPairNumber:o,thirdPairNumber:m,fourthPairNumber:u,fifthPairNumber:c}=d;let n=r(t+i+s+e+l),b=r(a+o+m+u+c),v=r(n+b);return`
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">КОД ДУШИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${p}" width="280" height="280">
        <div class="absolute w-16 mt-4 -ml-16 text-cyan-500 text-left">${n}</div>
        <div class="absolute w-16 mt-4 -mr-8 text-cyan-500 text-right">${v}</div>
        <div class="absolute w-16 -mb-32 -ml-4 text-cyan-500 text-center">${b}</div>
      </div>
    </div>
  `}const S=new Intl.DateTimeFormat(["ru-RU"]);function O(d){d.addEventListener("submit",t=>{t.preventDefault();const i=d.querySelector("input");if(i.value){const s=document.querySelector("[data-type=content]");s.innerHTML=q(S.format(new Date(i==null?void 0:i.value)))}})}function q(d){const t=h(d);return`
    ${$(t)}
    ${g(t)}
    ${y(t)}
    ${w(t)}
    ${k(t)}
    ${P(t)}
    ${W(t)}
    ${j(t)}
    ${L(t)}
  `}document.querySelector("#app").innerHTML=`
  <div class="flex flex-col items-center gap-40 min-h-screen py-40">
    <div class="w-full max-w-[350px]">
      <form class="flex flex-col gap-4 w-full">
        <input
          class="p-6 rounded-lg text-2xl outline-none focus:ring-4 focus:ring-indigo-100"
          type="date"
          placeholder="dd.mm.yyyy"
          pattern="d{2}.d{2}.d{4}"
        >
        <button class="p-6 rounded-lg text-2xl text-white bg-indigo-500">Расчитать</button>
      </form>
    </div>
    <div class="flex flex-col items-center gap-40" data-type="content"></div>
  </div>
`;O(document.querySelector("form"));
