import gulp from 'gulp';
import svgSprites from 'gulp-svg-sprites';

const path = {
  src: 'src/img/icons/*.svg',
  build: 'build/'
};

gulp.task('sprites:svg', () => (
  gulp.src(path.src)
    .pipe(svgSprites({
      mode: 'symbols',
      preview: false,
      selector: 'icon-%f',
      svg: {
        symbols: 'symbol_sprite.html'
      }
    }))
    .pipe(gulp.dest(path.build))
));

gulp.task('sprites', gulp.series(
  'sprites:svg'
));
