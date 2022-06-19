import React from 'react'
import {InputProps} from './Style.types'

// type InputProps = {
//     value: string
//     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
// }  
const InputHandler = (props: InputProps) => {
    // Alternatively, the handler can be defined here in the component instead of passing it as a prop from App.tsx
    
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // }  props.handleChange = handleInputChange
  
    return (
    <div>
      <input type='text' value={props.value} onChange={props.handleChange}/>
    </div>
  )
}

export default InputHandler


