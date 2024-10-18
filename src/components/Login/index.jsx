import { useState } from "react";
import { useNavigate } from "react-router-dom";
import crypto from "crypto-js";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState("");

  const hashedStaticPassword = crypto.SHA256("password123").toString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (attempts >= 3) {
      setError("Siz ko'p marta noto'g'ri urindiz, iltimos keyinroq urinib ko'ring.");
      return;
    }

    const hashedPassword = crypto.SHA256(password).toString();

    if (name === "admin" && hashedPassword === hashedStaticPassword) {
      navigate("/admin-virtual-qabulxona-sahifasi");
    } else {
      setAttempts(attempts + 1);
      setError("Noto'g'ri foydalanuvchi nomi yoki parol.");
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto translate-y-3/4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Foydalanuvchi nomi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Login"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Parol
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#004269] hover:bg-[#004269] w-full text-white font-bold text-center p-2 rounded focus:outline-none focus:shadow-outline"
          >
            Kirish
          </button>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
