import React, { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { AuthDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
function SignUp() {
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let { serverUrl } = React.useContext(AuthDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { userData, setUserData } = useContext(userDataContext);
  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      );
      setUserData(result.data);
      navigate("/");
      console.log(result);
    } catch (error) {
      console.error("Error occurred while signing up:", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
      </div>
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[600px] flex flex-col items-center justify-center  md:items-start gap-[10px]"
        onSubmit={handleSignUp}
      >
        <h1 className="text-[30px] text-[black] ">Welcome to StayNest</h1>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
          <label htmlFor="name" className="text-[20px]">
            UserName
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10px] relative ">
          <label htmlFor="password" className="text-[20px]">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!show ? (
            <IoMdEye
              className="w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer "
              onClick={() => setShow(!show)}
            />
          ) : (
            <IoMdEyeOff
              className="w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
        <button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg mt-[20px]">
          Sign Up
        </button>
        <p className="text-[18px]">
          Already have an account?{" "}
          <span
            className="text-[19px] text-[red] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
