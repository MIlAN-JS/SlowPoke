import { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaKey,
  FaExclamationCircle,
} from "react-icons/fa";
import { Link } from "react-router";

export default function LoginComp() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const isLoginEnabled =  email.length > 0 && password.length > 0;

  const handleEmailBlur = () => {
    if (email.length > 0 && !email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && e.target.value.includes("@")) {
      setEmailError(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#0d1f26" }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-10 shadow-2xl"
        style={{ backgroundColor: "#0f2330" }}
      >
        {/* Title */}
        <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-wide">
          Log in
        </h1>

        {/* Social Login */}
        <div className="flex justify-center gap-10 mb-6">
          {/* Google */}
          <button className="flex flex-col items-center gap-1 group">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-200 group-hover:border-gray-400 group-hover:bg-white/10"
              style={{ backgroundColor: "#1a2f3e" }}
            >
              <FaGoogle className="text-white text-xl" />
            </div>
            <span className="text-white text-sm">Google</span>
          </button>

          {/* Facebook */}
          <button className="flex flex-col items-center gap-1 group">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-200 group-hover:border-gray-400 group-hover:bg-white/10"
              style={{ backgroundColor: "#1a2f3e" }}
            >
              <FaFacebook className="text-white text-xl" />
            </div>
            <span className="text-white text-sm">Facebook</span>
          </button>

          {/* SSO */}
          <button className="flex flex-col items-center gap-1 group">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-600 transition-all duration-200 group-hover:border-gray-400 group-hover:bg-white/10"
              style={{ backgroundColor: "#1a2f3e" }}
            >
              <FaKey className="text-white text-xl" />
            </div>
            <span className="text-white text-sm">SSO</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-600" />
          <span className="text-gray-400 text-sm">Or</span>
          <div className="flex-1 h-px bg-gray-600" />
        </div>


        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-white text-sm mb-1">Email:</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={`w-full rounded-md px-3 py-2 pr-10 text-white text-sm outline-none focus:ring-2 transition-all duration-150 ${
                emailError
                  ? "border-2 border-red-500 focus:ring-red-400"
                  : "border border-gray-600 focus:ring-blue-400"
              }`}
              style={{ backgroundColor: "#1a2f3e" }}
              placeholder=""
            />
            {emailError && (
              <FaExclamationCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-base" />
            )}
          </div>
          {emailError && (
            <p className="text-red-500 text-xs mt-1">
              Using SSO? Just enter your email, no password required.
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-5">
          <label className="block text-white text-sm mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md px-3 py-2 text-white text-sm border border-gray-600 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150"
            style={{ backgroundColor: "#1a2f3e" }}
            placeholder=""
          />
        </div>

        {/* Forgot Password + Login Button */}
        <div className="flex items-center justify-between mb-6">
          <a
            href="#"
            className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-150 underline underline-offset-2"
          >
            Forgot Password?
          </a>
          <button
            disabled={!isLoginEnabled}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
              isLoginEnabled
                ? "bg-gray-500 hover:bg-gray-400 text-white cursor-pointer"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-white text-sm mb-6">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-150"
          >
            Sign up
          </Link>
        </p>

        {/* Footer Terms */}
        <p className="text-center text-gray-400 text-xs leading-relaxed">
          By signing up, you acknowledge that you agree to our{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-150"
          >
            Cloud Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-150"
          >
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
}