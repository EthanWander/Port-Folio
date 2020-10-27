import React, {useState, useEffect, useRef} from 'react';

function Item({item, addItem, removeItem, newItem, list, setNewItem}) {
  const [onForum, setOnForum] = useState(false);
  const textInput = useRef(null);
  const imgUrlInput = useRef(null);
  const textColorInput = useRef(null);
  
  const setBG = () => {
    return {backgroundImage: "url("+item.imgUrl+")"};
  }
  
  const isPlusBtnShown = () => {
    if(onForum || !item.empty)
      return {display: "none"};
    return {display: "inline-block"}
  }
  
  const plusBtnHandler = () => {
    setOnForum(true);
  }
  
  const handleCancelBtn = (e) => {
    e.preventDefault();
    setOnForum(false);
  }
  
  const handleConfirmBtn = (e) => {
    e.preventDefault();
    let ret = newItem;
    ret.imgUrl = imgUrlInput.current.value;
    ret.text = textInput.current.value;
    ret.textColor = textColorInput.current.value;
    setNewItem(ret)
    addItem();
    setOnForum(false);
  }
  
  const handleDelBtn = (e) => {
    e.preventDefault();
    removeItem();
  }
  
  useEffect(() => {
    setNewItem({text: null, textColor: null, imgUrl: null, key: Math.random()*100, empty: false});
  }, [onForum])
  
  return(
    <div className={item.empty ? "empty-item" : "item"} style={setBG()}>
      <button className="delete-proj-btn" onClick={handleDelBtn} style={{color: "rgb("+item.textColor+")", display: item.empty ? "none" : "inline-block"}}>
        <i className="fas fa-minus"></i>
      </button>
      <div className="in-item">
      
        <button onClick={plusBtnHandler} style={isPlusBtnShown()} className="plus-btn">
          <i className="fas fa-plus"></i>
        </button>
        
        <div className="proj-text" style={{color: "rgb("+item.textColor+")"}}>{item.text}</div>
        
        <form className="new-proj-form" style={{display: onForum ? "flex" : "none"}}>
          <div className="enter-url">
            Image URL: <input type="text" ref={imgUrlInput} id="img-url-input" autoComplete="off"></input>
          </div>
          <div className="enter-text">
            Text: <input type="text" ref={textInput} id="txt-input" autoComplete="off"></input>
          </div>
          <div className="enter-text-color">
            Text Color: rgb(<input type="text" ref={textColorInput} autoComplete="off" id="txt-color-input"></input>)
          </div>
          <div className="forum-btns">
            <button id="cancel-proj" onClick={handleCancelBtn}>Cancel</button>
            <button id="confirm-proj" onClick={handleConfirmBtn}>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Item;