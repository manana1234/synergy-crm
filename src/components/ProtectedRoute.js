import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}