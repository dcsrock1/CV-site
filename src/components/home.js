import "./style/base.css"
import "./style/home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <br/><br/><br/>
            <div class="TitleContainer">
                <h1>Charles Fletcher's<br/>curriculum vitae</h1>
                <h4>My portfolio for employment, qualification and achievement</h4>
            </div>
            
            <div class="InfoContainerD">
                <div class="InfoSegment">
                    <h4>About Me</h4>
                    <p>I'm a passionate and hardworking developer with a lot of experience in real world practical applications.</p>
                    <br></br>
                    <Link to="/about" class="segmentBtn">About Me</Link>
                </div>
                <div class="InfoSegment">
                    <h4>My Projects</h4>
                    <p>Feel free to browse and ask me about some of the projects I am working on, the majority of them are publicly available through my github.</p>
                    <br></br>
                    <Link to="/projects" class="segmentBtn">My Projects</Link>
                </div>
            </div>
        </>
    )
}

export default Home;