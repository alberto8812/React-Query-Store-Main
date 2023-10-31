import { ProductList, useProducts } from ".."

export const MensPage = () => {
  const {isLoading,Products}=useProducts({filterKey:"men's clothing"});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      {
        isLoading && <h1>Cargando...</h1>
      }
      <ProductList  product={Products}/>

    </div>
  )
}