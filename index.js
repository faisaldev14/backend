//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productrouter');

//initializing express
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use('/user',UserRouter );


//middleware
app.use('/product',ProductRouter);



//route or endpoint
app.get('/',(req,res) => {
    res.send('Response from express');
});

app.get('/add' , (req,res) => {
    res.send('Response from add');
});

//update
app.get('/update' , (req,res) => {
    res.send('Response from update');
});


//getall
app.get('/getall' , (req,res) => {
    res.send('Response from getall');
});


app.listen( port,() =>{ console.log('server started') } );