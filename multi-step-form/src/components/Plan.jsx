import React, { useState } from 'react'
import useAuthStore from '../Store/store.js'
const Plan = () => {
  const {setStep1,setStep3,setMonthSelect} = useAuthStore();
  const {setPlanArcade,setPlanAdvanced,setPlanPro} = useAuthStore();
  const {setPlanArcadeYear,setPlanAdvancedYear,setPlanProYear} = useAuthStore();
  const {arcadeMonth,advancedMonth,proMonth} = useAuthStore();
  const {arcadeYear,advancedYear,proYear} = useAuthStore();

  const [toggleMonth,setToggleMonth] = useState(true);
   const handleButtonClick = () => {
     
    setMonthSelect(toggleMonth)
     setStep3();
   };
  return (
    <div className="flex flex-col gap-8 bg-white rounded-md w-[96vw] md:w-auto px-4 md:px-0">
      {/**header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[hsl(213_96%_18%)] text-3xl font-bold">
          Select your plan
        </h2>
        <span className="text-[hsl(231_11%_63%)]">
          You have the option of monthly or yearly billing.
        </span>
      </div>

      {/*monthly plan section */}
      <div
        className={`${toggleMonth ? "flex" : "hidden"}  md:flex-row flex-col gap-4 md:gap-4`}
      >
        <div
          className={`flex md:flex-col md:justify-between items-center cursor-pointer  gap-4  p-4 md:p-2 rounded-md border-2 ${arcadeMonth ? "border-purple-300 bg-blue-50" : "border-gray-200"}  hover:border-purple-300  md:w-32 md:h-40 md:items-start md:pl-4`}
          onClick={() => setPlanArcade()}
        >
          <img src="images/icon-arcade.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950 font-bold">Arcade</span>
            <span className="text-gray-500">$9/mo</span>
          </div>
        </div>
        <div
          className={`flex md:flex-col md:justify-between items-center gap-4 p-4 md:p-2 rounded-md border-2  ${advancedMonth ? "border-purple-300 bg-blue-50" : "border-gray-200"}  hover:border-purple-300  md:w-32 md:h-40 md:items-start md:pl-4`}
          onClick={() => setPlanAdvanced()}
        >
          <img src="images/icon-advanced.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950  font-bold">Advanced</span>
            <span className="text-gray-500">$12/mo</span>
          </div>
        </div>
        <div
          className={`flex md:flex-col md:justify-between items-center gap-4 p-4 md:p-2 rounded-md border-2  ${proMonth ? "border-purple-300 bg-blue-50" : "border-gray-200"}  hover:border-purple-300 md:w-32 md:h-40 md:items-start md:pl-4`}
          onClick={() => setPlanPro()}
        >
          <img src="images/icon-pro.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950 font-bold">Pro</span>
            <span className="text-gray-500">$15/mo</span>
          </div>
        </div>
      </div>

      {/*yearly plan section */}
      <div
        className={`${toggleMonth ? "hidden" : "flex"}  md:flex-row flex-col gap-4 md:gap-4`}
      >
        <div
          className={`flex md:flex-col md:justify-between items-center gap-4 p-4 md:p-2 rounded-md border-2 ${arcadeYear ? "border-purple-300 bg-blue-50" : "border-gray-200"} hover:border-purple-300 md:w-32 md:h-40 md:items-start md:pl-4 cursor-pointer`}
          onClick={() => setPlanArcadeYear()}
        >
          <img src="images/icon-arcade.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950 font-bold">Arcade</span>
            <span className="text-gray-500">$90/yr</span>
            <span className="text-blue-950 ">2 months free</span>
          </div>
        </div>
        <div
          className={`flex md:flex-col md:justify-between items-center gap-4 p-4 md:p-2 rounded-md border-2 ${advancedYear ? "border-purple-300 bg-blue-50" : "border-gray-200"}  hover:border-purple-300 md:w-32 md:h-40 md:items-start md:pl-4 cursor-pointer`}
          onClick={() => setPlanAdvancedYear()}
        >
          <img src="images/icon-advanced.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950  font-bold">Advanced</span>
            <span className="text-gray-500">$120/yr</span>
            <span className="text-blue-950 ">2 months free</span>
          </div>
        </div>
        <div
          className={`flex md:flex-col md:justify-between items-center gap-4 p-4 md:p-2 rounded-md border-2  ${proYear ? "border-purple-300 bg-blue-50" : "border-gray-200"} md:w-32 md:h-40 md:items-start md:pl-4  hover:border-purple-300 cursor-pointer`}
          onClick={() => setPlanProYear()}
        >
          <img src="images/icon-pro.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-blue-950 font-bold">Pro</span>
            <span className="text-gray-500">$150/yr</span>
            <span className="text-blue-950 ">2 months free</span>
          </div>
        </div>
      </div>

      {/*monthly and yearly toggle */}
      <div className="flex gap-4 justify-center bg-blue-50 p-2 rounded-md">
        <span>Monthly</span>
        <img
          src={`${toggleMonth ? "images/toggle-off.svg" : "images/toggle-on.svg"} `}
          alt=""
          width={25}
          onClick={() => {
            setToggleMonth(!toggleMonth);
          }}
        />
        <span>Yearly</span>
      </div>

      {/* back and next buttons*/}
      <div className="flex justify-between   md:mt-16">
        <button
          className="cursor-pointer"
          onClick={() => {
            setStep1();
          }}
        >
          Go Back
        </button>
        <button
          type="button"
          className="bg-blue-950 outline-none text-white rounded-md px-4 cursor-pointer py-2 "
          onClick={handleButtonClick}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Plan
