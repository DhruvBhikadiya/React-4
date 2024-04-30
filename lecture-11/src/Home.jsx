import { useEffect,useState } from "react";

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPosts(data)
        })
        .catch(e=>console.log(e));
    },[])
    return <div>
        <ul>
            {
                posts.map((v,i) => {
                    return (
                        <div key={v.id}>
                            <li>{v.body}
                            </li>
                                <li>{v.title}</li>                            
                        </div>
                    )
                })
            }
        </ul>
    </div>
}

export default Home;