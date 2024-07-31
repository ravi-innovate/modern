import Button from "./Button.jsx"
import "./Navbar.css";
const Navbar = () =>{
    return (
        <div className="navbar">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <h2>
                Landing
            </h2>

            <Button value="Buy Now"/>
        </div>
    )
}

export default Navbar;