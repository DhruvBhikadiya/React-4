import { useState } from "react";

var Counter = () => {
    const value = 10;
    const [count, setCount] = useState(value);
    return (
        <>
            <h1>{count}</h1>
            <button style={{marginLeft:"10px"}} onClick={() => setCount(count+10)}>Increase</button>
            <button style={{marginLeft:"10px"}} onClick={() => setCount(count-10)}>Decrease</button>
            <button style={{marginLeft:"10px"}} onClick={() => setCount(count*2)}>Multiplication</button>
            <button style={{marginLeft:"10px"}} onClick={() => setCount(count/2)}>division</button>
            <button style={{marginLeft:"10px"}} onClick={() => setCount(value)}>Reset</button>
        </>
    )
};

export default Counter;