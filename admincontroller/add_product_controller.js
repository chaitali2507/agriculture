var add_product=require('../adminmodel/add_product_model');
  

 exports.insert=async (req,res)=>{
    req.body.image =req.file.originalname;
    var data= await add_product.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
 } 
 exports.geta_data=async (req,res)=>{
    var data= await add_product.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 
 exports.search_data=async (req,res)=>{
    var p_name=req.params.p_name;
    
    var data= await add_product.find({"p_name":req.body.p_name});

    res.status(200).json({
        status:"data select",
        data
    })
 } 