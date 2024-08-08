const  express = require('express');
const  router = express.Router();

router.get('/add',(req,res) =>{
 res.send('Response from product add');
});
//getall
router.get('/getall',(req,res) =>{
    res.send('Response from product getall');
   });
//getbyid
router.get('/getbyid',(req,res) =>{
    res.send('Response from product getbyid');
   });
//update
router.get('/update',(req,res) =>{
    res.send('Response from product update');
   });
//delete
router.get('/delete',(req,res) =>{
    res.send('Response from product delete');
   });

module.exports = router;                                        