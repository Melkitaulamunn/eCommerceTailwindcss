import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'

const Card = () => {
  const dispatch=useDispatch()
  const {cardItems}=useSelector(state=>state.cardItems)
  console.log("cardItems",cardItems);

  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
      <div className="flex items-center h-20 justify-between">
        <h1 className='text-2xl'>
            SEPETİM:
        </h1>
        <AiOutlineClose onClick={()=>dispatch({type:"DRAWER", payload:false})}size={25} className="cursor-pointer"/>
      </div>

      {
        cardItems?.map((card,i)=>(
      <div className="h-28 items-center flex justify-between py-4 mt-5">
          <img className="h-24" src={card?.image} alt="" />
          <div className='w-30'>
            <div className='font-bold text-sm'>{card?.title}{card?.qty}</div>
            <div className='opacity-70 text-xs'>{card?.description} </div>
          </div>
          <div className='font-bold text-lg'>{card?.price}</div>
          <div className='bg-red-500 w-20 p-2 text-center text-whitw rounded-lg cursor-pointer'>sil</div>
      </div>

        ))
      }
     
     
    </div>
  )
}

export default Card
