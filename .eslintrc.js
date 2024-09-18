module.exports = {
  extends: [require.resolve('@haydenull/fabric/eslint/react')],
  rules: {
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
