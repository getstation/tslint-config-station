module.exports = {
  "extends": [
    "tslint-config-airbnb",
  ],
  "jsRules": {
    "no-empty": [true, "allow-empty-catch", "allow-empty-functions"]
  },
  "rules": {
    "no-conditional-assignment": true,
    "no-else-after-return": [true, "allow-else-if"],
    "align": [true, "parameters", "statements", "members", "elements"],
    "arrow-parens": false,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": [
      true,
      "ignore-same-line"
    ],
    "import-name": false,
    "interface-name": false,
    "interface-over-type-literal": false,
    "max-classes-per-file": [
      false
    ],
    "max-line-length": [
      true,
      {
        "limit": 140,
        "ignore-pattern": "//|\/\\*(.|\n)*\\*\/"
      }
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": "fields-first"
      }
    ],
    "newline-before-return": false,
    "no-any": false,
    "no-construct": true,
    "no-debugger": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-inferrable-types": [
      true,
      "ignore-params",
      "ignore-properties"
    ],
    "no-import-side-effect": [
      true
    ],
    "no-invalid-this": [
      true,
      "check-function-in-method"
    ],
    "no-null-keyword": false,
    "no-require-imports": false,
    "no-switch-case-fall-through": true,
    "no-submodule-imports": false,
    "no-implicit-dependencies": false,
    "no-trailing-whitespace": [true, "ignore-template-strings"],
    "no-var-requires": false,
    "no-multi-spaces": true,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "object-literal-shorthand": false,
    "object-shorthand-properties-first": false,
    "only-arrow-functions": [
      true,
      "allow-declarations"
    ],
    "ordered-imports": [
      true,
      {
        "import-sources-order": "any",
        "named-imports-order": "any",
        "grouped-imports": true
      }
    ],
    "prefer-method-signature": false,
    "prefer-template": [
      true,
      "allow-single-concat"
    ],
    "quotemark": [
      true,
      "single",
      "jsx-double"
    ],
    "semicolon": [
      true,
      "ignore-interfaces"
    ],
    "trailing-comma": [true, {
      "singleline": "never",
      "multiline": {
        "objects": "always",
        "arrays": "always",
        "functions": "ignore",
        "typeLiterals": "always",
        "imports": "always",
        "exports": "always"
      },
      "esSpecCompliant": true
    }],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "ter-arrow-parens": [false],
    "typedef": [
      true,
      "parameter",
      "property-declaration"
    ],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case",
      "allow-leading-underscore"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-rest-spread",
      "check-type-operator",
      "check-preblock"
    ]
  }
};

