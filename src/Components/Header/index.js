import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Product Management
        </Typography>
        <Button color="inherit" onClick={() => history.push("/")}>
          Create Product
        </Button>
        <Button color="inherit" onClick={() => history.push("/product-list")}>
          Product List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
