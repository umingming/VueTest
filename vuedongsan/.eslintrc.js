module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/prettier",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"vue/no-multiple-template-root": 0,
		"vue/valid-template-root": 0,
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
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
