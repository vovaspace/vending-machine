import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'fonts',
  'images',
  'sprites',
  'styles',
  'styles:foundation',
  'templates',
  'scripts',
  //'scripts:foundation'
));
