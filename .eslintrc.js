module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            1,
            2
        ],
        "linebreak-style": [
            1,
            "unix"
        ],
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            1,
            "always"
        ],
        "react/prop-types": [
          1,
          {
            "ignore": [
              "children",
              "dispatch",
              "history",
              "styles"
            ]
          }
        ]
    }
};
