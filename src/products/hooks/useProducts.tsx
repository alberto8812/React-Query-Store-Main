import { useQuery } from '@tanstack/react-query'
import { productaActions } from '..'


interface Options {
    filterKey?:string
}//esto es para que la busqueda sea felxible

export const useProducts = ({filterKey}:Options) => {
  
    const {isLoading,isError,error,data:Products=[],isFetched}=useQuery(

      { 
        queryKey:  ['products',{ filterKey }],    
        queryFn: ()=>productaActions.getProduct({filterKey}),
        staleTime:100*60*60,
     },

    
    )
  
    return {
        isLoading,
        isError,
        error,
        Products,
        isFetched
  }
}
