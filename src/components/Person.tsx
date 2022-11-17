import { PersonProps } from '../types/person.types'

function Person(props: PersonProps) {
  return (
    <div>My name is {props.personName.first} {props.personName.last}!</div>
  )
}

export default Person