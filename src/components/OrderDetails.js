import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { projectId,ORDER_API } from '../Utils/utils';

const OrderDetails = () =>{
    const {resId} = useParams();
    const [myOrder , setMyOrder] = useState(null);
    const userToken = localStorage.getItem("jwtToken")
        

         const fetchOrderDetail = async()=>{
             const data = await fetch(ORDER_API+resId,{
                headers : {
                    projectId : projectId,
                    Authorization : `Bearer ${userToken}`
                    }
                })
                const json = await data.json();
                // console.log(json.data);
                setMyOrder(json.data);
            }

            const {product} = myOrder?.items[0];
            // console.log(product)

        useEffect(()=>{
            fetchOrderDetail();
        },[])

        if(!myOrder)return null;

    return (
        <div className='bg-orange-100 w-full p-10 flex justify-center'>

            <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md w-6/12 ">
                
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">status :<span>{myOrder.status}</span> </h1>
                <div className='flex'>
                    <div>
                    <h1>Price : {myOrder.totalPrice}</h1>
                    <h2>Date : {myOrder.orderDate}</h2>
                    <h2>shipmentDetails</h2>
                    <h3>Address : {myOrder?.shipmentDetails.address?.city} ,{myOrder?.shipmentDetails?.address?.state} ,  Street no: {myOrder?.shipmentDetails?.address?.street}, {myOrder?.shipmentDetails?.address?.country}</h3>
                    <h3>type : {product?.type}</h3>
                    <h3>color : {product?.color}</h3>
                    <h3>Fabric : {product?.fabric}</h3>
                    
                    </div>
                    <div>
                        <img src={product?.displayImage} className='w-[200px]'/>
                    </div>
                </div>
                <div>
                <h3>Description</h3>
                <div dangerouslySetInnerHTML={{ __html: product?.description }} />
                    {/* <p>{product?.description}</p> */}
                </div>
                

            </div>


        </div>
    )
}

export default OrderDetails;