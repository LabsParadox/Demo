import React, { useState } from 'react';
import AuthContext from './js/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MobileViewerBlocker from './components/MobileViewerBlocker';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <GoogleOAuthProvider clientId="529394637879-vrspqqbokngmqet4sfnl7tp2a207n29a.apps.googleusercontent.com">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <MobileViewerBlocker />
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
