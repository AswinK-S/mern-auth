import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import User from "../models/user.model.js"

export const test =(req,res)=>{
    res.json({
        message:'API is working'
    })
}

//update user
export const updateUser = async (req, res, next) => {
    
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can update only your account!'));
    }

    try {

        try{
        if (!req.body.username && !req.body.email) {
            return next(errorHandler(400, 'Username or email is required for update.'));
        } 
         }catch (hashingError) {
            return next(errorHandler(500, 'Error hashing password'));
          }

      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );

      if (!updatedUser) {
        return next(errorHandler(404, 'User not found or update failed'));
      }
  

      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };