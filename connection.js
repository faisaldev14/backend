const mongoose = require('mongoose');
const url = "mongodb+srv://mdfaisal140604:mdfaisal1406043686@cluster0.xhf0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


//connect to the database

//asynchronus - reutrns a promise
mongoose.connect(url)
.then((result) => {
    console.log("connected to database");
    
})
.catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;