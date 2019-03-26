import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import flatten from 'gulp-flatten';

const path = {
  src: [
    'src/fonts/**/*.*',
    'src/fonts/*.md'
  ],
  build: 'build/fonts/'
};

gulp.task('fonts:woff', () => (
  gulp.src(path.src)
    .pipe(flatten())
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.build))
));

gulp.task('fonts:woff2', () => (
  gulp.src(path.src/* , { since : gulp.lastRun('fonts:woff2') } */)
    .pipe(flatten())
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.build))
));

gulp.task('fonts', gulp.parallel(
  'fonts:woff',
  // 'fonts:woff2'
));
