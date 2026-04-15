import React from 'react'
import { useState } from 'react';
import useAuthStore from '../Store/store.js';
const PersonalInfo = () => {
  //state for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);

  const { setStep2 , setPersonalDetails} = useAuthStore();
  const handleButtonClick = ()=>{
    setPersonalDetails(name,email,phone);
   
    setStep2();
  }

  return (
    <div className="flex flex-col gap-4 md:w-[80%]  w-[96vw]  px-4 md:px-0 bg-white  md:p-0 rounded-lg ">
      <div className="flex flex-col gap-1">
        <h2 className="text-[hsl(213_96%_18%)] text-3xl font-bold">
          Personal Info
        </h2>
        <span className="text-[hsl(231_11%_63%)]">
          Please provide your name, email address, and phone number.
        </span>
      </div>

      {/**form section */}
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="eg. Stephen King"
            className="border-2 border-purple-200 rounded-md p-2 outline-purple-400 hover:border-purple-300 cursor-pointer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            className="border-2 border-purple-200 rounded-md p-2 outline-purple-400 hover:border-purple-300 cursor-pointer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4 md:mb-0">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            id="phone-number"
            className="border-2 border-purple-200 rounded-md p-2 outline-purple-400 hover:border-purple-300 cursor-pointer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </form>
      <div className="flex justify-end md:mt-[6rem]">
        <button
          type="button"
          className="bg-blue-950 outline-none absolute md:relative -bottom-3 md:bottom-0 text-white rounded-md px-4 cursor-pointer py-2 "
          onClick={handleButtonClick}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo
