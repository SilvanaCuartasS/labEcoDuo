const supabase = require("../services/supabase.service");

const getAllProductsInDb = async () => {
    
    let { data: products, error } = await supabase.from('products').select('*')

    if (error) {
    console.error("error fetching products",error);
    }
    return products;
};

const getProductsLowerPrice50 = async () => {
    let { data: products, error } = await supabase.from('products').select('*').lt('price', 50)
    
    if (error) {
    console.error("error fetching products",error);
    }
    return products;
};


module.exports = {
    getAllProductsInDb,
    getProductsLowerPrice50,
};