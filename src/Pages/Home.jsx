import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '../js/AuthContext';

class Home extends React.Component {
    static contextType = AuthContext;

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
      return (
        <GoogleLogin onSuccess={this.responseMessage} onError={this.errorMessage} />
      )
    }
}

export default Home;
