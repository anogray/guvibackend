import express from 'express';
import { isAuth } from '../util.js';
import Relative from '../model/relativeModel.js';

const router = express.Router();

//get user's all relatives
router.get("/all", isAuth, async (req, res) => {
  
// console.log("got all relatives",req.user._id); receving user id from token after being checked
  
try{
    const allRelatives = await Relative.find({userId : req.user._id});

      return res.send({
        success:true,
        allRelatives: allRelatives
      });
}catch(err){
      res.status(409).json({ success:false, errorMessage: `${err.message} Invalid Relative Data.` });
    }
  })
  
//creating a new relative profile details  
router.post("/", isAuth, async(req, res)=>{
  
  try{
    const postedRelative = req.body;
    postedRelative.userId = req.user._id;

    const relative = new Relative({
        ...postedRelative
      });
      const newRelative = await relative.save();

    // console.log({postedRelative},{newRelative});
    if(newRelative){
      res.status(200).send({
        success:true,
        msg:"Relative added",
        data:newRelative
      });
    }
  }catch(err){
    // console.log(" seeerr" +err.message);
    res.status(401).send({ success:false, errorMessage: 'Invalid Email or Password.' });
  }
})




export default router ;  