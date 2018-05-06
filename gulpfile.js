// gulp file is the automation of the app
const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts');
const styles = require('./styles');

var devMode = false; // to determine whether running the app in demo mode or in production mode

gulp.task('css', function(){ // handle task to compile css
  gulp.src(styles)
    .pipe(concat('main.css')) // output css file name
    .pipe(gulp.dest('./dist/css')) // where to put the gernated css file
    .pipe(browserSync.reload({
      stream: true
    })); 
});

gulp.task('js', function(){ // handle task to compile js code
  gulp.src(scripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', function(){ // handle task to compile html
  gulp.src('./src/template/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// combine all tasks together and run at ONE time !!!
gulp.task('build', function(){
  gulp.start(['css', 'js', 'html']);
});

gulp.task('browser-sync', function(){
  browserSync.init(null, {
    open: false,
    server: { // start with the server and find base directory  
      baseDir: 'dist'
    }
  });
});

gulp.task('start', function(){
  devMode = true;
  gulp.start(['build', 'browser-sync']); // start compile all the files and run the app 
  gulp.watch(['./src/css/**/*.css'], ['css']); // watch this directory for changes
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/html/**/*.html'], ['html']);
});