import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // You are gonna store your token in the cookie or user in the localSorage after they have successfully login
    // E.g
    localStorage.setItem("testToken", JSON.stringify("iamlogin"));

    // Navigate back to the home page ( Unprotected page)
    navigate("/home");
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};
export default Login;
