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
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      ".js": [".ts", ".js"],
      ".jsx": [".tsx", ".jsx"],
      ".mjs": [".mts", ".mjs"]
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib"),
    library: {
      name: "my-lib",
      type: "module"
    },
    environment: {
      module: true
    },
    chunkFormat: "module"
  }
}

const browserConfig = {
  ...commonConfig,
  entry: { browser: "./src/browser/index.ts" }
}

const nodeConfig = {
  ...commonConfig,
  entry: {
    node: "./src/node/index.ts"
  },
  target: "node"
}

module.exports = [browserConfig, nodeConfig]
