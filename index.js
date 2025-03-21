import{S as m,a as d,i as l}from"./assets/vendor-XNMCaA0k.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),g=new m(".gallery a");function c(){n.innerHTML=""}function y(s){c();const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img src="${a}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${t}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${i}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${f}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${p}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");n.innerHTML=r,ё,g.refresh()}const h="49423998-53f799fc922e58b577969e777",b="https://pixabay.com/api/";async function L(s){try{const r=await d.get(b,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const v=document.querySelector("form"),u=document.querySelector(".loader");v.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){l.error({title:"Error",message:"Please enter a search query!"});return}c(),w();try{const a=await L(r);a.length===0?l.warning({title:"Oops!",message:"No images found. Try again!"}):y(a)}catch{l.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{x()}});function w(){u.classList.add("visible")}function x(){u.classList.remove("visible")}
//# sourceMappingURL=index.js.map
