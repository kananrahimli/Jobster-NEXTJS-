import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <div className='flex items-center justify-between mt-10'>
     <div className="">
        <Image src={logo} alt='logo'></Image></div>  
     <div className="lang">
        <select name="lang" className='bg-transparent border border-blue-500 outline-none focus:outline-none' id="lang">
            <option value="en">EN</option>
            <option value="en">AZ</option>
            <option value="en">RU</option>
        </select>
     </div> 
    </div>
  )
}

export default Header