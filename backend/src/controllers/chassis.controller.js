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

        if(!results){
            return res.status(404).json({
                success: false,
                message: "kasa bulunamadı"
            })
        }

        const relatedChassis = await Chassis.find({
            brand: results.brand,
            model: results.model,
            slug: {$ne: results.slug}
        }).select("code production slug generation")
        .sort({generation:1})

        res.status(200).json({
            success: true,
            data: results,
            related: relatedChassis
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