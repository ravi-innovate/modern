import Navbar from "./Navbar.jsx";
import "./Landing.css"
import IntroBox from "./IntroBox.jsx";
import Image from "./Image.jsx";
import ContentBox from "./ContentBox.jsx";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import second from '../assets/second.png'
import Button from "./Button.jsx";
const Landing = () =>{
    const arr = [img1,img2,img3];
    return(
        <div className="landing">
            <Navbar/>
            <IntroBox/>
            <div className="section-Container">
                <ContentBox/>
                <Image source={second}/>
            </div>
            {
                arr.map((item,key)=>(
                    <>
                        <div key={key} style={{"marginTop":"15vh"}} className="section-Container">
                            <Image source={item}/>
                            <div>
                                <ContentBox/>
                                {key==2 && <Button/>}
                            </div>
                            
                        </div>
                        
                    </>
                ))
            }
            
        </div>
    )
}

export default Landing;