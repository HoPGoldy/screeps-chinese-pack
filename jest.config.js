const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
    preset: 'ts-jest',
    roots: [
        '<rootDir>/test'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
