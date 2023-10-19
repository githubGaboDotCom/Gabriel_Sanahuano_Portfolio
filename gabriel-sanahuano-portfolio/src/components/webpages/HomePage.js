import '../styles/css/HomePage.css';
import WebsiteBackgroundVideo from '../websiteComponents/WebsiteBackgroundVideo';
import AudioPromptMessage from '../websiteComponents/AudioPromptMessagePage';
import BiographyWindow from '../websiteComponents/BiographyWindow';
import NavigationBar from '../websiteComponents/NavigationBar';
import React from 'react';
import BinarySequence from '../websiteComponents/BinarySequence';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isBackgroundVideoMounted: false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isBackgroundVideoMounted: true});
        }, 1000);
    }
    

    render(){
        return(
            <div className="App">
                <WebsiteBackgroundVideo />
                {this.state.isBackgroundVideoMounted && <AudioPromptMessage />}
                <NavigationBar />
                <BinarySequence />
                <BiographyWindow />
            </div>
        );
    }
}

export default HomePage;