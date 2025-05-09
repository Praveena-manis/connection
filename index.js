import express from 'express'
import dotenv from 'dotenv'
import { connect } from './connect.js'
import UserRouter from './routes/user.routes.js'
const PORT=process.env.PORT||5000;

dotenv.config();

const app= express()
connect()
app.use(express.json())//JSON Parser

app.use('/api/user',UserRouter)

app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`));