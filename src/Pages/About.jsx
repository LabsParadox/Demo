// Standard Imports
import React from 'react';
import '../scss/styles.scss';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>this app is cool (i'm keeping this just for easy menu testing between more than two pages)</p>
                </main>
            </div>
        )
    }
}



export default About;