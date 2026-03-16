const axios = require('axios')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const ChassisCode = require('../models/ChassisCode')
const carList = require('../data/carList')

dotenv.config()

const HEADERS = { 'User-Agent': 'KasaKatalog/1.0 (https://kasa-katalog.onrender.com)' }

async function getImages(term) {
    try {
     
        const listUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(term)}&prop=images&format=json&imlimit=20`
        const listRes = await axios.get(listUrl, { headers: HEADERS })
        const pages = listRes.data.query.pages
        const pageId = Object.keys(pages)[0]
        const imageFiles = pages[pageId]?.images || []

     
        const filtered = imageFiles.filter(img => img.title.match(/\.(jpg|jpeg|png)/i))

     
        const imageUrls = []
        for(const img of filtered.slice(0, 6)) {
            try {
                const fileUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(img.title)}&prop=imageinfo&iiprop=url&format=json`
                const fileRes = await axios.get(fileUrl, { headers: HEADERS })
                const filePages = fileRes.data.query.pages
                const filePageId = Object.keys(filePages)[0]
                const url = filePages[filePageId]?.imageinfo?.[0]?.url
                if(url) imageUrls.push(url)
                await new Promise(r => setTimeout(r, 200))
            } catch(e) {}
        }

        return imageUrls
    } catch(e) {
        return []
    }
}

async function scrapeWikipedia(searchTerm, brand, model, code) {
    const terms = [
        searchTerm,
        `${brand}_${code}`,
        `${brand}_${model}`,
        `${model}_${code}`
    ]

    for(const term of terms) {
        try {
            const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term.replace(/ /g, '_')}`
            const response = await axios.get(url, { headers: HEADERS })

            if(response.data.type !== 'disambiguation' && response.data.extract) {
                
                const imageUrls = await getImages(term.replace(/ /g, '_'))

                const images = imageUrls.length > 0
                    ? imageUrls.map((url, i) => ({ url, is_primary: i === 0 }))
                    : response.data.thumbnail?.source
                        ? [{ url: response.data.thumbnail.source, is_primary: true }]
                        : []

                return {
                    description: response.data.extract,
                    images
                }
            }
        } catch(err) {}
    }
    return null
}

async function scrapeAll() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB ye bağlandı')

    const chassis = await ChassisCode.find()

    for(const car of chassis) {
   
        const carData = carList.find(c => c.code === car.code && c.brand === car.brand)
        const searchTerm = carData?.searchTerm || `${car.brand}_${car.code}`

        console.log(`Scrapping: ${searchTerm}`)

        try {
            const data = await scrapeWikipedia(searchTerm, car.brand, car.model, car.code)

            if(data) {
                await ChassisCode.updateOne(
                    { _id: car._id },
                    {
                        description: data.description,
                        images: data.images
                    }
                )
                console.log(`${car.code} güncellendi - ${data.images.length} resim`)
            } else {
                console.log(`${car.code} için veri bulunamadı`)
            }

      
            await new Promise(r => setTimeout(r, 500))

        } catch(error) {
            console.log(`${car.code} hata: ${error.message}`)
        }
    }

    process.exit()
}

scrapeAll()