const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')

require('./db/db');
const app = express();
app.use(bodyParser.json())


app.use('/api',userRouter)

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server Started at PORT ${port}`)
})