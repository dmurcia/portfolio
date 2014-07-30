requirejs.config({
	baseUrl: 'scripts/lib',
	paths: {
		app: '../app',
		jquery: 'jquery.min',
		scrollSections: 'jquery.scrollSections-0.4.3.min'
	},
	shim: {
		'scrollSections': { deps: ['jquery'], exports: 'scrollSections' }
	}
});

requirejs(['jquery', 'app/main']);