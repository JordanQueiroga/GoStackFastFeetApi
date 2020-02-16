module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'], 
  plugins: ["prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": ["error", "windows"], //identificar a quebra de linha no windows
    "no-param-reassign": "off",//permite um método q receba um parâmetro altere o parametro (sequelize precisa)
    "camelcase": "off",//para nossa variável poder fik neste formato prod_nome e n apenas prodNome
    "no-unused-vars": ["error", { "argsIgnoreParttern": "next" }],//n reclamar se eu n utilizar essa variável next (precisamos disso para os middlewares)
    "class-methods-use-this": "off", //regra exige que td método na classe seja chamada por this off
    "prettier/prettier": "error"//td linha q o prettier identificar, deve retornar erro na linha
  },
};

