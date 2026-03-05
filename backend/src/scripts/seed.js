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
    variants: [
      {
        name: "318i",
        power_hp: 113,
        torque_nm: 162,
        acceleration: 10.8,
        engine_size: 1.8,
        weight: 1120,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },
      {
        name: "325i",
        power_hp: 170,
        engine_size: 2.5,
        torque_nm: 222,
        acceleration: 7.4,
        top_speed: 225,
        weight: 1200,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      }
    ],
    description: "BMW E30 ikinci nesil 3 serisidir.",
    images: [
     { url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/BMW_E30_in_silver_%28facelift%29%2C_front_left_2024-08-18.jpg", is_primary: true },
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
    variants: [
      {
        name: "316i",
        power_hp: 105,
        engine_size: 1.8,
        torque_nm: 150,
        acceleration: 12.3,
        top_speed: 200,
        weight: 1315,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "318i",
        power_hp: 118,
        engine_size: 2.0,
        torque_nm: 180,
        acceleration: 10.4,
        top_speed: 206,
        weight: 1365,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "320i",
        power_hp: 150,
        torque_nm: 200,
        engine_size: 2.2,
        acceleration: 9.0,
        top_speed: 220,
        weight: 1395,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "323i",
        power_hp: 170,
        torque_nm: 245,
        acceleration: 7.8,
        engine_size: 2.5,
        top_speed: 231,
        weight: 1420,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "325i",
        power_hp: 192,
        torque_nm: 245,
        engine_size: 2.5,
        acceleration: 7.2,
        top_speed: 240,
        weight: 1430,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "330i",
        power_hp: 231,
        torque_nm: 300,
        engine_size: 3.0,
        acceleration: 6.5,
        top_speed: 250,
        weight: 1470,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "M3",
        power_hp: 343,
        torque_nm: 365,
        acceleration: 5.1,
        engine_size: 3.2,
        top_speed: 250,
        weight: 1570,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      }
      
    ],
    description: "BMW E46 sürüş dinamiği ile öne çıkar.",
    images: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/9/92/2000-2003_BMW_330Ci_%28E46%29_coupe_%282011-07-17%29_01.jpg", is_primary: true },
      { url: "https://upload.wikimedia.org/wikipedia/commons/8/82/1999-2000_BMW_323Ci_%28E46%29_coupe_01.jpg", is_primary: false }


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
    variants: [
      {
        name: "E200 Kompressor",
        power_hp: 163,
        engine_size: 1.8,
        torque_nm: 240,
        acceleration: 9.6,
        top_speed: 230,
        weight: 1540,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "E240",
        engine_size: 2.6,
        power_hp: 177,
        torque_nm: 240,
        acceleration: 9.0,
        top_speed: 236,
        weight: 1585,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },
      {
        name: "E280",
        power_hp: 231,
        engine_size: 3.0,
        torque_nm: 300,
        acceleration: 7.3,
        top_speed: 250,
        weight: 1600,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "E320",
        power_hp: 224,
        torque_nm: 315,
        engine_size: 3.2,
        acceleration: 7.7,
        top_speed: 250,
        weight: 1605,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "E350",
        power_hp: 272,
        torque_nm: 350,
        engine_size: 3.5,
        acceleration: 6.9,
        top_speed: 250,
        weight: 1615,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      },

      {
        name: "E55 AMG",
        power_hp: 476,
        torque_nm: 700,
        engine_size: 5.4,
        acceleration: 4.7,
        top_speed: 250,
        weight: 1835,
        fuel_type: "benzin",
        traction: "arkadan itiş"
      }
    ],
    description: "W211 konfor ve teknoloji açısından önemli bir jenerasyondur.",
    images: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/00_Mercedes-Benz_W213_Facelift_e300e.jpg", is_primary: true },
      { url: "https://upload.wikimedia.org/wikipedia/commons/5/50/MERCEDES-BENZ_E-CLASS_%28W211%29_China_%286%29.jpg", is_primary: false }    
    ]
  }
]
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

