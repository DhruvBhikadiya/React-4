import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [userName,setUSerName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUSer] = useState([]);
    const [edit, setEdit] = useState(null);

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
            console.log("submited data :- ",data);

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
            console.log("view data :- ",data)
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
        const deleteData = user.filter((item) => item.id !== id)
        setUSer(deleteData);

        fetch(`http://localhost:8000/users/${id}`,{
            method: "delete"
        })
        .then((res) => console.log("data deleted successfully"));
    }
    // DELETE END

    // UPDATE START
    const handleEdit = (id) => {
        const editData = user.find((item) => item.id == id)
        // const editData = user.includes(id);
        setEdit(editData);
    }

    const handleUpdate = () => {
        fetch(`http://localhost:8000/users/${edit.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: edit.userName,
                email: edit.email,
                password: edit.password
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("Data updated",data);
            toast.success("Data updated successfully");
        })

    }
    // UPDATE END

    console.log("edit :- ",edit)

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

            <br /><br />

            <div>
                {
                    (edit && <div>
                        <input type="text" value={edit.userName} onChange={(e) => setEdit({...edit,userName:e.target.value})} placeholder="Please enter username" /> <br /><br />
                        <input type="text" value={edit.email} onChange={(e) => setEdit({...edit,email:e.target.value})} placeholder="Please enter email" /> <br /><br />
                        <input type="text" value={edit.password} onChange={(e) => setEdit({...edit,password:e.target.value})} placeholder="Please enter password" /> <br /><br />
                        <button onClick={handleUpdate}>Update</button>
                    </div>)
                }
                {/* VIEW START  */}
                {user.map((v,i) => (
                    <div key={v.id} style={{boxShadow:"1px 1px 10px 0px white",borderRadius:"70px",padding:"50px",marginTop:"50px"}}>
                        <h1>{v.userName}</h1>
                        <h2>{v.email}</h2>
                        <h2>{v.password}</h2><br /><br />
                        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                            <button onClick={() => handleDelete(v.id)}>Delete</button>
                            <button onClick={() => handleEdit(v.id)}>Update</button>
                        </div>
                    </div>
                ))}
                {/* VIEW END */}
            </div>

        <ToastContainer/>
        </div>
    )
}

export default Home;