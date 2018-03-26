var webpack = require('webpack');
var path = require('path');

// directing compiled code to 'compiled' folder
var BUILD_DIR = path.resolve(__dirname, './compiled/');

//source directory = src
var APP_DIR = path.resolve(__dirname, './src/');

var config = {
    //entry point to my app
    entry: APP_DIR + '/App.jsx',     
    output: {
        path: BUILD_DIR,
        // creating a file bundle.js inside 'compiled' folder for compiled code 
        filename: 'bundle.js'       
    },
    // used for mapping compiled code to source code when error happens
    devtool: 'eval-source-map',
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        rules: [
            {
                //compile jsx files to es5 using babel loader
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    sourceMap: true
                  }
            }
        ]
    }
};
module.exports = config;