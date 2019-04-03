import gulp from 'gulp';
import path from 'path';
import webpackStream from 'webpack-stream';
import notify from 'gulp-notify';

gulp.task('scripts', () => (
  gulp.src('./src/js/app.js')
    .pipe(webpackStream({
      output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build/js/')
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      externals: {
        focusVisible: 'focus-visible'
      }
    }))
    .on('error', notify.onError(error => (
      {
        title: 'JS',
        message: error.message
      }
    )))
    .pipe(gulp.dest('./build/js/'))
));
