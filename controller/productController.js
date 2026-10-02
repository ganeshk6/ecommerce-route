const productService = require('../services/productService');
const {errorResonse, sendResponse} = require('../utils/response')

const getAllProducts = (req, res) => {
    try{
        const result = productService.getAllProducts();
        if (!result || result.length === 0) {
            let err = new Error("No products found");
            err.statusCode = 404;
            
            throw err;
        }
        return sendResponse(res, result, 200);
    }catch(err){
        errorResonse(res, err);
    }
}

const getProductById = (req, res) => {
    try{
        const result = productService.getProductById(req.params.id);
        if(!result){
            let err = new Error("Product not found");
            err.statusCode = 404;
            throw err;
        }
        return sendResponse(res, result, 200);
    }catch(err){
        errorResonse(res, err);
    }
}

const addProduct = (req, res) => {
    try{
        const result = productService.addProduct(req.body);
        return sendResponse(res, result, 201);
    }catch(err){
        errorResonse(res, err);
    }
}

module.exports = {
    getProductById,
    getAllProducts,
    addProduct
}