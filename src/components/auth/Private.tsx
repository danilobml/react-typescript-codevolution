import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedin: boolean;
    component: React.ComponentType<ProfileProps>
}

const Private = ({isLoggedin, component:Component}: PrivateProps) => {
    if(isLoggedin){
        return <Component name='Dan' />
    } else {
        return <Login/>
    }
}

export default Private