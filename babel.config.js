const resolveAbsoluteImport = require('chayns-components/lib/utils/babel/resolveAbsoluteImport.js');

module.exports = {
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        '@babel/plugin-transform-runtime',
        ['transform-imports', {
            'chayns-components': {
                transform: resolveAbsoluteImport,
                preventFullImport: true
            }
        }]
    ],
    presets: [
        ['@babel/preset-env', {modules: false}],
        '@babel/preset-react'
    ],
    env: {
        production: {
            plugins: [
                '@babel/plugin-transform-react-constant-elements',
                '@babel/plugin-transform-react-inline-elements',
                'transform-react-remove-prop-types'
            ]
        },
        development: {
            plugins: [
                'react-hot-loader/babel'
            ]
        }
    }
};
