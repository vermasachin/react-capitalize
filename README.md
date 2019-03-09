# React Capitalize

React Capitalize converts the first letter of each word to uppercase.

#### Install

```sh
npm install react-capitalize
```

### How to use

```
import React from 'react';
import ReactDOM from 'react-dom';
import Capitalize from 'react-capitalize';

function App() {
  return (
    <Capitalize lowerRest>
      hello world
    </Capitalize>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

```
Output: Hello World
```

### Options

**lowerRest**

**Type:** Boolean

Converts all but first characters to lowercase.
