import Card from'./Card'

var Home = () => {
    const person = [
        {
            name: "Ram",
            age: 21,
            city: "Ayodhya"
        },
        {
            name: "Laxman",
            age: 21,
            city: "Ayodhya"
        },
        {
            name: "Sita",
            age: 21,
            city: "Ayodhya"
        },
        {
            name: "Bharat",
            age: 21,
            city: "Ayodhya"
        },
        {
            name: "Shatrudhan",
            age: 21,
            city: "Ayodhya"
        }
    ]
    return (
        <div style={{display:"flex"}}>
            {person.map((v,i) => <Card key={i} {...v}/> )}
        </div>
    )
};

export default Home;