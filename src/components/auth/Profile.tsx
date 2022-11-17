
export type ProfileProps = {
    name: string;
}

function Profile({name}:ProfileProps) {
  return (
    <div>Private profile component. Name: {name}</div>
  )
}

export default Profile