import genToken from "../config/token.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signUp = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    let user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error signing up: ${error.message}` });
  }
};
export const Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error logging in: ${error.message}` });
  }
};
export const Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return res.status(201).json({ message: "Logged out successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error logging out: ${error.message}` });
  }
};
