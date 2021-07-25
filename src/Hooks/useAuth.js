import { useState } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
    const history = useHistory();
    let userLocal = localStorage.getItem('user');
    const [user, setUser] = useState(userLocal);

    const login = (userInfo) => {
        localStorage.setItem('user', userInfo.email);
        setUser(userInfo.email);
        history.push('/account');
    }
    const logout = () => {
        localStorage.removeItem('user');
    }
    return {login, logout, user};
}

export default useAuth;