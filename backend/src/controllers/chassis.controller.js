const Chassis = require('../models/ChassisCode')

const get_all = async (req,res) =>{
    try{
        const results = await Chassis.find();
        res.status(200).json({
            success: true,
            count: results.length,
            data: results
        })

    }catch(err){
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}


const getBySlug = async (req,res) =>{
    try {
        const slug = req.params.slug
        const results = await Chassis.findOne({slug: slug})
        res.status(200).json({
            success: true,
            data: results
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}

module.exports = {
    get_all,
    getBySlug
}