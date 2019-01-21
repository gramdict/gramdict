const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'Scripts/App.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'wwwroot', 'js')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};