import {FaTimes} from 'react-icons/fa'
import { useState } from "react";
import ReactDOM from "react-dom";

function handleClick() {
    console.log('delete')
    var x = document.getElementById("tweeta");
    x.style.display = "none";
}
function Tweet({todo,date}) {
  return (
    <div id='tweeta' className="tweet py-3 px-4 px-md-5 d-flex justify-content-between">
        <div>
        <h3>{todo}</h3>
        <p>{date}</p>
        </div>
        <div onClick={handleClick}>
        <FaTimes style={{color:'purple',cursor:'pointer'}} />
        </div>
    </div>
  );
}

export default Tweet;