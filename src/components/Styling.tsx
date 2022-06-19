import React from 'react'

type StyleProps = {
    styles: React.CSSProperties
}

const Styling = (props: StyleProps) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  )
}

export default Styling
