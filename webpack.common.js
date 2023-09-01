const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap({
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main-bundle-[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss', 'scss'],
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    plugins: [new Dotenv(), new CleanWebpackPlugin(), new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'src/presentation/assets'), // Caminho da pasta de assets
                to: path.resolve(__dirname, 'dist/assets'), // Caminho de destino na pasta dist
            },
        ],
    }),],
});
