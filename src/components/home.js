import "./style/home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <br/><br/><br/>
            <div class="containers">
                <h1>Charles Fletcher's<br/>curriculum vitae</h1>
                <h5>My portfolio for employment, qualification and achievement</h5>
            </div>
            
            <div class="subContainers">
                <div class="subSegments">
                    <h4>About Me</h4>
                    <p>I'm a passionate and hardworking developer with a lot of experience in real world practical applications.</p>
                    <br></br>
                    <Link to="/about" class="segmentBtn">About Me</Link>
                </div>
                <div class="subSegments">
                    <h4>Contact Me</h4>
                    <p>Send me an email or message me on one of the platforms provided below and I will get back to you at my first available opportunity.</p>
                    <br></br>
                    <Link to="/contact" class="segmentBtn">Contact Me</Link>
                </div>
            </div>
        </>
    )
}

export default Home;