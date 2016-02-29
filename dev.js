var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var bundler = webpack({
	debug: true,
	devtool: 'source-map',
	entry: [
		'./src/index.es6'
	],
	output: {
		filename: 'bundle.js',
		publicPath: '',
		path: __dirname + '/dist'
	},
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
			webpackDevMiddleware(bundler)
		]
	},
	files: [
		'src/*.html'
	]
});
