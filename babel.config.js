module.exports = {
  "presets": [
    ["@babel/preset-react"],
    ["@babel/preset-env", { "targets": {  "esmodules": true } }]
  ],
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", { "targets": {  "node": "current" } }]
      ]
    }
  }
}