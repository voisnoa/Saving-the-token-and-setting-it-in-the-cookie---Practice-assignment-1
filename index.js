const {encrypt , decrypt} = require("./script")

const payload = { userID : 100 , username:  "cooldude"}

const token = encrypt(payload)

const decryptedData = decrypt(token)

if (decryptedData && decryptedData.userID === 100){
    console.log("Success")
}else{
    console.log("Failed")
}