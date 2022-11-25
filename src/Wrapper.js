
import { useRecoilState } from "recoil";
import atomAPI from "./API/recoil/atomAPI";
import { useEffect } from "react";
import { API } from "./API/API";

const Wrapper = ({children}) => {
  return (
    <div className="wrapper">
      {children }
    </div>
  );  
}

export default Wrapper;
