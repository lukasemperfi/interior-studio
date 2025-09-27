export const copy = () => {
  return app.gulp
    .src([
      app.path.src.files,
      app.path.src.assets,
      app.path.src.swiperCss,
      app.path.src.swiperJs,
    ])
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.gulp.dest(app.path.build.assets))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.gulp.dest(app.path.build.js));
};
