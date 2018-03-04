import React from 'react';
import authHelper from './auth';
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: 'Strona logowania',
            redirect: false,
        }
    }

    onLogin(event) {
        authHelper.authenticate(() => {
            console.log(this)
            this.setState({redirect: true});
        })
    }

    render() {

        console.log(this)
        if(this.state.redirect) {
            return <Redirect to={"/settings"} />
        }
        return(
        <div>
            <p>{this.state.login}</p>
            <button onClick={this.onLogin.bind(this)}> Zaloguj </button>
        </div>
    )
    }
}

export default Login;