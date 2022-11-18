import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  const authctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onlogout}>Logout</Button>
    </Card>
  );
};

export default Home;

//props are used to pass data from a parent
// (wrapping) component to a child (embedded) component.
