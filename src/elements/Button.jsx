export default function Button({ children, ...props }) {
	return (
		<button {...props} className="px-2 px-4 border">
			{children}
		</button>
	);
}
