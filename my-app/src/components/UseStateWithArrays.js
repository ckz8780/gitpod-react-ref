import React, { useState } from 'react'

function UseStateWithArrays() {

  const [nums, setNums] = useState([1, 2, 3]);

  const updateNums = () => {
    setNums([...nums, nums.pop() + 1])
  }

  return (
    <div>
      <button onClick={updateNums}>Add Item</button>
      <ul>
        {nums.map(num => <li key={num}>{num}</li>)}
      </ul>
    </div>
  )
}

export default UseStateWithArrays
