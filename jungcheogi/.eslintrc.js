// .eslintrc.js
module.exports = {
    root: true,
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false, // <== ADD THIS
    },
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
        "prettier",
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
