import React, { useState } from 'react'

// Below is functional tsx component despite no typescript codes. The typing is simply by inference. Most usestate hook are such that they do not need explicit typing.

const [isLoggedIn, setIsLoggedIn] = useState(false)

const UseState = () => {
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn? 'logged in' : 'logged out'}</div>
    </div>
  )
}

export default UseState
