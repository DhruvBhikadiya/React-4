import { useEffect, useState } from "react"
import Card from "./Card"

const Home = () => {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        fetch(`http://localhost:8000/products?_page=${page}_per_page=5`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProducts(data);
        })
        .catch((e)=>{
            console.log(e);
            console.log("something went wrong");
        })
    },[page])

    return <>
        <button disabled={page === 1} onClick={()=>setPage(page - 1)} style={{marginLeft:"10px"}}>Prev</button>
        <button style={{marginLeft:"10px"}}>{page}</button>
        <button disabled={page > products.length-1} onClick={()=>setPage(page + 1)} style={{marginLeft:"10px"}}>Next</button>
        {
            products.map((v,i) => {
                return <Card {...v}/>
            })
        }
    </>
}

export default Home;