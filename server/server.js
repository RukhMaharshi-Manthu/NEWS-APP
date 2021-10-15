import DefaultData from './default.js'
import express from 'express';
import mongoose from 'mongoose';
import Route from './routes/Route.js';

import cors from 'cors';
import bodyParser from 'body-parser';
//import dotenv from 'dotenv';





const app = express();
//dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors()); 
app.use('/', Route);


const PORT = process.env.PORT || 8000;
mongoose.connect('mongodb+srv://Maharshi:Maharshi09@cluster0.9pid8.mongodb.net/DAILY-NEWS?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=>console.log('My Dear,DB Connected Successfuly ')
)

app.get('/', (req, res) => {
  res.send("GET Request Called")
})
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();