import React, { useState } from 'react';
import AuthContext from './js/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MobileViewerBlocker from './components/MobileViewerBlocker';
import axios from 'axios';

function App() {
  const [auth, setAuth] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Replace 'YOUR_PASSAGE_AUTH_TOKEN' with the PassageAuth access token obtained during authentication
        const passageAuthToken = 'YOUR_PASSAGE_AUTH_TOKEN';
        
        const passageAuth = new PassageAuth();
        const userID = await passageAuth.authenticateRequest(passageAuthToken);

        if (userID) {
          const response = await axios.get('http://localhost:3000/user', {
            headers: { Authorization: `Bearer ${passageAuthToken}` },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    if (auth) {
      getUserData();
    }
  }, [auth]);


  return (
    <GoogleOAuthProvider clientId="529394637879-vrspqqbokngmqet4sfnl7tp2a207n29a.apps.googleusercontent.com">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <MobileViewerBlocker />
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
