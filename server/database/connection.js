const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            UseUnifiedTopology: true,
            // UseFindAndModify: false,
            // UseCreateIndex: true
        })

        console.log(`MongoDB connected success:${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB