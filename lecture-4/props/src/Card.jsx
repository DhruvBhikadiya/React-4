var Card = ({name,age,city}) => {
    return (
        <div style={{border:"1px solid black",margin:"0 10px 0 0", padding:"10px",borderRadius:"20px",boxShadow:"1px 5px 10px 1px", backgroundColor:"whitesmoke"}}>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{city}</h3>
        </div>
    )
};

export default Card;