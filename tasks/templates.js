import gulp from 'gulp';
import pug from 'gulp-pug';
import notify from 'gulp-notify';

import fs from 'fs';

const path = {
  pages: [
    'src/views/**/*.pug',
    '!src/views/_*.pug'
  ],
  locals: 'src/views/_content.json',
  build: 'build/'
};

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
    .pipe(gulp.dest(path.build))
));
