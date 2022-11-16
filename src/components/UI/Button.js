import React from "react";
import Button from "@mui/material/Button";
import classes from "./Button.module.css";

const Buttons = (props) => {
  return (
    <Button
      className={classes.button}
      variant={props.variant || "contained"}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default Buttons;
