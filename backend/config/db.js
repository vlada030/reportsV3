const mongoose = require("mongoose");
// moze i ovde da se kreira try/catch u slucaju greske, ali bolje je u glavnom fajlu
// gde se poziva konekcija jer ce to ujedno da bude i globalni handler za Unhandled Rejection!
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        // ovo se ubacuje da nam nebi u konzoli izbacivalo upozorenja
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(
        `Connected to MongoDB successfuly at host: ${conn.connection.host}`
            .brightBlue
    );
};

module.exports = connectDB;
