import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import {toggleMenu} from '../Utils/appSlice';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BiFilterAlt } from 'react-icons/bi';
import { FaList } from 'react-icons/fa';




const Header = () => {

    const [search , setSearch] = useState("");
    const dispatch = useDispatch();

    const handleToggleMenu = () =>{
        // console.log("yes")
        dispatch(toggleMenu());
    }


  return (
    <div className='flex justify-between items-center bg-yellow-400'>
        <div className='flex w-1/2 justify-evenly m-5'>
            <div className='ml-2' onClick={handleToggleMenu}><FaBars/></div>
            <div className='flex w-1/2 justify-center'>
            <Link t={'/'}>
            <img 
            className='h-[20px] '
            src='https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg'
            alt='Bewakoof logo'
            />
            </Link>
            </div>
            <div className='flex w-1/2'>
            <p className='font-bold px-5 text-xl'><Link to={'/menware'}>MEN</Link></p>
            <p className='font-bold px-5 text-xl'><Link to={'/womenware'}>WOMEN</Link></p>
            </div>
            
        </div>
        <div className='flex w-1/2 justify-center m-5'>
            <div className='w-1/2 flex'>
                <input
                 type='text'
                 onChange={(e)=>setSearch(e.target.value)}
                 value={search}
                 placeholder='Search...'
                 className=' bg-gray-50 border border-black border-solid p-2 w-full rounded-lg'
                />
                <p className='font-bold text-xl p-2'><Link to={"/search/" + search}>Search</Link></p>
            </div>
            <div className='w-1/2'>
                <ul className='flex justify-around'>
                    <li className='font-bold text-xl p-2'><Link to={"/login"}>Login</Link></li>
                    <li className='font-bold text-xl p-2 m-2'><Link to={"/wishlist"}><FaHeart/></Link></li>
                    <li className='font-bold text-xl p-2 m-2'><Link to={"/cart"}><FaShoppingCart/></Link></li>
                    <li className='font-bold text-xl p-2 m-2'><Link to={"/filter"}><BiFilterAlt/></Link></li>
                    <li className='font-bold text-xl p-2 m-2'><Link to={"/order"}><FaList/></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header