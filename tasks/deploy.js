import gulp from 'gulp';
import ghpages from 'gulp-gh-pages';

gulp.task('deploy:push', () => (
  gulp.src(['build/**/*', '!build/robots.txt'])
    .pipe(ghpages({ branch: 'build' }))
));

gulp.task('deploy', gulp.series(
  'build',
  'deploy:push'
));
