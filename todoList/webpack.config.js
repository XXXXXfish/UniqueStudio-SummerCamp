const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  

module.exports = {  
    entry: './src/script.js',  
    output: {  
        filename: 'bundle.js',  
        path: path.resolve(__dirname, 'dist'),  
    },  
    module: {  
        rules: [  
            {  
                test: /\.css$/,  
                use: ['style-loader', 'css-loader'],  
            },  
        ],  
    },  
    plugins: [  
        new HtmlWebpackPlugin({  
            template: './index.html',  
        }),  
    ],  
    mode: 'development',  
};