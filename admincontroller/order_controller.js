var order_status=require('../usermodel/add_cart_model');


exports.search_data=async (req,res)=>{
    var order=req.params.order;
    
    var data= await order_status.find({"order":order});

    res.status(200).json({
        status:"view order",
        data
    })
 } 


