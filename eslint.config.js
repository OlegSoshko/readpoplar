import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
	eslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	{
		rules: {
			semi: ["error", "always"],
			"vue/component-tags-order": [
				"error",
				{
					order: ["script", "template", "style"],
				},
			],
			"vue/padding-between-blocks": ["error", "always"],
		},
	},
];
