import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })

      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )
      .pipe(
        rename(function (path) {
          const pageName = path.dirname.split(path.sep).pop();
          path.basename = pageName;
          path.dirname = "";
          path.extname = ".css";
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
