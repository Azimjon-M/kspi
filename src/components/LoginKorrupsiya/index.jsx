import { useState } from "react";
import { useNavigate } from "react-router-dom";
import APILogin from "../../services/login";

const LoginKorrupsiya = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await APILogin.refreshPost({
        refresh: refreshToken,
      });
      const token = res.data.access;
      if (token) {
        localStorage.setItem("token", token);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APILogin.post({
        username: name,
        password: password,
      })
        .then().catch()
      const token = res?.data?.access;
      const refreshToken = res?.data?.refresh

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/korrupsiya-qabulxona");
      } else {
        setError("Incorrect credentials");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          handleSubmit(e);
          return;
        }
      }
      console.error(err);
      setError("Authentication failed");
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
export default LoginKorrupsiya;
