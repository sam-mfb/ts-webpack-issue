const path = require("path")

const commonConfig = {
  stats: {
    errorDetails: true
  },
  mode: "development",
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
  }
}

const browserConfig = {
  ...commonConfig,
  experiments: {
    outputModule: true
  },
  entry: { browser: "./src/browser/index.ts" },
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
  output: {
    filename: "browser.js",
    path: path.resolve(__dirname) + "/lib",
    library: {
      type: "module"
    },
    globalObject: "this"
  }
}

const nodeConfig = {
  ...commonConfig,
  experiments: {
    outputModule: true
  },
  entry: {
    node: "./src/node/index.ts"
  },
  target: "node",
  output: {
    filename: "node.js",
    path: path.resolve(__dirname) + "/lib",
    chunkLoading: "import",
    chunkFormat: "module",
    library: {
      type: "module"
    },
    globalObject: "this"
  }
}
module.exports = [browserConfig, nodeConfig]
