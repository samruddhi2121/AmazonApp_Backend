// creates some routes which can receive the incoming request

const exp=require('express');
const router=exp.Router();

const controller=require('../Controllers/index2');

router.get('/amazon',controller.getAlldata);
router.get('/amazon/:id',controller.getDataById);
// router.get('/getamazon/:name',controller.getDataByName);
router.get('/getDataByType/:type',controller.getDataByType);

module.exports=router;

