import{a as u,S as h,i}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="43838996-7b0b384f174ce1ebbbcd3455e",L="https://pixabay.com/api/";u.defaults.baseURL=L;async function m(s,t){try{return await u.get("",{params:{q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,key:b,per_page:15,page:t}})}catch(o){throw console.error("Error fetching data from Pixabay API:",o),o}}function p(s){return s.map(({tags:t,likes:o,views:c,comments:e,downloads:r,largeImageURL:a})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img class="gallery-img" src="${a}" alt="${t}">
            <div class="info-gallery-box">
              <ul class="info-gallery-list">
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Likes</p>
                  <span class="info-gallery-span">${o}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Views</p>
                  <span class="info-gallery-span">${c}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Comments</p>
                  <span class="info-gallery-span">${e}</span>
                </li>
                <li class="info-gallery-item">
                  <p class="info-gallery-text">Downloads</p>
                  <span class="info-gallery-span">${r}</span>
                </li>
              </ul>
            </div>
          </a>
        </li>`).join("")}const w=document.querySelector(".form"),d=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=document.querySelector(".load-more"),y=new h(".gallery a",{captionsData:"alt",captionDelay:250});let n=1,f="";w.addEventListener("submit",P);g.addEventListener("click",C);async function P(s){if(s.preventDefault(),f=s.currentTarget.elements.search.value.trim(),f===""){i.error({message:"Search query cannot be empty. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3});return}n=1,l.classList.remove("is-hidden"),g.classList.add("is-hidden"),d.innerHTML="";try{const{data:t}=await m(f,n);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3}),l.classList.add("is-hidden");return}d.innerHTML=p(t.hits),y.refresh(),t.totalHits>15&&g.classList.remove("is-hidden")}catch(t){console.log(t),i.error({message:"Something went wrong. Please try again later.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3})}finally{l.classList.add("is-hidden"),s.target.reset()}}async function C(){n+=1,l.classList.remove("is-hidden");try{const{data:s}=await m(f,n);d.insertAdjacentHTML("beforeend",p(s.hits)),y.refresh();const t=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),Math.ceil(s.totalHits/15)===n&&(i.error({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3}),g.classList.add("is-hidden"))}catch(s){console.log(s),i.error({message:"Something went wrong. Please try again later.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:4e3})}finally{l.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
