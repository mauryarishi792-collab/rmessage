import mongoose from 'mongoose';
import dns from 'dns'

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])


export async function connectDB (){
    try{
        const mongoURI = process.env.MONGO_URI;

        if(!mongoURI){
            throw new Error("MONGO_UTI is required")
        }
        const conn = await mongoose.connect(mongoURI);
        console.log("MongoDB connected",conn.connection.host)
    }catch (error){
        console.error("MongoDB conneection error:",error.message);
        process.exit(1); // 1 means failed , 0 means success
    }
}