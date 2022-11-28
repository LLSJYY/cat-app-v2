import { useLocation } from "react-router-dom";
import { API } from "./API/API";
import atomAPI from "./API/recoil/atomAPI";
import TypeFile from "./TypeFile";
import TypeDirectory from "./TypeDirectory";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { Link } from "react-router-dom";

const TraceFilePath = () => {
  const [APIData, setAPIdata] = useRecoilState(atomAPI)
  const location = useLocation();
  const currentPath = location.pathname;
  const filterData = APIData.filter((el) => el.path === location.pathname);
  const [modalTrigger, setModalTrigger] = useState(false);

  const onClickDir = (event) => {
    debugger;
    const targetId = event.target.alt;     // alt 로 비교해서 api 호출, 이게 맞을까요 더 좋은방법을 생각해볼수있을거같기도 ㅋㅋ => alt에 그냥 id를 담아서 호출로 바꿨습니다.

    API.cats(targetId).then((res) => {
      res.forEach((el) => {
        console.log(el.path);
        el.path = `${currentPath}/${targetId}`
      }
      );
      setAPIdata([
        ...APIData,
        ...res,
      ]);
    })
  };

  const onClickFile = (event) => {
    setModalTrigger(true);
  };
  return (
    <>
      <div className="content">
        {
          filterData.map((el, index) => {
            if (el.type === 'DIRECTORY') {
              return <div className={`contents cats`} key={index} >
                <Link to={`${currentPath}/${el.id}`} >
                  <TypeDirectory
                    data={el}
                    onClickDir={onClickDir}
                  />
                </Link>
              </div>

            } else if (el.type === 'FILE') {
              return <div className={`contents cats`} key={index} >
                <TypeFile
                  key={index}
                  data={el}
                  onClickFile={onClickFile}
                  modalTrigger={modalTrigger} />
              </div>

            }
          })
        }
      </div>
    </>
  )
}

export default TraceFilePath;