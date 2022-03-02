import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";

function App() {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/dashboard">
            {/* Dashboard */}
          </Route>
          <Route path='/dashboard/phots'>
            {/* Photo  */}
          </Route>
          <Route path='/dashboard/album'>
            {/* Album */}
          </Route>
          <Route path='/dashboard/photo/:photoId'>
            {/* PhotoDetail */}
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
