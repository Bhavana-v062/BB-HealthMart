import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { useState } from 'react';
import toast from 'react-hot-toast';

const NewProduct = () => {
  const [data,setData] =useState({
    name : "",
    category : "",
    image :"",
    price : "",
    description : "",
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const uploadImage = async (e)=>{    
    const data = await ImagetoBase64(e.target.files[0])
    //console.log(data)
    setData((prev)=>{
      return{
        ...prev,
        image : data
      }
    })

  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const{name,image,category,price} =data;

    // Basic validation
    if (!name || !image || !category || !price) {
      toast.error("Please fill in all required fields.");
      return;  // Stop execution if validation fails
  }

  try {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });

      if (!fetchData.ok) {
          throw new Error(`Failed to upload: ${fetchData.status}`);
      }

      const fetchRes = await fetchData.json();
      console.log("Upload response:", fetchRes);

      toast.success(fetchRes.message || "Product uploaded successfully!");

      setData(()=>{
        return{
          name : "",
          category : "",
          image :"",
          price : "",
          description : "",
        }
        
      })
  } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Failed to upload product. Check console for details.");
  }
};

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white'onSubmit={ handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name='name' className='bg-slate-200 p-1 my-1'onChange={handleOnChange} value={data.name}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category'value={data.category} onChange={handleOnChange}>
            <option value="other">select category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Herbs and spices">Herbs and spices</option>            
            <option value="Dry Fruits">Dry Fruits</option>
            <option value="Cereals">Cereals</option>
            <option value="Basic Medicine">Basic Medicine</option>
        </select>

        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
          {
            data.image ? <img src ={data.image} className='h-full'/>: <span className='text-5xl'><IoCloudUploadOutline/></span>
          }
                    
          <input type={'file'} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
        </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={'text'} className='bg-slate-200 p-1 my-1'name='price' onChange={handleOnChange} value={data.price}/>

        <label htmlFor='description'>Description</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none'name='description' onChange={handleOnChange} value={data.description}></textarea>

        <button className='bg-slate-600 hover:bg-slate-500 text-white text-lg font-medium drop-shadow my-2'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct
