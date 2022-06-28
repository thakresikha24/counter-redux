import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {inc, dec} from './store/Actions/counterAction'
const App = () => {
  const{counter}= useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  console.log(counter);

  const increment =(value)=>{
      dispatch(inc(value));
  }
  const decrement =(value)=>{
    dispatch(dec(value));
}
  return (
    <>
    
    <h1>counter</h1>
    <div className='container'>
      <button onClick={()=> decrement(1)} className='btn btn-danger'>-</button>
      &nbsp;
      <h1>{counter}</h1>
      &nbsp;
      <button onClick={()=> increment(1)} className= 'btn btn-warning'>+</button>
      </div>
    </>
  )
}

export default App






  
  


