const supabase = require("../services/supabase.service");

const getAllUsers = async () => {
 let { data: users, error } = await supabase.from('users').select('username, email')
 if (error) {
   console.error("error fetching users", error);
   return error;
 }
  return users;
};



module.exports = {
  getAllUsers,
};