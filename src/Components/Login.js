import React, { useState } from 'react';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [errMsg, setErrmsg] = useState("");
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();

        if(!values.email || !values.pass || values.length < 6){
            setErrmsg("Fill all field");
            console.log("err checking", errMsg)
            return;
        }
        setErrmsg("");

        setSubmitBtnDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res)=>{
            setSubmitBtnDisabled(false);
            const user = res.user;
            console.log("testing name peops:", user.displayName, user)
            navigate("/");
        })
        .catch((err)=>{
            setSubmitBtnDisabled(false);
            setErrmsg(err.message)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Your email address"
                            // required
                            onChange={(e)=> setValues((prev)=> ({...prev, email: e.target.value }) )}

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Your password"
                            // required
                            onChange={(e)=> setValues((prev)=> ({...prev, pass: e.target.value }) )}
                        />
                    </div>
                    <div className="mt-6">
                        <p className='font-semibold text-red-500'>{errMsg}</p>
                        <button
                            type="submit"
                            className={`w-full bg-teal-700 text-white p-2 rounded hover:bg-teal-900 ${
                                submitBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            onClick={handleLogin}
                            disabled={submitBtnDisabled}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-600 text-sm">
                    Didn't have an account ? <Link to ='/signup'><button className="text-blue-500 hover:underline"><span className='font-bold text-teal-700'>SignUp</span></button></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
