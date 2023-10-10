import React, { useEffect, useState } from 'react'
import { projectId } from '../Utils/utils';
import WishListCard from './WishListCard';
import { Link } from 'react-router-dom';

const WishList = () => {
  const [likesdata, setLikesData] = useState(null);
  const userToken = localStorage.getItem("jwtToken");

  const getWishList = async () => {
    
    const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectID': projectId
      }
    })

    const json = await data.json();
    setLikesData(json.data)
    console.log(json);
    // console.log(likesdata.items[0])

  }


  useEffect(() => {
    getWishList();

  }, [])
  // console.log(likesdata.items[0])
  console.log('hello')
       

       const removeAllItems = async() => {
        const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': projectId
          }
        })
        const json = await data.json();
        console.log(json.data)
        setLikesData(null);
       }

  return (
    <div>
      <div className="flex justify-end">
        <button className="align m-4 p-3 bg-blue-700 text-white rounded-lg" onClick={removeAllItems}>Remove All</button>
      </div>
      <div className='flex justify-center flex-wrap'>
        {

          likesdata && likesdata.items.length > 0 && likesdata.items.map((like) => (
            <Link to={"/ClothInfo/" + like.products._id } key={like.products._id}> <WishListCard key={like.products._id} data={like} /></Link>
          ))
          //likesdata && likesdata.items.length > 0 && <WishListCard data={likesdata.items[0]} />
        }
      </div>


    </div>
  )
}

export default WishList


// async()=>{
//   const userToken = localStorage.getItem("jwtToken");
//   const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
//     headers :{
//       'Authorization': `Bearer ${userToken}`,
//        'projectID': projectId
//     }
//   })

//   const json = await data.json();
//   console.log(json);