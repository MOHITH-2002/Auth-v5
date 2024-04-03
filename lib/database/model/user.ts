import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({

    email: {
    type: String,
    required: true,
    unique: true,
    },
    name: {
    type: String,
    required: true,
    },
    password:{
        type:String,
    },
    emailVerified: {
        type:Date,
        
    }

});

const User = models?.User || model("User", UserSchema);

export default User;