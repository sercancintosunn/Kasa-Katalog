const mongoose = require("mongoose")
const dotenv = require('dotenv')
const chassis = require('../models/ChassisCode');
const ChassisCode = require("../models/ChassisCode");

dotenv.config()

const chassisArray = [
  {
    code: "E30",
    slug: "bmw-e30",
    brand: "BMW",
    model: "3 Series",
    generation: 2,
    production: { start: 1982, end: 1994 },
    body_styles: [
      { type: "sedan", doors: 4 },
      { type: "coupe", doors: 2 },
      { type: "cabrio", doors: 2 }
    ],
    engines: [
      { engine_code: "M20B25", power_hp: 170, fuel_type: "benzin" },
      { engine_code: "M40B18", power_hp: 113, fuel_type: "benzin" }
    ],
    description: "BMW E30 ikinci nesil 3 serisidir.",
    images: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/BMW_E30_in_silver_%28facelift%29%2C_front_left_2024-08-18.jpg/500px-BMW_E30_in_silver_%28facelift%29%2C_front_left_2024-08-18.jpg", is_primary: true },
      { url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/BMW_E30_rot.jpg", is_primary: false }
    ]
  },
  {
    code: "E46",
    slug: "bmw-e46",
    brand: "BMW",
    model: "3 Series",
    generation: 4,
    production: { start: 1998, end: 2006 },
    body_styles: [
      { type: "sedan", doors: 4 },
      { type: "coupe", doors: 2 },
      { type: "wagon", doors: 5 }
    ],
    engines: [
      { engine_code: "M54B30", power_hp: 231, fuel_type: "benzin" },
      { engine_code: "M47D20", power_hp: 150, fuel_type: "dizel" }
    ],
    description: "BMW E46 sürüş dinamiği ile öne çıkar.",
    images: [
      { url: "https://tr.wikipedia.org/wiki/BMW_3_Serisi_(E46)#/media/Dosya:2000-2003_BMW_330Ci_(E46)_coupe_(2011-07-17)_01.jpg", is_primary: true },
      { url: "https://tr.wikipedia.org/wiki/BMW_3_Serisi_(E46)#/media/Dosya:1999-2000_BMW_323Ci_(E46)_coupe_01.jpg", is_primary: false }
    ]
  },
  {
    code: "W211",
    slug: "mercedes-w211",
    brand: "Mercedes-Benz",
    model: "E-Class",
    generation: 3,
    production: { start: 2002, end: 2009 },
    body_styles: [
      { type: "sedan", doors: 4 },
      { type: "wagon", doors: 5 }
    ],
    engines: [
      { engine_code: "OM648", power_hp: 204, fuel_type: "dizel" },
      { engine_code: "M113", power_hp: 306, fuel_type: "benzin" }
    ],
    description: "W211 konfor ve teknoloji açısından önemli bir jenerasyondur.",
    images: [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDrvBJz688CLepHojL3ItHFYdKP-NQa2KDQ&s", is_primary: true },
      { url: "https://arabam-blog.mncdn.com/wp-content/uploads/2020/11/Mercedes-Benz-E-class-W211.jpg", is_primary: false }
    ]
  }
];

const seedDatabase = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB ye baplandı')

        await   ChassisCode.deleteMany()
        console.log("Eski veriler silindi")

        await ChassisCode.insertMany(chassisArray)
        console.log("Yeni veri eklendi")

        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

seedDatabase()

