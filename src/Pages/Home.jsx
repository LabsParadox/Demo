import React from 'react';
import Dashboard from '../components/Dashboard';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dayOfWeek: ''
      };
    }
  
    componentDidMount() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const date = new Date();
      const dayOfWeek = days[date.getDay()];
  
      this.setState({ dayOfWeek });
    }
  
    render() {
      const { dayOfWeek } = this.state;
        return (
            <div>
                <h1>Happy {dayOfWeek} folk! Woo Hoo!</h1>
                <Dashboard />
            </div>
        )
    }

}

export default Home;