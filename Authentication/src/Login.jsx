import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const userEmail = localStorage.getItem("email");
        const userPassword = localStorage.getItem("password");

        if(loginEmail === userEmail && loginPassword === userPassword){
            alert("sucessfully login");
            navigate("/");
        }
        else{
            alert("Please try again");
        }
    }
    return (
        <>
            <div style={{marginTop:"30px"}}>
                    <h1>Login form</h1>
                    <form onSubmit={handleLogin}>
                        <label>Email :- </label>&nbsp;&nbsp;&nbsp;
                        <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="text" placeholder="Please enter email" /> <br /><br />
                        <label>Password :- </label>&nbsp;&nbsp;&nbsp;
                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="text" placeholder="Please enter password" /> <br /><br />
                        <button type="submit">Login</button>
                    </form>
                </div>
        </>
    )
}

export default Login;