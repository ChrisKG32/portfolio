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
    "@typescript-eslint/no-unsafe-return": 'off',
    "jsx-a11y/anchor-is-valid": "off"
  },
  ignorePatterns: [
    "/node_modules",
    "/server/index.js",
    "/public/build",
    "dist/",
    "build/",
    ".cache/"
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}