var express = require('express');
var router = express.Router();
var multer=require('multer');
var user_reg=require('../usercontroller/user_register_controller');
var user_login=require('../usercontroller/user_login_controller');
var view_product=require('../usercontroller/user_view_product_controller');
var place_order=require('../usercontroller/place_order_controller');
var add_cart=require('../usercontroller/add_cart_controller')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
/* GET users listing. */

//user register
router.post('/insert_user',upload.single('image'),user_reg.insert);
router.get('/user', user_reg.geta_data);

//user login
router.post('/userlogin_insert', user_login.insert);
router.get('/userlogin_select', user_login.geta_data);
router.post('/login', user_login.login);
router.get('/logout', user_login.logout);

//view product
router.get('/viewproduct', view_product.geta_data);
router.get('/viewproduct/:id',view_product.view_data);

//place order
router.post('/insert_placeorder',place_order.insert);
router.get('/placeorder', place_order.geta_data);

//add cart
router.get('/insert_add_cart/:p_id',add_cart.insert);
router.get('/get_cart', add_cart.geta_data);
module.exports = router;
