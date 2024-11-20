import User from "../modal/user.model.js";

import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, mobile, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const encryptpassword = await bcryptjs.hash(password, 10);
    const createUser = new User({
      fullname: fullname,
      mobile: mobile,
      email: email,
      password: encryptpassword,
    });
    await createUser.save()
    res.status(201).json({message:'user created successfull',user:{_id: createUser._id,
        fullname: createUser.fullname,
        mobile: createUser.mobile,
        email: createUser.email,}});
  } catch (error) {
    console.error("Signup error" + error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const ismatch = await bcryptjs.compare(password, user.password);
    if (!user || !ismatch) {
      return res.status(400).json({ message: "invalide user or password" });
    } else {
      res.status(201);
      res.json({
        message: "user login successfull",
        user: {
          _id: user._id,
          fullname: user.fullname,

          email: user.email,
        },
      });
    }
  } catch (error) {
    // console.log("error : " + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
