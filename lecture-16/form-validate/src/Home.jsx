import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [username , setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({})

    const [isSubmitted , setIsPassword ] = useState({});

    console.log(username);
    console.log(email);
    console.log(password);

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = {};
        console.log(error,"error");

        if(!username.trim()){
            error.username = "Username is required";
        }

        if(!email.trim()){
            error.email = "Email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            error.email = "Please enter valid email";
        }

        if(!password.trim()){
            error.password = "Password is required";
        }
        else if(password.length <= 6){
            error.password = "Password must be at least 6 characteres";
        }

        if (Object.keys(error).length > 0) {
            setError(error)
        }

        if (Object.keys(error).length > 0) {
            setError(error)
        }
        else {
            toast.success("Data submitted successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsSubmitted(true);
            console.log(name, email, password)
            setName('');
            setEmail('');
            setPassword('');
            setError({});
        }

        console.log("error :- ",error);
    }
    return (
        <>
            <div>
                <h1>Form Validation</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username :- </label>
                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Please enter Username" />&nbsp;&nbsp;&nbsp;
                        {error.username && <span style={{ color: "red" }} >{error.username}</span>}
                    </div><br />
                    <div>
                        <label>Email :- </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter Email address" />&nbsp;&nbsp;&nbsp;
                        {error.email && <span style={{ color: "red" }} >{error.email}</span>}
                    </div><br />
                    <div>
                        <label>Password :- </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter password" />&nbsp;&nbsp;&nbsp;
                        {error.password && <span style={{ color: "red" }} >{error.password}</span>}
                    </div><br />
                    <button>Submit</button>
                    <ToastContainer />
                </form>
                {isSubmitted && (
                <p style={{ color: 'green' }}>Data successfully added!</p>
                )}
            </div>
        </>
    )
};

export default Home;