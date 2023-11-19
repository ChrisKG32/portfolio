module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:react-hooks/recommended"
  ],
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/no-unsafe-return": 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}