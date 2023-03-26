import React from 'react'
import {BsLightbulb} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-3'>
        <div>LOGO</div>
        <div>
            <input type="text" placeholder='search'/>
             
             <BsLightbulb/>
             <div className='relative'>
                <SlBasket/>
                <span className='px-1 bg-red-600 text-white rounded-full text-sm '>3</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
