
const http = require('http');
const express = require('express');
const morgan= require('morgan');
const bodyParser= require('body-parser');
const path= require('path');
const fs= require('fs');

class BlogApp {


    constructor() {

        this.initServer();
        this.initMiddlewares();
        this.initRoutes();
        
    }

    initServer() {

        this.app=express();
        this.server=http.Server(this.app);

        this.server.on('error',(error) => {
            console.error('Server error');
            console.log('error');
        })

        console.log('Server initialised');
    }

    initMiddlewares() {

        this.app.use(morgan('dev'));  //logging

        this.app.use(bodyParser.json()); //payload
        this.app.use(bodyParser.urlencoded({ entented : true }));  //payload

        console.log('Middleware initalised');
    }

    initRoutes(){

        const controllersDir= path.join(__dirname,'controllers');

        fs.readdirSync(controllersDir)
        .filter(filename => filename.substr(-3) ==='.js' && filename !== 'AbstractController.js')
        .forEach((filename) => {
            const controllerFile = path.join(controllersDir,filename);
            const Controller =require(controllerFile);

            const controller = new Controller();
            this.app.use('/',controller.router);     //to be defined
        });
    
        console.log('Routes initialised');
    }

    async listen(){

        await new Promise((resolve,reject) => {

            this.server.listen(3000, (error) => {

                if(error) { reject(error);}
                else { resolve();}
            });
        });

        
    }

}

module.exports = BlogApp;