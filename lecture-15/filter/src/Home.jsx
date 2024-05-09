import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8000/products`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <>
            {
                products.map((v,i) => {
                    return <>
                        <img src={v.images[0]} alt="" style={{width:"350px"}} />
                        <h1>{v.title}</h1>
                    </>
                })
            }
        </>
    )
};

export default Home;