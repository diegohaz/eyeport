# eyeport

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/eyeport.svg?style=flat-square)](https://npmjs.org/package/eyeport)
[![Build Status](https://img.shields.io/travis/diegohaz/eyeport/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/eyeport) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/eyeport/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/eyeport/branch/master)

Collection of useful methods to deal with element and viewports in DOM

## Install

    $ npm install --save eyeport

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getPercentageInViewport](#getpercentageinviewport)

### getPercentageInViewport

Returns the visible percentage of an element in a viewport.

**Parameters**

-   `element` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 
-   `viewport` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 

**Examples**

```javascript
const { getPercentageInViewport } = require('eyeport')

const element = document.getElementById('myElement')
const viewport = document.getElementById('myContainer')

getPercentageInViewport(element, viewport)
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## License

MIT © [Diego Haz](https://github.com/diegohaz)
