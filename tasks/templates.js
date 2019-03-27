import gulp from 'gulp';
import pug from 'gulp-pug';
import notify from 'gulp-notify';
import replace from 'gulp-string-replace';

import fs from 'fs';

const path = {
  pages: [
    'src/views/**/*.pug',
    '!src/views/_*.pug'
  ],
  locals: 'src/views/_content.json',
  build: 'build/',
  prodPath: '/vending-machine'
};

const isDev = process.env.NODE_ENV !== 'production';

gulp.task('templates', () => (
  gulp.src(path.pages)
    .pipe(pug({
      locals: JSON.parse(fs.readFileSync(path.locals, 'utf-8')),
      pretty: '\t'
    }))
    .on('error', notify.onError(error => (
      {
        title: 'Pug',
        message: error.message
      }
    )))
    .pipe(replace('!%{PRODUCTION-PATH}', isDev ? '' : path.prodPath))
    .pipe(gulp.dest(path.build))
));
