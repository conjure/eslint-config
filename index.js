module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "react-app/jest",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    project: "./tsconfig.json",
  },
  plugins: ["react-hooks"],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: false,
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join("\n"),
          },
          "{}": {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join("\n"),
          },
          object: {
            message: [
              "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
              "Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.",
            ].join("\n"),
          },
        },
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase"],
        selector: "default",
      },
      {
        format: ["PascalCase"],
        selector: "enumMember",
      },
      {
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        selector: "variable",
      },
      {
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: "parameter",
      },
      {
        format: ["PascalCase"],
        selector: "typeLike",
      },
      {
        format: ["camelCase", "PascalCase"],
        selector: "function",
      },
      {
        format: ["camelCase", "PascalCase"],
        selector: "objectLiteralProperty",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        format: ["PascalCase"],
        selector: "variable",
        prefix: [
          "are",
          "can",
          "did",
          "does",
          "do",
          "has",
          "is",
          "not",
          "should",
          "was",
          "were",
          "will",
          "with",
        ],
        types: ["boolean"],
      },
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["protected-constructors", "private-constructors"],
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreProperties: true,
      },
    ],
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        ignoreNumericLiteralTypes: true,
      },
    ],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        allow: ["resolve", "reject", "done", "next", "err", "error"],
        hoist: "all",
      },
    ],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      0,
      {
        argsIgnorePattern: "res|next|^err|^_",
        caughtErrorsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": ["error", "as-needed"],
    "consistent-return": "off",
    "constructor-super": "error",
    eqeqeq: ["warn", "always"],
    "func-names": "off",
    "import/default": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    complexity: ["error", 10],
    "import/no-unassigned-import": [
      "warn",
      {
        allow: ["**/*.css", "**/*.scss"],
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "error",
    "max-lines-per-function": [
      "warn",
      {
        max: 20,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    "max-params": ["error", 7],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "no-alert": "warn",
    "no-await-in-loop": "warn",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "warn",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-invalid-this": "error",
    "no-multi-str": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "no-redeclare": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "Object",
        property: "assign",
        message:
          "Object.assign allows getting around type checking. Consider another solution.",
      },
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-throw-literal": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "no-void": "off",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "spaced-comment": "error",
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    "react/jsx-props-no-spreading": [
      "warn",
      {
        custom: "ignore",
        explicitSpread: "enforce",
        html: "enforce",
      },
    ],
    "react/jsx-uses-react": "off",
    "react/no-array-index-key": "warn",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "space-before-function-paren": "error",
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return",
      },
    },
    react: {
      version: "detect",
    },
  },
};
