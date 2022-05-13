import {FaTimes} from 'react-icons/fa'

function Tweet({todo,date}) {
  return (
    <div className="tweet py-3 px-4 px-md-5 d-flex justify-content-between">
        <div>
        <h3>{todo}</h3>
        <p>{date}</p>
        </div>
        <div>
        <FaTimes style={{color:'red',cursor:'pointer'}} onClick/>
        </div>
    </div>
  );
}

export default Tweet;