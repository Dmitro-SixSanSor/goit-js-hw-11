import{a as u,i as c}from"./assets/vendor-BWu8EiFK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="YOUR_PIXABAY_API_KEY",f="https://pixabay.com/api/";async function m(o){try{return(await u.get(f,{params:{key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const a={form:document.querySelector(".search-form"),input:document.querySelector("#search-text"),button:document.querySelector('button[type="submit"]'),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",o=>{o.preventDefault();const r=a.input.value.trim();if(r===""){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}m(r).then(s=>{if(s.hits.length===0)c.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{const i=imgsTemplate(s.hits);a.gallery.innerHTML=i}}).catch(s=>{c.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}),o.target.reset()});
//# sourceMappingURL=index.js.map
