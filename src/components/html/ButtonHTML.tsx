import { resolveTxt } from "dns";

type ButtonProps = {
	variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

function ButtonHTML({ variant, children, ...rest }: ButtonProps) {
	return (
		<div>
			<button className={`class-with-${variant}`} {...rest}>
				{children}
			</button>
		</div>
	);
}

export default ButtonHTML;
