import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "./validate";
import { notify } from "./toast";
import Styles from "./SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const ChangeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you signed in successfully", "success");
    } else {
      notify("invalid data !", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmpassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler} className={Styles.formContainer}>
        <h2 className={Styles.header}>Sign up</h2>
        <div className={Styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={ChangeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={Styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={ChangeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={ChangeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={Styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmpassword && touched.confirmpassword
                ? Styles.uncompleted
                : Styles.formInput
            }
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={ChangeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <span>{errors.confirmpassword}</span>
          )}
        </div>
        <div className={Styles.formField}>
          <div className={Styles.checkBoxContainer}>
            <label>I accepts terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={ChangeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={Styles.formButtons}>
          <a>Login</a>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
