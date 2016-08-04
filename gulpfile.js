'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    eslint = require('gulp-eslint'),
    hub = require('gulp-hub'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var production = false;
var config = new Config();
var karma = require('karma').server;
var browserify = require('browserify');
var _ = require('underscore');
var gutil = require('gulp-util');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var mkdirp = require('mkdirp');
 

var PATHS = {
    dest: './dist/',
    jsBuild: './dist/js',
    karmaConfig: path.resolve(__dirname, './karma.conf.js'),

    styles: {
        main: './src/scss/main.scss',
        all: './src/**/*.scss'
    },
    scriptsBuild: {
        libs: ['redux', 'react-dom', 'react-redux', 'underscore', 'bootstrap', 'react'],
        APP: './src/app/app.jsx'
    },
    scripts: {
        lib: './src/lib/**/*.js',
        APP: './src/app/**/*.jsx'
    }
};
var core = PATHS.scriptsBuild.libs;

gulp.task('clean', function(cb) {
    return del([
        path.join(PATHS.dest, '/*')
    ], cb);
});

gulp.task('assets:js', function() {
    var imagesStream;
    imagesStream = gulp.src(PATHS.jsAsseets).pipe(gulp.dest(path.join(PATHS.dest, '/core/js/')));
    return merge(imagesStream);
});

gulp.task('assets', function() {
    var imagesStream;
    imagesStream = gulp.src(PATHS.imageAsseets).pipe(gulp.dest(path.join(PATHS.dest, '/images/')));
    return merge(imagesStream);
});
gulp.task('test', function() {
    return karma.start({
        configFile: __dirname + '/karma.conf.js'
    });
});

gulp.task('styles', function() {
    var stream = gulp.src(PATHS.styles.main);

    if (!production) {
        stream = stream.pipe(plumber())
            .pipe(sourcemaps.init({
                loadMaps: true
            }));
    }
    stream = stream.pipe(sass())

    if (!production) {
        stream = stream.pipe(sourcemaps.write('./', {
            includeContent: true,
            sourceRoot: './'
        }));
    }
    return stream.pipe(gulp.dest(path.join(PATHS.dest, '/css/')));
});

/* creating tasks to build scripts.js */
// defining core scripts
defineScriptTask(gulp, {
    core: true,
    watch: true,
    bundleName: 'core',
    src: './src/lib/',
    dest: PATHS.jsBuild
});
// defining application scripts
defineScriptTask(gulp, {
    entries: ['./src/app/app.jsx'],
    extensions: ['.jsx'],
    debug: true,
    es6: true,
    watch: true,
    bundleName: 'app',
    src: './src/app/',
    dest: PATHS.jsBuild
});

gulp.task('scripts:all', ['scripts.core', 'scripts.app']);

gulp.task('build', function(cb) {
    return runSequence('clean', ['styles', 'scripts:all'], cb);
});



/*
/// for getting simple http server
var connect = require('gulp-connect');
gulp.task('static-connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('serve',['static-connect'])*/

gulp.task('default', ['build']);





function defineScriptTask(gulp, options) {
    var baseOptions = options;
    var bundler = _.memoize(function(bundlerOptions) {
        bundlerOptions = _.extend({
            debug: baseOptions.debug,
            entries: baseOptions.entries
        }, bundlerOptions);
        mkdirp.sync(bundlerOptions.dest);
        var defaults = {
            watch: false,
            debug: false
        };
        if (bundlerOptions.watch) {
            bundlerOptions = _.extend(defaults, bundlerOptions, watchify.args);
        }

        var b = browserify(bundlerOptions);
        if (baseOptions.es6) {
            b = b.transform('babelify', {
                presets: ['es2015', 'react']
            });
        }
        if (baseOptions.core) {
            core.forEach(function(module) {
                b.require(module);
            });
        } else {
            b = b.external(core);
        }
        if (bundlerOptions.watch) {
            b = watchify(b);
        }
        return b;
    });
    var bundle = function(options) {
        var stream = bundler(options);

        stream = stream.bundle();

        stream = stream.on('error', gutil.log.bind(gutil, gutil.colors.red.bold('x error ' + options.bundleName)))
            .pipe(source(options.bundleName + '.js'))
            .pipe(buffer());

        return stream.pipe(gulp.dest(options.dest))
            .on('end', options.message);
    };
    gulp.task('scripts.' + (baseOptions.core ? 'core' : 'app'), function() {
        bundle({
            debug: true,
            message: function() {
                gutil.log(gutil.colors.green.bold('☺ success on ' + baseOptions.bundleName + ':scripts'));
            },
            bundleName: baseOptions.bundleName,
            src: baseOptions.src,
            dest: baseOptions.dest,
            core: baseOptions.core
        });
    });
    if (baseOptions.watch) {

        gulp.task('scripts.' + (baseOptions.core ? 'core' : 'app') + ':watch', function() {
            var _options = {
                watch: true,
                debug: true,
                message: function() {
                    gutil.log(gutil.colors.green.bold(' ** watching ' + baseOptions.bundleName + ':scripts'));
                },
                bundleName: baseOptions.bundleName,
                src: baseOptions.src,
                dest: baseOptions.dest,
                core: baseOptions.core
            };
            bundle(_options);
            bundler(_options).on('update', function() {
                gutil.log(gutil.colors.green.bold(' >>> updating ' + baseOptions.bundleName + ':scripts'));
                bundle(_options);
            });
        });
    }
}