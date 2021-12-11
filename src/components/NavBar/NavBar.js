import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

const PATHS = ["/", "/favorites"];

const NavBar = () => {
  const [value, setValue] = useState("/");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (PATHS.includes(path)) {
      setValue(path);
    } else {
      history.replace("/");
    }
  }, [location]);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" value={"/"} index={0} />
        <Tab label="Favorites" value={"/favorites"} index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
