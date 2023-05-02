const path = require("path")

const commonConfig = {
  stats: {
    errorDetails: true
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
  }
}

const browserConfig = {
  ...commonConfig,
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
      name: "my-lib",
      type: "umd"
    },
    globalObject: "this"
  }
}

const nodeConfig = {
  ...commonConfig,
  entry: {
    node: "./src/node/index.ts"
  },
  target: "node",
  output: {
    filename: "node.js",
    path: path.resolve(__dirname) + "/lib",
    library: {
      name: "my-lib",
      type: "umd"
    },
    globalObject: "this"
  }
}
module.exports = [browserConfig, nodeConfig]
