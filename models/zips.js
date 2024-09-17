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
            require:true
        }
    }
});
zipSchema.index({zip: 1},{city: 1});
mongoose.set('autoIndex', false);
export default mongoose.model('zips',zipSchema);