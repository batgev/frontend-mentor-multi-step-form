import React from "react";
import useAuthStore from "../Store/store";
const YearlyAddOns = () => {
  const {
    setStep2,
    setStep4,
    onlineService,
    largerStorage,
    customizableProfile,
    setOnlineService,
    setLargerStorage,
    setCustomizableProfile,
  } = useAuthStore();

  const handleButtonClick = () => {
    setStep4();
  };
  return (
    <div className="flex  flex-col gap-8 bg-white rounded-md w-[96vw] md:w-[27vw] px-4 pb-4 md:pb-0 md:px-0">
      {/**header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-[hsl(213_96%_18%)] text-3xl font-bold">
          Pick add-ons
        </h2>
        <span className="text-[hsl(231_11%_63%)]">
          Add-ons help enhance your gaming experience.
        </span>
      </div>

      {/*add-ons */}
      <div className="flex flex-col gap-4">
        <div
          className={`flex justify-between items-center bg-blue-50 border-2 border-purple-300 p-4 rounded-md`}
        >
          <div className={`flex gap-4 items-center`}>
            <input
              type="checkbox"
              checked={onlineService}
              onChange={(e) => setOnlineService(e.target.checked)}
              className=""
            />
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">Online service </span>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <div className="text-purple-600">+$10/yr</div>
        </div>

        <div
          className={`flex justify-between items-center bg-blue-50 border-2 border-purple-300 p-4 rounded-md`}
        >
          <div className={`flex gap-4 items-center`}>
            <input
              type="checkbox"
              checked={largerStorage}
              onChange={(e) => setLargerStorage(e.target.checked)}
              className=""
            />
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">Larger storage </span>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <div className="text-purple-600">+$20/yr</div>
        </div>

        <div
          className={`flex justify-between items-center  border-2 border-purple-100 p-4 rounded-md`}
        >
          <div className={`flex gap-4 items-center`}>
            <input
              type="checkbox"
              checked={customizableProfile}
              onChange={(e) => setCustomizableProfile(e.target.checked)}
              className=""
            />
            <div className={`flex flex-col `}>
              <span className="text-blue-950 font-bold">
                Custom theme on your profile
              </span>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <div className="text-purple-600">+$20/yr</div>
        </div>
      </div>

      {/* back and next buttons*/}
      <div className="flex justify-between   md:mt-16">
        <button
          className="cursor-pointer"
          onClick={() => {
            setStep2();
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
};

export default YearlyAddOns;
