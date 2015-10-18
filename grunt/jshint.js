module.exports = {
	options: {
		curly: true,
		eqeqeq: true,
		immed: true,
		latedef: true,
		newcap: true,
		noarg: true,
		sub: true,
		undef: true,
		boss: true,
		eqnull: true,
		browser: true,
		globals: {
			jQuery: true,
			exports: true,
			module: false
		}
	},
	all: [
		'js/src/**/*.js',
		'js/test/**/*.js'
	]
}
