// Standard Imports
import React from 'react';
import '../scss/styles.scss';

// Page Specific Imports
import Dashboard from '../components/Dashboard';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <main>
                    <Dashboard />
                </main>
            </div>
        )
    }

}

export default Home;