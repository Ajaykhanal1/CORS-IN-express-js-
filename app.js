const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.get('/',(req,res)=>{
    res.send("CORS enabled for this frontend port in 3000.");
});

app.listen(3000);

//      Only this frontend can access backend