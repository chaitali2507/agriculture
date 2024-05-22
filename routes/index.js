var express = require('express');
var router = express.Router();
var multer=require('multer');
var admin_login=require('../admincontroller/admin_login_controller');
var add_category=require('../admincontroller/add_category_controller');
var add_product=require('../admincontroller/add_product_controller');
var order_status=require('../admincontroller/order_controller')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

/* GET home page. */
router.post('/admin_insert', admin_login.insert);
router.get('/admin_select', admin_login.geta_data);
router.post('/login', admin_login.login);
router.get('/logout', admin_login.logout);

//add category
router.post('/insert_category',upload.single('image'),add_category.insert);
router.get('/category', add_category.geta_data);

//add product
router.post('/insert_product',upload.single('image'),add_product.insert);
router.get('/product', add_product.geta_data);
router.get('/search_product/:p_name', add_product.search_data);

router.get('/view_order/:order', order_status.search_data);
module.exports = router;
