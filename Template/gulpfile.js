var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch',['sass'], function() {
   gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch']);

