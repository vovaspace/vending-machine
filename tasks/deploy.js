import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';


const path = {
  build: 'build/**/*.*'
};

gulp.task('deploy:push', () => (
  gulp.src(path.build)
    .pipe(ghPages())
));

gulp.task('deploy', gulp.series(
  'build',
  'deploy:push'
));
