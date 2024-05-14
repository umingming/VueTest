// .eslintrc.js
module.exports = {
	root: true,
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	env: {
		node: true,
		browser: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-prettier",
	],
	rules: {
		"prettier/prettier": [
			"error",
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: "avoid",
				endOfLine: "auto",
			},
		],
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
