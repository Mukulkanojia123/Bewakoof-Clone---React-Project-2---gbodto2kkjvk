import React, { useEffect, useState } from 'react';
import { BASE_URL, projectId } from '../Utils/utils'
import ClothesCard from './ClothesCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Products = () => {
    //   const { data, error } = FetchApi();
    //   console.log(data);
    const [list, setList] = useState(null);
    const [men , setMen] = useState([]);
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
    const filterMen = (data)=>{
        let mensData = data.filter(cloth => cloth.gender == 'Men');
        console.log(mensData);
        setMen(mensData);
    }

    // useEffect(()=>{
    //   console.log(choice);
    // },[choice]);
    
    useEffect(()=>{
      if(list){

        filterMen(list)
      }
    },[list]);

    useEffect(() => {
        fetchfun()
    }, [])

    return list ? (
        <div className='flex justify-center mx-1/12 mt-10'>
          <div className='w-10/12'>
            <div className='flex justify-evenly  flex-wrap'>
              {men?.map((cloth) => (
               <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}>
                 <ClothesCard key={cloth._id} data={cloth} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    };

export default Products;