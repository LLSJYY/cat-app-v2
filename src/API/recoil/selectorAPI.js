import { selector } from "recoil";
import atomAPI from "./atomAPI";

const atomAPIState = selector({
  key: 'atomAPIState',
  get: ({get}) => {
    const dataAPI = get(atomAPI);
    
    return {
    
    };
  },
});