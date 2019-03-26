import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import csso from 'gulp-csso';
import concatCss from 'gulp-concat-css';

const path = {
  entry: 'src/style/main.scss',
  build: 'build/css/',
  src: ['src/blocks/**/**/*.scss', '!src/style/**'],
  foundation: [
    './node_modules/normalize.css/normalize.css'
  ]
};

gulp.task('styles', () => (
  gulp.src(path.entry)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', notify.onError(error => (
      {
        title: 'Sass',
        message: error.message
      }
    )))
    .pipe(autoprefixer({
      browsers: ['last 3 version', '> 1%']
    }))
    .pipe(rename('style.css'))
    .pipe(gcmq())
    .pipe(gulp.dest(path.build))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(gulp.dest(path.build))
));

gulp.task('styles:foundation', () => (
  gulp.src(path.foundation)
    .pipe(concatCss('foundation.css'))
    .pipe(csso())
    .pipe(gulp.dest(path.build))
));
