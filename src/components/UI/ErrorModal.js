import React from "react";

import classes from "./ErrorModal.module.css";
import Cards from "./Card";
import Buttons from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Cards className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Buttons onClick={props.onConfimr}>Okay</Buttons>
          </footer>
        </Cards>
      </div>
    </div>
  );
};

export default ErrorModal;
