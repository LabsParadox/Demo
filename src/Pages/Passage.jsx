import React from 'react';

import '@passageidentity/passage-elements/passage-auth'
import '@passageidentity/passage-elements/passage-login'
import '@passageidentity/passage-elements/passage-register'
import '@passageidentity/passage-elements/passage-profile'


class Login extends React.Component {
    render() {
        return (
            <div>
                <passage-auth app-id="GyI3m3xjduAxX2W5ndQUbJ55"></passage-auth>
                <script src="https://psg.so/web.js"></script>
            </div>
        )
    }

}

export default Login;