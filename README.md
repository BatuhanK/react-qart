# react-qart

This is a simple implementation of [QArt](https://github.com/kciter/qart.js) as React Component. You can visit the [demo](https://batuhank.github.io/react-qart/).


## Usage

First of all install react-qart via npm or yarn

```bash
npm install react-qart
```

or

```bash
yarn add react-qart
```

Now you can use it in your React or Preact project(with preact-compat).

```javascript

import React, { Component} from 'react';
import QArt from 'react-qart';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>merhaba</h1>
        <QArt
          value="I'm a kitten"
          imagePath="./kidden.jpg"
          filter="color"
        />
      </div>
    )
  }
}

```
![result](http://imgim.com/screenshot2017-01-29at023722.png)

### Props
|Field|Type|Description|Default|
|-----|----|-----------|-------|
|value|String|The data of the QR code.|*Required*|
|imagePath|String|Self hosted image url or relative path to image url|*Required*|
|filter|String|Define an image filter. `threshold` or `color`|threshold|


### Limitations

 * You must use relative path of an image
 * You cannot change the size of the generated qr
