const supabase = require("../services/supabase.service");

const getAllPosts = async () => {
    let { data: posts, error } = await supabase.from('posts').select('*').like('title', '%Tutorial%')

    if (error) {
        console.error("error fetching posts", error);
        return error;
    }
    return posts;
};

module.exports = {
    getAllPosts,
};