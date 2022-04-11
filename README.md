# eslint-config-conjure

ESLint rules, the [Conjure](https://conjure.co.uk) way.

## Installation

Add `eslint-config-conjure` and all its dependencies:

```bash
npm i --save-dev \
  eslint-config-conjure \
  @typescript-eslint/eslint-plugin@^5.18.0 \
  eslint@^8.13.0 \
  eslint-plugin-import@^2.26.0 \
  eslint-plugin-prettier@^4.0.0 \
  eslint-plugin-react-hooks@^4.4.0
```

## Usage

Set your ESLint config file to extend from `conjure`:

```json
{
  "extends": ["conjure"]
}
```

## Prettier

To have the full Conjure experience, we also recommend the following [Prettier](https://prettier.io/) configuration:

```json
{
  "bracketSpacing": true,
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false
}
```

Happy coding! :)
