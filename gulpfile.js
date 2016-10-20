var gulp = require('gulp');
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");

gulp.task('theme', function() {
  return gulp.src('./src/theme-thinkspace.mustache')
    .pipe(mustache({
        brand: "Golden",
    }))
    .pipe(rename({
        extname: ".xml",
        suffix: "-golden"
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

gulp.task('default', ['theme'], function() {
});

