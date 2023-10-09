
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { SEARCH_API,projectId } from '../Utils/utils';
import ClothesCard from './ClothesCard';
import { Link } from 'react-router-dom';

const SearchPage = () => {
    const [searchData , setSearchData] = useState(null);
        const {searchText} = useParams();
        const userToken = localStorage.getItem("jwtToken");
        console.log(searchText);


        const fetchSearch = async()=>{
            const data = await fetch(`${SEARCH_API}{"name":"${searchText}"}`,{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userToken}`,
                    "projectId": projectId
                }
            })
            const json = await data.json();
            console.log(json);
            setSearchData(json.data);
        }
        useEffect(()=>{
                fetchSearch();
        },[searchText])


        return searchData ? (
            <div className='flex justify-center mx-1/12 mt-10'>
              <div className='w-10/12'>
                <div className='flex justify-evenly  flex-wrap'>
                  {
                  searchData.map((cloth) => (
                   <Link to={"/ClothInfo/" + cloth._id} key={cloth._id}> <ClothesCard  data={cloth} /></Link>
                  ))
                  }
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1>Loading...</h1>
            </div>
          );
}

export default SearchPage