import { useContext } from "react";
import { Themecontext } from "./Theme";
const Home = () => {
    
    const {theme, handleThemeChange} = useContext(Themecontext);

    console.log(theme);

    return (
        <>
            <div style={{backgroundColor: theme ? "white" : "black", width:"100vw", height:"100vh"}}>
                <button onClick={handleThemeChange}>Click to change theme</button>
            </div>
        </>
    )
}

export default Home;