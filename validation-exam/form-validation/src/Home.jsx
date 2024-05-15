import { useState } from "react";

const Home = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const error = {};
        console.log("error :- ",error);
        
        if(!userName.trim()){
            error.userName = "Please enter username";
        }
        
        if(!email.trim()){
            error.email = "Please enter email";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            error.email = "Please enter valid email";
        }
        
        if(!password.trim()){
            error.password = "Please enter password";
        }
        else if(password.length < 6){
            error.password = "Password must be at least 6 character";
            console.log("password length :- ",password.length);
        }

        if(Object.keys(error).length > 0){
            setError(error);
        }
        else{
            setUserName("");
            setEmail("");
            setPassword("");
            setError({});
            const data = {
                userName,
                email,
                password
            }
            setData(data)
            console.log("Username :- ",data.userName);
            console.log("Email :- ",data.email);
            console.log("Password :- ",data.password);
        }
        
        console.log("error :- ",error);
    }

    return (
        <>
            <div style={{borderRadius:"30px",boxShadow:"2px 2px 15px 3px grey", padding:"15px"}}>
                <h1 style={{marginBottom:"25px"}}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username :- </label>&nbsp;&nbsp;&nbsp;
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}placeholder="Please enter username" />&nbsp;&nbsp;&nbsp;
                        {error.userName && <span style={{color:"red"}}>{error.userName}</span>}
                    </div><br />
                    <div>
                        <label>Email :- </label>&nbsp;&nbsp;&nbsp;
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />&nbsp;&nbsp;&nbsp;
                        {error.email && <span style={{color:"red"}}>{error.email}</span>}
                    </div><br />
                    <div>
                        <label>Password :- </label>&nbsp;&nbsp;&nbsp;
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />&nbsp;&nbsp;&nbsp;
                        {error.password && <span style={{color:"red"}}>{error.password}</span>}
                    </div><br />
                    <button>Submit</button>
                </form>
            </div>
            <div style={{borderRadius:"30px",boxShadow:"2px 2px 15px 3px grey", padding:"15px",marginTop:"30px"}}>
                <h1>{data.userName}</h1>
                <h2>{data.email}</h2>
                <h3>{data.password}</h3>
            </div>
        </>
    )
}

export default Home;