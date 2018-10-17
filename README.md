TSLint Config Station
=====================

[![Build Status](https://travis-ci.com/getstation/tslint-config-station.svg?branch=master)](https://travis-ci.com/getstation/tslint-config-station)
[![npm](https://img.shields.io/npm/v/tslint-config-station.svg)](https://www.npmjs.com/package/tslint-config-station)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/getstation/tslint-config-station/pulls)

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) derived from [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb) used at [Station](https://getstation.com)

## Installation
```bash
$ npm install tslint-config-station --save-dev
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

