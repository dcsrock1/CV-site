import "./style/base.css"
import "./style/contact.css"

function Contact() {
    return (
        <>
            <br/><br/><br/>
            <div class="TitleContainer">
            <h1>Contact Me<br/>Use one of the methods below to contact me</h1>
            <h4>This page contains all of my contact details</h4>
            <h6>Send me an email and I will respond at my first available opportunity</h6>
            </div>
            <div class="InfoContainerD">
                <div class="InfoSegment">
                    <h4>Business Email</h4>
                    <p>This is my business email. All inquires about employment, finance and all other business related topics</p>
                    <br></br>
                    <div class="EmailContainer">business@fletcher-networks.co.uk</div>
                    
                    
                </div>
                <div class="InfoSegment">
                    <h4>General Use Email</h4>
                    <p>This email is for non business use only. Anything regarding the site, personal matters or anything else should be sent to this email</p>
                    <br></br>
                    <div class="EmailContainer">general@fletcher-networks.co.uk</div>
                    
                </div>
            </div>
        </>
    );
}

export default Contact;