import{S as d,a as g,i as l}from"./assets/vendor-XNMCaA0k.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery");function c(){n.innerHTML=""}function y(a){c();const r=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:f,comments:p,downloads:m})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${o}" alt="${t}" class="gallery-image" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${i}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${f}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${p}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${m}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");n.innerHTML=r,new d(".gallery a").refresh()}const h="49423998-53f799fc922e58b577969e777",b="https://pixabay.com/api/";async function L(a){try{const r=await g.get(b,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const x=document.querySelector("form"),u=document.querySelector(".loader");x.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){l.error({title:"Error",message:"Please enter a search query!"});return}c(),v();try{const s=await L(r);!Array.isArray(s)||s.length===0?l.warning({title:"Oops!",message:"No images found. Try again!"}):y(s)}catch(s){console.error("Fetch error:",s),l.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{w()}});function v(){u.classList.add("visible")}function w(){u.classList.remove("visible")}
//# sourceMappingURL=index.js.map
