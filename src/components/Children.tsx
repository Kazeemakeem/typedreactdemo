import React from 'react'

type ChildrenProps = {
    children: string
}

const Children = (props: ChildrenProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Children
