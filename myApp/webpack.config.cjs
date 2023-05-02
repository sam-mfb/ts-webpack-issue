const path = require("path")

module.exports = {
  stats: {
    errorDetails: true
  },
  entry: {
    "dist/index": "./src/index.ts"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    extensionAlias: {
      ".js": [".ts", ".js"],
      ".jsx": [".tsx", ".jsx"],
      ".mjs": [".mts", ".mjs"]
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname),
    library: {
      name: "my-app",
      type: "umd"
    },
    globalObject: "this"
  }
}
