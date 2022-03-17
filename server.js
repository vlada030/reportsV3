const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

//import custom error handlera
const errorHandler = require('./backend/middleware/errorHandler');

// import MONGO konekcije 
const connectDB = require('./backend/config/db');

// ENV fajl nije u root folderu zato mora da se navede putanja
dotenv.config({
    path: "./config.env"
});

// import routa
const reportsRoute = require('./backend/routes/reportsRoute');
const productsRoute = require('./backend/routes/productsRoute');
const authRoute = require('./backend/routes/authRoute');
const usersRoute = require('./backend/routes/usersRoute');

// pozivanje konekcije nakon .env, a pre app
connectDB();

// kreiranje aplikacije
const app = express();

// pozivanje defaultnog body parsera za dobijanje req.body
// ako je req.body u vidu objects ili arrays
app.use(express.urlencoded({extended: false}));
// ako je req.body JSON format
app.use(express.json());

// pozivanje cookie parsera da bi u cookie mogao sa se ubaci token
app.use(cookieParser());

// pozivanje morgan loggera
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mongo sanitize - No-SQL injection
app.use(mongoSanitize());

// dodatno setovanje security headera
app.use(helmet());

// prevencija XSS - input sadrzi script tag ili html koji se kasnije prilikom prikazivanja moze ucitati u stranu, pre routa se poziva
// BLOKIRA SORT U ADVANCED RESULTS tj znak '<'
app.use(xss());
 

// ukoliko se pokrece test ogranici vrednost na 500 jer ima preko 200 testa
let limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
   
//  apply to all requests
app.use(limiter);

// spreci HPP (http parameter polution)
app.use(hpp());

// CORS
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// pravljenje static foldera
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend','build')));
}

// postavljanje routa
app.use('/api/v1/reports', reportsRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);

// pozivanje custom errorHandlera koji se inicijalizira preko next iz controllera
app.use(errorHandler);

// preumeravanje na react router u production modu tj build folder i index.html koji dalje preuzima handling
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
} else {
    app.get('*', (req,res) => {
     // console.log('DEVELOPMENT');
        res.status(404).json({success: false, message: 'Unknown URL'});
    });
}

const PORT = process.env.PORT || 443;
const server = app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightYellow));

// ovde prenosimo resavanje mongodb greske
// pogresna sifra - promise tj node vraca gresku unhandled rejection
// u slucaju da ne mozemo da ostvarimo konekciju,
// ugasi server i izadji iz node aplikacije (process) sa greskom   
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});