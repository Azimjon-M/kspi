import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import APILogin from "../../services/login";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attemptCount, setAttemptCount] = useState(
    parseInt(localStorage.getItem("attemptCount")) || 0
  );
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(attemptCount >= 2);
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous captcha
      ctx.font = "20px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(captchaText, 10, 30);

      // Draw a random line across the captcha for extra security
      ctx.strokeStyle = "#000"; // Color of the line
      ctx.lineWidth = 1; // Thickness of the line
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    localStorage.setItem("captcha", captchaText);
  };

  useEffect(() => {
    // Generate a new CAPTCHA on component mount or refresh
    if (showCaptcha) {
      generateCaptcha();
    }
  }, [showCaptcha]);

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

    if (showCaptcha && inputCaptcha !== localStorage.getItem("captcha")) {
      setError("Captcha noto'g'ri kiritildi");
      setInputCaptcha("");
      generateCaptcha(); // Regenerate captcha on incorrect input
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
        localStorage.removeItem("attemptCount");
      } else {
        throw new Error("Login yoki parol noto'g'ri");
      }
    } catch (err) {
      setError("Login yoki parol noto'g'ri");

      if (err.response && err.response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
          handleSubmit(e);
          return;
        }
      }

      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      localStorage.setItem("attemptCount", newAttemptCount);

      if (newAttemptCount >= 2) {
        setShowCaptcha(true);
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
            <canvas
              ref={canvasRef}
              width="100"
              height="40"
              className="border"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Captchani kiriting"
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
