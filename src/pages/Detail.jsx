import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {productsActiondetail} from "../redux/actions/products"
import {CgMathPlus,CgMathMinus} from "react-icons/cg";
import {productsCard} from "../redux/actions/card.js"

const Detail = () => {
  const{id}=useParams();
  const dispatch=useDispatch();
  const {product}=useSelector(state=>state.product);
  const [count,setCount]=useState(0)
  

  useEffect(()=>{
    dispatch(productsActiondetail(id))
  },[dispatch])

  console.log("product",product)

  const increment=(stock)=>{
    if (count<= stock){
      setCount(count+1)
    }

  }
  const decrement=()=>{

    if(count>0){
      setCount(count-1)
    }
  }
const addCard=()=>{
  dispatch(productsCard(id,count))
  dispatch({type:"DRAWER",payload:true})
  

}
  return (
    <div className='w-full flex justify-center items-center space-x-5'>
     <img className="w-1/3" src={product?.image} alt=""  />
     <div className="w-2/3 space-y-5">
        <div className='font-bold text-xl'>{product?.title}</div>
        <div className='opacity-70'>{product?.description}</div>
        <div className='opacity-70'>Category:{product?.category}</div>
        <div className='opacity_70'>Rate:{product?.rating?.rate} - Stock: {product?.rating?.count}</div>
        <div className='font-bold text-xl'>Fiyat:{product?.price}</div>


        <div className='flex items-center space-x-4'>
          <CgMathPlus onClick={()=>increment(product?.rating?.count)}className='cursor-pointer border rounded-full p-1' size={30}/>
          <span className='text-2xl'>{count}</span>
          <CgMathMinus onClick={()=>decrement()}className='cursor-pointer border rounded-full p-1' size={30}/>
        </div>
        <button onClick={()=>addCard()}className='p-3 w-full text-center rounded-lg text-white text-lg bg-indigo-600'>Sepete Ekle</button>
     </div>
    </div>
  )
}

export default Detail
