/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../src/index.js' // 引入组件
import Button from 'npmTest';

const App = () => <div>
  <ReactDemo />
  <div>81298437189273</div>
  <Button />
</div>
render(<App />, document.getElementById('root'))
