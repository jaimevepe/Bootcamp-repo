import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

  const [name, setName] = useState('hello')

  

  return (
    <div>
      <h1>Hello </h1>
      <Child />
    </div>
  )
}

export default Parent