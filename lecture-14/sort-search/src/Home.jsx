import { useState,useEffect } from "react"

const Home = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        fetch(`http://localhost:8000/products?q=${search}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setProducts(data);
        })
        .catch((e)=>{
            console.log(e);
            console.log("something wrong");
        })
    },[search])

    const handleAsce = () => {
        const ascedata = [...products].sort((a,b) => a.price - b.price)
        setProducts(ascedata);
    }

    const handleDesc = () => {
        const descedata = [...products].sort((a,b) => b.price - a.price);
        setProducts(descedata)
    }

    return (
        <>

            <div>
                <button onClick={handleAsce}>Ascending</button>
                <button style={{marginLeft:"30px"}} onClick={handleDesc}>Descending</button>
            </div>

            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
                <br /><br />
            </div>

            {
                products.map((v,i) => {
                    return <div key={v.id}>
                        <img src={v.images[0]} alt="image" width={"300px"} height={"300px"} />
                        <h1>{v.title}</h1>
                        <h2>price :- ${v.price}</h2>
                    </div>
                })
            }
        </>
    )
}

export default Home;