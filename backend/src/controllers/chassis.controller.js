const Chassis = require('../models/ChassisCode')

const get_all = async (req,res) =>{
    try{

        
        const {q, brand, fuel,body} = req.query
        const filter = {}


        if(q){
            filter.$or = [
                {code: new RegExp(q,'i')},
                {brand: new RegExp(q,'i')},
                {model: new RegExp(q,'i')}
            ]
        }
        if(brand) filter.brand = new RegExp(brand,'i')
        if(fuel) filter['variants.fuel_type'] = new RegExp(fuel,'i')
        if(body) filter['body_styles.type'] = new RegExp(body,'i')
 
        const results = await Chassis.find(filter)
        .select('code slug brand model production images body_styles variants')
        .lean()
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