var gulp = require('gulp'),
sass = require('gulp-sass'),
csscomb = require('gulp-csscomb'),
autoprefixer = require('gulp-autoprefixer'),
gcmq = require('gulp-group-css-media-queries');
sourcemaps = require("gulp-sourcemaps");
babel = require("gulp-babel");
concat = require("gulp-concat");
var path = {
    watch: {  // за чем следить
        js: 'src/js/**/*.js',
        styles: 'src/scss/**/*.scss'
    },
    src: {  // что брать
        styles: 'src/scss/main.scss',
        js: 'src/js/app.js'
    },
    build: {  // куда складывать
        js: 'build/js/',
        styles: 'build/css/'
    }
};

gulp.task('styles', function() {
    return gulp.src(path.src.styles)
        .pipe(sass({outputStyle: 'expanded', indentType: 'tab', indentWidth: 1}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Safari >= 8'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(csscomb())
        .pipe(gulp.dest(path.build.styles));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/app.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('default', function() {
    gulp.watch(path.watch.styles, ['styles']);    
    gulp.watch(path.watch.js, ['scripts']);
});