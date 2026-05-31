
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { loginUser, registerUser } from "../api/auth";
import "../styles/globals.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    setSuccess("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      let res;

      if (isLogin) {
        // LOGIN
        res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        const data = res?.data;

        if (!data?.token) {
          throw new Error("Token not received from backend");
        }

        localStorage.setItem("token", data.token);

        login({
          email: data.user.email,
          name: data.user.name,
        });

        // No alert - direct navigate
        navigate("/");

      } else {
        // SIGNUP
        res = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        setSuccess("Account Created Successfully! Please Login ✅");

        setTimeout(() => {
          setIsLogin(true);
          setFormData({ name: "", email: "", password: "" });
          setSuccess("");
        }, 2000);
      }
    } catch (err) {
      console.log("AUTH ERROR:", err?.response?.data || err.message);
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authPage">
      <div className="overlayLayer"></div>

      <div className="authContainer">

        {/* LEFT SIDE */}
        <div className="infoSide">
          <h1>
            Build Strength,<br />
            Burn Calories &<br />
            Live Healthier
          </h1>
          <p>
            Track your workouts, nutrition and transform your fitness journey.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="formSide">
          <div className="glassCard">

            <h2>{isLogin ? "Login" : "Sign Up"}</h2>

            {/* ✅ ERROR MESSAGE */}
            {error && (
              <div className="auth-error">
                ❌ {error}
              </div>
            )}

            {/* ✅ SUCCESS MESSAGE */}
            {success && (
              <div className="auth-success">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "Login"
                  : "Sign Up"}
              </button>

            </form>

            <p
              style={{ cursor: "pointer", color: "#ffb347", marginTop: "15px" }}
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setSuccess("");
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;