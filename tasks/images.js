import gulp from 'gulp';
import flatten from 'gulp-flatten';

const path = {
  src: [
    'src/img/**/*.*',
    'src/blocks/**/img/*.*',
    '!src/img/icons/*.+(svg|png|ico)',
    '!src/img/**/*.md'
  ],
  build: 'build/img/'
};

gulp.task('images', () => (
  gulp.src(path.src)
    .pipe(flatten())
    .pipe(gulp.dest(path.build))
));
