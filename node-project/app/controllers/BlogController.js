
const AbstractController = require('./AbstractController');
const BlogLib= require('../libraries/BlogLib');


class BlogController extends AbstractController {

    constructor(){

        super();

        this.posts = [{

            id : 1,
            title: 'title-1',
            body: 'body-2',
        },
        {
            id: 2,
            title: 'title-3',
            body: 'body-4',

        }];
    }

    initRouter(){

       //GET /posts
       //GET /posts/:postNumber
        
       this.router.get('/posts', (request,response) => this.listPosts(request,response));
       this.router.get('/posts/:postId', (request,response,next) => this.retrievePost(request,response,next));


    }

    async listPosts(request,response){

        const posts= await BlogLib.getPosts(); //library invocation 

        response.json(this.posts);
    }

    retrievePost(request,response,next){

        const {postId} =request.params;
        const post = this.posts.find(post => post.id === parseInt(postId));
        
        //Post check
        if(!post){
            const error = new Error('Post not found');

            console.error(error);

            next(error);
        }

        response.json(post);


    }



}

module.exports = BlogController;