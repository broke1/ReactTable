module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: { 
    "no-var": ["error"],  // нельзя использовать var, только let или const
    "key-spacing": ["error"], // пробел между ключом свойства объекта и его значением {"key": "value"}
    "indent": ["error",2],  //  следит за неправильными отступами от начала строки (в данном случае 2 пробела)
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2018
  },
}; 