import { ProductList, useProducts } from ".."

export const WomensPage = () => {

  const {isLoading,Products}=useProducts({filterKey:"women's clothing"});
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>
      {
        isLoading && <h1>Cargando...</h1>
      }
      <ProductList product={Products} />

    </div>
  )
}