  
import mongoose from 'mongoose';


const birthDetails  = {
  day:{ type: Number },
  month:{ type: Number },
  year:{ type: Number }
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true,
  },
  password: { type: String, required:true},
  phonecode:{ type: String},
  phonenumber: { type: String},
  gender: { type: String },
  address:{ type: String },
  state:{ type: String },
  pincode:{ type: String },
  birthDetails : birthDetails,  
});

const User = mongoose.model('User', userSchema);

export default User ;