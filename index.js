import{a as d,S as g,i as l}from"./assets/vendor-BBPOLzfb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="YOUR_PIXABAY_API_KEY",h="https://pixabay.com/api/";async function b(o){try{return(await d.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}let c=null;function L(o,r){const s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:f,comments:p,downloads:m})=>`
        <a href="${e}" class="gallery-item">
            <img src="${a}" alt="${t}" />
            <div class="info">
                <p><b>Likes:</b> ${n}</p>
                <p><b>Views:</b> ${f}</p>
                <p><b>Comments:</b> ${p}</p>
                <p><b>Downloads:</b> ${m}</p>
            </div>
        </a>
    `).join("");r.innerHTML=s,c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})}const i={form:document.querySelector(".search-form"),input:document.querySelector("#search-text"),button:document.querySelector('button[type="submit"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function u(){i.loader.classList.toggle("hidden")}function S(){i.gallery.innerHTML=""}i.form?i.form.addEventListener("submit",async o=>{o.preventDefault();const r=i.input.value.trim();if(r===""){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}S(),u();try{const s=await b(r);s.hits.length===0?l.info({title:"No Results",message:"No images found for your search.",position:"topRight"}):L(s.hits,i.gallery)}catch{l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}finally{u()}o.target.reset()}):console.error("Форма не знайдена в DOM!");
//# sourceMappingURL=index.js.map
