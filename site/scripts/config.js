requirejs.config({
	baseUrl: 'scripts/lib',
	paths: {
		app: '../app'
	}
});

requirejs(['jquery.min', 'app/main']);