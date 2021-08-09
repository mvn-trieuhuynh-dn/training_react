import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userChange } from "../Slice/userSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let userLocal = localStorage.getItem('user');
    const [user, setUser] = useState(userLocal);

    const login = (userInfo) => {
        localStorage.setItem('user', userInfo.email);
        dispatch(userChange(userInfo.email));
        setUser(userInfo.email);
        history.push('/account');
    }
    const logout = () => {
        localStorage.removeItem('user');
        dispatch(userChange(''));
    }
    return {login, logout, user};
}

export default useAuth;