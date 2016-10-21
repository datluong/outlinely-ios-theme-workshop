var gulp = require('gulp');
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");

gulp.task('theme', function() {
  return gulp.src('./src/theme-thinkspace.mustache')
    .pipe(mustache({
        brand: "Golden",
        accentColor: "hsb(47,84,89)",
        hue: 47,
        caretColor: "hsb(37,88,100)",
    }))
    .pipe(rename({
        extname: ".xml",
        suffix: "-golden"
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('theme-ocean', function() {
  return gulp.src('./src/theme-thinkspace.mustache')
    .pipe(mustache({
        brand: "Ocean",
        accentColor: "hsb(188,91,80)",
        hue: 188,
        caretColor: "hsb(193,61,81)",
    }))
    .pipe(rename({
        extname: ".xml",
        suffix: "-ocean"
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('theme-darkdev', function() {
  return gulp.src('./src/theme-darkdev.mustache')
    .pipe(mustache({
        accentColor: "#63caf0",
        tintColor: "#1DB7F0"
    }))
    .pipe(rename({
        extname: ".xml",
    }))
    .pipe(gulp.dest('./dist'))
});



    /**
gulp.task('markdown', function() {
    return gulp.src('md/*.md')
                    .pipe(markdown())
                    .pipe(wrap("{{define \"outlinely_docs_article\"}}\n\n <%= contents %>\n\n{{end}}"))
                    .pipe(gulp.dest("templates/docs"));
});**/

gulp.task('default', ['theme', 'theme-ocean', 'theme-darkdev'], function() {
});
