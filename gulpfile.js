var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minify = require("gulp-minify");
var imagemin = require("gulp-imagemin");
var compress = require("gulp-compress");
var cache = require("gulp-cache");


gulp.task("js", function(){
  gulp.src("js/*.js", )
     .pipe(concat("all.js"))
     .pipe(uglify())
     .pipe(gulp.dest("dist"));
});

gulp.task("js2", function(){
  gulp.src("view/*.js")
     .pipe(concat("all.js"))
     .pipe(uglify())
     .pipe(gulp.dest("dist"));
})
gulp.task("css", function(){
  gulp.src("css/*.css")
     .pipe(minify())
     .pipe(gulp.dest("dist"));
});
gulp.task("images", function(){
  gulp.src("img/*")
     .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
     .pipe(gulp.dest("dist/img"));
});

gulp.task("images2", function(){
 gulp.src("img/*")
     .pipe(cache(imagemin{ iptimi}))
})

gulp.task("default", ["js", "css", "images",]);
