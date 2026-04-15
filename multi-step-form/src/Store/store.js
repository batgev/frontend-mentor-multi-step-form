import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  step1: true,
  step2: false,
  step3: false,
  step4: false,

  //personal details store
  name: "",
  email: "",
  phone: null,

  //month and year toggle
  selectedMonth: true,

  //plan selection variables
  arcadeMonth: true,
  advancedMonth: false,
  proMonth: false,

  arcadeYear: false,
  advancedYear: false,
  proYear: false,

  setStep1: () => {
    set({
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    });
  },

  setStep2: () => {
    set({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
    });
  },

  setStep3: () => {
    set({
      step1: false,
      step2: false,
      step3: true,
      step4: false,
    });
  },

  setStep4: () => {
    set({
      step1: false,
      step2: false,
      step3: false,
      step4: true,
    });
  },

  setPersonalDetails: (nameFeild, emailAddress, phoneNumber) => {
    set({
      name: nameFeild,
      email: emailAddress,
      phone: phoneNumber,
    });
  },

  setMonthSelect: (toggleMonth) => {
    set({
      selectedMonth: toggleMonth,
    });
  },
  //functions for plan selection
  setPlanArcade: () => {
    set({
      arcadeMonth: true,
      advancedMonth: false,
      proMonth: false,
    });
  },

  setPlanAdvanced: () => {
    set({
      arcadeMonth: false,
      advancedMonth: true,
      proMonth: false,
    });
  },

  setPlanPro: () => {
    set({
      arcadeMonth: false,
      advancedMonth: false,
      proMonth: true,
    });
  },

  setPlanArcadeYear: () => {
    set({
      arcadeYear: true,
      advancedYear: false,
      proYear: false,
    });
  },

  setPlanAdvancedYear: () => {
    set({
      arcadeYear: false,
      advancedYear: true,
      proYear: false,
    });
  },
  setPlanProYear: () => {
    set({
      arcadeYear: false,
      advancedYear: false,
      proYear: true,
    });
  },
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "auth",
    }),
  ),
);
export default useAuthStore;
