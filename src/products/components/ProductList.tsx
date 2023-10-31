import { FC } from "react"
import { ProductCard, ProductosData, usePrefetchProducts } from ".."


interface Props {
  product:ProductosData[]
}

export const ProductList:FC <Props> = ({product}) => {

 const prefetchProduct= usePrefetchProducts();


  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
   {
    product.map((product)=> <ProductCard  key={product.id} product={product} prefetchProduct={prefetchProduct}/>)
   }

    </div>
  )
}