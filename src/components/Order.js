import React, { useEffect, useState } from 'react'
import { projectId, ORDER_API } from '../Utils/utils'
import { Link } from 'react-router-dom'


const Itemdetails = ({ item }) => {
  // console.log(item);
  const { displayImage, name, price } = item
  return (
    <div className='w-full flex items-center'>
      <div className='w-[100px]'>
        <img src={displayImage} alt={name} className='w-full h-auto' />
      </div>
      <div className='ml-4'>
        <h1 className='text-lg font-bold'>{name}</h1>
        <p className='text-gray-600'>{price}</p>
      </div>
    </div>
  )
}

const CreateOrderedCard = ({ data }) => {
  const { createdAt, order } = data;
  const { items, shipmentDetails, totalPrice } = order;
  // console.log(createdAt, items, shipmentDetails, totalPrice);

  return (
    <div className='w-[550px] bg-gray-100 p-2 rounded-lg m-10'>
      <h1>Your order created At : {createdAt}</h1>
      <h2>No. of items : {items.length}</h2>
      {
        items.map((item) => (
          <Itemdetails key={item.product._id} item={item.product} />
        ))
      }
      <div>
        <h1 className='font-bold'>Address </h1>
        <h2>city : {shipmentDetails.address.city}</h2>
        <h2>country : {shipmentDetails.address.country}</h2>
        <h2>state : {shipmentDetails.address.state}</h2>
        <h2>street : {shipmentDetails.address.street}</h2>
        <h2>zipCode : {shipmentDetails.address.zipCode}</h2>
      </div>
      <h1 className=' font-bold'>Payment : {totalPrice}</h1>

    </div>
  )
}

const Order = () => {
  const userToken = localStorage.getItem("jwtToken");
  const [orders, setOrders] = useState(null);


  const fetchGetOrderList = async () => {
    console.log(userToken)
    const data = await fetch(ORDER_API, {
      headers: {
        projectID: projectId,
        Authorization: `Bearer ${userToken}`
      }
    })
    const json = await data.json();

    // console.log(json.data);
    setOrders(json.data);
  }

  useEffect(() => {
    fetchGetOrderList();
  }, [])


  return (
    <div className='p-10 flex justify-center flex-wrap'>

      {
        orders && orders.map((order) => (
          <Link to={`/orderDetails/${order.order._id}`} key={order.order._id}>
          <CreateOrderedCard  data={order} />
          </Link>
        ))
      }
    </div>
  )
}

export default Order

