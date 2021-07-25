import { Redirect, Route } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={() => (auth.user ? children : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;