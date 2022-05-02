import React, { useState, useEffect } from 'react';
const MainScreen = () => {
    const [memeimage, setMemeImage] = useState(null);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch("https://meme-api.herokuapp.com/gimme");
                const json = await result.json();
                setMemeImage(json.url)
            }
            catch (error) {
                setFetchError("Error: " + error)
            }
        }
        fetchData()
    },[memeimage])

    return (
        <div style={{backgroundColor: "black", minWidth: "200px", minHeight: "200px"}}>
            {memeimage && <img src={memeimage}></img>}
            {fetchError && <p style={{color: "red", fontWeight: "bold", textAlign: "center"}}>{fetchError}</p>}
        </div>
    );
}
export default MainScreen;
