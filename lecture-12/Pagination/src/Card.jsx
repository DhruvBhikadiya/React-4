const Card = ({id,title, description,image}) => {
    return <>
        <div style={{marginTop:"50px",border:"1px solid black", width:"500px",padding:"30px",borderRadius:"30px"}}>
            <img src={image} alt="image" width="250px"/>
            <h1>{id}</h1>
            <h1>Title :- {title}</h1>
            <h2>Description :- {description}</h2>
        </div>
    </>
}

export default Card;