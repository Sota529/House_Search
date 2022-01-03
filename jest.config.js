module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // see https://github.com/zeit/next.js/issues/8663
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  globalSetup: "<rootDir>/__tests__/utils/setupEnv.ts",
  // see https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths
  moduleDirectories: ["node_modules", "<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/__tests__/utils"],
};
