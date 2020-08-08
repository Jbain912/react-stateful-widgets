import React, { useState } from 'react'

export default function Input() {
  const [inputValue, setInputValue] = useState('')

  const changeInput = evt => {
    const { value } = evt.target
    setInputValue(value)
  }
  const reset = () => setInputValue('')

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputValue.length > 10 ? 'crimson' : 'royalblue',
  }

  return (
    <div className='react-input container'>
      <h2>Input</h2>
      <div style={style}>{inputValue.toUpperCase()}</div>
      <div>
        <input type='text' value={inputValue} onChange={changeInput} />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
