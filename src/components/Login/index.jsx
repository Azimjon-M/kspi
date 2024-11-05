import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APILogin from "../../services/login";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);

  // useEffect orqali localStorage'dagi Captcha ni tekshirish
  useEffect(() => {
    const savedCaptcha = localStorage.getItem("captcha");
    if (savedCaptcha) {
      setCaptcha(savedCaptcha);
      setShowCaptcha(true);
    }
  }, []);

  // Yangi Captcha yaratish va localStorage'ga saqlash
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
    localStorage.setItem("captcha", captchaText); // Captcha ni localStorage ga saqlash
  };

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

    // Captcha ko'rsatilgan bo'lsa, uni tekshirish
    if (showCaptcha && inputCaptcha !== captcha) {
      setError("Captcha noto'g'ri kiritildi");
      setInputCaptcha("");
      generateCaptcha();
      return;
    }

    try {
      const res = await APILogin.post({
        username: name,
        password: password,
      });

      const token = res?.data?.access;
      const refreshToken = res?.data?.refresh;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/admin-virtual-qabulxona");

        setAttemptCount(0);
        setShowCaptcha(false);
        setError("");
        localStorage.removeItem("captcha");
      } else {
        throw new Error("Login yoki parol noto'g'ri");
      }
    } catch (err) {
      setError("Login yoki parol noto'g'ri");

      if (err.response && err.response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          navigate("/admin-virtual-qabulxona");
          return;
        }
      }

      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);

      if (newAttemptCount >= 2) {
        setShowCaptcha(true);
        generateCaptcha();
      }
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

        {showCaptcha && (
          <div className="flex items-center gap-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="captcha"
            >
              {captcha}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="captcha"
              type="text"
              placeholder="Captcha ni kiriting"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
          </div>
        )}

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
