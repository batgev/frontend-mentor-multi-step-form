import React from "react";
import useAuthStore from "../Store/store";
import {useState,useEffect} from 'react'

const MonthlyWrapUp = () => {
  const { setStep3, setStep5 } = useAuthStore();
  const [plan,setPlan] = useState("");
  const [price,setPrice] = useState("")
  const [totalPrice,setTotalPrice] = useState(0)
  const {arcadeMonth,advancedMonth,proMonth} = useAuthStore();

const handlePlans = () => {
  if (arcadeMonth) {
    setPlan("Arcade(Monthly)");
    setPrice("$9/mo");
    setTotalPrice(12);
  } else if (advancedMonth) {
    setPlan("Advanced(Monthly");
    setPrice("$12/mo");
    setTotalPrice(15);
  } else if (proMonth) {
    setPlan("Pro(Monthly");
    setPrice("$15/mo");
    setTotalPrice(18)
  }

  
};
  useEffect(()=>{
   handlePlans
  })



  const handleButtonClick = () => {
    setStep5();
  };
  return (
    <div className="flex  flex-col gap-8 bg-white rounded-md w-[96vw] md:w-[27vw] px-4 pb-4 md:pb-0 md:px-0">
      {/**header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[hsl(213_96%_18%)] text-3xl font-bold">
          Finishing up
        </h2>
        <span className="text-[hsl(231_11%_63%)]">
          Double-check everything looks OK before confirming.
        </span>
      </div>

      {/*summary */}
      <div className="flex flex-col gap-4  border-2 border-purple-300 p-4  rounded-md">
        <div className={`flex justify-between items-center `}>
          <div className={`flex gap-4 items-center`}>
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">{plan} </span>
              <span className="underline">Change</span>
            </div>
          </div>
          <div className="text-purple-600">{price}</div>
        </div>
        <hr />
        <div className={`flex justify-between items-center `}>
          <div className={`flex gap-4 items-center`}>
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">Online Service </span>
            </div>
          </div>
          <div className="text-purple-600">+$1/mo</div>
        </div>        
          
        <div className={`flex justify-between items-center `}>
          <div className={`flex gap-4 items-center`}>
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">Larger Storage</span>
              
            </div>
          </div>
          <div className="text-purple-600">+$2/mo</div>
        </div>

        
      </div>

      <div>
        <span>Total (per month)</span>
        <span>{`$ ${totalPrice}`}</span>
      </div>

      {/* back and next buttons*/}
      <div className="flex justify-between   md:mt-16">
        <button
          className="cursor-pointer"
          onClick={() => {
            setStep3();
          }}
        >
          Go Back
        </button>
        <button
          type="button"
          className="bg-blue-600 outline-none text-white rounded-md px-4 cursor-pointer py-2 "
          onClick={handleButtonClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default MonthlyWrapUp;
