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
                    <p>Hello, My name is Charles Dougles Fletcher. From a very young age I have always been entranced by the beauty of technology. The way it could do anything I wanted it to do with just a push of a button was like magic to my younger self. However, eventually I reached an age were, "it just works" wasn't a good enough answer, I needed to know more.<br/><br/>I was 11 years old when I started playing with batch scripts and from there I spent all my time learning and pushing myself to do amazing new things with what I had learnt. Computers have an always will be my passion, the feeling you get from solving a bug and the determination and drive that it gives you to solve more is incredible.<br/><br/>However, Sadly I never had a proper chance to study computer science in my earlier years. I am however, now studying Vocational Level 2 IT at Brockenhurst College. I would have liked to to do the A level or even the level 3 but I did not meet the entry requirements with my GCSEs due to upheaval in my home life. I'm hoping to be moved up to level 3 or A level after I have completed the first year of the course.</p>
                </div>
            </div>
            <br/><br/>
            <div class="DuelAligner">
                <div class="BarContainerL">
                    <h1>My ability in various programming languages</h1>
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
                <div class="BarContainerR">
                    <h1>My ability in a few general areas of IT</h1>
                    <div class="ExpRow">
                        <h3>Networking</h3>
                        <div class="ExperienceBar">
                            <div class="percentage skillNetworking">75%</div>
                        </div>
                    </div>
                    <br/>
                    <div class="ExpRow">
                        <h3>Team Workflows</h3>
                        <div class="ExperienceBar">
                            <div class="percentage skillTeamworkFlows">65%</div>
                        </div>
                    </div>
                    <div class="ExpRow">
                        <h3>Databases</h3>
                        <div class="ExperienceBar">
                            <div class="percentage skillDatabases">70%</div>
                        </div>
                    </div>
                    <div class="ExpRow">
                        <h3>Machine Learning</h3>
                        <div class="ExperienceBar">
                            <div class="percentage skillML">40%</div>
                        </div>
                    </div>
                    <div class="ExpRow">
                        <h3>Adaptability</h3>
                        <div class="ExperienceBar">
                            <div class="percentage skillAdaptability">80%</div>
                        </div>    
                    </div>  
                </div>
            </div>
        </>
    );
}

export default About;