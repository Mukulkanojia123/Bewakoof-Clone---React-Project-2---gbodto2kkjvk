import React, { useEffect, useState } from 'react'
import { BASE_URL, projectId } from '../utils'
import axios from 'axios'


const FetchApi = () => {
    // console.log('i m fetch function ')
    const [data, setData] = useState(null);
    const [error, setError] = useState('');


    const fetchData = async () => {
        try {
            const data = await axios.get(`${BASE_URL}api/v1/ecommerce/clothes/products`, {
                headers: {
                    projectId: projectId
                }
            })
            // console.log(data.data);
            setData(data.data.data);
        }catch(error){
            console.log(error);
                setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    return { data,  error };
}

export default FetchApi