
import { useParams } from "react-router-dom"
import { ProductCard, useProduct } from "..";



export const ProductById = () => {
  const {id}=useParams();
    const {isLoading,producto}=useProduct({id:+id!})


  

  return (
    <div className="flex-col">

      <h1 className="text-2xl font-bold"> productos</h1>
      {
        isLoading && <p>Cargando...</p>
      }
    {
        producto && 
      <ProductCard product={producto} fullDescription={true} />
    }

    </div>
  )
}