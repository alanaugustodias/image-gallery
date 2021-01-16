module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/{!(index),}.{ts,tsx}'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 20,
            functions: 30,
            lines: 50,
            statements: 50,
        },
    },
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    verbose: false,
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
            },
        ],
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/assetsTransformer.js',
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        '@app/actions(.*)$': '<rootDir>/src/actions/index.tsx',
        '@app/components(.*)$': '<rootDir>/src/components/index.tsx',
        '@app/constants(.*)$': '<rootDir>/src/constants/index.tsx',
        '@app/containers(.*)$': '<rootDir>/src/containers/index.tsx',
        '@app/enums(.*)$': '<rootDir>/src/enums/index.tsx',
        '@app/hooks(.*)$': '<rootDir>/src/hooks/index.tsx',
        '@app/interfaces(.*)$': '<rootDir>/src/interfaces/index.tsx',
        '@app/reducers(.*)$': '<rootDir>/src/reducers/index.tsx',
        '@app/services(.*)$': '<rootDir>/src/services/index.tsx',
    },
};
