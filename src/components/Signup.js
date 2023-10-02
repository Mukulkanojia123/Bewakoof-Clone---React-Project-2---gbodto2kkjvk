import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SIGN_UP_API , projectId } from '../utils';

const SignUp = () => {

    // const [excess, setExcess] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sUpage, setSUPage] = useState(false);
    // const [sInage, setINPage] = useState(false);
    // const [sUpage, setSUPage] = useState(false);

    let headerList = {
        projectID : projectId
    }

    let bodyContent = JSON.stringify({
        name:name,
        email : email,
        password : password,
        appType : "linkedin"
    })

    const signIpiFetch = async() =>{
        const data = await fetch(SIGN_UP_API,{
            method : "POST",
            headers : headerList,
            body : bodyContent
        })

        const json = await data.json();
        console.log(json);
        
    }

    function handleSignUp(){
            signIpiFetch()
            console.log(name , email, password);
    }

    


    return (
        <div className='bg-orange-100 w-full p-10 flex justify-center'>

            <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md w-6/12 ">
                <div>
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">Sign Up here</h1>
                <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                 value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                 onClick={handleSignUp}
                  type="submit"
                  className="w-1/2 ml-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Sign up
                </button>
              </form>
                </div>
                <div className='mt-4'>
                    go to <span className='text-blue-600 hover:border-b border-blue-600'><Link to={"/login"}>Login</Link></span>
                </div>

            </div>


        </div>
    )
}

export default SignUp;