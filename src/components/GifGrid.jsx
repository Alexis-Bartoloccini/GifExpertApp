
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} =useFetchGifs(category)
  
  return (
    <>
    <h3>{category}</h3>
    {/* agrega el item "cargando" mientras isloading esta en true, es decir, cargando. */}
    {
    isLoading ? (<h2>Cargando Gifs...</h2>) : null
    }
    <div className="card-grid " > 
      {
      images.map( (image)=>(
        <GifItem 
        key={image.id}
// se le envia al GifItem todas las propiedades de la imagen (id, title, url)
        {...image}
         />
      ))
    }
    </div>
    </>
  )
}
