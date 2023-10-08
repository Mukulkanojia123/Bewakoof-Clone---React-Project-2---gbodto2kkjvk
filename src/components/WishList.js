import React ,{useEffect}from 'react'
import { projectId } from '../Utils/utils';

const WishList = () => {

 const getWishList = async()=>{
  const userToken = localStorage.getItem("jwtToken");
  const data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist",{
    headers :{
      'Authorization': `Bearer ${userToken}`,
       'projectID': projectId
    }
  })

  const json = await data.json();
  console.log(json);

 }


  useEffect(()=>{
    getWishList();

  },[])
  return (
    <div>WishList</div>
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