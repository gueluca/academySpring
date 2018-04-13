
const axios = require('axios'); //axios gestisce richieste http

class BlogLibrary {

    constructor(){

        this.baseUrl ='https://jsonplaceholder.typicode.com';


    }

    async getPosts(){

        const posts=axios.get(this.baseUrl + '/posts');

        return posts;

    }

    async retrivePost(request,response,next){


        const {postId} = request.param;

        const post = await BlogLibrary.getPosts();

        //post check
        if(!post){
            const error = new Error('Post not found');
            
            console.error(error);

            next(error);

            return ;
        }

    
    }


}

module.exports = new BlogLibrary();