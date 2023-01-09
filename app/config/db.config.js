// mongodb+srv://goliva:<password>@cluster0.whmgnzj.mongodb.net/?retryWrites=true&w=majority
require('dotenv').config()
const mongo = JSON.parse(process.env.MONGO)

module.exports = {
    USER: mongo.user,
    PWD: mongo.pwd,
    HOST: mongo.cluster,
    DB: mongo.db_name
};