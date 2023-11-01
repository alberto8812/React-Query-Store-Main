import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProductosData, productaActions } from '..'


export const useProductMutation = () => {
    const queryClient=useQueryClient();

    const mutation=useMutation({
    mutationFn:productaActions.createProduct,//llamamos la funcion que hace la peticion post

    onMutate:(data)=>{

        //seiguiente paso es crear un producto optimista
       const optimisticProduct={id:Math.random(),...data}//va a ser igual al producto creado , conu un id asignado
        //los siguiente es afectar el query de la cache 
        queryClient.setQueriesData<ProductosData[]>(
            {queryKey:['products',{filterKey:data.category}]},
            (old)=>{
                if(!old) return [optimisticProduct]
                return [...old,optimisticProduct]
             }
        );
        return {optimisticProduct}
        },

    
    onSuccess:(product,variables,context)=>{
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
               return  old.map(data=>data.id===context?.optimisticProduct.id? product:data)
            }
            
            
        )

    },

    onError:(error,varibles,context)=>{
        queryClient.removeQueries(
            {
                queryKey:["produdct",context?.optimisticProduct.id]
            }
        );
        queryClient.setQueriesData<ProductosData[]>(
            
            {queryKey:['products',{filterKey:varibles.category}]},
            (old)=>{
               if(!old) return []
               return  old.filter(data=>data.id!==context?.optimisticProduct.id)
            }
            
            
        )

    }

  })
  
    return {
        mutation
  }
}
