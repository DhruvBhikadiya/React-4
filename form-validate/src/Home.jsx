import { useState } from "react";

const Home = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});

    // console.log(username);
    // console.log(email);
    // console.log(password);

    const handleSubmit = (e) => {

        e.preventDefault();

        if(username !== ""){
            if(email !== ""){
                if(password !== ""){
                    console.log("USername :- " + username);
                    console.log("Email :- "+email);
                    console.log("Password :- "+password);
                }
                else{
                    alert("Please enter password");
                }
            }
            else{
                alert("Please enter email");
            }
        }
        else{
            alert("Please enter username");
        }

    }

    
    return (
        <>
            <h1>Login form</h1>
            <div style={{boxShadow:"5px 5px 5px 5px grey", padding:"20px"}}>
            <form onSubmit={ handleSubmit}>
                <label>Username :- </label> &nbsp;&nbsp;&nbsp;
                <input className="input" type="text" value={username}  onChange={(e) => {setUserName(e.target.value);}} placeholder="Please enter username" /><br /><br />
                <label>Email :- </label> &nbsp;&nbsp;&nbsp;
                <input className="input" type="email" value={email}  onChange={(e) => {setEmail(e.target.value);}} placeholder="Please enter emai; address" /><br /><br />
                <label>Password :- </label> &nbsp;&nbsp;&nbsp;
                <input className="input" type="password" value={password}  onChange={(e) => {setPassword(e.target.value);}} placeholder="Please enter password" /><br /><br />
                <input style={{padding:"10px", fontSize:"20px", borderRadius:"20px"}} type="submit" value="submit" />
            </form>
            </div>

            <br /><br />

            <button onClick={() => {alert("Button is clicked")}}>Click me</button>

            <div>
                <h1>USename :- {username}</h1>
                <h2>Email :- {email}</h2>
                <h3>Password :- {password}</h3>
            </div>
        </>
    )
}

export default Home;