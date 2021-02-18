const gulp = require('gulp');
const dotenv = require('dotenv').config();

// Environment
const environment = process.env.ENVIRONMENT || 'development';
const isProduction = environment === 'production';
console.log('Running tasks for ' + environment);

// Browser sync
const browserSync = require('browser-sync').create();

// CSS
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

gulp.task('css', function() {
  // Common PostCSS config
  var postcssConfig = [
    atImport({addModulesDirectories:['../../buildchain/node_modules']}),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer')
  ];

  // Minify CSS in production
  isProduction ? postcssConfig.push(cssnano({
    preset: 'default'
  })) : null;

  return (
    gulp
      .src('../src/css/styles.css')
      .pipe(postcss(postcssConfig))
      .on('error', (err) => console.error(err))
      .pipe(gulp.dest('../cms/web/assets/css/'))
      .pipe(browserSync.stream())
  )
})

gulp.task('browser-sync', function() {
  browserSync.init({
    // This is the docker container name
    proxy: 'nginx',
    open: false
  });

  // Reload when these file change
  gulp.watch("../src/css/**/*.css", gulp.series('css'));
  gulp.watch("../src/templates/**/*.{twig,html}").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('css', 'browser-sync'));