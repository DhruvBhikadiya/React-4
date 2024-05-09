import { useEffect,useState } from "react";

const Home = () => {

    const [userName,setUSerName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUSer] = useState([]);

    // INSERT START
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/users",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, email, password }),
        })
        .then((data) => {
            console.log(data);

            setUSerName("")
            setEmail("")
            setPassword("")
        })
    }
    // INSERT END

    // VIEW START
    useEffect(()=>{
        fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setUSer(data);
        })
        .catch((e)=>{
            console.log(e);
            console.log("something wrong");
        })
        console.log("USERS :- ",user);
    },[])
    // VIEW END

    // UPDTAE START
    // UPDTAE END

    // DELETE START
    const handleDelete = (id) => {
        const deletedata = user.filter((item) => item.id !== id)
        setUSer(deletedata);

        fetch(`http://localhost:8000/users/${id}`,{
            method: "delete"
        })
        .then((res) => console.log("data deleted successfully"));
    }
    // DELETE END

    return (
        <div>

            {/* INSERT START */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e)=>setUSerName(e.target.value)} placeholder="Enter username" /><br /><br />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" /><br /><br />
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /><br /><br />
                <button type="submit">Submit</button>
            </form>
            {/* INSERT END */}
                
            

            {/* VIEW START  */}
            {user.map((v,i) => (
                <div key={v.id} style={{boxShadow:"1px 1px 10px 0px white",borderRadius:"70px",padding:"50px",marginTop:"50px"}}>
                    <h1>{v.userName}</h1>
                    <h2>{v.email}</h2>
                    <h2>{v.password}</h2><br /><br />
                    <button onClick={() => handleDelete(v.id)}>Delete</button>
                </div>
            ))}
            {/* VIEW END */}

        </div>
    )
}

export default Home;