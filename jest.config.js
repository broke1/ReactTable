module.exports =  {
  "moduleFileExtensions": [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx"
  ],
  "transform": {
    "^.+\\.m?js$": "./node_modules/babel-jest",
    "^.+\\.js$": "./node_modules/babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
  },
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "jest-transform-css",
  }
}