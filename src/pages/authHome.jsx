import React from "react";
import { useNavigate } from "react-router-dom";

const AuthHomePage = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    // Remove the ath token or user from wherever to stored it.
    localStorage.removeItem("testToken");

    // Navigate back to the home page ( Unprotected page)
    navigate("/");
  };

  return (
    <>
      <div>Auth Home Page</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};
export default AuthHomePage;
