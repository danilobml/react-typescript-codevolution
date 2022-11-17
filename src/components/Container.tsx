// styles as props:

type ContainerProps = {
    styles: React.CSSProperties;
}

function Container(props: ContainerProps) {
  return (
    <div className="container" style={props.styles}>
        Container
    </div>
  )
}

export default Container