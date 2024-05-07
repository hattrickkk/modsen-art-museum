module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg)$': 'jest-svg-transformer',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@ui(.*)$': '<rootDir>/src/ui$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@customTypes(.*)$': '<rootDir>/src/customTypes$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/jest-globals'],
}
