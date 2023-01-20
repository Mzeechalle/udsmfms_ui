import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const AuthProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const userLogin = async () => {
        await sleep(400).then(() => setIsLoggedIn(true));
    };

    const userLogout = async () => {
        await sleep(250).then(() => setIsLoggedIn(false));
    }

    const authContextValue = {
        userLogin,
        isLoggedIn,
        userLogout
    };

    return(
        <AuthContext.Provider
            value={authContextValue}
            {...props}
        />
    );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };