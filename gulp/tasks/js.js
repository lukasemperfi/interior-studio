import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )

    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        devtool: app.isBuild ? false : "source-map",
        entry: {
          home: "./src/pages/home/home.js",
          news: "./src/pages/news/news.js",
          "one-news": "./src/pages/one-news/one-news.js",
          projects: "./src/pages/projects/projects.js",
          "one-project": "./src/pages/one-project/one-project.js",
          contacts: "./src/pages/contacts/contacts.js",
          404: "./src/pages/404/404.js",
          "about-us": "./src/pages/about-us/about-us.js",
        },
        output: {
          filename: "[name].min.js",
        },
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
