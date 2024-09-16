import mongoose from "mongoose";

const zipSchema = new mongoose.Schema({
    city:{
        type: String,
        require:true
    },
    zip:{
        type: String,
        require:true
    },
    loc:{
        y:{
            type:Number,
            require:true
        },
        x:{
            type:Number,
            require
        }
    },
    pop:{
        type: Number,
        require: true,
    },
    state:{
        type:String,
        require:true
    }
});
export default mongoose.model('zips',zipSchema);