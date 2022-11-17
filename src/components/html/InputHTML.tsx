type InputProps = React.ComponentProps<"input">;

function InputHTML(props: InputProps) {
	return (
		<div>
			<input type="text" {...props} />
		</div>
	);
}

export default InputHTML;
