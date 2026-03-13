const axios = require('axios')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const ChassisCode = require('../models/ChassisCode')

dotenv.config()



async function scrapeWikipedia(params) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${params}`
    const response = await axios.get(url,{
        headers:{
            'User-Agent': 'KasaKatalog/1.0 (https://kasa-katalog.onrender.com)'
        }
    })
    return{
        description: response.data.extract,
        image: response.data.thumbnail?.source
    }   
}


async function scrapeAll(p) {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB ye bağlandı')

    const chassis = await ChassisCode.find()

    for(const car of chassis){
        const params = `${car.brand}_${car.code}`.replace(/ /g, '_')
        console.log(`Scrapping: ${params}`)
    

        try{
            const data = await scrapeWikipedia(params)

            await ChassisCode.updateOne(
                {
                    _id: car._id
                },
                {
                    description: data.description,
                    images: data.image ? [{url: data.image, is_primary: true} ] : car.images
                }
            )
            console.log(`${car.code} güncellendi.`)
        }catch(error){
            console.log(`${car.code} için veri bulunamadı`)
        }
    }

    process.exit()
}

scrapeAll()