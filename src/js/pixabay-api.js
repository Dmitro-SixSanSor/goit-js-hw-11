import axios from "axios";
const API_KEY =`49423998-53f799fc922e58b577969e777`;
const BASE_URL = `https://pixabay.com/api/`;

export async function fetchImages(query) {
   try{
    const response = await axios.get(BASE_URL,{
        params:{
            key: API_KEY,
            q: query,
            image_type: `photo`,
            orientation: `horizontal`,
            safesearch: true,
        }
    });


    console.log(response.data);
    
    return response.data.hits;

   } catch(error){
console.error(`Error fetching images:`, error)
throw error
   }
   
}