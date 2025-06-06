import Lottie from "lottie-react";
import registerLottie from "../../../public/registerlottie.json";
import { NavLink, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { CreateRegister, updateprofile, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (password === "") {
      setError("❌ Password is required.");
      return;
    } else if (password.length < 8) {
      setError("❌ Password must be at least 8 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("❌ Password must include at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("❌ Password must include at least one lowercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("❌ Password must include at least one number.");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setError(
        "❌ Password must include at least one special character (!@#$%^&*)."
      );
      return;
    } else {
      setError("✅ Password is valid.");
    }
    CreateRegister(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("sign up successfully")

        updateprofile({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-10 gap-10 rounded-2xl">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          CarZone Register
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium mb-1">
              Photo Url
            </label>
            <input
              type="text"
              id="PhotoUrl"
              name="photo"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Photo Url"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter Your Password"
            />
            <div>
              <button
                type="button"
                onClick={() => setShowPassword(!showpassword)}
                className="absolute top-9 right-4 text-black"
              >
                {showpassword ? (
                  <FaEye size={20} />
                ) : (
                  <FaRegEyeSlash size={20} />
                )}{" "}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink to="/login" className="text-amber-400 hover:underline">
            Login
          </NavLink>
        </p>
        {error && (
          <>
            <p className="text-red-500">{error}</p>
          </>
        )}
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Lottie animationData={registerLottie} loop={true} />
      </div>
    </div>
  );
};

export default Register;
