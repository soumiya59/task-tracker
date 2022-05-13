import Tweet from "./Tweet";
import { useState } from "react";
function Input(){

    const Input = () => {
        return <Tweet todo={document.getElementById('input').value} date={new Date().toDateString()} />;
    };
    const [inputList, setInputList] = useState([]);
    
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length}/>));
      };

    return(

        <div className="mx-1 mb-5 text-center" >
            <input type="text" id="input" name="input" />
            <button onClick={onAddBtnClick} className="btn btn-secondary ms-3 py-3 fw-bold px-2 px-md-4 " >ADD</button>
            <div>{inputList}</div>
        </div>

    );
}

export default Input