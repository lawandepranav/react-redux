import React from "react";
//import {store} from "../Redux/store"
import {incrementCount, decrementCount, resetCount} from "../Redux/action"
import { useDispatch, useSelector} from "react-redux"


const Home=()=>{

    const {count}= useSelector((state)=>state)

   const dispatch=useDispatch();

    
      return (
        <div className="App">
         <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(incrementCount(1))}>Increment</button>
            <button onClick={()=>dispatch(decrementCount(1))}>Decrement</button>
            <button onClick={()=>dispatch(resetCount())}>Reset</button>
        </div>
      );
}

export default Home;