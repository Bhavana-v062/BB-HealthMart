import React, { useState } from 'react'
import loginSignUpImage from "../assest/login-animation.gif"
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function SignUp() {
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [data,setData] = useState({
        firstName : "",
        lastName :"",
        email : "",
        password :"",
        confirmpassword :"",
    });
    console.log(data)
    const handleShowPassword =()=>{
        setShowPassword(preve => !preve)
    };
    const handleShowConfirmPassword =()=>{
        setShowConfirmPassword(preve => !preve)
    };

    const handleonChange =(e)=>{
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value,
            }
        })
    }

    console.log(process.env.REACT_APP_SERVER_DOMAIN )
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const {firstName, email, password, confirmpassword} =data;
        if (firstName && email && password && confirmpassword){
            if (password === confirmpassword) {
                const SERVER_URL = process.env.REACT_APP_SERVER_DOMAIN || "http://localhost:8080";
                const fetchData = await fetch(`${SERVER_URL}/SignUp`, {
                    method : "POST",
                    headers :{
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(data),
                });

                const dataRes = await fetchData.json();
                console.log(dataRes);

            //alert(dataRes.message);
            toast(dataRes.message)
            if(dataRes.alert){
                navigate("/login");
            }
            
        }
            else{
            alert("Password and Confirm Password must be the same");
            }
        }
        else{
            alert("Please fill in all required fields");
        }
    }
            
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4'>
            {/*<h1 className='text-center text-2xl'>SignUp</h1>*/}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto'>
                <img src={loginSignUpImage}/>                
            </div>  

            <form className='w-full py-3 flex flex-col'onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 
                rounded focus-within:outline-blue-300' value={data.firstName ?? ""} onChange={handleonChange}/>

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 
                rounded focus-within:outline-blue-300'value={data.lastName} onChange={handleonChange}/>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 
                rounded focus-within:outline-blue-300'value={data.email} onChange={handleonChange}/>

                <label htmlFor='password'>Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300' >
                <input type={showPassword ?'text':"password" }id='password' name='password' className=' w-full bg-slate-200 border-none outline-none '
                value={data.password} onChange={handleonChange}/>
                <span className='flex tex-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/> : <BiHide/>}</span>
                </div>

                <label htmlFor='confirmpassword'>Confirm Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300' >
                <input type={showConfirmPassword ?'text':"password" }id='confirmpassword' name='confirmpassword' className=' w-full bg-slate-200 border-none outline-none' 
                value={data.confirmpassword} onChange={handleonChange}/>
                <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ?<BiShow/> : <BiHide/>}</span>
                </div>

                <button className='w-24 max-w-[150px] m-auto bg-blue-500 hower:bg-blue-600 curser-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4 '>Sign Up</button>

            </form> 
            <p className='text-left text-sm mt-2'>
                Already have account ?
                <Link to={'/Login'} className='text-blue-500 underline'>Login</Link>
            </p>
        </div>
    </div>
  )
}

export default SignUp