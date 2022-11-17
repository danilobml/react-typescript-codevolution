import { useState } from 'react'

function LoggedIn():JSX.Element {
  const [isLogged, setIsLogged] = useState(false)
  const handleLogin = ():void => {
    setIsLogged(true)
  }
  const handleLogout = ():void => {
    setIsLogged(false)
}
    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1>User is {isLogged ? 'logged in' : 'not logged in'}.</h1>
    </div>
  )
}

export default LoggedIn