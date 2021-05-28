const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = () => {
  require("dotenv").config({
    path: path.resolve(__dirname, ".env.production"),
  });
  return {
    mode: "production",
    entry: "./src/index.ts",
    watch: true,
    target: "node",
    externals: [nodeExternals()],
    plugins: [
      new WebpackShellPlugin({
        onBuildStart: {
          scripts: ["npm run clean:dev && npm run clean:prod"],
          blocking: true,
          parallel: false,
        },
        onBuildEnd: {
          scripts: ["npm run prod"],
          blocking: false,
          parallel: true,
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          loader: "ts-loader",
          options: {},
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      alias: {
        "@config": path.resolve(__dirname, "src/config/"),
        "@db": path.resolve(__dirname, "src/db/"),
        "@helpers": path.resolve(__dirname, "src/helpers/"),
        "@middleWares": path.resolve(__dirname, "src/middleWares/"),
        "@routes": path.resolve(__dirname, "src/routes/"),
      },
      extensions: [".ts", ".js"],
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
    },
    optimization: {
      moduleIds: "deterministic",
    },
  };
};
