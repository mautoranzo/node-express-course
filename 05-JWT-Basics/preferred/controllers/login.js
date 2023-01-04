const jwt = require('jsonwebtoken')

const login = async (req,res) => {
    const {username,password} = req.body
    if(!username || !password){
        throw new Error('Provide Username and password')
    }

    jwt.sign(
        {username: req.body.username},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_LIFETIME},
        (err,result)=>{
            if (err){
                res.status(500).json({msg:'Something went wrong'})
                console.log('jwt signing error',err);
                return
            }
            res.status(200).json({token:result})
        }
    )
}

const hello = (req,res) =>{
    res.status(200).json({
        msg:`Hello, ${req.user.username}`, 
    })
}

module.exports = {login, hello}