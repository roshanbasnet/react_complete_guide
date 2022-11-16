import React, { useState } from "react";
import Cards from "../UI/Card";
import classes from "./AddUser.module.css";
import Buttons from "../UI/Button";
import ErrorModule from "../UI/ErrorModal";

const AddUser = (props) => {
  //Array destructuring methods
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // Prevent the form from submitting
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // adding a plus sign in front of a
    //string will convert it to a number
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    //accessing the addUserHandler function
    // from the App.js file
    props.onAdduser(enteredUsername, enteredAge);

    // Clear the input fields
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* if the error state is not null, then shows output */}
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Cards className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Buttons type="submit" variant="contained">
            Add User
          </Buttons>
        </form>
      </Cards>
    </div>
  );
};

export default AddUser;
