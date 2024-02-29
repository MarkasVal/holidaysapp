import React,{useState,useEffect} from "react";
import "../Styles/main.css"

const DarkModeToggle = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(()=>{
        document.body.classList.toggle("dark-mode",isDarkMode);
    
    }, [isDarkMode]);

    return(
        <div classname="dark-mode-toggle">
            <label>
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                Dark Mode
            </label>
        </div>
    );
};

export default DarkModeToggle;