import { useEffect, useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProduct(data)
        })
    },[count])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}

export default Home;