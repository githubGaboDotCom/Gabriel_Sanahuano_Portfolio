import '../styles/css/HomePage.css';
import WebsiteBackgroundVideo from '../websiteComponents/WebsiteBackgroundVideo';
import AudioPromptMessage from './AudioPromptMessagePage';

function HomePage () {

    return (
        <div className="App">
            <WebsiteBackgroundVideo />
            <AudioPromptMessage />
        </div>
    );
}

export default HomePage;