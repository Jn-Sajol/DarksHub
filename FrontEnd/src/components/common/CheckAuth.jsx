import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const CheckAuth = ({ isAuthenticate, user, children }) => {
  const location = useLocation();

  // If not authenticated and not on login/register, redirect to login
  if (!isAuthenticate && !["/login", "/register"].includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and on login/register, redirect based on role
  if (isAuthenticate && ["/login", "/register"].includes(location.pathname)) {
    return (
      <Navigate
        to={user?.role === "admin" ? "/admin/dashboard" : "/shop/shopinghome"}
        replace
      />
    );
  }

  // Prevent admin from accessing shop routes
  if (
    isAuthenticate &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // Prevent user from accessing admin routes
  if (
    isAuthenticate &&
    user?.role === "user" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/shop/shopinghome" replace />;
  }

  return children;
};

export default CheckAuth;
