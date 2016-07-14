module.exports = {
    entry: {
        'blog': ['./src/blog.jsx']
    },

    output: {
        path: './javascripts/',
        filename: '[name].js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /node_modules/
            }
        ]
    }
};