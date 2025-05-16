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

const getProductsFilterPrice30 = async () => {
    let { data: products, error } = await supabase.from('products').select('*').gt('price', 30).eq('category', 'Electronics')
    
    if (error) {
    console.error("error fetching products",error);
    }
    return products;
};

const getAllProductsLimit = async () => {
    let { data: products, error } = await supabase
    .from('products')
    .select('*')
    .range(0, 10)

    if (error) {
    console.error("error fetching products",error);
    }
    return products;
};

const getAllProductsByUser = async (userId) => {
 let { data: products, error } = await supabase.from('products').select('*, users(username)').eq("user_id", userId)
 if (error) {
   console.error("error fetching products", error);
   return error;
 }
  return products;
};


module.exports = {
    getAllProductsInDb,
    getProductsLowerPrice50,
    getProductsFilterPrice30,
    getAllProductsLimit,
    getAllProductsByUser,
};