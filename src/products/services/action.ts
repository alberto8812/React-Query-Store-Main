import { ProductosData, productsApi } from "..";




interface GeetProductOption{
    filterKey?:string,

}

export const getProduct=async({filterKey}:GeetProductOption)=>{

    const {data}=await productsApi.get<ProductosData[]>('/products');

    return data;

};