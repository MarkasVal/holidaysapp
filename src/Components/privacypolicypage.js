import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import "../Styles/main.css"


export default function Privacypolicypage() {

  const navigate = useNavigate();

  return (

    <div>
        <Navbar/>
            <div>
                <h1 className="CookiesPolicyTitle">Markas Valunas Holidays Cookie Policy</h1>
                <div className="CookiesPolicyParagraph">
                  Necessary Cookies: These cookies are essential for the website to function properly. They ensure basic functionalities and security features of the website, such as account login and transaction processing.
                  Functional Cookies: Functional cookies enable the website to provide enhanced functionality and personalization. They may store preferences and settings.
                  Analytical/Performance Cookies: These cookies allow us to analyze website traffic and track user behavior anonymously. They help us improve the website's performance and tailor it to our users' needs.
                  Targeting/Advertising Cookies: Targeting cookies are used to deliver advertisements relevant to your interests. They may also limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                  Cookie Duration:

                  Session Cookies: Session cookies are temporary and are erased when you close your browser. They are used to maintain session state and remember user actions across pages.
                  Persistent Cookies: Persistent cookies remain on your device for a specified period or until you delete them. They are used to recognize repeat visitors and remember their preferences.
                  Managing Cookies:

                  Browser Settings: You can control and manage cookies through your browser settings. Most web browsers allow you to block or delete cookies, as well as set preferences for how cookies are handled.
                  Opt-Out Tools: Some third-party services offer opt-out tools that allow you to manage which cookies are used for targeted advertising purposes.
                  Cookie Preferences: We provide options for you to manage your cookie preferences on our website. You can choose to accept or reject certain types of cookies.
                  Third-Party Cookies:
                  We may use third-party services that place cookies on our website
                  <button onClick={() => {navigate('/Home')}} className='AcceptCookiesButton'>Accept</button>
                  </div>
            </div>
        <Footer/>
    </div>
  );
}
