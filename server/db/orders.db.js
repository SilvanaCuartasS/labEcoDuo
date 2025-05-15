const supabase = require("../services/supabase.service");

const getAllOrdersByOrder = async () => {
    let { data: orders, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });

    if (error) {
        console.error("error fetching orders", error);
        return error;
    }
    return orders;
};

module.exports = {
    getAllOrdersByOrder,
};