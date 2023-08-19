import React from "react";
import { Routes, Route } from "react-router-dom";
import RouteProtector from "./components/Protector/Protector";
import Login from "./pages/login";
import AuthHomePage from "./pages/authHome";

const Router = () => {
  return (
    <Routes>
      {/* The following routes or urls are not protected */}
      <Route path="/" exact element={<div>Home page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<div>Sign up page</div>} />

      <Route path="/" element={<RouteProtector />}>
        {/* Here are all the routes or urls that are protected: Given relative path */}
        <Route path="home" element={<AuthHomePage />} />
        <Route path="profile" element={<div>Profile page</div>} />
        <Route path="settings" element={<div>Settings page</div>} />
      </Route>

      {/* Wildcard route */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};
export default Router;
