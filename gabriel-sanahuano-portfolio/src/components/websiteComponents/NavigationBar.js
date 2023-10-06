import '../styles/css/NavigationBar.css';
import { useState, useEffect } from 'react';

function NavigationBar () {

    const [showNavigationBar, setShowNavigationBar] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setShowNavigationBar(!showNavigationBar);
        }, 22000);
    }, []);
    
    return (
        <div className="NavigationBarCSS">
            {showNavigationBar && <h1>Testing this component!</h1>}
        </div>
    );
}

export default NavigationBar;