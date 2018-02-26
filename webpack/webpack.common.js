var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
	//entry points are processed in the order in which they appear. Add any more js you need here
	//webpack keeps going through all polyfills until they are resolved, then moves on to vendor etc etc
	entry: {
		"polyfills": helpers.root("src") + "/polyfills.ts",
		"vendor": helpers.root("src") + "/vendor.ts",
		//main.css is the start of our angular codes
		"app": helpers.root("src") + "/main.ts",
		"css": helpers.root("src") + "/app.css"
	},

	resolve: {
		extensions: [".ts", ".js"]
	},

	//modules are the rules and the loaders we need for different files or markups
	module: {
		rules: [
			{
				test: /\.(html|php)$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: "url-loader?name=/assets/[name].[hash].[ext]"
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?minimize=true" })
			},
			{
				test: /\.ts$/,
				loaders: ["awesome-typescript-loader"]
			}
		]
	},


	//optimization is important to do in this order ('app', 'vendor'...)
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["app", "vendor", "polyfills"]
		}),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			Popper: ['popper.js', 'default']
		}),

		//we can inject this in the head or body
		//webpack makes the index.html file for us
		new HtmlWebpackPlugin({
			inject: "head",
			filename: helpers.root("public_html") + "/index.html",
			template: helpers.root("webpack") + "/index.html"
		})
	]
};
