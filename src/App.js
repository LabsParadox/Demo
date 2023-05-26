import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import MobileViewerBlocker from './components/MobileViewerBlocker';

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.PARADOX_GOOGLE_CLIENT_ID}>
      <MobileViewerBlocker />
    </GoogleOAuthProvider>
  );
}

export default App;
