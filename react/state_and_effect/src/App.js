import React, { useState, useEffect } from 'react';
import Button from "./components/Button";
import MainScreen from "./components/MainScreen";
const App = () => {
    const [mainScreenIsVisible, setMainScreenIsVisible] = useState(false);
    const toggleButton = () => {
        setMainScreenIsVisible(mainScreenIsVisible ? false : true);
    }
    useEffect(() => {
        localStorage.setItem("mainScreenIsVisible", mainScreenIsVisible);
    }, [mainScreenIsVisible])
    return (
        <>
            <Button handleClick={toggleButton} buttonText={mainScreenIsVisible ? "Close" : "Open"} />
            {mainScreenIsVisible && <MainScreen /> }
        </>
    );
}
export default App;