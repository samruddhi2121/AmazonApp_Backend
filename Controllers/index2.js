// const amazon_List= require("../Models/Data.json");
const amazon_List= require("../Models/Products");

// exports.getAlldata =(req,res)=>{
//     // res.status(200).json({list:amazon_List});
//     res.status(200).json(amazon_List);

// }



exports.getAlldata = (req, res) => {
    // Query the database to fetch all type
    amazon_List.find()
        .then((amazon_List) => {
            // console.log("amazondata--->>>>",amazon_List)
            // Check if courses are found and return them
            if (amazon_List && amazon_List.length > 0) {
                res.status(200).json(amazon_List);  // Send the amazondata data in the response
            } else {
                res.status(404).json({ message: 'No product found' });
            }
        })
        .catch((error) => {
            console.error('Error fetching product:', error);
            res.status(500).json({ message: 'Error fetching product', error: error.message });
        });
};

// exports.getDataById=(req,res)=>{
//     const amazonId = req.params.id;
//     const amazondata = amazon_List.find(value => value.id == amazonId);
//                                             //arrow operator not fun

//     if(amazondata){
//         res.status(200).json(amazondata);
//     }else{
//         res.status(404).json({
//             message:'Plese provide valid  Id'
//         });
//     }
// }


exports.getDataById = async (req, res) => {
    const amazonId = req.params.id;

    try {
        // const amazondata = await amazon_List.findById(courseId);
        const amazondata = await amazon_List.findOne({ id: parseInt(amazonId) });;
        if (amazondata) {
            res.status(200).json(amazondata);
        } else {
            res.status(404).json({
                message: "Plese provide valid  Id"
            });
        }
    } catch (error) {
        console.error('Error fetching amazondata by ID:', error);
        res.status(500).json({
            message: 'Error fetching amazondata by ID',
            error: error.message
        });
    }
};



// exports.getDataByType=(req,res)=>{
//     const type=req.params.type;

//     // const filtereddata=amazon_List.filter(prod=> prod.type==type);
//     const filtereddata=amazon_List.filter(prod=> prod.type.toLowerCase()===type.toLowerCase());

//     if(filtereddata.length >0){
//         res.status(200).json({amazon_List:filtereddata});
//     }else{
//         res.status(404).json({
//             message:"No products found for this type"
//         });
//     }
// }



exports.getDataByType = (req, res) => {
    const type = req.params.type;

    
    // Query the database for courses that match the type
    amazon_List.find({ type: { $regex: type, $options: 'i' } })  // This uses case-insensitive regex to match type
        .then((filtereddata) => {
           

            if (filtereddata.length > 0) {
                res.status(200).json({ amazon_List: filtereddata });
            } else {
                res.status(404).json({
                    message: "No products found for this type"
                });
            }
        })
        .catch((error) => {
            console.error('Error product by type:', error);
            res.status(500).json({
                message: 'Error fetching product',
                error: error.message
            });
        });
};