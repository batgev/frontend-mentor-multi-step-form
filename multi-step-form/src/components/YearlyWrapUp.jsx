import React from "react";
import useAuthStore from "../Store/store";
import { useEffect } from "react";

const YearlyWrapUp = () => {
  const { setStep3, setIsConfirmed } = useAuthStore();
  const {
    getCurrentPlan,
    getAddonsList,
    getTotalPrice,
    getAddonPrice,
    selectedMonth,
  } = useAuthStore();
  const plan = getCurrentPlan();
  const addonsList = getAddonsList();
  const totalPrice = getTotalPrice();

  const handleButtonClick = () => {
    setIsConfirmed();
  };

  useEffect(() => {
    // Compute if needed, but since computed in store, no need
  }, []);

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
              <span className="text-blue-950 font-bold">
                {plan.name} ({selectedMonth ? "Monthly" : "Yearly"})
              </span>
              <span className="underline">Change</span>
            </div>
          </div>
          <div className="text-purple-600">
            ${plan.price}
            {selectedMonth ? "/mo" : "/yr"}
          </div>
        </div>
        <hr />
        {addonsList.map((addon) => (
          <div key={addon} className={`flex justify-between items-center `}>
            <span className="text-blue-950 font-bold">{addon}</span>
            <span className="text-purple-600">
              +${getAddonPrice(addon)}/{selectedMonth ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-bold text-xl">
        <span>Total {selectedMonth ? "(per month)" : "(per year)"}</span>
        <span className="text-purple-500">
          <span>
            {" "}
            ${totalPrice}
            {selectedMonth ? "/mo" : "/yr"}
          </span>
        </span>
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

export default YearlyWrapUp;
