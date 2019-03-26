import gulp from 'gulp';
import path from 'path';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

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
    .pipe(gulp.dest('./build/js/'))
));
