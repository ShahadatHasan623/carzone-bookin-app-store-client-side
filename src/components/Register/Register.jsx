import Lottie from "lottie-react";
import registerLottie from "../../../public/registerlottie.json";
import { NavLink, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { CreateRegister, updateprofile, setUser, googleSignIn } = use(AuthContext);
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

   const handleGooglesign =()=>{
      googleSignIn()
      .then(()=>{
        toast.success("google Signin Successfully")
        navigate('/')
      })
      .catch(error=>{
        console.log(error.message)
      })      
    }
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
          <div className="divider text-white before:bg-white after:bg-white">
            OR
          </div>
          <button type="button" onClick={handleGooglesign} className="btn w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none border-none focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55">
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
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
