export const copy = () => {
  return app.gulp
    .src([app.path.src.files, app.path.src.assets])
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.gulp.dest(app.path.build.assets));
};
