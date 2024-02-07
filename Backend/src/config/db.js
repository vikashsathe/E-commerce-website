const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://vikashsathe83:llR0dGvoWrHb8uOp@cluster0.szwowsy.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}