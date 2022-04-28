import express from 'express';
import { isAuth } from '../util.js';
import config from '../config.js';
import axios from 'axios';


const router = express.Router();

//get the location api place of birth received from frontend place of birth value
router.get("/", async (req, res) => {
  
    try {
        let {str} = req.query

        // console.log("seeParams",str); the user place of birth location received as parameters from frontend

      let {data} = await axios.get(`${config.LOCATION_URL}${str}`);
      // console.log("checkdata",data);

      if(data){
        return res.status(201).json({ status:true, "data": data.data});
      }
      
      return  res.status(201).json({ status:true, "data": false });
      
    } catch (err) {
        console.log({err});
      res.status(404).json({ status:false, errorMessage: "Error in Receiving Location " });
    }
  });


  export default router;