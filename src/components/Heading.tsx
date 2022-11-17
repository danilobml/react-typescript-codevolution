type HeadingProps = {
    children: string;
}

function Heading(props:HeadingProps):JSX.Element {
  return (
    <div>{props.children}</div>
  )
}

export default Heading