const mongoose = require("mongoose")
const dotenv = require('dotenv')
const ChassisCode = require("../models/ChassisCode");
const carList = require('../data/carList')

dotenv.config()

const seedDatabase = async () =>{

  await mongoose.connect(process.env.MONGODB_URI)
  console.log('MongoDB bağlandı')

  await ChassisCode.deleteMany()
  console.log('Eski veriler silindi')

  const seedData =  carList.map(car => ({
    code: car.code,
    slug: `${car.brand.toLowerCase().replace(/ /g,'-')}-${car.code.toLowerCase()}`,
    brand: car.brand,
    model: car.model,
    generation: car.generation,
    production: car.production,
    body_styles: car.body_styles,
  }))

  const result =  await ChassisCode.insertMany(seedData)
  console.log(`${result.length} araba eklendi`)

  process.on('exit',(code)=>{
     console.log(`Çıkış kodu: ${code}`)
  })
}

seedDatabase().then(() => {
    console.log('Bitti')
}).catch(err => {
    console.error('Hata:', err.message)
})

