import { useState } from "react";


const Home = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handelClick = (val) =>{
        console.log("jay shree",val);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("email is :- ",email,"password is :- ",password);
    }

    let isAuth = true;

    isAuth ? console.log("successfully logged in") : console.log("wrong credential");

    return <>

        <form onSubmit={formSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="PLease enter your email" />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="PLease enter your password" />

            <button onClick={() => handelClick("Ram")}>Click</button>
        </form>

    </>
}

export default Home;