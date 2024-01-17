import React, { useEffect, useState } from 'react';
import { BASE_URL, projectId } from '../Utils/utils'
import ClothesCard from './ClothesCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const WomenWare = () => {
 //   const { data, error } = FetchApi();
    //   console.log(data);
    const [list, setList] = useState(null);
    const [women , setWomen] = useState([]);
    // const choice = useSelector(store => store.app.choice)
    // console.log(choice);
    const fetchfun = async () => {
        const data = await fetch(`${BASE_URL}api/v1/ecommerce/clothes/products`, {
            headers: {
                projectId: projectId
            }
        })
        const json = await data.json()
         console.log(json.data)
        // console.log(typeof(json.data))
        setList(json.data)
    }
    // filter function
    const filterWomen = (data)=>{
        let womensData = data.filter(cloth => cloth.gender == 'Women');
        console.log(womensData);
        setWomen(womensData);
    }

   
    
    useEffect(()=>{
      if(list){

        filterWomen(list)
      }
    },[list]);

    useEffect(() => {
        fetchfun()
    }, [])

    return women.length != 0 ? (
      <div className='flex justify-center mx-1/12 mt-10'>
        <div className='w-10/12'>
          <div className='flex justify-evenly  flex-wrap'>
            {women?.map((cloth) => (
             <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}>
               <ClothesCard key={cloth._id} data={cloth} />
                </Link>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className='flex justify-center'>
          <div>
          
            <img className='pt-2' src='https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png'/>
            <h1 className='text-bold font-bold m-2 pl-12 pt-4 pb-4'>DATA IS NOT AVAILABLE NOW</h1>
            </div>
          </div>
      </div>
    );
};


export default WomenWare