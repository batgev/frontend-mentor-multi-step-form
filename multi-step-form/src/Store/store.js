import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set, get) => ({
  step1: true,
  step2: false,
  step3: false,
  step4: false,
  isConfirmed: false,

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

  //addon selection
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,

  setStep1: () => {
    set({
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      isConfirmed: false,
    });
  },

  setStep2: () => {
    set({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
      isConfirmed: false,
    });
  },

  setStep3: () => {
    set({
      step1: false,
      step2: false,
      step3: true,
      step4: false,
      isConfirmed: false,
    });
  },

  setStep4: () => {
    set({
      step1: false,
      step2: false,
      step3: false,
      step4: true,
      isConfirmed: false,
    });
  },

  setIsConfirmed: () => {
    set({ isConfirmed: true });
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

  //addon setters
  setOnlineService: (val) => set({ onlineService: val }),
  setLargerStorage: (val) => set({ largerStorage: val }),
  setCustomizableProfile: (val) => set({ customizableProfile: val }),

  //computed getters
  getCurrentPlan: () => {
    const state = get();
    if (state.selectedMonth) {
      if (state.arcadeMonth) return { name: "Arcade", price: 9 };
      if (state.advancedMonth) return { name: "Advanced", price: 12 };
      if (state.proMonth) return { name: "Pro", price: 15 };
    } else {
      if (state.arcadeYear) return { name: "Arcade", price: 90 };
      if (state.advancedYear) return { name: "Advanced", price: 120 };
      if (state.proYear) return { name: "Pro", price: 150 };
    }
    return { name: "", price: 0 };
  },

  getAddonPrice: (addon) => {
    const state = get();
    if (addon === "Online Service") return state.selectedMonth ? 1 : 10;
    if (addon === "Larger Storage") return state.selectedMonth ? 2 : 20;
    if (addon === "Customizable Profile") return state.selectedMonth ? 2 : 20;
    return 0;
  },

  getAddonsList: () => {
    const state = get();
    const list = [];
    if (state.onlineService) list.push("Online Service");
    if (state.largerStorage) list.push("Larger Storage");
    if (state.customizableProfile) list.push("Customizable Profile");
    return list;
  },

  getTotalPrice: () => {
    const plan = get().getCurrentPlan();
    const list = get().getAddonsList();
    const addonsTotal = list.reduce(
      (sum, addon) => sum + get().getAddonPrice(addon),
      0,
    );
    return plan.price + addonsTotal;
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
