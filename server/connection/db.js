import mongoose from 'mongoose';

const Connection = async (Maharshi99, Maharshi123) => {
    try {   
        const URL = `mongodb+srv://${username}:${password}@news-clone.nynts.mongodb.net/NEWS-CLONE?retryWrites=true&w=majority`;
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;