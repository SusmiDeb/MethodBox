import { useRef, useState } from 'react';
import Sub from './Sub';
//import  './TextBox.css';

const box1={
  border: "2px solid #ffa07c",
  backgroundColor: "#ffc58a",
  margin: "20px",
  paddingRight: "10px",
  paddingLeft: "10px"
}
const box2={
  textAlign: "center", 
  border: "2px solid #334 ",
  borderRadius: "5px", 
  padding: "2px" 


}
const box3={
  justifyContent: "flex-end", 
  marginBottom: "5px", 
  padding: "", 
  borderRadius: "5px"

}

const box4={ 
  border: "2px solid #ffa07c", 
  backgroundColor: "#ffc58a", 
  margin: "10px",
  padding: "5px" }
  
const sho_result={
   border: "2px solid #8c7373", 
   backgroundColor: "#ece4f5", 
   margin: "20px", 
   padding: "15px" }


export default function App() {
  const inputRef = useRef(null);
  const [field, setField] = useState(0);
  const [selectedItem, setSelecteditem] = useState(0);
  const [output, setOutput] = useState('');
  const [totalChecked, setTotalChecked] = useState(0);

  const handleClick = () => {
    let input = parseInt(inputRef.current.value);
    setField(input);
  };

  const checkAll = () => {
    if (totalChecked === field) {
      for (let i = 0; i < field; i++) {
        document.getElementsByName("sub_checkbox_" + i)[0].checked = false;
      }
    }
    else {
      for (let i = 0; i < field; i++) {
        document.getElementsByName("sub_checkbox_" + i)[0].checked = true;
      }
    }

    collectValues();
  }
  const collectValues = () => {
    let o = '';
    let total = 0;
    let sel = 0;
    for (let i = 0; i < field; i++) {
      let checkbox = document.getElementsByName("sub_checkbox_" + i)[0].checked;
      if (checkbox === true) {
        sel++;
        let valStr = document.getElementsByName("sub_input_" + i)[0].value;
        let valInt = parseInt(valStr);
        if (isNaN(valInt))
          valInt = 0;
        o = o + (i + 1) + ', '
        total = total + valInt;
      }
    }
    o = 'Selected ' + sel + ' there position is ' + o + 'and total is ' + total;
    setSelecteditem(sel);
    setOutput(o);
    setTotalChecked(sel);
    if (sel === field) {
      setOutput("Selected All " + sel + " Items and Total Number is " + total);
    }
  }

  const displayFields = () => {
    let content = [];
    for (let i = 0; i < field; i++) {
      content.push(
        <div>
          <Sub id={i} collectValues={collectValues} />
        </div>
      );
    }
    return content;
  };

  return (
    <div className='container' align="center" style={{}}>
      <h1>TECHNICAL TASK</h1>
      <div>

        <label style={box1} > No of TextBox: </label>
        <input style={box2}
          ref={inputRef}
          type="number"
          id="message"
          name="message"
        />
      </div>

      <button className='btn btn-primary' style={box3} onClick={handleClick}>Add TextBox</button>
      <br></br>
      <div className="checkbox-wrapper">
        <input onClick={checkAll} type="checkbox" checked={totalChecked === field ? true : false} />
        <button style={box4}>All checkbox</button>
      </div>
      <ul>{displayFields()}</ul>
      <br></br>
      {selectedItem > 0 &&
        <div>
          <label style={sho_result} >Output is: {output} </label>
        </div>}
    </div>
  );
}
