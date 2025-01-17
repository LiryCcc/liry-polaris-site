/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-tailwindcss'
  ],
  rules: {
    // 禁用注释前的空行规则
    'comment-empty-line-before': null,
    // 禁用声明前的空行规则
    'declaration-empty-line-before': null,
    // 指定函数名的大小写为小写
    'function-name-case': 'lower',
    // 禁用选择器特异性递减规则
    'no-descending-specificity': null,
    // 禁用无效的双斜杠注释规则
    'no-invalid-double-slash-comments': null,
    // 指定规则前需要空行
    'rule-empty-line-before': 'always',
    'block-no-empty': true,
    'color-hex-length': null
  },
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties'
  ],
  // 忽略检查的文件或文件夹
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'out/**/*', '.next/**/*']
};

export default stylelintConfig;
