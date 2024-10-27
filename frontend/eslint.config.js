import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  { env: 'browser' },
  js.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
]
