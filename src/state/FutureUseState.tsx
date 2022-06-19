import React, { useState } from 'react'

type FutureUserProps = {
    accountUser: AuthUser
}
type AuthUser = {
    name: string
    email: string
}

const FutureUseState = (props: FutureUserProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser(props.accountUser)
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div> 
      <div>User email is {user?.email} </div>
    </div>
  )
}

export default FutureUseState
