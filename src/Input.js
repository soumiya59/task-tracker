
function Input(){
    return(

        <div className="task_input mx-1">
            <input type="text" id="input" name="input"/>
            <button onClick={console.log('hello')} className="btn btn-secondary ms-3 py-3 fw-bold px-2 px-md-4">ADD</button>
        </div>

    );
}

export default Input;