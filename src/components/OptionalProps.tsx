import React from 'react'

type OptProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
const OptionalProps = (props: OptProps) => {
   const  {name, messageCount = 0, isLoggedIn} = props
  return (
    <div>
      <h2>
          isLoggedIn ? Welcome {name}, you have {messageCount} unread messages.
      </h2>
    </div>
  )
}

export default OptionalProps
