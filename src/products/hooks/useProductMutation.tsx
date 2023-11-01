import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProductosData, productaActions } from '..'


export const useProductMutation = () => {
    const queryClient=useQueryClient();

    const mutation=useMutation({
    mutationFn:productaActions.createProduct,//llamamos la funcion que hace la peticion post
    onSuccess:(product)=>{
      /**
       * evitar recarar el navegador cuando se crea un producto
       *  */  
    //   queryClient.invalidateQueries(
    //     {
    //     // queryKey:["products",{"filterKey":data.category}],
    //     }//peticion que queremo invalidar
      
    queryClient.setQueriesData<ProductosData[]>(
            
            {queryKey:['products',{filterKey:product.category}]},
            (old)=>{
               if(!old) return [product]
               return [...old,product]
            }
            
            
        )

    },

  })
  
    return {
        mutation
  }
}
