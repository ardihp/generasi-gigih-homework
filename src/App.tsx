import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from "./Pages/Auth";
import Landing from "./Pages/Landing";
import { useAppSelector, useAppDispatch } from "./Redux/hooks";
import { getTokenFromUrl } from "./Util/Services";
import { getToken } from "./Redux/tokenSlice";

function App() {
  const Token = useAppSelector(state => state.token.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const token = getTokenFromUrl(window.location.hash);
      dispatch(getToken(token.access_token));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/library">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/liked-song">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/create-playlist">
            {Token !== "" ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {Token !== "" ? <Redirect to="/home" /> : <Landing />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
