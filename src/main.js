import { renderImages } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`form`);
const gallery = document.querySelector(`.gallery`);
const loader = document.querySelector(`.loader`);

form.addEventListener(`submit`, async(event)=>{
    event.preventDefault();

    const query = event.target.elements[`search-text`].value.trim();
    if (!query){
        iziToast.error({title: `Error`, message: `Please enter a search query!`});
        return;
    }

    gallery.innerHTML = ``;
    loader.classList.add(`visible`);
    try{
        const images = await fetchImages(query);
        console.log(images);
        
        if(images.length === 0){
            iziToast.warning({title: `Oops!`, message: `No images found. Try again!`});
        }else{
            renderImages(images);
        }
    }catch(error){
        iziToast.error({title: `Error`, message: ` Failed to fetch images. Try again later!`});
    }finally{
        loader.classList.remove(`visible`);
    }

});
