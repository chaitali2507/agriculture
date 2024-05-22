var view_product=require('../adminmodel/add_product_model');
  
 exports.geta_data=async (req,res)=>{
    var data= await view_product.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 
 exports.view_data = async (req,res) =>{
    var id=req.params.id;
    var data= await view_product.findById(id,req.body);
    res.status(200).json({
       status:"data view",
       data
    })
}
