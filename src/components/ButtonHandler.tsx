import React from 'react'

type HandlerProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const ButtonHandler = (props: HandlerProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click me</button>
    </div>
  )
}

export default ButtonHandler
