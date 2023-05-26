import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

class Google extends React.Component {
    render() {
        return (
            <div>
                <h1>React Google Login</h1>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </div>
        )
    }

}

export default Google;