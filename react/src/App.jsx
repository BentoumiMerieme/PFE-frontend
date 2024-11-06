import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
    setErrors({});
  };

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData({
      ...signupData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validateSignup = () => {
    let newErrors = {};
    if (!signupData.name.trim()) newErrors.name = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(signupData.email))
      newErrors.email = "Email is invalid";
    if (signupData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!signupData.acceptTerms)
      newErrors.acceptTerms = "You must accept terms & conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    let newErrors = {};
    if (!/\S+@\S+\.\S+/.test(loginData.email))
      newErrors.email = "Email is invalid";
    if (loginData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      console.log("Signup successful:", signupData);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log("Login successful:", loginData);
    }
  };

  return (
    <div className="container">
      <div className={`form login ${isLoginActive ? "active" : "inactive"}`}>
        <header onClick={() => setIsLoginActive(true)}>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default App;
