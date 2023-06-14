const { default: mongoose } = require("mongoose");

async function connectDB (url) {
    mongoose.connect(`${url}/users-db`)
}

module.exports = {connectDB}