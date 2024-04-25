import { useEffect, useState } from "react";

var Home = () =>{

    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {
                    product.map((v,i) => (
                        <div className="product" style={{boxShadow:"3px 3px 10px 2px grey",borderRadius:"30px", width:"300px", padding:"25px", marginRight:"5px", marginBottom:"40px"}}>
                            <center>
                                <img src={v.image} alt="Image" style={{height:"250px", width:"250px", marginTop:"20px",marginBottom:"30px"}} />
                            </center>
                            <hr />
                            <h6 style={{fontSize:"2vw"}}>Rating :- {v.rating.rate}</h6>
                            <br />
                            <h1>{v.title.substr(0,20)}</h1>
                            <br />
                            <h2>Price :- {v.price}</h2>
                            <br />
                            <h2 style={{textAlign:"left"}}>{v.description.substr(0,50)}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;