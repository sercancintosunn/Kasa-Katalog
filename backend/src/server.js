const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/database')
const chassisRouter = require('./routes/chassis')
const path = require('path')

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

app.use(express.static(path.join(__dirname,'../../frontend')))
app.use(express.static(path.join(__dirname,'../../frontend/detail.html')))

app.get('/', (req,res) =>{
    res.json("API çalışıyor")
})



const startServer = async () =>{
    try {
        await db.connect()

        app.listen(process.env.PORT || 5000,  () =>{
        console.log(`Sunucu ${process.env.PORT}'da çalışıyor`)
        })
    } catch (error) {
        console.error('sunucu başlatılamadı', error.message)
    }
}
app.use('/api/chassis',chassisRouter)

startServer()


