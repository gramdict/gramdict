const path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'Scripts/App.tsx'),
    },
    devtool: "source-map",
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
    externals: {
        "react": 'React',
        "react-dom": "ReactDOM",
        "mobx": "mobx",
        "mobx-react": 'mobxReact',
        "react-infinite-scroll-component": "InfiniteScroll",
        "react-debounce-input": 'DebounceInput',
        "axios": "axios"
    }
};