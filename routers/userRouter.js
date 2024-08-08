const  express = require('express');
const  router = express.Router();

router.post('/add',(req,res) =>{
    console.log(req.body);
    
 res.send('Response from user add');
});
//getall
router.get('/getall',(req,res) =>{
    res.send('Response from user getall');
   });
//getbyid //denotes url parameter
router.get('/getbyid/:id',(req,res) =>{
    console.log(req.params.id);
    
    res.send('Response from user getbyid');
   });
//update
router.get('/update',(req,res) =>{
    res.send('Response from user update');
   });
//delete
router.get('/delete',(req,res) =>{
    res.send('Response from user delete');
   });

module.exports = router;