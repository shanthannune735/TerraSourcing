import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { exporterLogin } from "../../services/exporterServices";

export default function ExporterLogin(){

  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    try {
      const { token } = await exporterLogin({email: inputData.email, password: inputData.password})
      if(token){
        navigate("/exporter/login-successful")
      } else {
        alert("Login failed! Please check your credentials and try again.")
      }
    } catch(error) {
      alert("Failed to login. Please try again after sometime.")
    }
  }

  return(
    <div className="bg-secondary py-20">
      <h1 className="text-center text-4xl font-semibold pb-8">Exporter Login</h1>
      <div className="max-w-[560px] border p-4 md:p-8 rounded-2xl mx-auto  flex flex-col gap-8 bg-white">
        <div className="flex flex-col items-center gap-2">
          {/* <img src="/logo.png" width={120}></img> */}
          <p className="text-3xl font-semibold">Welcome back 🖐</p>
          <p className="text-[#4b4b4b] text-xl">Please enter your details to sign in.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
              <label className="font-semibold text-md">E-mail Address</label>
              <input name="email" onChange={handleChange} value={inputData.email} type="text" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your email"></input>
          </div>
          <div className="flex flex-col gap-1">
              <label className="font-semibold text-md">Password</label>
              <input name="password" onChange={handleChange} value={inputData.password} type="password" className="border p-2 border-gray-300 rounded text-md" placeholder="**********"></input>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" id="remember"></input>
            <label htmlFor="remember">Remember Me</label>
          </div>
          <Link to="/" className="text-grey underline text-md">Forgot password?</Link>
        </div>
        <div>
          <button onClick={   handleLogin} className="bg-primary py-2 text-white rounded-md w-full">Sign in</button>
        </div>
        <p className="text-lg text-center">Don't have an account yet?  <span className="text-primary"><Link to={"/exporter/registration?step=info"}>Register now</Link></span></p>
      </div>
    </div>
  )
}
