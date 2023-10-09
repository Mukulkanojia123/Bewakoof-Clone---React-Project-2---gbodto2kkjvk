import React, { useState, useEffect } from 'react'
import { projectId, Add_TO_CART } from '../Utils/utils';
import WishListCard from './WishListCard';

const Cart = () => {

  const [cartData, setCartData] = useState(null);
  const userToken = localStorage.getItem("jwtToken");

  const getCartItems = async () => {
    const data = await fetch(Add_TO_CART, {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectID': projectId
      }
    })
    const json = await data.json();
    setCartData(json.data);
    console.log(json);
  }

    useEffect(()=>{
        getCartItems();
    },[])

      const removeFromCart = async(id) =>{
        const data = await fetch(Add_TO_CART + id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': projectId
          }
        })
        const json = await data.json();
        
        console.log(json);
        getCartItems();
      }

  

  return (
    <div>
      <div className="flex justify-end">
        {/* <button className="align m-4 p-3 bg-blue-700 text-white rounded-lg" onClick={removeAllItems}>Remove All</button> */}
      </div>
      
      <div className='flex justify-center flex-wrap'>
        {
          // i use WishList card here because structure is little bit different so handle it in wishList componet 
          cartData && cartData.items.length > 0 && cartData.items.map((like) => (
            <div key={like._id}>
            <label className="absolute bg-green-400 text-white m-2 px-2 py-1 rounded-full" onClick={()=>removeFromCart(like.product._id)}>X</label>
            <WishListCard  data={like} />
            </div>
          ))
          //likesdata && likesdata.items.length > 0 && <WishListCard data={likesdata.items[0]} />
        }
      </div>


    </div>
  )
}

export default Cart