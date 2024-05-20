import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(()=>{
        if(category == ""){
            fetch(`http://localhost:8000/products`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setProducts(data);
            })
            .catch((e) => {
                console.log(e);
            })
        }
        else{
            fetch(`http://localhost:8000/products?category=${category}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setProducts(data);
            })
            .catch((e)=>{
                console.log(e);
            })
        }
    },[category])

    const handleFilter = (category) =>{
        setCategory(category);
    }

    console.log(category);

    return (
        <>

            <div style={{marginBottom:"30px"}}>
                <button onClick={()=>handleFilter("skincare")}>Skincare</button>
                <button style={{marginLeft:"30px"}} onClick={()=>handleFilter("home-decoration")}>Home-Decoration</button>
                <button style={{marginLeft:"30px"}} onClick={()=>handleFilter("")}>Reset</button>
            </div>

            {
                products.map((v,i) => {
                    return <div key={v.id}>
                        <img src={v.images[0]} alt="" style={{width:"350px"}} />
                        <h1>{v.title}</h1>
                        <h2>Price :- {v.price}</h2>
                        <h3>Category :- {v.category}</h3>
                    </div>
                })
            }
        </>
    )
};

export default Home;