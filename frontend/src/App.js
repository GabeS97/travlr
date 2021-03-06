import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import PageNotFound from "./PageNotFound";
import SearchResult from "./components/Navigation/SearchBar/SearchResult";

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
            {user ? <Dashboard />
              : <Splash />
            }
          </Route>
          <Route path="/dashboard/">
            <Dashboard />
          </Route>
          <Route path='/view-all'>
            <Explore />
          </Route>
          <Route path='/search/:searchQuery'>
            <SearchResult />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
