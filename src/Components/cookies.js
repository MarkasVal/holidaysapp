import CookieConsent from "react-cookie-consent";


export default function CookiesBanner() {
  return (
    <div>
        <CookieConsent debug={true}
        style={{background:"black"}}
        buttonStyle={{color:"white",background:"#29335C",fontSize:"14px",border:"white"}}
        expires={365}
        >

            This site uses cookies. See our <a href="/privacypolicypage">Cookies Policy</a> for more information.
            </CookieConsent>
    </div>
  );
}
