import React from "react";
import { useState } from "react";
const Home = () => {
    const[display, setDisplay] = useState(123);
    const incrementDisplay=()=>{
        setDisplay(display+1);
    }
    const decrementDisplay=()=>{
        setDisplay(display-1);
    }
    return (
        <>
            <h1>welcome to Home</h1>
            <h2>{display}</h2>
            <button onClick={incrementDisplay}>Increment</button>
            <button onClick={decrementDisplay}>Decrement</button>
        </>
    )
};
export default Home;