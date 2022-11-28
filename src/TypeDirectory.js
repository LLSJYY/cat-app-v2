import { Link } from "react-router-dom";
import img from './img/다운로드.png';

const TypeDirectory = ({ data,onClickDir }) => {

  return (
    < div className={`contents cats`}  >
        <img
          src={img}
          alt={data.id}
          onClick={onClickDir}
        />
      {data.name}
    </div >
  )
}

export default TypeDirectory;