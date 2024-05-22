var add_category=require('../adminmodel/add_category_model');
  

 exports.insert=async (req,res)=>{
    req.body.image =req.file.originalname;
    var data= await add_category.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
 } 
 exports.geta_data=async (req,res)=>{
    var data= await add_category.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
 } 
 