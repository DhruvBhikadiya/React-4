import { useState } from "react";

var Usestate = () => {
    const value = 10;
    const [count, setCount] = useState(value);
    const [name, setName] = useState("Dharmik");
    const [Theme, setTheme] = useState(true);
    const [dis, setDisplay] = useState(true);
    return (
        <div style={{backgroundColor: Theme ? "white" : "black"}}>
        <button onClick={() => setDisplay(!dis)}>{dis ? "Hide" : "Show"}</button>
        <h1></h1>
            <div style={{display: dis ? "block" : "none" }}>
                <button onClick={() => setTheme(!Theme)}>Change Theme</button>
                <h1 style={{color: Theme ? "black" : "white"}}>{count}</h1>
                <button onClick={() => setCount(count+10)}>Increase</button>
                <button onClick={() => setCount(count-10)}>Decrease</button>
                <button onClick={() => setCount(count*2)}>Multiplication</button>
                <button onClick={() => setCount(count/2)}>division</button>
                <button onClick={() => setCount(value)}>Reset</button>

                <h1 style={{color: Theme ? "black" : "white"}}>{name}</h1>
                <button onClick={() => setName("Dhruv")}>change</button>
            </div>
        </div>
    )
};

export default Usestate;