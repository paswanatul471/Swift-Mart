import mongoose from 'mongoose';

export const connection = async(username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.cvfnvay.mongodb.net/ecommerce?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database connected successfully");
    }
    catch(error){
        console.log('Error while connecting to database', error.message);
    }
}

export default connection;
