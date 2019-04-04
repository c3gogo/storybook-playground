import React, { useState } from 'react'
import { storiesOf } from '@storybook/react';


storiesOf('Input', module)
  .add('with hooks', () => (
    <Input />
));

  export default function Input() {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
      <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
    )
  }