// a middleware to verify the json token recived during the requests and if correct let them access 
// else show them unauthorized 
// const jwt = require("jsonwebtoken");

const config = process.env;

// const verifyToken = (req, res, next) => {
//   console.log("middleware is called !!!! ")
//   const token =req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).send("Invalid Token"); 
//   }

// };


const jwt = require("jsonwebtoken");


const verifyToken = async (req,res,next)=>{
    const requestTokenHeader = req.header("Authorization");
    console.log(requestTokenHeader + " request token header")
    //Checking For Availability of Token
    if(!requestTokenHeader) return res.status(401).json({message : "Not Authorization Token Found"});
    //Checking For Formatting Of Token .
    if(!requestTokenHeader.startsWith("Bearer ")) return res.status(401).json({message : "Token does not start with proper format"});
    try{
        //Extracting Actual Token
        const token = requestTokenHeader.substring(7);
        console.log(token + "  this is token")
        //verifying Details
        console.log(config.TOKEN_KEY)
        const jwtDetails = await jwt.verify(token , config.TOKEN_KEY);
        // req.user = await userModel.findOne({
        //     username : jwtDetails.sub
        // });
        console.log(jwtDetails); 
        req.user = jwtDetails;  
        next();
    }catch (e) {
        console.log(e);
        res.status(400).json({message : "Invalid Token"});
    }
}


module.exports = verifyToken;

/*

module.exports = verifyToken;
*/