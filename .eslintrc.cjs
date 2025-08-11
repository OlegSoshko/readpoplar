/* eslint-env node */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "@vue/eslint-config-prettier"],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"vue/component-tags-order": [
			"error",
			{
				order: ["script", "template", "style"],
			},
		],
	},
};
