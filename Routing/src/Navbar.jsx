import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signin"}>Signin</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </>
    )
}
export default Navbar;