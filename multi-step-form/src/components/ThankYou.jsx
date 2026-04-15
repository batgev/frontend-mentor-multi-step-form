import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-white rounded-md w-[96vw] md:w-[27vw] px-4 pb-4 md:pb-0 md:px-0 h-full">
      <img
        src="../public/images/icon-thank-you.svg"
        alt="Thank you"
        className="w-16 h-16"
      />
      <h1 className="text-[hsl(213_96%_18%)] text-3xl font-bold text-center">
        Thank you!
      </h1>
      <p className="text-[hsl(231_11%_63%)] text-center text-lg">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
