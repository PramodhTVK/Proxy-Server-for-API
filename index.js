const express=require('express');
const cors=require('cors');
const PORT=process.env.PORT || 5000;
const rateLimit=require('express-rate-limit');

require('dotenv').config();

const app=express();

const limiter=rateLimit({
    windowMs:10*60*1000,
    max:5
});
app.use(limiter);
app.set('trust proxy',1);
app.use('/api',require('./routes/index'));
app.use(cors());

app.listen(PORT,()=>{
    console.log("Server is running on the specified port");
})