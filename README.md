## xiaofeng-builder-webpack

A builder webpack project.

## Installing

Using npm:
```bash
npm i -D xiaofeng-builder-webpack
```

## Usage

Try to Add the following scripts into your project's package.json:
```json
  "scripts": {
    "build": "webpack --config ./node_modules/xiaofeng-builder-webpack/lib/webpack.prod.js",
    "dev": "webpack-dev-server --config ./node_modules/xiaofeng-builder-webpack/lib/webpack.dev.js --open",
    "build:ssr": "webpack --config ./node_modules/xiaofeng-builder-webpack/lib/webpack.ssr.js",
    "build:stats": "webpack --config ./node_modules/xiaofeng-builder-webpack/lib/webpack.prod.js --json > stats.json"
  },
```

You can consult the `./node_modules/xiaofeng-builder-webpack/test/smoke/template` directory for an example of the project structure.
