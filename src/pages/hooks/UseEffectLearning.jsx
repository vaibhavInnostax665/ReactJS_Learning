import React , {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UseEffectLearning = () => {
    const navigate = useNavigate();
    const [count,setCount] = useState(0);
const [start,setStart] = useState(false);
function toggleStart(){
    setStart(!start);
}
    useEffect(()=>{
        if(start){
        setTimeout(()=> setCount(count+1),1000);
        }
        //console.log("UseEffect Call");
    })

  
  return (
    <div>
       
        <h1>Value of Count is {count}</h1>
        <button onClick={toggleStart}>{(!start)?"Start":"End"} Timeout function</button>
        <br/>
        <br/> 
       
        </div>
  )
}

export default UseEffectLearning