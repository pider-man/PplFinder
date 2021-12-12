import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import Favorites from "pages/Favorites";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { usePeopleFetch } from "hooks";

const AppRouter = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home users={users} isLoading={isLoading} />
          </Route>
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
