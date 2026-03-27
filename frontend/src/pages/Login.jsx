import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 🔥 VALIDATION
  const validate = () => {
    if (!form.email.includes("@")) return "Valid email required";
    if (form.password.length < 6) return "Password must be 6+ chars";
    if (!isLogin && !form.name) return "Name required";
    return "";
  };

  const handleSubmit = async () => {
    const errMsg = validate();
    if (errMsg) return setError(errMsg);

    try {
      setLoading(true);
      setError("");

      if (isLogin) {
        await login(form);
        navigate("/");
      } else {
        await register(form);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Auth failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#020617] overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] top-[-100px] left-[-100px] rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] bottom-[-100px] right-[-100px] rounded-full"></div>

      {/* 💎 CARD */}
      <div className="relative z-10 w-[380px] p-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(99,102,241,0.3)]">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm">
          {isLogin
            ? "Login to your CRM dashboard"
            : "Start managing your clients"}
        </p>

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* NAME */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full mb-3 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full mb-3 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition pr-10"
          />

          {/* 👁️ TOGGLE */}
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-400 hover:text-white"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : isLogin ? (
            "Login"
          ) : (
            "Register"
          )}
        </button>

        {/* SWITCH */}
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-gray-400 mt-5 text-sm cursor-pointer hover:text-white transition"
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;