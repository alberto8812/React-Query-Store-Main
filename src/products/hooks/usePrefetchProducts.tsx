import { useQueryClient } from '@tanstack/react-query'
import { productaActions } from '..';

export const usePrefetchProducts = () => {
    const queryClient=useQueryClient();
    
    const preFechProduct=async(id:number)=>{
      queryClient.prefetchQuery(
        {
        queryKey:["ProductID",id],
        queryFn:()=>productaActions.getProductById({id})
         }
      );

    }
  return preFechProduct;
}
