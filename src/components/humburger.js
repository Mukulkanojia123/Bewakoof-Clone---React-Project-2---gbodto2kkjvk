import React from 'react'

import { Link } from 'react-router-dom'

const Humburger = () => {

 
 
  return (
    <div >
    <ul className='flex flex-col items-center md:hidden'>
        <li className='  hover:text-blue-600 mt-2'><Link to={"/menware"}>MEN</Link></li>
        <li className=' hover:text-blue-600  mt-2'><Link to={"/womenware"}>WOMEN</Link></li>
        <li className=' hover:text-blue-600  mt-2'> <Link to={"/login"}>LOGIN</Link></li>
        <li className='hover:text-blue-600  mt-2'><Link to={"/"}>Home</Link></li>
        <li className='hover:text-blue-600  mt-2'><Link to={"/wishlist"}>WishList</Link></li>
        <li className='hover:text-blue-600  mt-2'><Link to={"/cart"}>cart</Link></li>
        <li className='hover:text-blue-600  mt-2'><Link to={"/filter"}>search by filter</Link></li>
        <li className='hover:text-blue-600  mt-2'><Link to={"/order"}>Orderlist</Link></li>
    </ul>
</div>
  )
}

export default Humburger