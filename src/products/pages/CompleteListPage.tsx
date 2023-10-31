import { ProductList, useProducts } from ".."


export const CompleteListPage = () => {

 const {isLoading,Products}= useProducts({});

  

  return (
    <div className="flex-col">

      <h1 className="text-2xl font-bold">Todos los productos</h1>
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      {
        isLoading && <p>Cargando...</p>
      }

      <ProductList product={Products} />

    </div>
  )
}