import homepageimage from "../Images/homepageimage.jpg"
import "../Styles/images.css"


export default function Homepageimage() {
  return (
    <div>
        <img  className="HomePageImage" alt="Home Page Beach Image" src = {homepageimage}/>
    </div>
  );
}
