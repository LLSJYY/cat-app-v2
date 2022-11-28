const Modal = ({modalTrigger,id}) => {
  
  return (
    <div className={`modal ${modalTrigger}`}>
      <div className="content-img">
        <img src={id}/>
        <span>{id}</span>
      </div>
    </div>
  )
}

export default Modal;