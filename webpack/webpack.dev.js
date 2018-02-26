/*
This is our debugger
We are building a small web server on our localhost

 */

var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");
var targetUrl = require("./target.js");

module.exports = webpackMerge(commonConfig, {
	devtool: "cheap-module-eval-source-map",

	output: {
		path: helpers.root("public_html"),
		publicPath: "http://localhost:7272",
		filename: "[name].js",
		chunkFilename: "[id].chunk.js"
	},

	plugins: [
		new ExtractTextPlugin("[name].css")
	],

	devServer: {
		contentBase: helpers.root("public_html"),
		historyApiFallback: true,
		stats: "minimal",
		proxy: {
			//targetURL goes all the way to the webpack.common file to get our url. We are using a proxy here because webpack does not support php code
			"/api": {
				target: targetUrl(),
				secure: false
			}
		}
	}
});