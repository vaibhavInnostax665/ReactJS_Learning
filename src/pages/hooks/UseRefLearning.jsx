import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const UseRefLearning = () => {
    const navigate = useNavigate('/useEffect');
    const ref = useRef(0);
    function increaseValue(){
        ref.current = ref.current + 1;
        alert("Ref current value is: "+ref.current)
    }
  return (
    <div>
      <h1>UseRef</h1>  
    <br />
<button onClick={increaseValue}>Increase value by 1</button>
    <br/>
    <br/>
    
    </div>
  )
}

export default UseRefLearning