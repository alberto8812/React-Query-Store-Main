import { ProductosData, productsApi } from "..";




interface GetProductOption{
    filterKey?:string,

}

export const getProduct=async({filterKey}:GetProductOption)=>{
    const filterUrl=(filterKey)?`?category=${filterKey}`:''

    const {data}=await productsApi.get<ProductosData[]>(`/products${filterUrl}`);

    return data;

};

interface GetProductId{
    id:number
}

export const getProductById=async({id}:GetProductId)=>{

    const {data}= await productsApi.get<ProductosData>(`/products/${id}`)
    return data;
}

export interface ProductLike {
    id?:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
  
}

export const createProduct=async (product:ProductLike)=>{

    const {data}=await productsApi.post<ProductosData>(`/products`,product);
    return data;
    
}