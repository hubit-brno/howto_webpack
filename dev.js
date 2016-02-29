var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var bundler = webpack({
	debug: true,
	devtool: 'source-map',
	entry: [
		'./src/index.es6',
		'webpack-hot-middleware/client'
	],
	output: {
		filename: 'bundle.js',
		publicPath: '',
		path: __dirname + '/dist'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.es6$/,
				include: __dirname + '/src',
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
});

browserSync({
	server: {
		baseDir: 'src',
		middleware: [
			webpackDevMiddleware(bundler),
			webpackHotMiddleware(bundler)
		]
	},
	files: [
		'src/*.html'
	]
});
