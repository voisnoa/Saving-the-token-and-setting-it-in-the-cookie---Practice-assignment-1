const jwt = require("jsonwebtoken")

const SECRET_KEY = 'marvan';

const encrypt = (payload) => {
  // encrypt the payload and return token
try { 
  
  const token  = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
  console.log('Encrypted Token:', token); 
  return token;
}
  catch(err){
    console.error("Encryption failed :" , error)
}
}
const decrypt = (token) => {
  // return decoded payload
  try { 
    const decoded = jwt.verify(token , SECRET_KEY);
    console.log("Decrypted payload:", decoded)
    return decoded;
  }catch(err){
    console.error("Decryption failed:", err)
    return null
  }
}

module.exports = {
  encrypt,
  decrypt
}
