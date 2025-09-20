import fileInclude from "gulp-file-include";
import rename from "gulp-rename";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(
      rename(function (path) {
        const pageName = path.dirname.split(path.sep).pop();
        console.log("pageName", pageName);
        path.basename = pageName === "home" ? "index" : pageName;
        path.dirname = "";
        path.extname = ".html";
      })
    )
    .pipe(app.plugins.replace(/@assets\//g, "assets/"))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
