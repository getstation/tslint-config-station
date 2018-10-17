TSLint Config Station
=====================

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) derived from [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb) used at [Station](https://getstation.com)
`
## Installation
```bash
$ npm install tslint-config-airbnb --save-dev
```

## Usage
in `tslint.json`:

```json
{
      "extends": "tslint-config-station"
}
```

## Using with tslint-react
```json
{
      "extends": [
        "tslint-config-station",
        "tslint-react"
      ]
}
```

