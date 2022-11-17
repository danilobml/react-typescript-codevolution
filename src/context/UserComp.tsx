import { useContext } from 'react'
import { UserContext } from './UserContext'

function UserComp() {
  const user = useContext(UserContext)
  const handleLogin = () => {
    if(UserContext){
        user?.setUser({
            name: "Dan",
            email: "dan@gmail.com"
        })
    }
  }
  const handleLogout = () => {
    if(UserContext){
        user?.setUser(null)
    }
  }
  return (
    <>
    <div>User name: </div>
    <div>User email: </div>
    <button onClick={()=> handleLogin}>Login</button>
    <button onClick={()=> handleLogout}>Logout</button>
    </>
  )
}

export default UserComp