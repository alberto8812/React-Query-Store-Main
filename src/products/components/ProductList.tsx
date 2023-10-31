import { FC } from "react"
import { ProductCard, ProductosData } from ".."


interface Props {
  product:ProductosData[]
}

export const ProductList:FC <Props> = ({product}) => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
   {
    product.map((product)=> <ProductCard  key={product.id} product={product}/>)
   }

    </div>
  )
}