import React, { useState } from 'react'

type FutureUserProps = {
    accountUser: AuthUser
}
type AuthUser = {
    name: string
    email: string
}

const AssertiveFutureUseState = (props: FutureUserProps) => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser(props.accountUser)
    }
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div> 
      <div>User email is {user.email} </div>
    </div>
  )
}

export default AssertiveFutureUseState