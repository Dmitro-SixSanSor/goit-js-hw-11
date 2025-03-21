import{S as p,a as d,i as l}from"./assets/vendor-XNMCaA0k.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=document.querySelector(".gallery"),m=new p(".gallery a");function y(){n.innerHTML=""}function g(a){const t=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img src="${s}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${r}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${i}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${u}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${f}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");n.innerHTML=t,m.refresh()}const h="49423998-53f799fc922e58b577969e777",b="https://pixabay.com/api/";async function L(a){try{return(await d.get(b,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){console.error("Error fetching images:",t)}}const x=document.querySelector("form"),c=document.querySelector(".loader");x.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query!"});return}y(),q();try{const s=await L(t);!Array.isArray(s)||s.length===0?l.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please, try again!"}):g(s)}catch(s){console.error("Fetch error:",s),l.error({title:"Error",message:"Failed to fetch images. Try again later!"})}finally{w()}});function q(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}
//# sourceMappingURL=index.js.map
