import React, { useContext } from 'react'
import ExampleContext from './hooks/UseContextHook';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {values,setValues} = useContext(ExampleContext);
const navigate = useNavigate();
function increaseValueOfContext(){
  return setValues(values+1);
}
  return (
    <div><h1>Home</h1>
        <p>values from context hook is {values}</p>
        <button onClick={increaseValueOfContext}>Increase value by 1</button>
        <br />
        <br/>
        
    </div>
  )
}

export default Home