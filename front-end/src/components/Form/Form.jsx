import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/actions";
import styles from './form.module.css'

const Form = () => {
  const dispatch = useDispatch();
  const access = useSelector((state) => state.access);
  const error = useSelector((state) => state.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      {access && <p>Login successful!</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <div className={styles.form_login}>
          <label htmlFor="email" className={styles.form_label}>
            Email
          </label>
          <input
            className={styles.form_input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className={styles.form_label}>
            Password
          </label>
          <input
            className={styles.form_input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
          className={styles.form_btn}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

//CUANDO TENIA LAS VALIDACIONES REALIZADAS EN EL FRONT
//${
//   errors.email
//     ? styles["form_input-error"]
//     : styles["form_input-success"]
// }`}

// className={
//   Object.keys(errors).length !== 0
//     ? styles.form_btn + " " + styles["button:disabled"]
//     : styles.form_btn + " " + styles["button:enabled"]
// }
