import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
function Login() {
    const [userInfo, setUserInfo] = useState({});
    const auth = useAuth();
    function handleSubmit (e)  {
        e.preventDefault();
        auth.login(userInfo);
    }

    function handleChange (e)  {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({ ...userInfo, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    required
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-submit">
            Login
            </button>
        </form>
    );
}

export default Login;