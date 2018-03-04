import React from 'react';
import {Redirect} from 'react-router-dom';
import authHelper from './auth';

const Settings = (props) => {
     
        if(authHelper.isAuthenticated) {
            return <p>Twoje ustawienia</p>;
        }
        return (
            <button>
                <Redirect to={'/login'}/>
            </button>
        )
    }


export default Settings;