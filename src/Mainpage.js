import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { API } from "./API/API";
import atomAPI from "./API/recoil/atomAPI";
import img from './img/다운로드.png';
import { Link } from "react-router-dom";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [APIData, setAPIdata] = useRecoilState(atomAPI)
  useEffect(() => {
    async function myFetchAPI() {
      return API.cats();
    }
    myFetchAPI().then((res) => {
      setData([
        ...res])
    });
  }, [])
  const imgOnClick = (event) => {
    const targetId = event.target.alt;     // alt 로 비교해서 api 호출, 이게 맞을까요 더 좋은방법을 생각해볼수있을거같기도 ㅋㅋ => alt에 그냥 id를 담아서 호출로 바꿨습니다.
    API.cats(targetId).then((res) => {
      res.forEach((el) =>
        el.path = `/${targetId}`
      );
      setAPIdata([
        ...APIData,
        ...res,
      ]);
    })
  };
  console.log(APIData);
  
  return (
    <div className="content">
      {
        data.map((el, index) => {
          return <div className={`contents cats`} key={index}>
            <Link to={`/${el.id}`} > {/* state={el.id} */} 
               <img
                src={img}
                alt={el.id}
                onClick={imgOnClick}
              />
            </Link>
            {el.name}
          </div>

        })
      }
    </div>

  );
}

export default MainPage;