import React from 'react'

const Child = () => {
    const onChange = (event) => {
        
    }

    return (
      <div>
        <input 
          type="text" 
          placeholder="Please Enter Your Name"
          onchange={onChange}
          />
      </div>
    )
}

export default Child