import { getGifs } from "../helpers/getGif";
import { useState, useEffect } from "react";


const useFetchGifs = (category) => {

    const [images, setImages]= useState([]);
    const[isLoading, setIsLoading]=useState(true);
    
    const getImages= async() => {
        const newImages= await getGifs({category})
        setImages(newImages)
        setIsLoading(false);
    }
    
  useEffect( ()=> {    
    getImages();

  }, [])
  return{
    images,
    isLoading,
  }
}
export default useFetchGifs