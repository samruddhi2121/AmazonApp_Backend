const amazon_List= require("../Models/Data.json");

exports.getAlldata =(req,res)=>{
    // res.status(200).json({list:amazon_List});
    res.status(200).json(amazon_List);

}

exports.getDataById=(req,res)=>{
    const amazonId = req.params.id;
    const amazondata = amazon_List.find(value => value.id == amazonId);
                                            //arrow operator not fun

    if(amazondata){
        res.status(200).json(amazondata);
    }else{
        res.status(404).json({
            message:'Plese provide valid  Id'
        });
    }
}


exports.getDataByType=(req,res)=>{
    const type=req.params.type;

    // const filtereddata=amazon_List.filter(prod=> prod.type==type);
    const filtereddata=amazon_List.filter(prod=> prod.type.toLowerCase()===type.toLowerCase());

    if(filtereddata.length >0){
        res.status(200).json({amazon_List:filtereddata});
    }else{
        res.status(404).json({
            message:"No products found for this type"
        });
    }
}