requirejs.config({
	baseUrl: 'scripts/lib',
	paths: {
		app: '../app',
		jquery: 'jquery.min'
	}
});

requirejs(['jquery', 'app/main']);