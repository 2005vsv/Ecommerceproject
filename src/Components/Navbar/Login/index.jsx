import React from 'react';
import { uselogin } from '../../../context/logincontext';
import { userlogin } from '../../../Api/auth';
import { useNavigate } from 'react-router-dom';
function Login() {
  const { logindispatch,email,password,token } = uselogin();
  const navigate=useNavigate();
  const onformsubmit =async (e) => {
    e.preventDefault();
    const data=await userlogin(email,password);
    if(Object.keys(data)?.length>0){
      localStorage.setItem('token',data.access_token);
    }
    logindispatch({
        type:'TOKEN',
        payload:{token:data}
    })
    if(data.access_token){
        navigate("/");
      }
      console.log({data});
  };
  

  const onemailchange = (e) => {
    logindispatch({
      type: 'EMAIL',
      payload: {
        value: e.target.value,
      },
    });
  };

  const onpasswordchange = (e) => {
    logindispatch({
      type: 'PASSWORD',
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={onformsubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email *</label>
            <input
              onChange={onemailchange}
              type="email"
              required
              placeholder="abc@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password *</label>
            <input
              onChange={onpasswordchange}
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
