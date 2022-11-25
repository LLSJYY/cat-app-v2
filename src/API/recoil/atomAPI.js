import { atom } from "recoil";

const atomAPI = atom({
  key: 'APIdata', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default atomAPI;