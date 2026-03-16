import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Register = () => {

  const [fullName , setFullName] = useState("")
  const [userName , setUserName] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] =useState("")
  const [email , setEmail] = useState("")
  const [gender ,setGender] = useState("Prefer not to say")
  const [language , setLanguage] = useState("En")



  const submitHandler = (e)=>{
    e.preventDefault()

    console.log(fullName, userName, email, gender, language)
  }


  return (
    // <section className="border-solid border-black h-dvh w-full bg-amber-200 flex flex-col md:flex-row   ">
    //   <div className="reg-img hidden lg:flex w-[35%] bg-green-950 ">
    //     <img src="#" alt="" />
    //   </div>

    //   <div className="reg-form w-full md:w-[70%] flex flex-col py-4 px-8 bg-white gap-5 h-full  lg:px-12 lg:py-10 ">
    //     <div className="reg-header py-2 border-b-4 border-[#FE9CFF] flex justify-between items-center ">
    //       <h1 className="text-2xl lg:text-4xl">Registration</h1>
    //       <div>
    //         <select className="p-2 lg:text-2xl" name="" id="">
    //           <option value="english">En</option>
    //           <option value="korean">kr</option>
    //         </select>
    //       </div>
    //     </div>

    //     <form className="flex flex-col gap-4 ">
    //       <div
    //         id="input-container"
    //         className=" grid grid-cols-1 md:grid-cols-2   gap-6 "
    //       >
    //         <div className="flex flex-col gap-2">
    //           <label className="text-xl lg:text-3xl">Full Name</label>
    //           <input
    //             type="text"
    //             className="rounded-xl py-2 px-3 text-xl border-2 border-gray-500 "
    //             placeholder="Enter your name"
    //           />
    //         </div>

    //         <div className="flex flex-col gap-3">
    //           <label className="text-xl lg:text-3xl">Username</label>
    //           <input
    //             type="text"
    //             className="rounded-xl py-2 px-3 text-xl lg:text-2xl border-2 border-gray-500 "
    //             placeholder="Enter your username"
    //           />
    //         </div>

    //         <div className="flex flex-col gap-3">
    //           <label className="text-xl lg:text-3xl">Email</label>
    //           <input
    //             type="text"
    //             className="rounded-xl py-2 px-3 text-xl lg:text-2xl border-2 border-gray-500 "
    //             placeholder="Enter your email."
    //           />
    //         </div>

    //         <div className="flex flex-col gap-3">
    //           <label className="text-xl lg:text-3xl">Enter your password.</label>
    //           <input
    //             type="text"
    //             className="rounded-xl py-2 px-3 text-xl lg:text-2xl border-2 border-gray-500 "
    //             placeholder="Enter your name"
    //           />
    //         </div>

    //         <div className="flex flex-col gap-3">
    //           <label className="text-xl lg:text-3xl">Confirm password</label>
    //           <input
    //             type="text"
    //             className="rounded-xl py-2 px-3 text-xl border-2 border-gray-500 "
    //             placeholder="Enter your password"
    //           />
    //         </div>
    //       </div>

    //       <div className=" w-full ">
    //         <p className="text-gray-600 mb-2 text-xl lg:text-3xl">Gender</p>

    //         <div className="flex gap-8 justify-between text-lg lg:text-2xl">
    //           {/* Male */}
    //           <label className="flex items-center gap-2 cursor-pointer">
    //             <input type="radio" name="gender" className="hidden peer" />

    //             <div
    //               className="w-4 h-4 rounded-full border border-gray-400 
    //                   peer-checked:border-[#FE9CFF] 
    //                   peer-checked:bg-[#FE9CFF]"
    //             ></div>

    //             <span className="text-gray-600">Male</span>
    //           </label>

    //           {/* Female */}
    //           <label className="flex items-center gap-2 cursor-pointer">
    //             <input type="radio" name="gender" className="hidden peer" />

    //             <div
    //               className="w-4 h-4 rounded-full border border-gray-400 
    //                   peer-checked:border-[#FE9CFF] 
    //                   peer-checked:bg-[#FE9CFF]"
    //             ></div>

    //             <span className="text-gray-600">Female</span>
    //           </label>

    //           {/* Prefer not to say */}
    //           <label className="flex items-center gap-2 cursor-pointer">
    //             <input
    //               type="radio"
    //               name="gender"
    //               defaultChecked
    //               className="hidden peer"
    //             />

    //             <div
    //               className="w-4 h-4 rounded-full border border-gray-400 
    //                   peer-checked:border-[#FE9CFF] 
    //                   peer-checked:bg-[#FE9CFF]"
    //             ></div>

    //             <span className="text-gray-600">Prefer not to say</span>
    //           </label>
    //         </div>
    //       </div>

    //       <button type="submit" className="w-full bg-[#FE9CFF]   text-2xl rounded-2xl font-semibold text-white lg:text-4xl p-4 flex justify-center items-center mt-4">Register</button>
    //     </form>

    //     <p className="text-2xl lg-text-3xl">
    //       Already have an account? <Link to="/" className="text-[#60A5C6]">Login</Link>
    //     </p>
    //   </div>
    // </section>

     <section className="flex min-h-dvh w-full font-[DM_Sans,sans-serif]">
      {/* Left Panel */}
      <div className="hidden lg:flex w-[38%] bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1e3a5f] flex-col justify-center items-center px-12 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FE9CFF]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#60A5C6]/20 blur-3xl" />
        <div className="relative z-10 text-center">
          <h2 className="font-[Cormorant_Garamond,serif] text-6xl font-light text-white leading-tight">
            Welcome<br />
            <span className="font-semibold bg-gradient-to-r from-[#FE9CFF] to-violet-400 bg-clip-text text-transparent">
              Back.
            </span>
          </h2>
          <p className="text-white/40 text-sm mt-4 tracking-wide">
            Create your account and<br />start your journey today.
          </p>
          <div className="flex gap-2 mt-8 justify-center">
            <div className="w-6 h-2 bg-[#FE9CFF] rounded-full" />
            <div className="w-2 h-2 bg-white/20 rounded-full" />
            <div className="w-2 h-2 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-white flex flex-col justify-center px-8 py-10 lg:px-16 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-end pb-5 mb-8 border-b border-purple-50">
          <h1 className="font-[Cormorant_Garamond,serif] text-4xl lg:text-5xl font-semibold text-[#1a0a2e]">
            Regist<span className="text-[#FE9CFF]">r</span>ation
          </h1>
          
          <select 
          value={language}
                   onChange={(e)=>{
                    setLanguage(e.target.value)
                   }}
          
          className="border border-[#e5d5ff] rounded-lg px-3 py-2 text-sm text-[#6b5b8e] bg-[#faf6ff] outline-none focus:border-[#FE9CFF]">

            {
              ["en", "kr", "ind", "nep"].map((lang)=>(
                   <option >🌐 {lang}</option>
              ))
            }
           
           
          </select>
        </div>

        <form
        onSubmit={submitHandler}
        className="flex flex-col gap-6">
          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Full Name", type: "text", placeholder: "Jane Doe", state : fullName , stateFunc : setFullName  },
              { label: "Username", type: "text", placeholder: "@janedoe" , state : userName , stateFunc : setUserName  },
              { label: "Email Address", type: "email", placeholder: "jane@email.com", state : email , stateFunc : setEmail  },
              { label: "Password", type: "password", placeholder: "••••••••", state : password , stateFunc : setPassword  },
            ].map(({ label, type, placeholder, state, stateFunc }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] uppercase tracking-widest font-medium text-[#9580b0]">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={state}
                  onChange={(e)=>{
                    stateFunc(e.target.value)
                  }}  
                  className="border border-[#e8e0f0] rounded-xl px-4 py-2.5 bg-[#fdfbff] text-[#1a0a2e] placeholder-[#c4b8d8] focus:outline-none focus:border-[#FE9CFF] focus:ring-2 focus:ring-[#FE9CFF]/10 transition-all"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-[0.72rem] uppercase tracking-widest font-medium text-[#9580b0]">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e)=>{
                  setConfirmPassword(e.target.value)
                }}
                className="border border-[#e8e0f0] rounded-xl px-4 py-2.5 bg-[#fdfbff] text-[#1a0a2e] placeholder-[#c4b8d8] focus:outline-none focus:border-[#FE9CFF] focus:ring-2 focus:ring-[#FE9CFF]/10 transition-all"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <span className="text-[0.72rem] uppercase tracking-widest font-medium text-[#9580b0] block mb-3">Gender</span>
            <div className="flex gap-3">
              {["Male", "Female", "Prefer not to say"].map((g) => (
                <label key={g} className="flex-1 cursor-pointer">
                  <input
                   type="radio"
                    name="gender"
                    checked={gender===g}
                   className="peer hidden"
                   value= {g}
                   onChange={(e)=>{
                    setGender(e.target.value)
                   }}
                   />
                  <div className="text-center py-2.5 px-3 rounded-xl border border-[#e8e0f0] text-sm text-[#6b5b8e] bg-[#fdfbff] transition-all peer-checked:border-[#FE9CFF] peer-checked:bg-gradient-to-br peer-checked:from-[#fff0ff] peer-checked:to-[#fdf4ff] peer-checked:text-[#1a0a2e] peer-checked:font-medium peer-checked:shadow-[0_2px_12px_rgba(254,156,255,0.2)] hover:border-violet-200">
                    {g}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#FE9CFF] to-violet-400 text-white font-medium rounded-xl tracking-wide shadow-[0_4px_20px_rgba(254,156,255,0.35)] hover:shadow-[0_6px_28px_rgba(254,156,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Create Account →
          </button>
        </form>

        <p className="text-center text-sm text-[#9580b0] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#60A5C6] font-medium border-b border-[#60A5C6]/30 hover:border-[#60A5C6] transition-colors">
            Sign in here
          </Link>
        </p>
      </div>
    </section>


  );
};

export default Register;


