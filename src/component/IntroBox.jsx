// import Button from "./Button.jsx"
import "./IntroBox.css"
import "./Button.css"
const IntroBox = ()=> {
    return (
        <div className="introBox">
            <h1>
                Introduce Your Project Quickly & Effectively
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio incidunt quam, dolorem expedita quas aut minima accusantium quasi ipsam facere fugit blandisa molestias veritatis corrupti obcaecati nesciunt amet temporibus laborum.
                <br />
                Hic error illo cumque. Eaque maxime, quidem dignissimos rerum obcaecati aperiam sit corrupti.
            </p>
            <button className="button" style={{"padding":"10px"}}> Purchase UI Kit </button>
            <button className="button button2"> Learn More </button>
            
        </div>
    )
}
export default IntroBox;