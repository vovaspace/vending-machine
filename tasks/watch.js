import gulp from 'gulp';

const path = {
  templates: ['src/views/**/*.pug', 'src/blocks/**/**/*.pug'],
  styles: ['src/blocks/**/**/*.scss', 'src/style/**'],
  scripts: ['src/js/**/*.js', 'src/blocks/**/*.js'],
  images: [
    'src/img/**/*.*',
    'src/blocks/**/img/*.*',
    'src/img/icons/*.+(svg|png|ico)'
  ]
};

gulp.task('watch', () => {
  gulp.watch(path.templates, gulp.series('templates'));
  gulp.watch(path.scripts, gulp.series('scripts'));
  gulp.watch(path.images, gulp.series('images'));
  gulp.watch(path.styles, gulp.series('styles'));
});
