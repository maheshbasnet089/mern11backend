import express from 'express';

import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoute.js'
import connectDb from './config/database.js';


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



connectDb()
app.use('/product',productRoutes)
app.use('/auth',authRoutes)





 





app.listen(4000,()=>{
    console.log("port started successfully")
})