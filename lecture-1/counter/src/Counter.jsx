import { useState } from "react";

var Counter = () => {
    const value = 10;
    const [count, setCount] = useState(value);
    const [name, setName] = useState("Dharmik");
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+10)}>Increase</button>
            <button onClick={() => setCount(count-10)}>Decrease</button>
            <button onClick={() => setCount(count*2)}>Multiplication</button>
            <button onClick={() => setCount(count/2)}>division</button>
            <button onClick={() => setCount(value)}>Reset</button>

            <h1>{name}</h1>
            <button onClick={() => setName("Dhruv")}>change</button>
        </>
    )
};

export default Counter;