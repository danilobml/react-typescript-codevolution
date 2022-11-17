import { useState } from 'react'

type AuthUser = {
    name: string;
    email: string;
}

function User():JSX.Element {
    const [user, setUser] = useState<null | AuthUser>(null)
    const handleLogin = ():void => {
        setUser({
            name: 'Bob',
            email: 'bob@sickmore.com'
        })
    }
    const handleLogout = ():void => {
        setUser(null)
    }
      return (
      <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <h1>User name is {user?.name}.</h1>
          <h1>User email is {user?.email}.</h1>
      </div>
    )
}

export default User