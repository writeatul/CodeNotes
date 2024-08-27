// // we define fns in controller , import model as data is to be stored in it.  
// import User from "../model/user.model.js";

// export const signup = async (req,res) =>{
//     //first we need name, email, pass from body 
//     try {
//        const {fullname, email, password} =req.body
//         const user= await User.findOne({email}) //finds email 
//         if(user){ //checck if email exists in user in db
//             return res.status(400).json({error:"User already exists with that email"})
//         }

//         //if not exists, create user

//         const createdUser = new User({
//             fullname,
//             email,
//             password
//         })

//         await createdUser.save()
//         res.status(201).json({message: "User created successfully "})

//     } catch (error) {
//         console.log("Error is", error)
//         res.status(500).json({message: "Internal server error"})
//     } 
// };

import User from "../model/user.model.js";

import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
  try {''
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email }); // Finds email
    if (user) { // Check if email exists in user in DB
      return res.status(400).json({ error: "User already exists with that email" });
    }

    // If not exists, create user
    const hashPassword = await bcryptjs.hash(password, 10) //bcrypt the pass with 10 salt value 10x secure
    const createdUser = new User({
      fullname : fullname,
      email: email,
      password:hashPassword,
    });

    await createdUser.save();
    res.status(201).json({ 
      message: "User created successfully", User:  {
       _id: createdUser._id,
       fullname: createdUser.fullname,
       email: createdUser.email,
    } 
  });
  } catch (error) {
    console.log("Error is", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// now controller for login: 

export const login= async(req, res)=>{
        try {
            const {email, password} = req.body; //taking credentials from body/login form
                const user = await User.findOne({email}); //finding credentials fron db
                const isMatch = await bcryptjs.compare(password, user.password ) //ps - from user ,  user.ps - ps in db
                if(!user || !isMatch ){
                    return res.status(400).json({message: "Invalid username/password"})
                }
                else{
                    return res.status(200).json({message: "Login Successful" , user:{
                        _id:user._id,
                        fullname:user.fullname,
                        email:user.email
                    }})

                }
        } catch (error) {
            console.log("error fooundd", error)
            return res.status(500).json({message: "Internal server error, again"})

        }
}