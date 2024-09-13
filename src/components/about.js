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
            <br/><br/>
            <div class="BarContainer">
                <h2>My level of confidence in various programming languages and IT related skills</h2>
                <div class="ExpRow">
                    <h3>C</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillC">95%</div>
                    </div>
                </div>
                <br/>
                <div class="ExpRow">
                    <h3>C++</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillCXX">90%</div>
                    </div>
                </div>
                <div class="ExpRow">
                    <h3>x86 Assembly (NASM)</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillAssembly">55%</div>
                    </div>
                </div>
                <div class="ExpRow">
                    <h3>Python</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillPython">100%</div>
                    </div>
                </div>
                <div class="ExpRow">
                    <h3>javascript</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillJavascript">80%</div>
                    </div>
                </div>
                <div class="ExpRow">
                    <h3>C#</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillCS">30%</div>
                    </div>
                </div>
                <div class="ExpRow">
                    <h3>Java</h3>
                    <div class="ExperienceBar">
                        <div class="percentage skillJava">35%</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;