# Terra React Svg Loader

[![NPM version](http://img.shields.io/npm/v/terra-icon.svg)](https://www.npmjs.org/package/terra-react-svg-loader)
[![Build Status](https://travis-ci.org/cerner/terra-icon.svg?branch=master)](https://travis-ci.org/cerner/terra-react-svg-loader)
[![Stories in Ready](https://badge.waffle.io/cerner/terra-ui.com.svg?label=ready&title=Ready)](http://waffle.io/cerner/terra-ui.com)

Terra React Svg Loader is used to convert svg icons into React components.

- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Example Configuration](#example-configuration)
- [How It Works](#how-it-works)
- [Supported Browsers](#supported-browsers)
- [Contributing](#contributing)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com)
  - `npm install terra-react-svg-loader`
  - `yarn install terra-react-svg-loader`
- [Download the latest version](https://github.com/cerner/terra-react-svg-loader/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-react-svg-loader.git`

## Example Configuration

[There are examples for each configuration.](./examples)
### Webpack 2.x
```js
module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          {
            loader: 'terra-react-svg-loader',
          }
        ]
      }
    ]
  }
```
```js
import DeviceAlert from 'terra-icon/lib/icon/static/deviceAlert.svg'
```

----
### Webpack 1.x
```js
module: {
  loaders: [
    {
      test: /\.svg$/,
      loader: 'babel!terra-react-svg-loader',
    }
  ]
}
```

```js
import DeviceAlert from 'terra-icon/lib/icon/static/deviceAlert.svg'
```

----
If you do not want all SVG files to go through the terra-react-svg-loader, you can include them in your import syntax.
```js
import IconTerra from 'babel-loader!terra-react-svg-loader!terra-icon/lib/icon/static/deviceAlert.svg';
```

## How it works

1. Each SVG file optimized using [svgo](https://github.com/svg/svgo). The configuration file can be found [here](https://github.com/cerner/terra-react-svg-loader/blob/master/src/svgoConfig.js)
2. All SVG attributes are transformed to jsx attributes. More information on supported attributes can be found [here](https://facebook.github.io/react/docs/dom-elements.html).
  - Aria and data attributes stay the same
    - `aria-` => `aria-`
    - `data-` => `data-`
  - for and class are reserved words in JavaScript
    - `class` => `className`
    - `for` => `htmlFor`
  - Hyphenated words are camelCased
    - `fill-rule` => `fillRule`
    - `font-weight` => `fontWeight`
3. SVG attributes and children are added to a [React template](https://github.com/cerner/terra-react-svg-loader/blob/master/src/template.txt).
4. Babel transpiles the react component for the browser to understand. An example babel configuration file can be found [here](https://github.com/cerner/terra-react-svg-loader/blob/master/.babelrc).
  - Use the presents `react` and `es2015`.
  - Use the plugin `transform-object-rest-spread`.
5. Consumers can now use the SVG as a react component. Custom attributes will be passed down to the SVG tag. The loader uses the same props as [terra-icon](https://github.com/cerner/terra-icon).

```jsx
import MyIcon from '../MyIcon.svg';

// Default
<MyIcon />

// Set height / width
<MyIcon height="50" width="50" />

// Add aria-label
<MyIcon aria-label="accessibility label" />

// Mirror SVG when dir="rtl"
<MyIcon isBidi />

```

## Supported Browsers

  | Browser                     | Version |
  |-----------------------------|---------|
  | Chrome & Chrome for Android | Current |
  | Edge                        | Current |
  | Firefox                     | Current |
  | Internet Explorer           | 10 & 11 |
  | Safari & Mobile Safari      | Current |

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
