import { create as browserSync } from 'browser-sync';
import gulp from 'gulp';

const bs = browserSync('server');

gulp.task('server', () => (
  bs.init({
    open: false,
    server: 'build'
  })
));
