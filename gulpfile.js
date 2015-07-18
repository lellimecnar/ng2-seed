var gulp = require('gulp'),
	path = require('path'),
	$ = require('gulp-load-plugins')(),
	nib = require('nib'),

	src = './src/',
	dest = './pub/',

	paths = {
		ts: [
			path.join(src, '**/*.ts')
		],
		styl: [
			path.join(src, '*.styl')
		],
		views: [
			path.join(src, '**/*.html')
		]
	};

gulp.task('build:js', function() {
	gulp.src(paths.ts)
		.pipe($.typescript({
			target: 'es5',
			module: 'system',
			declarationFiles: false,
			noImplicitAny: false,
			noExternalResolve: true,
			isolatedCompilation: true,
			removeComments: true,
			noLib: false,
			emitDecoratorMetadata: true,
			sourceMap: true,
			typescript: require('typescript')
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('build:html', function() {
	gulp.src(paths.views)
		.pipe(gulp.dest(dest));
});

gulp.task('build:css', function() {
	gulp.src(paths.styl)
		.pipe($.stylus({
			'include css': true,
			use: require('nib')(),
			include: [
				'./node_modules/normalize-styl'
			],
			import: [
				'nib',
				'normalize',
				'components/**/*.styl'
			]
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('build', ['build:js', 'build:html', 'build:css']);
