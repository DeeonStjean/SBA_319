import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    scores:[],
    class_id:{
        type: Number,
        require: true,
        cast:true
    },
    student_id:{
        type:Number,
        require:true
    }
});
 export default mongoose.model('grades',gradeSchema);