const PatientData = require('../models/patient')
exports.GetPatientLogin = async(req,res)=>{
    console.log(req);
    const p_data = await PatientData.find({})
    console.log('patient login',p_data)
    res.send(p_data)
}
exports.PostPatientLogin = async(req,res)=>{
    const {email ,password } =req.body
    const p_data = await PatientData.findOne({email:email }).exec()
    if(!p_data){
        return res.status(400).json({ data: 'Email not found' });
    }
    
    console.log('patient login',p_data._doc)
    res.send(p_data)
}