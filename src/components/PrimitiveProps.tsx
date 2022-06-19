import React from 'react'

type PrimProps = {
    name: string
    messageCount: number
    person: {
        firstName: string
        lastName: string
    }
}

const PrimitiveProps = (props: PrimProps) => {
  return (
    <div>
      <h1>Hello {props.name}, You have {props.messageCount} messages</h1>
      <h2>{props.person.firstName} {props.person.lastName} visited your profile</h2>
    </div>
  )
}

export default PrimitiveProps
