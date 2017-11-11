import gulp from 'gulp';
import { rollup } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import browserSync from 'browser-sync';
import wbBuild from 'workbox-build';
import sass from 'gulp-sass';
import babel from 'rollup-plugin-babel';


/**
 * SCRIPTS
 */
// Dev build
gulp.task('scripts:dev', () => buildScripts(false));

// Production build
gulp.task('scripts:prod', () => buildScripts(true));

// Build Scripts
function buildScripts (prod) {
  rollup({
    input: 'src/index.js',
    plugins: [
      babel({ 
        babelrc: false, 
        presets: ["es2015-rollup"],
        plugins: [
          ["transform-react-jsx", { pragma: "h" }]
        ],
        exclude: 'node_modules/**'
      }),
      commonjs(),
      resolve({ jsnext: true }),
      prod && uglify()
    ]
  }).then( bundle => {
    bundle.write({
      file: './static/js/app.js',
      format: 'iife',
      name: 'app.js',
      sourcemap: false
    });
  })
}


/**
 * STYLES
 */
// Dev build
gulp.task('styles:dev', () => buildStyles(false));

// Production build
gulp.task('styles:prod', () => buildStyles(true));

// Build Styles
function buildStyles (prod) {
  return gulp.src('./src/styles/app.scss')
    .pipe(sass({outputStyle: prod && 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
}

/**
 * BUILDS
 */
// dev builds
gulp.task('dev', ['scripts:dev','styles:dev']);

// production builds
gulp.task('prod', ['scripts:prod','styles:prod']);


// serve and watch
gulp.task('serve', ['dev'], function() {
  browserSync.init({ 
    server: 'static', 
    port: 8002 
  });
  gulp.watch('./src/**/*.js', ['scripts:dev']);
  gulp.watch('./src/styles/**/*.scss', ['styles:dev']);
  gulp.watch('./static/**/*').on('change', browserSync.reload);
});


// Generate service worker
gulp.task('bundle-sw', () => {
  return wbBuild.generateSW({
    globDirectory: './dist/',
    swDest: './dist/sw.js',
    globPatterns: ['**\/*.{js,css,json,ico,png,html,jpg,svg}']
    }).then(() => {
      console.log('Service worker generated.');
    }).catch((err) => {
      console.log('[ERROR] This happened: ' + err);
    });
})


// Copy static files to dist folder
gulp.task('copy', function(){
  gulp.src([
    'static/**/*'
  ]).pipe(gulp.dest('dist'))
});


// default
gulp.task('default', ['prod']);

