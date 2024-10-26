import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                user: parseData.user,
                token: parseData.token
            });
        }
    }, []);

    useEffect(() => {
        // Update axios headers whenever the auth state changes
        axios.defaults.headers.common["Authorization"] = auth.token;
        
        // Update local storage whenever auth state changes
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]); // Depend on auth to update both axios headers and local storage

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
