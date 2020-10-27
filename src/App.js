import React, {useState, useEffect} from 'react';
import './App.css';
import Item from './Item.js'

function App() {
  const [item, setItem] = useState({text: null, imgUrl: null, textColor: null, key: Math.random()*100, empty: true});
  const [list, setList] = useState([item]);
  const [lVis, setLVis] = useState(false);
  const [rVis, setRVis] = useState(false);
  const [index, setIndex] = useState(0);
  const [newItem, setNewItem] = useState({text: null, textColor: null, imgUrl: null, key: Math.random()*100, empty: false})
  
  const addItem = () => {
    setList([
      ...list.slice(0,list.length-1),
      newItem,
      list[list.length-1]
    ])
  }
  
  const removeItem = () => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }
  
  const lClickHandler = (e) => {
    if(index > 0) {
      setItem(list[index-1]);
      setIndex(index - 1);
    }
  }
  const rClickHandler = (e) => {
    if(index < list.length-1) {
      setItem(list[index+1]);
      setIndex(index + 1);
    }
  }
  
  const lVisHandler = () => {
    return lVis ? {visibility: "visible"} : {visibility: "hidden"};
  }
  const rVisHandler = () => {
    return rVis ? {visibility: "visible"} : {visibility: "hidden"};
  }
  
  useEffect(() => { // get local storage
    let now = JSON.parse(localStorage.getItem('list'));
    setList(JSON.parse(localStorage.getItem('list')));
    let defaultItem = {
      text: "Lorem Ipsum", 
      imgUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80", 
      textColor: "0,100,100", 
      key: Math.random()*100, 
      empty: false
    };
    let empty = {
      text: null, 
      imgUrl: null,
      textColor: null, 
      key: Math.random()*100, 
      empty: true
    }
    if(now === null){
      setList([defaultItem, empty])
    }
    else if(now.length === 0){
      setList([defaultItem, empty])
    }
  },[])
  
  useEffect(() => {
    if(index === list.length-1){
      setRVis(false);
    }
    else 
      setRVis(true);
    if(index === 0){
      setLVis(false);
    }
    else setLVis(true);
    setItem(list[index]);
    localStorage.setItem('list', JSON.stringify(list));
  }, [list, item]);
  
  return (
    <div className="App">
      <header>Port Folio</header>
      <div className="contain-list">
        <button onClick={lClickHandler} style={lVisHandler()} className="scroll-btn scroll-btn-left"><i className="fas fa-angle-left"></i></button>
        <Item 
          removeItem={removeItem} 
          list={list} 
          newItem={newItem} 
          setNewItem={setNewItem} 
          addItem={addItem} 
          item={item}
        />
        <button onClick={rClickHandler} style={rVisHandler()} className="scroll-btn scroll-btn-right"><i className="fas fa-angle-right"></i></button>
      </div>
    </div>
  );
}

export default App;
