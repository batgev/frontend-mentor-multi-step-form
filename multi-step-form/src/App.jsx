import Plan from "./components/Plan.jsx";
import PersonalInfo from "./components/PersonalInfo";
import MonthlyAddOns from "./components/MonthlyAddOns.jsx";
import MonthlyWrapUp from "./components/MonthlyWrapUp.jsx";
import YearlyAddOns from "./components/YearlyAddOns.jsx";
import YearlyWrapUp from "./components/YearlyWrapUp.jsx";
import ThankYou from "./components/ThankYou.jsx";
import useAuthStore from "./Store/store.js";
function App() {
  const { step1, step2, step3, step4, selectedMonth, isConfirmed } =
    useAuthStore();
  const { setStep2, setStep1, setStep3, setStep4 } = useAuthStore();

  return (
    <div className="flex  md:relative flex-col md:justify-center md:items-center   h-screen  w-full  bg-blue-100">
      <div className="md:bg-white  rounded-md md:p-4 md:shadow-[0px_6px_10px_rgba(0,0,0,0.1)] flex md:flex-row flex-col  w-auto md:gap-22 md:w-[55vw] md:h-[71vh]">
        {/*sidebar component */}
        <div className="bg-[url('images/bg-sidebar-mobile.svg')] md:bg-[url('images/bg-sidebar-desktop.svg')]  bg-contain  bg-no-repeat w-auto md:w-67.5 md:h-full h-[28vh]">
          <div className="flex md:flex-col items-center justify-center h-full md:justify-normal  gap-3 md:pl-6 md:items-start md:pt-4 font-[apple-system]">
            {/**step 1 */}
            <div
              className="flex items-center gap-4 p-2 cursor-pointer"
              onClick={() => setStep1()}
            >
              <div
                className={`flex justify-center items-center ${step1 ? "bg-blue-200" : "text-white border border-white"}  rounded-full w-8 h-8`}
              >
                <span>1</span>
              </div>
              <div className="md:flex flex-col hidden">
                <span className="text-blue-100">Step 1</span>
                <span className="text-white font-bold">YOUR INFO</span>
              </div>
            </div>

            {/**step 2 */}
            <div
              className=" flex items-center gap-4 p-2 cursor-pointer"
              onClick={() => setStep2()}
            >
              <div
                className={`flex justify-center items-center ${step2 ? "bg-blue-200" : "border border-white text-white"}  rounded-full w-8 h-8`}
              >
                <span>2</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-blue-100">Step 2</span>
                <span className="text-white font-bold">SELECT PLAN</span>
              </div>
            </div>

            {/**step 3 */}
            <div
              className="flex items-center gap-4 p-2 cursor-pointer"
              onClick={() => setStep3()}
            >
              <div
                className={`flex justify-center items-center  ${step3 ? "bg-blue-200" : "border border-white text-white"} rounded-full w-8 h-8`}
              >
                <span>3</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-blue-100">Step 3</span>
                <span className="text-white font-bold">ADD-ONS</span>
              </div>
            </div>

            {/*Step 4*/}
            <div
              className="flex items-center gap-4 p-2 cursor-pointer"
              onClick={() => setStep4()}
            >
              <div
                className={`flex justify-center items-center  ${step4 ? "bg-blue-200" : "border border-white text-white"} rounded-full w-8 h-8`}
              >
                <span>4</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-blue-100">Step 4</span>
                <span className="text-white font-semibold">SUMMARY</span>
              </div>
            </div>
          </div>
        </div>

        {/*form area */}
        <div className=" md:px-0 min-h-[70vh] md:h-auto md:pl-0 absolute md:relative  top-36 w-[99vw] md:top-0 md:w-auto md:flex-1 flex flex-col items-center md:justify-center">
          {/**personal info section */}
          <div
            className={`${step1 ? "flex" : "hidden"} justify-center md:justify-normal md:h-[90%] h-[90%] w-full md:w-auto  md:p-2`}
          >
            <PersonalInfo />
          </div>
          {/**choose plan section */}
          <div
            className={`${step2 ? "flex" : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <Plan />
          </div>

          {/**monthly section */}
          <div
            className={`${step3 ? (selectedMonth ? "flex" : "hidden") : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <MonthlyAddOns />
          </div>

          {/**monthly wrap up section */}
          <div
            className={`${step4 && !isConfirmed ? (selectedMonth ? "flex" : "hidden") : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <MonthlyWrapUp />
          </div>

          {/**thank you monthly */}
          <div
            className={`${step4 && isConfirmed && selectedMonth ? "flex" : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <ThankYou />
          </div>

          {/**yearly section */}
          <div
            className={`${step3 ? (!selectedMonth ? "flex" : "hidden") : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <YearlyAddOns />
          </div>

          {/*yearly wrap */}
          <div
            className={`${step4 && !isConfirmed && !selectedMonth ? "flex" : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <YearlyWrapUp />
          </div>

          {/*thank you yearly */}
          <div
            className={`${step4 && isConfirmed && !selectedMonth ? "flex" : "hidden"} justify-center md:justify-normal md:h-[90%] h-[80%] w-full md:w-auto  md:p-2`}
          >
            <ThankYou />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
