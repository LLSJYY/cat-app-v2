import Modal from "./Modal";
import img from './img/다운로드.png';

const TypeFile = ({data,onClickFile,modalTrigger}) => {
 
  return (
    <div className={`contents cats`} >
      <img
        src={img}
        alt={data.id}
        onClick={onClickFile}
      />
    {data.name}
    <Modal modalTrigger={modalTrigger} id={data.id}/>
  </div>

  )
}

export default TypeFile;