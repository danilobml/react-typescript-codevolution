type GreetProps = {
    name: string;
    messageCount: number;
    isLogged: boolean;
}

function Greet(props: GreetProps) {
  return (
    <div>
        {props.isLogged && <h1>Hey, {props.name} you have {props.messageCount} messages!</h1>}
    </div>
  )
}

export default Greet