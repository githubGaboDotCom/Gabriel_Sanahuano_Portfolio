import '../styles/css/HomePage.css';
import WebsiteBackgroundVideo from '../websiteComponents/WebsiteBackgroundVideo';
import AudioPromptMessage from './AudioPromptMessagePage';
import React from 'react';

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
            </div>
        );
    }
}

export default HomePage;

// function HomePage () {
    
//     return (
//         <div className="App">
//             <WebsiteBackgroundVideo />
//             <AudioPromptMessage />
//         </div>
//     );
// }

// export default HomePage;