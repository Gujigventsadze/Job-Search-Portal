import "./Newsletter.css"
import emailImg from "../../assets/pics/newsletter.jpg"

const Newsletter = () => {
    return (
        <form className="newsletter-container">
            <div className="newsletter-img">
                <img src={emailImg} />
            </div>
            <div className="email-submit">
                <input type="email" name="email" placeholder="Email Address" />
                <button type="submit" className="submit-btn">Submit</button>
            </div>
            <div className="newsletter-not">Get Notified Whenever There Is a New Job Posting!</div>
        </form>
    )
}

export default Newsletter