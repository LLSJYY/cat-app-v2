import { useEffect, useState } from "react";
import { API } from "./API/API";
import img from './img/다운로드.png';
const MainPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function myFetchAPI() {
      return API.cats();
    }
    myFetchAPI().then((res) => {
      setData([
        ...res])
    });
  }, [])

  return (
    <div className="content">
      {
        data.map((el, index) => {
          return <div children={`contents cats`}>
            <img src={img} alt={el.name} />
            {el.name}
          </div>
        })
      }
    </div>

  );
}

export default MainPage;