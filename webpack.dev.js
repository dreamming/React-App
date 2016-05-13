/**
 * Created by dmz on 2016/3/7.
 */
var webpack = require('webpack');
var commonPlugs = new webpack.optimize.CommonsChunkPlugin("commonbuild.js");
module.exports = {
    // entry: { example:'./components/HelloWorld.jsx', product:'./components/FilterableProductTable.jsx', comment: './components/index.jsx' },
    entry :{ material:'./components/material.jsx'},
    output: {
        path: __dirname + "/public/",
        publicPath: "/public/",
        filename: "[name]build.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components)/, loader: "babel", query: { presets: ['react', 'es2015'] } },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.(jpg|png)$/, loader: "url?limit=8192" }
        ]
    },
    plugins: [commonPlugs]
};
