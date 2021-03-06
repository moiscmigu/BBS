let path = require('path')


module.exports = {
   
    entry:path.resolve('public/src/index.js'),
    devServer: 
    {
      historyApiFallback: true
    },
    output: {
        path:__dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /(node_modules)/,
            loader:'babel-loader',
            query:{
                presets: ['es2015', 'react']
            }
        }]
    },
   
    watch:true
};
