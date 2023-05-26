// src/Pages/Home.jsx

import React, { useContext } from 'react';
import Dashboard from '../components/Dashboard';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '../AuthContext';

class Home extends React.Component {
    static contextType = AuthContext;

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

    responseMessage = (response) => {
        const profile = response.getBasicProfile();
        const id_token = response.getAuthResponse().id_token;

        this.context.setAuth({
          name: profile.getName(),
          imageUrl: profile.getImageUrl(),
          email: profile.getEmail(),
          id_token: id_token,
        });
    };

    errorMessage = (error) => {
        console.log(error);
    };
  
    render() {
      const { dayOfWeek } = this.state;
        return (
            <div>
                <h1>Happy {dayOfWeek} folk! Woo Hoo!</h1>
                <GoogleLogin onSuccess={this.responseMessage} onError={this.errorMessage} />
                <Dashboard />
            </div>
        )
    }
}

export default Home;
