import React from "react";
const re1={
    margin:"10px"
}
const re2={
    marginBottom:"5px",
    borderRadius:" 5px",
    border:"2px solid black"
}

const Sub = ({id, collectValues}) =>{
    return (
        <div>
            <input type="checkbox" name={"sub_checkbox_"+id} style={re1}
             onChange={() => { collectValues() }} /> 
            <input  type="number" name={"sub_input_"+id} onChange={() => { collectValues() }} style={re2}/>
            <br></br>
        </div>
    );
}
export default Sub;