'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./src/sass/**/*.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  })
};  