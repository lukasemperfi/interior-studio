import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    assets: `${buildFolder}/assets/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    assets: `${srcFolder}/shared/assets/**/*.*`,
    html: `${srcFolder}/pages/*/*.html`,
    scss: `${srcFolder}/pages/*/*.scss`,
    js: `${srcFolder}/pages/*/*.js`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    assets: `${srcFolder}/shared/assets/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/**/*.scss`,
    js: `${srcFolder}/**/*.js`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
