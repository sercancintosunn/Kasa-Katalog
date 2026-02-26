const mongoose = require('mongoose')

const schema = mongoose.Schema({
    code:{
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    brand:{
        type: String,
        required: true,
        index: true
    },
    model:{
        type: String,
        required: true,
        index: true
    },
    generation:{
        type: Number
    },
    production:{
        start:{type: Number},
        end: {type: Number}
    },
    body_styles: [{
        type: {type:String, enum: ["sedan","coupe","cabrio","wagon","hatchback","suv","van"]},
        doors: Number,
        sub_code: String
    }],
    engines: [{
        engine_code: String,
        power_hp: Number,
        fuel_type: {type:String, enum:["benzin","dizel","lpg","hibrit","elektrik"]}
    }],
    description:{
        type: String
    },
    status:{
        type: String,
        enum: ['draft',"published"],
        default: "published"
    },
    images: [{
        url: String,
        is_primary: Boolean
    }]
},{
    timestamps: true})

module.exports = mongoose.model('ChassisCode',schema)

