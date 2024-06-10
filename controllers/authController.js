const joi=require("joi")
const loginSchema=joi.object().keys({
    userName:joi.string().required(),
    password:joi.number().required(),
    email:joi.string().email().required()
});
const resetPasswordSchema=joi.object().keys({
    
    // createPassword:joi.number().min(3).max(9).required(),
    createPassword:joi.number().required(),

    confirmPassword:joi.number().required()
});

module.exports={
    
        
    
    login:async(req,res)=>{
        try{
        const validate=await loginSchema.validateAsync(req.query)
    return res.send({
        message:"login api",
        data:validate
    })}catch(eror){
        return res.send({
           message:eror.message,
        })
    }
    },
    
    logout:(req,res)=>{
        return res.send({
            message:"logout api",
            data:req.query,
        })
        },
        resetPassword:async(req,res)=>{
            try{
            const validate=await resetPasswordSchema.validateAsync(req.query)
            return res.send({
                message:"resetPassword api",
                data:validate
            })}
            catch(eror){
            return res.send({
             message:eror.message,
            })
            }
            }
}