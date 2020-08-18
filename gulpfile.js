var {src, dest, watch, series}        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');


// Static server
function bs() {
  serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);

};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/style.scss")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};


function buildCSS(done) {
  src("css/**/*.css").pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest("play/css/"));
  done();
}

function buildJS(done) {
  src(["js/**/*.js", "!js/**/*.min.js"])
    .pipe(minify({
      ext:{
        min:'.js'
      }
    }))
  .pipe(dest("play/js/"));

  src("js/**/*.min.js").pipe(dest("play/js/"));
  done();
}

function html(done) {
  src("*.html").pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("play/"))
  done();
}

function phps(done) {
  src("*.php")
    .pipe(dest("play/"));
  src("phpmailer/**/**")
  .pipe(dest("play/phpmailer"));
  done();
}

function fonts(done) {
  src("fonts/**/**")
  .pipe(dest("play/fonts/"));
  done();
}

function tinypngL(done) {
  src("img/**/**")
  .pipe(tinypng({
    key: '7fp3ZGtHDZ7N3yb0hj2tXlyThL4N69WZ',
    // sigFile: 'images/.tinypng-sigs',
    // log: true
}))
.pipe(dest("play/img/"));
  src("img/**/*.svg")
  .pipe(dest("play/img/"));
  done();
}




exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, phps, fonts, tinypngL);