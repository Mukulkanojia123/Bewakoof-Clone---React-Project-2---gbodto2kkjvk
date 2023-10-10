import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isOpen)
//   console.log(isMenuOpen)

  if(!isMenuOpen){
    // console.log("off")
    return null;
  } 

 
  return (
    <div className='p-5 w-100  shadow-lg'>
         <ul>
            <li><Link to={"/"}><h1>Home</h1></Link></li>
            <li><Link to={"/order"}><h1>Order List</h1></Link></li>
            <li>Video</li>
            <li>Live</li>
        </ul>
       
    </div>
  )
}

export default Sidebar