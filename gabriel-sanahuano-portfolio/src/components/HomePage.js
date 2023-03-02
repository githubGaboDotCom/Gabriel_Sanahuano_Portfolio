import './HomePage.css';

function HomePage () {
    return (
        <div className="App">
            <video src="/backgroundVideoNightlyEarth.mp4" autoPlay loop muted />
            {/* <audio controls autoPlay loop muted> 
                <source src= "/backgroundElectroMusic.mp3" type="audio/mpeg" />
            </audio> */}
            {/* <embed src="/backgroundElectroMusic.mp3" loop="true" autostart="true" width="2" height="0"></embed> */}
        </div>
    );
}

export default HomePage;