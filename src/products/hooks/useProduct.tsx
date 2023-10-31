import { useQuery } from '@tanstack/react-query'

import { productaActions } from '..'

interface Options {
    id:number;
}

export const useProduct = ({id}:Options) => {

  const {isError,isLoading,data:producto}=useQuery(
    {
        queryKey:['ProductID', id],
        queryFn:()=>productaActions.getProductById({id}),
        staleTime:100*60*60,
    },
    
  )


  return {
    isLoading,
    isError,
    producto

  }
}
