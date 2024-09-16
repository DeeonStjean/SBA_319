import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.NYC);
        console.log('MongoDB connected...');
    } catch(e) {
        console.log(e);
    }
}

export default connectDb;