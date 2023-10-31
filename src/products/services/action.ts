import { ProductosData, productsApi } from "..";




interface GeetProductOption{
    filterKey?:string,

}

export const getProduct=async({filterKey}:GeetProductOption)=>{
    const filterUrl=(filterKey)?`?category=${filterKey}`:''

    const {data}=await productsApi.get<ProductosData[]>(`/products${filterUrl}`);

    return data;

};