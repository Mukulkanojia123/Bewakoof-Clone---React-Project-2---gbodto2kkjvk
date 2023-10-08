import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PRODUCTS_INFO_API, projectId, ADD_WISHLIST_API,Add_TO_CART } from '../Utils/utils'
import Productimages from './Productimages'

const ClothInfo = () => {
    const { resId } = useParams();
    // console.log(productId);
    const [productInfo, setProductInfo] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [quentity , setQuentity] = useState("1")

    const { name, images, fabric, price, description, tags, color, brand } =
        productInfo;


        const userToken = localStorage.getItem("jwtToken");
        console.log(userToken)

    const tcolor = color?.toLowerCase();
    const colorObj = {
        black: 'text-black',
        blue: 'text-blue-500',
        green: 'text-green-600',
        brown: 'text-brown-300',
        white: 'text-gray-400',
        navy: 'text-blue-800',
        red: 'text-red-400'
    }



    const textColor = colorObj[tcolor];

    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await fetch(PRODUCTS_INFO_API + resId, {
                    headers: {
                        projectId: projectId
                    }
                })
                const json = await data.json();
                // console.log(json.data);
                setProductInfo(json.data)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        FetchData();
    }, [resId]);

    const handleWishList = async () => {
        const userToken = localStorage.getItem("jwtToken");
        console.log(userToken);
    
        try {
            const data = await fetch(ADD_WISHLIST_API + resId, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userToken}`,
                    "projectId": "gbodto2kkjvk"
                },
                body: JSON.stringify({
                    "productId": resId
                })
            });
    
            const json = await data.json();
            console.log(json);
        } catch (error) {
            console.log("error in adding wishlist", error);
        }
    }
    
    

    const additfun = async()=>{
            try{
                    
                const data = await fetch(Add_TO_CART+resId,{
                    method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userToken}`,
                    "projectId": "gbodto2kkjvk"
                },
                    body: JSON.stringify({
                        "quantity": quentity
                    })
                })
                const json = await data.json();
                console.log(json);
        
            }catch(error){
                    console.log(error);
            }
        }

    const addToCart = ()=>{
        if(userToken){
            console.log('funcall');
            additfun()
        }
    }


    return (
        <div>
            {error ? (
                <p>{error.message}</p>
            ) : loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="container mx-auto flex flex-wrap p-3">
                        {/* Image on the right side */}
                        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/2 p-10 px-20">
                            <Productimages images={images} />
                        </div>
                        {/* Product details on the left side */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 p-10 shadow-lg">
                            <h1 className="text-5xl sm:text-3xl md:text-5xl  ">
                                {name}
                            </h1>
                            <h2 className="text-2xl font-semibold p-3">Brand:{brand}</h2>
                            <div className="my-4 p-3">
                                <span className="text-lg font-bold ">Product Details:</span>{" "}
                                {tags.map((tag) => (
                                    <div key={tag._id} className="p-2">
                                        {tag.label}
                                        <div>Type:{tag.type}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3">
                                Color :
                                <span

                                    className={`text-lg font-extrabold ${textColor}`}
                                >
                                    {color}
                                </span>
                            </div>
                            <p className="p-3">Price : ${price}</p>
                            <p className="p-3">Quentity : <input type='number'min={"1"} className='border border-solid border-black'value={quentity} onChange={(e) =>setQuentity(e.target.value)}/></p>

                            <div className="flex my-4">
                                <button className="bg-red-600 text-white rounded-sm py-2 px-4 mr-4" onClick={addToCart}>
                                    Add to Cart
                                </button>
                                <button className="border rounded-sm py-2 px-4" onClick={handleWishList}>
                                    Wishlist
                                </button>
                            </div>
                            <div className="my-4">
                                <span className="text-lg font-bold">Product Description: </span>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ClothInfo

// const data = await fetch(PRODUCTS_INFO_API + resId,{
//     headers: {
//         projectId: projectId
//     }
// })
// const json = await data.json();
// console.log(json.data);
// setProductInfo(json.data)
// setLoading(false);
// try {
//     const response = await axios.get(ProductInfo_API + productId, {
//       headers: {
//         projectId: projectId,
//       },
//     });
//     console.log(response.data.data);
//     setProductInfo(response.data.data);
//     setLoading(false);
//   } catch (error) {
//     setError(error);
//     setLoading(false);
//   }



// with axios
// const handleWishList = async () => {
//     const userToken = localStorage.getItem("jwtToken");
    
//     try {
//       const response = await axios.patch(ADD_WISHLIST_API, {
//         productId: resId
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${userToken}`,
//           "projectId": projectId
//         }
//       });
  
//       console.log(response.data);
//     } catch (error) {
//       console.log("error in adding wishList", error);
//     }
//   };




// const additfun = async()=>{
//     try{
            
//         const data = await fetch(Add_TO_CART+resId,{
//             method : "PATCH",
//             headers :{
//                 "Content-Type" :"application/json",
//                 ' Authorization' : `Bearer ${userToken}`,
//                  'projectId':'gbodto2kkjvk'
//             },
//             body: JSON.stringify({
//                 'quantity': "1"
//             })
//         })
//         const json = data.json();
//         console.log(json);

//     }catch(error){
//             console.log(error);
//     }
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // const ClothInfo = () => {
// //   const [data, setData] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.patch(
// //           'https://academics.newtonschool.co/api/v1/ecommerce/wishlist/64f9d629b34d5276a097dbe6',
// //           // You can include request data here if needed
// //         );
// //         setData(response.data)