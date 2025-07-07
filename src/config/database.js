import mongoose from "mongoose";


const connectDb = async ()=>{

    try {
         await mongoose.connect('mongodb+srv://hello:hello@cluster0.eskyaje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("database connected successfully")
    } catch (error) {
        console.log(error.message)
    }
}



export default connectDb;