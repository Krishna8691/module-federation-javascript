const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductsList": "./src/index",
            },
            shared: ["lodash"],
        }),
        new HTMLWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
