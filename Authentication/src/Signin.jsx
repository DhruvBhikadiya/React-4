import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

    const Signin = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const navigate = useNavigate();

        const handleSignin = (e) => {
            e.preventDefault();

            console.log("email :- ",email,"password :- ",password);

            localStorage.setItem("email",email);
            localStorage.setItem("password",password);

            setEmail("");
            setPassword("");

            navigate("/login");
        }
        return (
            <>
                <div style={{marginTop:"30px"}}>
                    <h1>Signin form</h1>
                    <form onSubmit={handleSignin}>
                        <label>Email :- </label>&nbsp;&nbsp;&nbsp;
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Please enter email" /> <br /><br />
                        <label>Password :- </label>&nbsp;&nbsp;&nbsp;
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Please enter password" /> <br /><br />
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            </>
        )
    }

    export default Signin;