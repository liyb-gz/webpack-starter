const Path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Read /src folder, get all html files
let srcHTMLfiles = fs.readdirSync(Path.resolve(__dirname, `../src/`)).filter((filename) => {
    return filename.includes('.html');
});

// Trim '.html' extension
srcHTMLfiles.forEach((filename, index) => {
    srcHTMLfiles[index] = Path.parse(filename).name;
});

let pagePlugins = srcHTMLfiles.map(function(pageName) {
  return new HtmlWebpackPlugin({
    filename: pageName + '.html',
    template: Path.resolve(__dirname, `../src/${pageName}.html`)
  });
});

module.exports = pagePlugins;