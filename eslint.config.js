// import globals from "globals";
// import pluginJs from "@eslint/js";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];




import pluginJs from '@eslint/js';
import globals from 'globals';

// const projectGlobals = {
//   describe: "readonly",
//   beforeEach: "readonly",
//   afterEach: "readonly",
//   it: "readonly",
//   after: "readonly",
//   expect:"readonly",
//   get:"readonly"


// };

export default [
  pluginJs.configs.recommended, 
  {
        languageOptions: {
          globals: {
            ...globals.browser,
            ...globals.node,
          },
        },
  
    rules: {
      'no-unused-vars': 'off',     // warn or error or off
      // 'no-undef': 'warn',      
      // 'no-useless-catch': 'warn', 
    },
  },
];






// --ignore-pattern  sample.js 