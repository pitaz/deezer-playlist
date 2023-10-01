/* eslint-disable no-undef */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx'],
  coverageReporters: ['lcov', 'text-summary'],
  transformIgnorePatterns: [
    '/node_modules/(?!untransformed-module/)',
  ],
};