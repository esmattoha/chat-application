// Import External Dependencies
const env = require('dotenv');

// ENV configuration
env.config();

// Import internal Dependencies
const {app} = require('./app');


// PORT Listening
app.listen(process.env.PORT,()=>{
    console.log(`Server Running on ${process.env.PORT}`);
});