import React from 'react'

type WrapperProps = {
    children: React.ReactNode
}

const ChildrenWrapper = (props: WrapperProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ChildrenWrapper
