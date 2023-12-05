import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errMsg, setErrmsg] = useState("");
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e)=>{
        e.preventDefault();

        if(!values.name || !values.email || !values.pass || values.length < 6){
            setErrmsg("Fill all field");
            console.log("err checking", errMsg)
            return;
        }
        setErrmsg("");

        setSubmitBtnDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res)=>{
            setSubmitBtnDisabled(false);
            const user = res.user;
            console.log("tetsing", user.displayName, user)
            await updateProfile(user, {
                displayName : values.name,
            })
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
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Your full name"
                            // required
                            onChange={(e)=> setValues((prev)=> ({...prev, name: e.target.value }) )}
                        />
                    </div>
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
                            className={`w-full bg-teal-700 font-semibold text-white p-2 rounded hover:bg-teal-900 ${
                                submitBtnDisabled ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            onClick={handleSignup}
                            disabled={submitBtnDisabled}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-600 text-sm">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline"><span className='text-teal-700 font-bold'>Login</span></a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
