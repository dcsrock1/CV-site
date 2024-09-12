import "./style/base.css"
import "./style/about.css"
function About() {
    return (
        <>
            <br/><br/><br/>
            <div class="TitleContainer">
                <h1>About Me<br/>Who is Charles Fletcher?</h1>
                <h5>This page lays out all relevant information about who I am</h5>
            </div>
            <br/><br/><br/>
            <div class="InfoContainerS">
                <img class="ImageSegment" src="/portrait.jpg" alt=""></img>
                <div class="AboutText">
                    <h3>About Me</h3>
                    <p>TEST TEST TEST<br></br>TEST TEST TEST</p>
                </div>
            </div>
            <br/><br/><br/>
        </>
    );
}

export default About;