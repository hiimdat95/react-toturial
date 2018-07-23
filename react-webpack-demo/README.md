npm install webpack webpack-cli --save-dev
npm install react react-dom --save
npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev
    babel-core: Chuyển code ES6 thành code ES5.
    babel-loader: Một webpack helper giúp chuyển code dựa trên preset.
    babel-preset-env: Bộ preset giúp babel chuyển code ES6, ES7 và ES8 thành ES5.
    babel-preset-react: Bộ Preset giúp chuyển JSX thành javascript.

Create src/index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Boilerplate</title>
</head>

<body>
    <div id="root">

    </div>
</body>

</html>

Create webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  }
};

Webpack Loader: Change file webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

Install: npm install css-loader style-loader --save-dev
Create file: .babelrc
    env: Preset này dùng để chuyển code ES6/ES7/ES8 thành code ES5.
    react: Preset này dùng để chuyển JSX thành code ES5.

Create file src/components/App.js

import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;


Create file /src/styles/App.css

h1 {
    color: #27aedb;
    text-align: center;
}

Change file index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));

Install npm install html-webpack-plugin --save-dev
Change file webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};


Install npm install webpack-dev-server --save-dev

Và thay đổi đoạn start script trong file package.json như sau:
  "start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
"build": "webpack --progress --colors --config ./webpack.config.js",

 thêm 2 cờ mới là --open và --hot, 2 cờ này sẽ tự động mở và refresh trang web mỗi khi source file có thay đổi.