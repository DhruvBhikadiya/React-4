import { useState,useEffect } from "react"

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/products")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setProducts(data);
        })
        .catch((e)=>{
            console.log(e);
            console.log("something wrong");
        })
    },[])
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

export default Home;