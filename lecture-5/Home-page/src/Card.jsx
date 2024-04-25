

var Card = ({ img, name, price, description, rating }) => {
    return (
        <div style={{boxShadow:"3px 3px 10px 2px grey",borderRadius:"30px", width:"300px", height:"500px", padding:"15px",marginLeft:"20px", marginBottom:"40px"}} className="cards">
            <img src={img} alt="Mobiles" height="200px" />
            <h2 style={{color:"black", textAlign:"left"}}>Rating :- {rating}</h2>
            <h1 style={{color:"black", textAlign:"left"}}>Name :- {name}</h1>
            <h2 style={{color:"black", textAlign:"left"}}>{price}</h2>
            <p style={{color:"black", textAlign:"left"}}>{description}</p>
        </div>
    )
}

export default Card;