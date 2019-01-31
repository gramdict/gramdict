const path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'Scripts/App.tsx'),
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'js'),
        publicPath: "/js/"
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
    plugins: [],
};