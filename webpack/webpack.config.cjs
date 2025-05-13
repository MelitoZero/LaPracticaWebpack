const path  = require('path');

module.exports = (env, argv) => {
    const isProduction = mode === 'production';

    return{
        entry: './src/index.js',
        output: {
            filename: isProduction? '[name]'
            path: path.resolve(__dirname, 'build')
        }
    }

}