
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],  //paquetes de configuracion (reglas) recomendadas
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        strict: ['error', 'never'],
        'init-declarations': ['error', 'always'],
       
    }
};
