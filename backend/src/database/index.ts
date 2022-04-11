import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECT_URL!)
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.log(err));