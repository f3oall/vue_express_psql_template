module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "space-before-function-paren": 0,
    "no-undef": 0,
    "no-new": 0,
    "template-tag-spacing": 1,
    semi: [2, "never"],
    "vue/require-v-for-key": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    quotes: ["error", "single", { allowTemplateLiterals: true }]
  }
};
