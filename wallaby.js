module.exports = function (wallaby) {
    return {
        files: [
            '!src/**/*.spec.js',            
            {
                pattern: 'src/**/*.js',
                load: false
            },
            {
                pattern: 'package.json',
                load: false
            }
        ],
        tests: ['src/**/*.spec.js'],
        env: {
            type: 'node',
            runner: 'node'
        },        
        testFramework: 'jest',
        setup: function (w) {
            require('flow-remove-types/register'),
            wallaby.testFramework.configure(require('./package.json').jest);
        }
    };
};