import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import MobileViewerBlocker from './components/MobileViewerBlocker';

function App() {
  return (
    <GoogleOAuthProvider clientId="529394637879-vrspqqbokngmqet4sfnl7tp2a207n29a.apps.googleusercontent.com">
      <MobileViewerBlocker />
    </GoogleOAuthProvider>
  );
}

export default App;
