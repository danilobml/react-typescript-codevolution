import { PersonName } from '../types/person.types'

type PersonListProps = {
 personList: PersonName[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
         {props.personList.map((person: PersonName, index: number) => {return (<h2 key={`person-${index}`}>{person.first} {person.last}</h2>)} )}
    </div>
  )
}

export default PersonList