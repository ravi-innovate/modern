import Button from "./Button.jsx"
import './BottomPage.css'
const BottomPage = () =>{
    return(
        <div className="bottomPage">
            <div className="curveDesigner"></div>
            <h2>A Price To Suit Everyone</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium nihil rerum minima porro sint recusandae delectus sunt nemo deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, provident?</p>
            <h1>$40</h1>
            <p>UI Design kit</p>
            <br/>
            <p style={{"fontSize":"0.9em"}}>See, One Price. Simple</p>
            <Button/>
        </div>
    )
}
export default BottomPage;