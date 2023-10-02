import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [excess, setExcess] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sUpage, setSUPage] = useState(false);
    // const [sInage, setINPage] = useState(false);
    // const [sUpage, setSUPage] = useState(false);

    const handleSignIn = () => {

    }

    


    return (
        <div className='bg-orange-100 w-full p-10 flex justify-center'>

            <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md w-6/12 ">
                <div>
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">Login</h1>
                <form onClick={(e) => e.preventDefault()} className="space-y-4">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={handleSignIn}
                        type="submit"
                        className="w-1/2 ml-32 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                    >
                        Login
                    </button>
                </form>
                </div>
                <div className='mt-4'>
                    for SignUp click <span className='text-blue-600 hover:border-b border-blue-600'><Link to={"/signuppage"}>Here</Link></span>
                </div>

            </div>


        </div>
    )
}

export default Login