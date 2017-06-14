/* eslint-disable */
const path = require("path");
const app = require("express")();
const webpack = require("webpack");
const config = require("./webpack.config");

const compiler = webpack(config);

const serverPort = process.env.PORT || 1415;

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "localhost", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${serverPort}`);
});
