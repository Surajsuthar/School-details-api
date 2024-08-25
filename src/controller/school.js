const {schoolValidater,usersValidater} = require("../utils/validate")
const connection = require("../utils/db")
const measure = require("../utils/distance")

exports.addSchool = async (req, res) => {
    const {success} = schoolValidater.safeParse(req.body)
    if(!success){
        return res.status(400).json({
            message:"Invalid inputs"
        })
    }
    const {name, address, latitude, longitude } = req.body
    const addQuery = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`
    connection.query(addQuery,[name,address,latitude,longitude],(err,result) => {
        if(err){
            console.log('Error adding school:', err);
            res.status(500).send('Error adding school');
            return;
        }else{
            res.status(201).json({
                message:"Add school details"
            });
        }
    })
}

exports.getSchool = async (req,res) => {
    const {success} = usersValidater.safeParse(req.body)
    if(!success){
        return res.status(400).json({
            message:"Invalid inputs"
        })
    }
    const {latitude,longitude} = req.body;
    const getSchool = `SELECT * FROM schools`

    connection.query(getSchool,(err,result)=>{
        if(err){
            console.log('Error adding school:', err);
            res.status(500).send('Error adding school');
            return;
        }else{
            const distance = result.map((details) => ({
                name :details.name,
                address : details.address,
                distance : measure(latitude,longitude,details.latitude,details.longitude).toFixed(2)
            }))
            distance.sort((a, b) => a.distance - b.distance)
            res.status(201).json(distance)
        }
    })
}
