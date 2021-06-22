import mongoose from 'mongoose';

 function dbConnect() {
    
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

}

export default dbConnect