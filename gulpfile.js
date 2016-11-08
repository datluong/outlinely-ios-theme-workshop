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
        tintColor: "#1DA9F0"
    }))
    .pipe(rename({
        extname: ".xml"
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('theme-maestro', function() {
  return gulp.src('./src/theme-maestro.mustache')
    .pipe(mustache({
        brand: "",
        accentColor: "hsb(45,80,84)",
        tintColor: "hsb(45,80,84)",
        hue: "45",
        sat: "80",
        lowsat: "60",
        satp8: "88",
        bright: "84",
        lowbright: "40",
        brights8: "76"
    }))
    .pipe(rename({
        extname: ".xml"
    }))
    .pipe(gulp.dest('./dist'))
});


gulp.task('theme-maestrox', function() {
  return gulp.src('./src/theme-maestro.mustache')
    .pipe(mustache({
        brand: " X",
        accentColor: "hsb({{hue}},80,84)",
        tintColor: "hsb({{hue}},80,84)",
        hue: "{{hue}}",
        sat: "80",
        lowsat: "60",
        satp8: "88",
        bright: "84",
        lowbright: "40",
        brights8: "76"
    }))
    .pipe(rename({
        extname: ".xml",
        suffix: "-x"
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['theme', 'theme-ocean', 'theme-darkdev', 'theme-maestro', 'theme-maestrox'], function() {
});

