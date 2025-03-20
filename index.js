import{S as f,a as m,i as o}from"./assets/vendor-XNMCaA0k.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=document.querySelector(".gallery");function d(a){p.innerHTML=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:c,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}" class="gallery-link">
          <img src="${s}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${t}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${l}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${c}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${u}</p>
          
            </li>
        </ul>
        </div>
      </li>`).join(""),new f(".gallery a").refresh()}const g="49423998-53f799fc922e58b577969e777",y="https://pixabay.com/api/";async function h(a){try{const r=await m.get(y,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const b=document.querySelector("form"),L=document.querySelector(".gallery"),n=document.querySelector(".loader");b.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){o.error({title:"Error",message:"Please enter a search query!"});return}L.innerHTML="",n.classList.add("visible");try{const s=await h(r);console.log(s),s.length===0?o.warning({title:"Oops!",message:"No images found. Try again!"}):d(s)}catch{o.error({title:"Error",message:" Failed to fetch images. Try again later!"})}finally{n.classList.remove("visible")}});
//# sourceMappingURL=index.js.map
