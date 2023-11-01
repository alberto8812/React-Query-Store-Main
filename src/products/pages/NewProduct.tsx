import { Button, Image, Input, Textarea } from "@nextui-org/react";
import {FC, useEffect, useState} from "react";
import { SubmitHandler, useForm,Controller  } from "react-hook-form";


interface FormInputs{
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
 
}

export const NewProduct= () => {
  
  const [tempImge, setTempImge] = useState("")
  const {control,handleSubmit,watch}=useForm<FormInputs>({
  defaultValues:{
    title:"",
    price:0,
    description:"",
    category:"men's clothing",
    image:""
  }
  });
/**
 * control: permite conectar los input
 * register:funciona igual al control
 * handleSubmit: es la funcion que queremos utilizar para que haga las prevenciones de errores
 * 
 */
 const newImage=watch('image');


/**
 * funcion que permite delegar el posteo
 * 
 */
  const onSubmit:SubmitHandler<FormInputs>=(data)=>{
    console.log(data)
  }

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-around items-center">
          
          <div className="flex-col w-[500px]">
            
            <Controller 
              control={control}// e controles qie esty tomando es el control del formulario
              name='title'//espacio que vamos a controla
              rules={{required:true}}//regalas
              render={({field})=>(
                <Input className="mt-2" type="text" label="Titulo del producto" value={field.value} onChange={field.onChange} />// retornamos el imput a controlar
              )}//el campo que queremos que este controlador haga 
            
            />
            <Controller 
              control={control}// e controles qie esty tomando es el control del formulario
              name='price'
              rules={{required:true}}//regalas
              render={({field})=>(
                <Input className="mt-2" type="number" label="Precio del producto"  value={field.value.toString()} onChange={ev=>field.onChange(+ev.target.value)}  />// retornamos el imput a controlar
              )}//el campo que queremos que este controlador haga 
            
            />
            <Controller 
              control={control}// e controles qie esty tomando es el control del formulario
              name='image'
              rules={{required:true}}//regalas
              render={({field})=>(
                <Input className="mt-2" type="url" label="Url del producto" value={field.value} onChange={field.onChange} />// retornamos el imput a controlar
              )}//el campo que queremos que este controlador haga 
            
            />
            <Controller 
              control={control}// e controles qie esty tomando es el control del formulario
              name='description'
              rules={{required:true}}//regalas
              render={({field})=>(
                <Input className="mt-2" label="Descripcion del producto" value={field.value} onChange={field.onChange} />// retornamos el imput a controlar
              )}//el campo que queremos que este controlador haga 
            
            />
            <Controller 
              control={control}// e controles qie esty tomando es el control del formulario
              name='description'
              rules={{required:true}}//regalas
              render={({field})=>(
                <select className="rounded-md p-3 mt-2 bg-gray-800 w-full" value={field.value}  onChange={field.onChange}>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
              </select>
              )}//el campo que queremos que este controlador haga 
            
            />

  

            <br />
            <Button type="submit" className="mt-2" color="primary">Crear</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={newImage}
            />
          </div>
          
        </div>


      </form>

    </div>
  )
}